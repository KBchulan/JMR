import{d as y,r as v,b as M,e as l,g as o,h as a,i as s,s as f,u as _,O as C,P as q,Q,q as U,I as b,m as B,_ as N}from"./index-CD-uQSen.js";const $={class:"contact-view"},E={class:"container"},I={class:"contact-content"},T={class:"contact-info"},j={class:"contact-section"},F={class:"info-item"},O={class:"info-item"},P={class:"info-item"},S={class:"contact-section"},z={class:"social-links"},A={class:"contact-form"},D=y({__name:"ContactView",setup(G){const t=v({name:"",email:"",type:"",content:""}),r=v(!1),d=v(""),p=w=>{switch(r.value=!0,w){case"weibo":d.value="关注我们的微博";break;case"wechat":d.value="关注我们的微信公众号";break;case"qq":d.value="加入我们的QQ群";break}},V=()=>{if(!t.value.name||!t.value.email||!t.value.type||!t.value.content){b.warning("请填写完整的表单信息");return}b.success("留言提交成功，我们会尽快回复您"),t.value={name:"",email:"",type:"",content:""}};return(w,e)=>{const c=s("el-icon"),m=s("el-input"),i=s("el-form-item"),u=s("el-option"),k=s("el-select"),h=s("el-button"),g=s("el-form"),x=s("el-dialog");return B(),M("div",$,[l("div",E,[e[18]||(e[18]=l("div",{class:"page-header"},[l("h1",null,"联系我们")],-1)),l("div",I,[l("div",T,[l("section",j,[e[11]||(e[11]=l("h2",null,"联系方式",-1)),l("div",F,[o(c,null,{default:a(()=>[o(_(C))]),_:1}),e[8]||(e[8]=l("div",{class:"info-content"},[l("h3",null,"电子邮箱"),l("p",null,"18737519552@163.com")],-1))]),l("div",O,[o(c,null,{default:a(()=>[o(_(q))]),_:1}),e[9]||(e[9]=l("div",{class:"info-content"},[l("h3",null,"办公地址"),l("p",null,"不告诉你")],-1))]),l("div",P,[o(c,null,{default:a(()=>[o(_(Q))]),_:1}),e[10]||(e[10]=l("div",{class:"info-content"},[l("h3",null,"联系电话"),l("p",null,"18737519552")],-1))])]),l("section",S,[e[15]||(e[15]=l("h2",null,"社交媒体",-1)),l("div",z,[l("a",{href:"#",onClick:e[0]||(e[0]=f(n=>p("weibo"),["prevent"])),class:"social-link"},e[12]||(e[12]=[l("i",{class:"social-icon weibo"},null,-1),l("span",null,"官方微博",-1)])),l("a",{href:"#",onClick:e[1]||(e[1]=f(n=>p("wechat"),["prevent"])),class:"social-link"},e[13]||(e[13]=[l("i",{class:"social-icon wechat"},null,-1),l("span",null,"微信公众号",-1)])),l("a",{href:"#",onClick:e[2]||(e[2]=f(n=>p("qq"),["prevent"])),class:"social-link"},e[14]||(e[14]=[l("i",{class:"social-icon qq"},null,-1),l("span",null,"QQ交流群",-1)]))])])]),l("div",A,[e[17]||(e[17]=l("h2",null,"留言反馈",-1)),o(g,{model:t.value,"label-position":"top"},{default:a(()=>[o(i,{label:"您的姓名"},{default:a(()=>[o(m,{modelValue:t.value.name,"onUpdate:modelValue":e[3]||(e[3]=n=>t.value.name=n),placeholder:"请输入您的姓名"},null,8,["modelValue"])]),_:1}),o(i,{label:"电子邮箱"},{default:a(()=>[o(m,{modelValue:t.value.email,"onUpdate:modelValue":e[4]||(e[4]=n=>t.value.email=n),placeholder:"请输入您的电子邮箱"},null,8,["modelValue"])]),_:1}),o(i,{label:"留言类型"},{default:a(()=>[o(k,{modelValue:t.value.type,"onUpdate:modelValue":e[5]||(e[5]=n=>t.value.type=n),placeholder:"请选择留言类型",style:{width:"100%"}},{default:a(()=>[o(u,{label:"问题反馈",value:"feedback"}),o(u,{label:"建议",value:"suggestion"}),o(u,{label:"合作咨询",value:"cooperation"}),o(u,{label:"其他",value:"other"})]),_:1},8,["modelValue"])]),_:1}),o(i,{label:"留言内容"},{default:a(()=>[o(m,{modelValue:t.value.content,"onUpdate:modelValue":e[6]||(e[6]=n=>t.value.content=n),type:"textarea",placeholder:"请输入您的留言内容",rows:5},null,8,["modelValue"])]),_:1}),o(i,null,{default:a(()=>[o(h,{type:"primary",onClick:V},{default:a(()=>e[16]||(e[16]=[U("提交留言")])),_:1})]),_:1})]),_:1},8,["model"])])])]),o(x,{modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=n=>r.value=n),title:d.value,width:"300px","align-center":""},{default:a(()=>e[19]||(e[19]=[l("div",{class:"social-modal-content"},[l("div",{class:"qrcode-placeholder"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"150",height:"150",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"},[l("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),l("path",{d:"M8 7v10"}),l("path",{d:"M12 7v10"}),l("path",{d:"M16 7v10"}),l("path",{d:"M7 8h10"}),l("path",{d:"M7 12h10"}),l("path",{d:"M7 16h10"})])]),l("p",null,"扫描二维码关注我们")],-1)])),_:1},8,["modelValue","title"])])}}}),J=N(D,[["__scopeId","data-v-2b588159"]]);export{J as default};
