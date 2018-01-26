<template>
<div>    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleable" aria-controls="navbarToggleable" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="/">Cryptfolio</a>
  <div class="collapse navbar-collapse" id="navbarToggleable">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         <router-link active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/" exact><a class="nav-link">overview</a></router-link>
         <router-link active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/details"><a class="nav-link">details</a></router-link>
         <router-link active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/add"><a class="nav-link">add</a></router-link>
         <router-link active-class="active" tag="li" data-target=".navbar-collapse" class="nav-item" to="/edit"><a class="nav-link">edit</a></router-link>
    </ul>
  </div>
</nav>
    <main role="main" class="container">
        <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted: function() {
    // resonsive toggle/collapse navbar when clicking link in SPA
    $(".navbar-collapse a:not(.dropdown-toggle)").click(function() {
      $(this)
        .parents(".navbar-collapse")
        .collapse("hide");
    });
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
