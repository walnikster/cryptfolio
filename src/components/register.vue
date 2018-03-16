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
<label>retype Password</label>
<input class="form-control" type="password" v-model="retypePassword">
</div>
<div class="form-group">
<button class="form-control" id="login" @click="register">Register</button>
</div>
</div>

</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      retypePassword: ""
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }
};
</script>
