"use strict";(self["webpackChunkwordin"]=self["webpackChunkwordin"]||[]).push([[565],{9565:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});s(7658);var o=s(3396),i=s(7139);const a={class:"no"},l={class:"colbox",if:"sets-container"},r={class:"colbox wordclass"},n={class:"no"},c={class:"title"},d={style:{"font-size":"17px","font-weight":"200"}},w={class:"option"};function m(e,t,s,m,p,u){const h=(0,o.up)("box-icon"),_=(0,o.up)("el-button"),f=(0,o.up)("el-header"),g=(0,o.up)("el-collapse-item"),k=(0,o.up)("el-collapse"),v=(0,o.up)("el-main"),y=(0,o.up)("el-container");return(0,o.wg)(),(0,o.j4)(y,{id:"main-container",class:"container card"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{id:"header",class:"colbox"},{default:(0,o.w5)((()=>[(0,o._)("div",a,"共有"+(0,i.zw)(Object.keys(p.wordsets).length)+"个单词集合",1),(0,o._)("div",null,[(0,o.Wm)(_,{onClick:u.manage_online_wordsets,type:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"white",name:"world",size:"20px"}),(0,o.Uk)("管理在线单词本")])),_:1},8,["onClick"]),(0,o.Wm)(_,{onClick:u.export_set,type:"success"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"white",name:"export",size:"18px"}),(0,o.Uk)("导出")])),_:1},8,["onClick"]),(0,o.Wm)(_,{onClick:u.import_set,type:"warning"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"white",name:"import",size:"18px"}),(0,o.Uk)("导入")])),_:1},8,["onClick"]),(0,o.Wm)(_,{onClick:t[0]||(t[0]=t=>e.$router.push("/manage/new")),type:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{color:"white",name:"plus"}),(0,o.Uk)("新建单词本")])),_:1})])])),_:1}),(0,o.Wm)(v,{id:"wordsets-container"},{default:(0,o.w5)((()=>[(0,o._)("div",l,[(0,o.Wm)(k,{accordion:"",modelValue:p.active_set_class,"onUpdate:modelValue":t[1]||(t[1]=e=>p.active_set_class=e),style:{width:"100%",border:"none"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(p.wordsets,((e,t)=>((0,o.wg)(),(0,o.j4)(g,{title:t,key:t,name:t},{default:(0,o.w5)((()=>[(0,o._)("div",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,((e,s)=>((0,o.wg)(),(0,o.iD)("div",{key:s,class:"wordset rowbox"},[(0,o._)("div",n,(0,i.zw)(s+1),1),(0,o._)("div",c,(0,i.zw)(e.name),1),(0,o._)("div",d," 创建日期："+(0,i.zw)(new Date(e.created).toLocaleString()),1),(0,o._)("div",w,[(0,o.Wm)(h,{class:"btn",name:"edit",color:"var(--text-color)",onClick:s=>u.edit(e,t)},null,8,["onClick"]),(0,o.Wm)(h,{class:"btn",name:"trash",color:"var(--text-color)",onClick:o=>u.del(t,e.id,s)},null,8,["onClick"])])])))),128))])])),_:2},1032,["title","name"])))),128))])),_:1},8,["modelValue"])])])),_:1})])),_:1})}var p=s(6e3),u=s(7178),h=s(6666),_={name:"SetList",data(){return{wordsets:window.wordsets,active_set_class:""}},methods:{manage_online_wordsets(){window.location.href="/dashboard"},del(e,t,s){p.T.confirm("确定要删除吗？").then((()=>{localStorage.removeItem(t),this.wordsets[e].splice(s,1),this.wordsets[e].length||delete this.wordsets[e],localStorage.setItem("wordsets",JSON.stringify(this.wordsets)),(0,u.z8)(`已经删除 ${e} `)}))},edit(e,t){window.editing={set:e,set_class_name:t},this.$router.push({path:"/manage/edit"})},async export_set(){let e=await window.showSaveFilePicker({types:[{description:"JSON file",accept:{"text/json":[".json"]}}]}),t=await e.createWritable(),s={wordsets:this.wordsets,words:{}};for(let o of Object.values(this.wordsets))for(let e of o){let t=localStorage.getItem(e.id);s.words[e.id]=t}t.write(JSON.stringify(s)),t.close()},async import_set(){let[e]=await window.showOpenFilePicker({types:[{description:"JSON file",accept:{"text/json":[".json"]}}]}),t=await e.getFile(),s=JSON.parse(await t.text()),o=0;for(let i of Object.keys(s.wordsets))for(let e of s.wordsets[i])localStorage.getItem(e.id)||(this.wordsets[i]||(this.wordsets[i]=[]),this.wordsets[i].push(e),localStorage.setItem(e.id,s.words[e.id]),o++);localStorage.setItem("wordsets",JSON.stringify(this.wordsets)),(0,h.bM)({type:"success",title:"添加成功",message:`已添加 ${o} 本单词本`})}},created(){this.active_set_class=Object.keys(this.wordsets)[0]}},f=s(89);const g=(0,f.Z)(_,[["render",m],["__scopeId","data-v-5a39590e"]]);var k=g}}]);
//# sourceMappingURL=565.d62fb676.js.map