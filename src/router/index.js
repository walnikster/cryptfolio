import Vue from "vue";
import Router from "vue-router";
import login from "@/components/login";
import register from "@/components/register";
import overview from "@/components/overview";
import landing from "@/components/landing";

import firebase from "firebase";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "overview",
      component: overview
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/landing",
      name: "landing",
      component: landing
    }
  ],
  mode: "history"
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
    console.log("logged in");
    router.push("/landing");
  } else {
    console.log(user);
    console.log("logged out");
    router.push("/");
  }
});

export default router;
