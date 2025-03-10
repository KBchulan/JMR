<template>
  <div class="search-view">
    <!-- 搜索表单 -->
    <div class="search-form">
      <el-form :model="searchForm" @submit.prevent="handleSearch">
        <div class="search-row">
          <div class="search-label">搜索</div>
          <div class="search-input-container">
            <el-input
              v-model="searchForm.keyword"
              placeholder="搜索漫画名称或ID"
              clearable
              @keyup.enter="handleSearch"
            >
              <template #prefix>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>
          </div>
          <div class="search-buttons">
            <el-button type="primary" @click="handleSearch" :loading="loading">搜索</el-button>
            <el-button @click="handleReset">重置</el-button>
          </div>
        </div>
        
        <div class="filter-row">
          <div class="filter-label">标签</div>
          <div class="filter-content">
            <el-select
              v-model="searchForm.tags"
              multiple
              collapse-tags
              collapse-tags-tooltip
              placeholder="选择标签"
              style="width: 100%"
            >
              <el-option
                v-for="tag in availableTags"
                :key="tag"
                :label="tag"
                :value="tag"
              />
            </el-select>
          </div>
        </div>
        
        <div class="filter-row">
          <div class="filter-label">排序</div>
          <div class="filter-content">
            <el-radio-group v-model="searchForm.sort">
              <el-radio-button label="newest">最新更新</el-radio-button>
              <el-radio-button label="popular">最受欢迎</el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </el-form>
    </div>
    
    <!-- 搜索结果 -->
    <div class="search-results">
      <section-title :title="`搜索结果 ${total > 0 ? `(${total})` : ''}`" />
      
      <comic-grid
        :comics="comics"
        :loading="loading"
        :pagination="true"
        :total="total"
        :default-page="currentPage"
        :default-page-size="pageSize"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { useComicStore } from '@/stores/comic'
import SectionTitle from '@/components/SectionTitle.vue'
import ComicGrid from '@/components/ComicGrid.vue'
import type { Comic } from '@/types'

const route = useRoute()
const router = useRouter()
const comicStore = useComicStore()

// 状态
const comics = ref<Comic[]>([])
const loading = ref(false)
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(Number(import.meta.env.VITE_COMICS_PER_PAGE) || 24)

// 搜索表单
const searchForm = reactive({
  keyword: '',
  tags: [] as string[],
  sort: 'newest' as 'newest' | 'popular'
})

// 可用标签
const availableTags = [
  '热血', '冒险', '搞笑', '恋爱', '科幻', '奇幻', '魔法', '校园', 
  '悬疑', '推理', '恐怖', '战斗', '日常', '治愈', '运动', '历史'
]

// 监听路由查询参数变化
watch(() => route.query, (query) => {
  if (query.keyword) {
    searchForm.keyword = query.keyword as string
    handleSearch()
  }
}, { immediate: true })

// 处理搜索
async function handleSearch() {
  if (!searchForm.keyword && searchForm.tags.length === 0) {
    return
  }
  
  loading.value = true
  
  try {
    // 更新URL查询参数
    router.push({
      path: '/search',
      query: {
        keyword: searchForm.keyword || undefined,
        tags: searchForm.tags.length > 0 ? searchForm.tags.join(',') : undefined,
        sort: searchForm.sort,
        page: currentPage.value > 1 ? currentPage.value.toString() : undefined
      }
    })
    
    // 执行搜索
    const result = await comicStore.searchComics(
      searchForm.keyword,
      currentPage.value,
      pageSize.value
    )
    
    comics.value = result.items
    total.value = result.total
  } catch (error) {
    console.error('搜索失败', error)
  } finally {
    loading.value = false
  }
}

// 处理重置
function handleReset() {
  searchForm.keyword = ''
  searchForm.tags = []
  searchForm.sort = 'newest'
  currentPage.value = 1
  
  router.push('/search')
}

// 处理页码变化
async function handlePageChange(page: number, size: number) {
  currentPage.value = page
  pageSize.value = size
  
  await handleSearch()
}

// 初始化
onMounted(() => {
  // 从URL查询参数中恢复搜索条件
  const { keyword, tags, sort, page } = route.query
  
  if (keyword) {
    searchForm.keyword = keyword as string
  }
  
  if (tags) {
    searchForm.tags = (tags as string).split(',')
  }
  
  if (sort === 'newest' || sort === 'popular') {
    searchForm.sort = sort
  }
  
  if (page) {
    currentPage.value = parseInt(page as string, 10)
  }
  
  // 如果有搜索条件，执行搜索
  if (searchForm.keyword || searchForm.tags.length > 0) {
    handleSearch()
  }
})
</script>

<style scoped lang="scss">
.search-view {
  padding-bottom: 40px;
}

.search-form {
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  color: white;
  
  .search-row, .filter-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .search-label, .filter-label {
    width: 60px;
    color: white;
    font-size: 14px;
    text-align: right;
    padding-right: 12px;
  }
  
  .search-input-container, .filter-content {
    flex: 1;
    margin-right: 20px;
    
    :deep(.el-input__inner) {
      background-color: white;
      border: none;
      height: 40px;
      border-radius: 4px;
    }
    
    :deep(.el-select) {
      width: 100%;
      
      .el-input__inner {
        background-color: white;
      }
    }
    
    :deep(.el-radio-group) {
      .el-radio-button__inner {
        background-color: #2a2a2a;
        border-color: #2a2a2a;
        color: white;
        
        &:hover {
          color: #409EFF;
        }
      }
      
      .el-radio-button__original-radio:checked + .el-radio-button__inner {
        background-color: #409EFF;
        border-color: #409EFF;
        color: white;
      }
    }
  }
  
  .search-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    white-space: nowrap;
    
    :deep(.el-button) {
      height: 40px;
      padding: 0 20px;
      
      &.el-button--primary {
        background-color: #409EFF;
      }
      
      &:not(.el-button--primary) {
        background-color: white;
        color: #333;
      }
    }
  }
}

.search-results {
  min-height: 400px;
  
  :deep(.section-title) {
    .title {
      color: white;
    }
  }
}
</style> 