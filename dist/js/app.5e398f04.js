(function(t){function a(a){for(var n,i,o=a[0],s=a[1],l=a[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(a);while(p.length)p.shift()();return c.push.apply(c,l||[]),e()}function e(){for(var t,a=0;a<c.length;a++){for(var e=c[a],n=!0,o=1;o<e.length;o++){var s=e[o];0!==r[s]&&(n=!1)}n&&(c.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},c=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var u=s;c.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("85ec"),r=e.n(n);r.a},"55c1":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a),e.d(a,"db",(function(){return Vt}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"app"}},[e("v-main"),e("v-container",[e("router-view")],1)],1)},c=[],i={name:"App",data:function(){return{}}},o=i,s=(e("034f"),e("2877")),l=e("6544"),u=e.n(l),d=e("7496"),p=e("a523"),v=e("f6c4"),m=Object(s["a"])(o,r,c,!1,null,null,null),f=m.exports;u()(m,{VApp:d["a"],VContainer:p["a"],VMain:v["a"]});e("45fc");var b=e("8c4f"),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"dashboard"}},[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",[e("h2",{staticClass:"pa-4"},[t._v("Contact Manager")])]),e("v-spacer"),e("h3",{attrs:{color:"white",router:"",to:"/new",text:""}},[e("i",{staticClass:"fa fa-user pa-1"}),e("span",{staticClass:"mr-2"},[t._v(t._s(t.currentUser))])]),e("v-btn",{attrs:{color:"white",router:"",to:"/new",text:""}},[e("i",{staticClass:"fa fa-user-plus pa-1"}),e("span",{staticClass:"mr-2"},[t._v("Create New Contact")])]),e("v-btn",{attrs:{color:"info"},on:{click:t.logOut}},[e("span",{staticClass:"mr-2"},[t._v("LogOut")]),e("v-icon",[t._v(" mdi-open-in-new ")])],1)],1),e("v-container",[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800"}},[e("v-list",[e("v-list-item",{staticClass:"d-flex justify-center"},[e("h2",{staticClass:"display-1 pa-3"},[t._v("Contacts")])]),e("v-divider"),e("v-list-item-group",t._l(t.contacts,(function(a){return e("v-list-item",{key:a.id,attrs:{router:"",to:{name:"view-contact",params:{contact_id:a.contact_id}}}},[t._v(" "+t._s(a.name)+" "),e("v-spacer"),e("v-chip",{staticClass:"mr-4"},[t._v(t._s(a.job_title))])],1)})),1)],1)],1)],1)],1)},_=[],C=(e("4160"),e("b0c0"),e("159b"),e("59ca")),g=e.n(C),x=(e("ea7b"),{name:"dashboard",data:function(){return{contacts:[],isLogged:!1,currentUser:!1}},created:function(){this.getContacts(),g.a.auth().currentUser&&(this.isLogged=!0,this.currentUser=g.a.auth().currentUser.email)},methods:{logOut:function(){var t=this;g.a.auth().signOut().then((function(){t.$router.push("/login")}))},getContacts:function(){var t=this;Vt.collection("contacts").orderBy("contact_id").get().then((function(a){a.forEach((function(a){var e={id:a.id,contact_id:a.data().contact_id,name:a.data().name,job_title:a.data().job_title,email:a.data().email};t.contacts.push(e)}))}))}}}),V=x,w=e("40dc"),k=e("8336"),y=e("b0af"),j=e("cc20"),A=e("ce7e"),E=e("132d"),S=e("8860"),O=e("da13"),q=e("1baa"),$=e("2fa4"),I=Object(s["a"])(V,h,_,!1,null,null,null),L=I.exports;u()(I,{VApp:d["a"],VAppBar:w["a"],VBtn:k["a"],VCard:y["a"],VChip:j["a"],VContainer:p["a"],VDivider:A["a"],VIcon:E["a"],VList:S["a"],VListItem:O["a"],VListItemGroup:q["a"],VSpacer:$["a"]});var T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"new-contact "}},[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",[e("h2",[t._v("Contact Manager")])])]),e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Your New Contact")])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",[e("v-text-field",{attrs:{label:"Name*",required:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Contact Id*",required:""},model:{value:t.contact_id,callback:function(a){t.contact_id=a},expression:"contact_id"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Job Title*",type:"text",required:""},model:{value:t.job_title,callback:function(a){t.job_title=a},expression:"job_title"}})],1),e("v-col",{attrs:{cols:"12"}})],1)],1),e("small",[t._v("*indicates required field")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",router:"",to:"/"}},[t._v(" Close ")]),e("v-btn",{attrs:{color:"primary"},on:{click:t.submitForm}},[t._v(" Save ")])],1)],1)],1)},B=[],U={name:"new-contatcs",data:function(){return{snackbar:!1,name:null,email:null,contact_id:null,job_title:null,database_id:null}},methods:{submitForm:function(){var t=this;Vt.collection("contacts").add({name:this.name,email:this.email,contact_id:this.contact_id,job_title:this.job_title}).then((function(a){t.$router.push("/"),console.log(a)})).then((function(t){t.forEach((function(t){console.log(t.data().id)}))})).catch((function(t){console.error(t)}))}}},D=U,P=(e("e434"),e("99d9")),M=e("62ad"),F=e("0fd9"),G=e("8654"),N=Object(s["a"])(D,T,B,!1,null,"be744bc6",null),J=N.exports;u()(N,{VApp:d["a"],VAppBar:w["a"],VBtn:k["a"],VCard:y["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:M["a"],VContainer:p["a"],VRow:F["a"],VSpacer:$["a"],VTextField:G["a"]});var R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{attrs:{id:"edit-contacts"}},[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("h2",{staticClass:"display-1"},[t._v("Contact Manager")])]),e("v-spacer")],1),e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("Your New Contact")])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",[e("v-text-field",{attrs:{label:"Name*"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Email*",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Contact Id*",disabled:""},model:{value:t.contact_id,callback:function(a){t.contact_id=a},expression:"contact_id"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{attrs:{label:"Job Title*",type:"text",required:""},model:{value:t.job_title,callback:function(a){t.job_title=a},expression:"job_title"}})],1)],1)],1),e("small",[t._v("*indicates required field")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",router:"",to:"/"}},[t._v(" Close ")]),e("v-btn",{attrs:{color:"primary"},on:{click:function(a){return a.preventDefault(),t.updateContact(a)}}},[t._v(" Save ")])],1)],1)],1)},Y=[],z={name:"edit-contacts",data:function(){return{name:null,email:null,job_title:null,contact_id:null}},beforeRouteEnter:function(t,a,e){Vt.collection("contacts").where("contact_id","==",t.params.contact_id).get().then((function(t){t.forEach((function(t){e((function(a){a.contact_id=t.data().contact_id,a.name=t.data().name,a.email=t.data().email,a.job_title=t.data().job_title}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;Vt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){t.contact_id=a.data().contact_id,t.name=a.data().name,t.email=a.data().email,t.job_title=a.data().job_title}))}))},updateContact:function(){var t=this;Vt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){a.ref.update({name:t.name,email:t.email,contact_id:t.contact_id,job_title:t.job_title}).then((function(){t.$router.push({name:"view-contact",params:{contact_id:t.contact_id}})}))}))}))}}},W=z,K=Object(s["a"])(W,R,Y,!1,null,null,null),H=K.exports;u()(K,{VApp:d["a"],VAppBar:w["a"],VBtn:k["a"],VCard:y["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:M["a"],VContainer:p["a"],VRow:F["a"],VSpacer:$["a"],VTextField:G["a"]});var Q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",[e("h2",{staticClass:"pa-4"},[t._v("Contact Manager")])]),e("v-spacer"),e("v-btn",{attrs:{router:"",to:{name:"edit-contact",params:{contact_id:t.contact_id}},color:"info"}},[e("v-icon",[t._v("mdi-pencil")])],1)],1),e("v-list",[e("v-divider"),e("v-list-item-group",[e("v-list-item",{staticClass:"display-2 pa-4"},[t._v(" "+t._s(t.name)+" ")]),e("v-divider"),e("v-list-item",[t._v(" Contact Id#: "+t._s(t.contact_id)+" "),e("v-spacer")],1),e("v-divider"),e("v-list-item",[t._v(" email: "+t._s(t.email)+" "),e("v-spacer")],1),e("v-divider"),e("v-list-item",[t._v(" Job Title: "+t._s(t.job_title)+" "),e("v-spacer")],1),e("v-divider")],1)],1),e("v-container",[e("v-btn",{staticClass:"mr-3",attrs:{router:"",to:"/",color:"primary"}},[e("v-icon",[t._v("mdi-arrow-left")]),t._v("Back")],1),e("v-btn",{attrs:{color:"error"},on:{click:t.deleteContact}},[t._v("Delete"),e("v-icon",[t._v("mdi-delete")])],1)],1)],1)},X=[],Z={name:"view-contacts",data:function(){return{contact_id:null,name:null,job_title:null,email:null}},beforeRouteEnter:function(t,a,e){Vt.collection("contacts").where("contact_id","==",t.params.contact_id).get().then((function(t){t.forEach((function(t){e((function(a){a.contact_id=t.data().contact_id,a.name=t.data().name,a.email=t.data().email,a.job_title=t.data().job_title}))}))}))},watch:{$route:"fetchData"},methods:{getContacts:function(){var t=this;Vt.collection("contacts").orderBy("contact_id").get().then((function(a){a.forEach((function(a){var e={id:a.id,contact_id:a.data().contact_id,name:a.data().name,job_title:a.data().job_title,email:a.data().email};t.contacts.push(e),console.log(t.contacts)}))}))},fetchData:function(){var t=this;Vt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){t.contact_id=a.data().contact_id,t.name=a.data().name,t.email=a.data().email,t.job_title=a.data().job_title}))}))},deleteContact:function(){var t=this;confirm("Are You Sure you want to delete, your data Cannot be reversed")&&Vt.collection("contacts").where("contact_id","==",this.$route.params.contact_id).get().then((function(a){a.forEach((function(a){a.ref.delete(),t.$router.push("/")}))})),this.getContacts()}}},tt=Z,at=Object(s["a"])(tt,Q,X,!1,null,null,null),et=at.exports;u()(at,{VApp:d["a"],VAppBar:w["a"],VBtn:k["a"],VContainer:p["a"],VDivider:A["a"],VIcon:E["a"],VList:S["a"],VListItem:O["a"],VListItemGroup:q["a"],VSpacer:$["a"]});var nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"text-center"},[e("h2",[t._v("Login")])]),e("v-spacer"),e("v-btn",{attrs:{color:"white",router:"",to:"/signup",text:""}},[e("i",{staticClass:"fa fa-user-plus"}),e("span",{staticClass:"mr-2"},[t._v("Sign Up")])])],1),e("v-container",{staticClass:"ma-12 pa-12"},[e("v-card",{staticClass:"rounded-lg",attrs:{elevation:"10"}},[e("div",{staticClass:"bg-primary"},[e("v-card-title",[t._v("Login")]),e("v-divider")],1),e("v-container",[e("v-form",[e("v-text-field",{attrs:{type:"text",label:"Email*"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{type:"password",label:"Password*"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("div",{staticClass:"text-left"},[e("small",[t._v("*indicates required field")])]),e("div",{staticClass:"text-right"},[e("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:t.logIn}},[t._v("Login")]),e("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(a){var n=a.attrs;return[e("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(a){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)],1)],1)],1)],1)],1)},rt=[],ct={name:"login",data:function(){return{text:"",snackbar:!1,email:"",password:""}},methods:{logIn:function(t){var a=this;t.preventDefault(),g.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){a.$router.push("/")}),(function(t){alert(t.message),console.log(t)})),this.snackbar=!0,this.text="successfully logged in"}}},it=ct,ot=(e("70e4"),e("4bd4")),st=e("2db4"),lt=Object(s["a"])(it,nt,rt,!1,null,"fd41d260",null),ut=lt.exports;u()(lt,{VApp:d["a"],VAppBar:w["a"],VBtn:k["a"],VCard:y["a"],VCardTitle:P["c"],VContainer:p["a"],VDivider:A["a"],VForm:ot["a"],VSnackbar:st["a"],VSpacer:$["a"],VTextField:G["a"]});var dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"secondary",dark:""}},[e("div",[e("h2",{staticClass:"pa-4"},[t._v("Sign Up")])]),e("v-spacer"),e("v-btn",{attrs:{color:"white",router:"",to:"/login",text:""}},[e("i",{staticClass:"fa fa-user-plus pa-1"}),e("span",{staticClass:"mr-2"},[t._v("Login")])])],1),e("v-container",{staticClass:"ma-12 pa-12"},[e("v-card",{staticClass:"rounded-lg",attrs:{elevation:"10"}},[e("div",{staticClass:"bg-secondary"},[e("v-card-title",[t._v("SignUp")]),e("v-divider")],1),e("v-container",[e("v-form",[e("v-text-field",{attrs:{type:"text",label:"Email*"},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{type:"password",label:"Password*"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("div",{staticClass:"text-left"},[e("small",[t._v("*indicates required field")])]),e("div",{staticClass:"text-right"},[e("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"secondary"},on:{click:function(a){return a.preventDefault(),t.signIn(a)}}},[t._v("Sign Up")]),e("v-snackbar",{scopedSlots:t._u([{key:"action",fn:function(a){var n=a.attrs;return[e("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(a){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.text)+" ")])],1)],1)],1)],1)],1)],1)},pt=[],vt={name:"register",data:function(){return{text:"",snackbar:!1,email:"",password:""}},methods:{signIn:function(t){var a=this;t.preventDefault(),g.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(){a.$router.push("/")}),(function(t){alert(t.message),console.log(t)})),this.snackbar=!0,this.text="Account Successfully Created"}}},mt=vt,ft=(e("8946"),Object(s["a"])(mt,dt,pt,!1,null,"47702882",null)),bt=ft.exports;u()(ft,{VApp:d["a"],VAppBar:w["a"],VBtn:k["a"],VCard:y["a"],VCardTitle:P["c"],VContainer:p["a"],VDivider:A["a"],VForm:ot["a"],VSnackbar:st["a"],VSpacer:$["a"],VTextField:G["a"]}),n["a"].use(b["a"]);var ht=new b["a"]({routes:[{path:"/",name:"dashboard",component:L,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ut,meta:{requiresGuest:!0}},{path:"/signup",name:"signup",component:bt,meta:{requiresGuest:!0}},{path:"/new",name:"new-contact",component:J,meta:{requiresAuth:!0}},{path:"/edit/:contact_id",name:"edit-contact",component:H,meta:{requiresAuth:!0}},{path:"/:contact_id",name:"view-contact",component:et,meta:{requiresAuth:!0}}]});ht.beforeEach((function(t,a,e){t.matched.some((function(t){return t.meta.requiresAuth}))?g.a.auth().currentUser?e():e({path:"/login",query:{redirect:t.fullPath}}):t.matched.some((function(t){return t.meta.requiresGuest}))&&(g.a.auth().currentUser?e({path:"/",query:{redirect:t.fullPath}}):e())}));var _t=ht,Ct=e("f309");n["a"].use(Ct["a"]);var gt=new Ct["a"]({});e("e71f");n["a"].config.productionTip=!1,g.a.initializeApp({apiKey:"AIzaSyDiUNUhbrLE-yqT4G4jMLmJGALCA1bUGNs",authDomain:"vue-contact-manager-1203d.firebaseapp.com",databaseURL:"https://vue-contact-manager-1203d.firebaseio.com",projectId:"vue-contact-manager-1203d",storageBucket:"vue-contact-manager-1203d.appspot.com",messagingSenderId:"931486364248",appId:"1:931486364248:web:02e140e45a1c711087502d"});var xt,Vt=g.a.firestore();g.a.auth().onAuthStateChanged((function(){xt||(xt=new n["a"]({router:_t,vuetify:gt,render:function(t){return t(f)}}).$mount("#app"))}))},"70e4":function(t,a,e){"use strict";var n=e("55c1"),r=e.n(n);r.a},"73c6":function(t,a,e){},"85ec":function(t,a,e){},8946:function(t,a,e){"use strict";var n=e("73c6"),r=e.n(n);r.a},c61c:function(t,a,e){},e434:function(t,a,e){"use strict";var n=e("c61c"),r=e.n(n);r.a}});
//# sourceMappingURL=app.5e398f04.js.map