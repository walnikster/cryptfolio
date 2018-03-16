<template>
<div>    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleable" aria-controls="navbarToggleable" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="/">Cryptfolio</a>
  <div class="collapse navbar-collapse" id="navbarToggleable">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         <router-link active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/" exact><a class="nav-link">Overview</a></router-link>
         <router-link v-if="!loggedin" active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/login"><a class="nav-link">login</a></router-link>
         <router-link v-if="!loggedin" active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/register"><a class="nav-link">register</a></router-link>
         <router-link v-if="loggedin" active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/landing"><a class="nav-link">landing</a></router-link>
         <li v-if="loggedin" class="nav-item"><a class="nav-link" v-on:click.prevent="logout" href="#">Logout</a></li>
    </ul>
  </div>
</nav>
    <main role="main" class="container">
        <router-view/>
    </main>
  </div>
</template>

<script>
import fb from "./components/fbase.js";
import firebase from "firebase";
export default {
  name: "app",
  data() {
    return {
      loggedin: false
    };
  },
  mounted: function() {
    // resonsive toggle/collapse navbar when clicking link in SPA
    $(".navbar-collapse a:not(.dropdown-toggle)").click(function() {
      $(this)
        .parents(".navbar-collapse")
        .collapse("hide");
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
      this.loggedin = false;
    }
  },
  updated: function() {
    this.loggedin = firebase.auth().currentUser != null;
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
