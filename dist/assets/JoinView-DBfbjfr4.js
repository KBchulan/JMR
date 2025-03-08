import{d as k,r as c,b as x,e,g as t,h as a,i,R as b,u as m,S as w,T as J,U as S,V as I,q as n,I as V,m as N,_ as P}from"./index-CD-uQSen.js";const $={class:"join-view"},q={class:"container"},B={class:"join-content"},M={class:"join-section"},D={class:"benefits"},F={class:"benefit-item"},T={class:"benefit-item"},A={class:"benefit-item"},E={class:"benefit-item"},L={class:"join-section"},R={class:"job-list"},h={class:"job-item"},H={class:"job-item"},Q={class:"job-item"},W={class:"dialog-footer"},z=k({__name:"JoinView",setup(G){const f=c(!1),_=c(""),o=c({name:"",email:"",phone:"",intro:""}),r=j=>{_.value=j,f.value=!0},y=()=>{if(!o.value.name||!o.value.email||!o.value.phone){V.warning("请填写完整的申请信息");return}V.success("申请提交成功，我们会尽快与您联系"),f.value=!1,o.value={name:"",email:"",phone:"",intro:""}};return(j,l)=>{const v=i("el-icon"),s=i("el-button"),p=i("el-input"),u=i("el-form-item"),g=i("el-upload"),C=i("el-form"),U=i("el-dialog");return N(),x("div",$,[e("div",q,[l[23]||(l[23]=e("div",{class:"page-header"},[e("h1",null,"加入我们")],-1)),e("div",B,[e("section",M,[l[13]||(l[13]=e("h2",null,"为什么选择我们",-1)),l[14]||(l[14]=e("p",null,"加入漫画阅读网站，您将成为一个充满活力、创新和激情的团队的一员。我们致力于为用户提供最优质的漫画阅读体验，同时也为团队成员提供广阔的发展空间和成长机会。",-1)),e("div",D,[e("div",F,[t(v,null,{default:a(()=>[t(m(w))]),_:1}),l[9]||(l[9]=e("div",{class:"benefit-content"},[e("h3",null,"有竞争力的薪资"),e("p",null,"我们提供行业内有竞争力的薪资待遇，让您的付出得到应有的回报。")],-1))]),e("div",T,[t(v,null,{default:a(()=>[t(m(J))]),_:1}),l[10]||(l[10]=e("div",{class:"benefit-content"},[e("h3",null,"广阔的发展空间"),e("p",null,"扁平化的管理结构，让每个人都有机会展示自己的才华和能力。")],-1))]),e("div",A,[t(v,null,{default:a(()=>[t(m(S))]),_:1}),l[11]||(l[11]=e("div",{class:"benefit-content"},[e("h3",null,"舒适的工作环境"),e("p",null,"现代化的办公环境，免费的零食和饮料，让您在舒适的环境中工作。")],-1))]),e("div",E,[t(v,null,{default:a(()=>[t(m(I))]),_:1}),l[12]||(l[12]=e("div",{class:"benefit-content"},[e("h3",null,"灵活的工作时间"),e("p",null,"我们注重工作与生活的平衡，提供灵活的工作时间和远程工作的机会。")],-1))])])]),e("section",L,[l[21]||(l[21]=e("h2",null,"当前招聘职位",-1)),e("div",R,[e("div",h,[l[16]||(l[16]=b('<div class="job-header" data-v-c91fd0f9><h3 data-v-c91fd0f9>前端开发工程师</h3><span class="job-location" data-v-c91fd0f9>北京</span></div><div class="job-desc" data-v-c91fd0f9><p data-v-c91fd0f9>负责公司产品的前端开发工作，包括但不限于PC端、移动端的页面开发和交互实现。</p><div class="job-requirements" data-v-c91fd0f9><h4 data-v-c91fd0f9>岗位要求：</h4><ul data-v-c91fd0f9><li data-v-c91fd0f9>熟悉HTML、CSS、JavaScript等前端技术</li><li data-v-c91fd0f9>熟悉Vue、React等前端框架</li><li data-v-c91fd0f9>有良好的代码风格和编程习惯</li><li data-v-c91fd0f9>有良好的团队协作能力和沟通能力</li></ul></div></div>',2)),t(s,{type:"primary",onClick:l[0]||(l[0]=d=>r("前端开发工程师"))},{default:a(()=>l[15]||(l[15]=[n("申请职位")])),_:1})]),e("div",H,[l[18]||(l[18]=b('<div class="job-header" data-v-c91fd0f9><h3 data-v-c91fd0f9>后端开发工程师</h3><span class="job-location" data-v-c91fd0f9>北京</span></div><div class="job-desc" data-v-c91fd0f9><p data-v-c91fd0f9>负责公司产品的后端开发工作,包括但不限于API设计、数据库设计、性能优化等。</p><div class="job-requirements" data-v-c91fd0f9><h4 data-v-c91fd0f9>岗位要求：</h4><ul data-v-c91fd0f9><li data-v-c91fd0f9>熟悉Java、Python、Node.js等后端技术</li><li data-v-c91fd0f9>熟悉MySQL、MongoDB等数据库</li><li data-v-c91fd0f9>有良好的代码风格和编程习惯</li><li data-v-c91fd0f9>有良好的团队协作能力和沟通能力</li></ul></div></div>',2)),t(s,{type:"primary",onClick:l[1]||(l[1]=d=>r("后端开发工程师"))},{default:a(()=>l[17]||(l[17]=[n("申请职位")])),_:1})]),e("div",Q,[l[20]||(l[20]=b('<div class="job-header" data-v-c91fd0f9><h3 data-v-c91fd0f9>UI设计师</h3><span class="job-location" data-v-c91fd0f9>北京</span></div><div class="job-desc" data-v-c91fd0f9><p data-v-c91fd0f9>负责公司产品的UI设计工作，包括但不限于界面设计、交互设计、视觉设计等。</p><div class="job-requirements" data-v-c91fd0f9><h4 data-v-c91fd0f9>岗位要求：</h4><ul data-v-c91fd0f9><li data-v-c91fd0f9>熟悉Photoshop、Sketch、Figma等设计工具</li><li data-v-c91fd0f9>有良好的审美能力和创意思维</li><li data-v-c91fd0f9>了解前端开发流程和技术</li><li data-v-c91fd0f9>有良好的团队协作能力和沟通能力</li></ul></div></div>',2)),t(s,{type:"primary",onClick:l[2]||(l[2]=d=>r("UI设计师"))},{default:a(()=>l[19]||(l[19]=[n("申请职位")])),_:1})])])]),l[22]||(l[22]=e("section",{class:"join-section"},[e("h2",null,"联系我们"),e("p",null,"如果您对我们的职位感兴趣，或者想了解更多关于我们的信息，欢迎随时与我们联系。"),e("p",null,"邮箱：hr@mangareader.com"),e("p",null,"电话：010-12345678")],-1))])]),t(U,{modelValue:f.value,"onUpdate:modelValue":l[8]||(l[8]=d=>f.value=d),title:`申请职位：${_.value}`,width:"500px"},{footer:a(()=>[e("span",W,[t(s,{onClick:l[7]||(l[7]=d=>f.value=!1)},{default:a(()=>l[26]||(l[26]=[n("取消")])),_:1}),t(s,{type:"primary",onClick:y},{default:a(()=>l[27]||(l[27]=[n("提交申请")])),_:1})])]),default:a(()=>[t(C,{model:o.value,"label-position":"top"},{default:a(()=>[t(u,{label:"姓名"},{default:a(()=>[t(p,{modelValue:o.value.name,"onUpdate:modelValue":l[3]||(l[3]=d=>o.value.name=d),placeholder:"请输入您的姓名"},null,8,["modelValue"])]),_:1}),t(u,{label:"电子邮箱"},{default:a(()=>[t(p,{modelValue:o.value.email,"onUpdate:modelValue":l[4]||(l[4]=d=>o.value.email=d),placeholder:"请输入您的电子邮箱"},null,8,["modelValue"])]),_:1}),t(u,{label:"联系电话"},{default:a(()=>[t(p,{modelValue:o.value.phone,"onUpdate:modelValue":l[5]||(l[5]=d=>o.value.phone=d),placeholder:"请输入您的联系电话"},null,8,["modelValue"])]),_:1}),t(u,{label:"个人简介"},{default:a(()=>[t(p,{modelValue:o.value.intro,"onUpdate:modelValue":l[6]||(l[6]=d=>o.value.intro=d),type:"textarea",placeholder:"请简单介绍一下您自己",rows:3},null,8,["modelValue"])]),_:1}),t(u,{label:"上传简历"},{default:a(()=>[t(g,{action:"#","auto-upload":!1,limit:1,accept:".pdf,.doc,.docx"},{trigger:a(()=>[t(s,{type:"primary"},{default:a(()=>l[24]||(l[24]=[n("选择文件")])),_:1})]),tip:a(()=>l[25]||(l[25]=[e("div",{class:"el-upload__tip"}," 请上传PDF或Word格式的简历文件 ",-1)])),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}}),O=P(z,[["__scopeId","data-v-c91fd0f9"]]);export{O as default};
