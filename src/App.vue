<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
     <a class="navbar-brand" href="#">Navbar</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarsExampleDefault">
       <ul class="navbar-nav mr-auto">
         <li class="nav-item active"><router-link class="nav-link" to="/">overview</router-link></li>
         <li class="nav-item"><router-link class="nav-link" to="/details">details</router-link></li>
         <li class="nav-item"><router-link class="nav-link" to="/add">add</router-link></li>
         <li class="nav-item"><router-link class="nav-link" to="/edit">edit</router-link></li>
       </ul>
     </div>
   </nav>
    <main role="main" class="container">
      <div class="starter-template">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
.starter-template {
    padding: 3rem 1.5rem;
    text-align: center;
  }
</style>
