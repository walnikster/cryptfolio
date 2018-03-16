<template>
<div>



<div class="form-group">
<label>Username</label>
<input class="form-control" type="text" v-model="username">
</div>
<div class="form-group">
<label>Password</label>
<input class="form-control" type="password" v-model="password">
</div>
<div class="form-group">
<button class="form-control" id="login" @click="login" >Login</button>
</div>



</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }
};
</script>
