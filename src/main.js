/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDiUNUhbrLE-yqT4G4jMLmJGALCA1bUGNs",
  authDomain: "vue-contact-manager-1203d.firebaseapp.com",
  databaseURL: "https://vue-contact-manager-1203d.firebaseio.com",
  projectId: "vue-contact-manager-1203d",
  storageBucket: "vue-contact-manager-1203d.appspot.com",
  messagingSenderId: "931486364248",
  appId: "1:931486364248:web:02e140e45a1c711087502d",
});

export const db = firebase.firestore();

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
