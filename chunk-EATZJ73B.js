import{a as J}from"./chunk-A443G2KD.js";import{c as H}from"./chunk-KJHCHE6T.js";import{l as R,m as U}from"./chunk-STCCAQ77.js";import{X as O,Z as V}from"./chunk-SG6VUWCX.js";import{Ca as m,Cb as v,Da as g,Ib as _,Ka as C,Kc as T,Lc as P,Ob as c,Pc as E,Qb as k,Rb as M,Vd as N,Wd as F,ac as s,bc as l,be as W,dc as I,ec as L,fe as j,gc as d,jc as f,ke as $,lc as r,nb as h,od as S,pd as z,qb as a,td as D,vb as b,wc as w,xc as u,xd as y,zc as x}from"./chunk-R7CHGEPT.js";var X=(t,n,e,i,o)=>({width:t,height:n,minWidth:e,minHeight:i,background:o}),Y=(t,n,e,i,o)=>({width:t,height:n,minWidth:e,minHeight:i,borderRadius:o}),Z=(t,n,e,i,o,p)=>({width:t,height:n,minWidth:e,minHeight:i,borderRadius:o,background:p});function ee(t,n){if(t&1&&(s(0,"div",2),u(1),l()),t&2){let e=r();c("ngStyle",T(2,X,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.backgroundColor)),a(),x(" ",e.firstLetter,`
`)}}function te(t,n){if(t&1){let e=d();s(0,"img",5),f("error",function(){m(e);let o=r(2);return g(o.onError())}),l()}if(t&2){let e=r(2);c("src",e.src,h)("ngStyle",T(3,Y,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px"))("alt",e.firstLetter)}}function ne(t,n){if(t&1&&(s(0,"div",2),u(1),l()),t&2){let e=r(2);c("ngStyle",P(2,Z,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px",e.backgroundColor)),a(),x(" ",e.firstLetter," ")}}function ie(t,n){if(t&1&&_(0,te,1,9,"img",3)(1,ne,2,9,"div",4),t&2){let e=r();c("ngIf",!e.isError),a(),c("ngIf",e.isError)}}var q=class t{src="";name="";size=35;radius=3;check=!0;backgroundColor="#1890ff";firstLetter="";isError=!1;constructor(){}ngOnInit(){this.src||this.generateColor(),this.name&&(this.firstLetter=this.name[0].toUpperCase())}generateColor(){this.backgroundColor=`linear-gradient(45deg, #fff, ${H()} 41%)`}onError(){this.isError=!0,this.generateColor()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=v({type:t,selectors:[["app-logo"]],inputs:{src:"src",name:"name",size:"size",radius:"radius",check:"check"},decls:3,vars:2,consts:[["img",""],["class","circle common-icon",3,"ngStyle",4,"ngIf","ngIfElse"],[1,"circle","common-icon",3,"ngStyle"],["class","icon common-icon","draggable","false","loading","lazy",3,"src","ngStyle","alt","error",4,"ngIf"],["class","circle common-icon",3,"ngStyle",4,"ngIf"],["draggable","false","loading","lazy",1,"icon","common-icon",3,"error","src","ngStyle","alt"]],template:function(e,i){if(e&1&&_(0,ee,2,8,"div",1)(1,ie,2,2,"ng-template",null,0,E),e&2){let o=w(2);c("ngIf",!i.src)("ngIfElse",o)}},dependencies:[y,z,D],styles:['.icon[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;pointer-events:none;background-color:#eee;border-radius:3px;object-fit:cover;transition:all .12s linear}.icon[_ngcontent-%COMP%]:after{content:"" attr(alt);z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1890ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}.circle[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;border-radius:50%;font-size:18px}'],changeDetection:0})};function oe(t,n){if(t&1){let e=d();s(0,"div",3),f("click",function(o){let p=m(e).$implicit,B=r();return g(B.jumpService.goUrl(o,p.url))}),u(1),l()}if(t&2){let e=n.$implicit,i=r();M("background-color: "+(i.tagMap[e.id]&&i.tagMap[e.id].color)),k("cursor-pointer",e.url),a(),x(" ",i.tagMap[e.id]&&i.tagMap[e.id].name," ")}}function re(t,n){if(t&1){let e=d();s(0,"div",7),f("click",function(o){m(e);let p=r(2);return g(p.openEditWebMoal(o))}),l()}}function ce(t,n){if(t&1){let e=d();s(0,"div",8),f("click",function(o){m(e);let p=r(2);return g(p.openMoveWebModal(o))}),l()}}function ae(t,n){if(t&1){let e=d();s(0,"div",9),f("nzOnConfirm",function(){m(e);let o=r(2);return g(o.confirmDel())})("click",function(o){m(e);let p=r(2);return g(p.handleClick(o))}),l()}if(t&2){let e=r(2);c("nzPopconfirmTitle",e.$t("_confirmDel"))}}function se(t,n){if(t&1&&(I(0),_(1,re,1,0,"div",4)(2,ce,1,0,"div",5)(3,ae,1,1,"div",6),L()),t&2){let e=r();a(),c("ngIf",e.isLogin||e.permissions.edit),a(),c("ngIf",e.isLogin),a(),c("ngIf",e.isLogin||e.permissions.del)}}var A=class t{constructor(n){this.jumpService=n}data=[];action=!1;onDelete=new C;onMove=new C;onEdit=new C;$t=$;isLogin=N;tagMap=j;permissions=F(W);handleClick(n){n.stopPropagation(),n.preventDefault()}openEditWebMoal(n){n.stopPropagation(),n.preventDefault(),this.onEdit.emit()}confirmDel(){this.onDelete.emit()}openMoveWebModal(n){n.stopPropagation(),n.preventDefault(),this.onMove.emit()}static \u0275fac=function(e){return new(e||t)(b(J))};static \u0275cmp=v({type:t,selectors:[["tag-list"]],inputs:{data:"data",action:"action"},outputs:{onDelete:"onDelete",onMove:"onMove",onEdit:"onEdit"},decls:3,vars:2,consts:[[1,"tagbox"],["class","tag-item",3,"cursor-pointer","style","click",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"tag-item",3,"click"],["class","tag-item cursor-pointer tag-action","style","background-color: #1f883d","nz-icon","","nzType","edit","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action","style","background-color: #108ee9","nz-icon","","nzType","swap","nzTheme","outline",3,"click",4,"ngIf"],["class","tag-item cursor-pointer tag-action","style","background-color: red","nz-icon","","nzType","delete","nzTheme","outline","nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",3,"nzPopconfirmTitle","nzOnConfirm","click",4,"ngIf"],["nz-icon","","nzType","edit","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#1f883d",3,"click"],["nz-icon","","nzType","swap","nzTheme","outline",1,"tag-item","cursor-pointer","tag-action",2,"background-color","#108ee9",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline","nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"tag-item","cursor-pointer","tag-action",2,"background-color","red",3,"nzOnConfirm","click","nzPopconfirmTitle"]],template:function(e,i){e&1&&(s(0,"div",0),_(1,oe,2,5,"div",1)(2,se,4,3,"ng-container",2),l()),e&2&&(a(),c("ngForOf",i.data),a(),c("ngIf",i.action))},dependencies:[y,S,z,V,O,U,R],styles:[".tagbox[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.tag-item[_ngcontent-%COMP%]{padding:0 6px;border-radius:2px;font-size:12px;display:flex;align-items:center;transition:all .1s linear;color:#fff;min-height:15px}.tag-item[_ngcontent-%COMP%]:hover{opacity:.8}.tag-action[_ngcontent-%COMP%]{display:none}"]})};export{q as a,A as b};
