(function(t){function a(a){for(var n,i,r=a[0],l=a[1],s=a[2],u=0,p=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(a);while(p.length)p.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,r=1;r<e.length;r++){var l=e[r];0!==c[l]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},c={app:0},o=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var s=0;s<r.length;s++)a(r[s]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"02ce":function(t,a,e){},"034f":function(t,a,e){"use strict";var n=e("85ec"),c=e.n(n);c.a},"2fe3":function(t,a,e){"use strict";var n=e("02ce"),c=e.n(n);c.a},"56d7":function(t,a,e){"use strict";e.r(a),e.d(a,"db",(function(){return lt}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"app"}},[e("v-main"),e("v-container",[e("router-view")],1)],1)},o=[],i={name:"App",data:function(){return{}}},r=i,l=(e("034f"),e("2877")),s=e("6544"),d=e.n(s),u=e("7496"),p=e("a523"),v=e("f6c4"),m=Object(l["a"])(r,c,o,!1,null,null,null),f=m.exports;d()(m,{VApp:u["a"],VContainer:p["a"],VMain:v["a"]});var _=e("8c4f"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"dashboard"}},[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",[e("h2",{staticClass:"pa-4"},[t._v("Contact Manager")])]),e("v-spacer"),e("v-btn",{attrs:{color:"white",router:"",to:"/new",text:""}},[e("i",{staticClass:"fa fa-user-plus pa-1"}),e("span",{staticClass:"mr-2"},[t._v("Create New Contact")])])],1),e("v-container",[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800"}},[e("v-list",[e("v-list-item",{staticClass:"d-flex justify-center"},[e("h2",{staticClass:"display-1 pa-3"},[t._v("Contacts")])]),e("v-divider"),e("v-list-item-group",t._l(t.contacts,(function(a){return e("v-list-item",{key:a.id,attrs:{router:"",to:{name:"view-contact",params:{contact_id:a.contact_id}}}},[t._v(" "+t._s(a.contact_id)+":"+t._s(a.name)+" "),e("v-spacer"),e("v-chip",{staticClass:"mr-4"},[t._v(t._s(a.job_title))])],1)})),1)],1)],1)],1)],1)},h=[],C=(e("4160"),e("b0c0"),e("159b"),{name:"dashboard",data:function(){return{contacts:[]}},created:function(){this.getContacts()},methods:{getContacts:function(){var t=this;lt.collection("contacts").orderBy("contact_id").get().then((function(a){a.forEach((function(a){var e={id:a.id,contact_id:a.data().contact_id,name:a.data().name,job_title:a.data().job_title,email:a.data().email};t.contacts.push(e),console.log(t.contacts)}))}))}}}),V=C,j=(e("2fe3"),e("40dc")),w=e("8336"),x=e("b0af"),y=e("cc20"),g=e("ce7e"),k=e("8860"),E=e("da13"),A=e("1baa"),O=e("2fa4"),$=Object(l["a"])(V,b,h,!1,null,null,null),S=$.exports;d()($,{VApp:u["a"],VAppBar:j["a"],VBtn:w["a"],VCard:x["a"],VChip:y["a"],VContainer:p["a"],VDivider:g["a"],VList:k["a"],VListItem:E["a"],VListItemGroup:A["a"],VSpacer:O["a"]});var T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"new-contact "}},[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",[e("h2",{staticClass:"display-1"},[t._v("New")])])]),e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Your New Contact")])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",[e("v-text-field",{attrs:{label:"Name*",required:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Contact Id*",required:""},model:{value:t.contact_id,callback:function(a){t.contact_id=a},expression:"contact_id"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Job Title*",type:"text",required:""},model:{value:t.job_title,callback:function(a){t.job_title=a},expression:"job_title"}})],1)],1)],1),e("small",[t._v("*indicates required field")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",router:"",to:"/"}},[t._v(" Close ")]),e("v-btn",{attrs:{color:"primary"},on:{click:t.submitForm}},[t._v(" Save ")])],1)],1)],1)},B=[],I={name:"new-contatcs",data:function(){return{name:null,email:null,contact_id:null,job_title:null}},methods:{submitForm:function(){var t=this;lt.collection("contacts").add({name:this.name,email:this.email,contact_id:this.contact_id,job_title:this.job_title}).then((function(a){t.$router.push("/"),console.log(a)})).catch((function(t){console.error(t)}))}}},D=I,L=e("99d9"),q=e("62ad"),M=e("0fd9"),N=e("8654"),P=Object(l["a"])(D,T,B,!1,null,null,null),J=P.exports;d()(P,{VApp:u["a"],VAppBar:j["a"],VBtn:w["a"],VCard:x["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:q["a"],VContainer:p["a"],VRow:M["a"],VSpacer:O["a"],VTextField:N["a"]});var G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"edit-contacts"}},[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("h2",{staticClass:"display-1"},[t._v("Contact Manager")])]),e("v-spacer")],1),e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Your New Contact")])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",[e("v-text-field",{attrs:{label:"Name*"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Contact Id*",disabled:""},model:{value:t.contact_id,callback:function(a){t.contact_id=a},expression:"contact_id"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Job Title*",type:"text",required:""},model:{value:t.job_title,callback:function(a){t.job_title=a},expression:"job_title"}})],1)],1)],1),e("small",[t._v("*indicates required field")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",router:"",to:"/"}},[t._v(" Close ")]),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){return a.preventDefault(),t.updateContact(a)}}},[t._v(" Save ")])],1)],1)],1)},R=[],F={name:"edit-contacts",data:function(){return{name:null,email:null,job_title:null,contact_id:null}},beforeRouteEnter:function(t,a,e){lt.collection("contacts").where("contact_id","==",t.params.contact_id).get().then((function(t){t.forEach((function(t){e((function(a){a.contact_id=t.data().contact_id,a.name=t.data().name,a.email=t.data().email,a.job_title=t.data().job_title}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;lt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){t.contact_id=a.data().contact_id,t.name=a.data().name,t.email=a.data().email,t.job_title=a.data().job_title}))}))},updateContact:function(){var t=this;lt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){a.ref.update({name:t.name,email:t.email,contact_id:t.contact_id,job_title:t.job_title}).then((function(){t.$router.push({name:"view-contact",params:{contact_id:t.contact_id}})}))}))}))}}},U=F,Y=Object(l["a"])(U,G,R,!1,null,null,null),z=Y.exports;d()(Y,{VApp:u["a"],VAppBar:j["a"],VBtn:w["a"],VCard:x["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:q["a"],VContainer:p["a"],VRow:M["a"],VSpacer:O["a"],VTextField:N["a"]});var K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",[e("h2",{staticClass:"pa-4"},[t._v("Contact Manager")])]),e("v-spacer"),e("v-btn",{attrs:{router:"",to:{name:"edit-contact",params:{contact_id:t.contact_id}},color:"info"}},[e("v-icon",[t._v("mdi-pencil")])],1)],1),e("v-list",[e("v-divider"),e("v-list-item-group",[e("v-list-item",{staticClass:"display-2 pa-4"},[t._v(" "+t._s(t.name)+" ")]),e("v-divider"),e("v-list-item",[t._v(" Contact Id#: "+t._s(t.contact_id)+" "),e("v-spacer")],1),e("v-divider"),e("v-list-item",[t._v(" email: "+t._s(t.email)+" "),e("v-spacer")],1),e("v-divider"),e("v-list-item",[t._v(" Job Title: "+t._s(t.job_title)+" "),e("v-spacer")],1),e("v-divider")],1)],1),e("v-container",[e("v-btn",{staticClass:"mr-3",attrs:{router:"",to:"/",color:"primary"}},[e("v-icon",[t._v("mdi-arrow-left")]),t._v("Back")],1),e("v-btn",{attrs:{color:"error"},on:{click:t.deleteContact}},[t._v("Delete"),e("v-icon",[t._v("mdi-delete")])],1)],1)],1)},H=[],Q={name:"view-contacts",data:function(){return{contact_id:null,name:null,job_title:null,email:null}},beforeRouteEnter:function(t,a,e){lt.collection("contacts").where("contact_id","==",t.params.contact_id).get().then((function(t){t.forEach((function(t){e((function(a){a.contact_id=t.data().contact_id,a.name=t.data().name,a.email=t.data().email,a.job_title=t.data().job_title}))}))}))},watch:{$route:"fetchData"},methods:{getContacts:function(){var t=this;lt.collection("contacts").orderBy("contact_id").get().then((function(a){a.forEach((function(a){var e={id:a.id,contact_id:a.data().contact_id,name:a.data().name,job_title:a.data().job_title,email:a.data().email};t.contacts.push(e),console.log(t.contacts)}))}))},fetchData:function(){var t=this;lt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){t.contact_id=a.data().contact_id,t.name=a.data().name,t.email=a.data().email,t.job_title=a.data().job_title}))}))},deleteContact:function(){var t=this;confirm("Are You Sure you want to delete, your data Cannot be reversed")&&lt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){a.ref.delete(),t.$router.push("/"),t.getContacts()}))}))}}},W=Q,X=e("132d"),Z=Object(l["a"])(W,K,H,!1,null,null,null),tt=Z.exports;d()(Z,{VApp:u["a"],VAppBar:j["a"],VBtn:w["a"],VContainer:p["a"],VDivider:g["a"],VIcon:X["a"],VList:k["a"],VListItem:E["a"],VListItemGroup:A["a"],VSpacer:O["a"]}),n["a"].use(_["a"]);var at=[{path:"/",name:"dashboard",component:S},{path:"/new",name:"new-contact",component:J},{path:"/edit/:contact_id",name:"edit-contact",component:z},{path:"/:contact_id",name:"view-contact",component:tt}],et=new _["a"]({mode:"history",base:"/",routes:at}),nt=et,ct=e("f309");n["a"].use(ct["a"]);var ot=new ct["a"]({}),it=e("59ca"),rt=e.n(it);e("e71f");n["a"].config.productionTip=!1,rt.a.initializeApp({apiKey:"AIzaSyDiUNUhbrLE-yqT4G4jMLmJGALCA1bUGNs",authDomain:"vue-contact-manager-1203d.firebaseapp.com",databaseURL:"https://vue-contact-manager-1203d.firebaseio.com",projectId:"vue-contact-manager-1203d",storageBucket:"vue-contact-manager-1203d.appspot.com",messagingSenderId:"931486364248",appId:"1:931486364248:web:02e140e45a1c711087502d"});var lt=rt.a.firestore();new n["a"]({router:nt,vuetify:ot,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,a,e){}});
//# sourceMappingURL=app.5e67fc0f.js.map