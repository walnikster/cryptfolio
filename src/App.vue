<template>
<div>    
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="/">Cryptfolio</a>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active"><router-link data-target=".navbar-collapse" class="nav-link" to="/">overview</router-link></li>
         <li class="nav-item"><router-link data-target=".navbar-collapse" class="nav-link" to="/details">details</router-link></li>
         <li class="nav-item"><router-link data-target=".navbar-collapse" class="nav-link" to="/add">add</router-link></li>
         <li class="nav-item"><router-link data-target=".navbar-collapse" class="nav-link" to="/edit">edit</router-link></li>
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
  name: "app"
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
