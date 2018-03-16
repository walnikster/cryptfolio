<template>
<div>
<ul v-if="lin">
  <input v-model="newItem.name" type="text">
  <input v-model="newItem.value" type="text">
<button id="add" @click="addItem">Add</button>
<li v-for="item in items" v-bind:key="item.id" >{{item.a}} - {{item.b}}</li>
</ul>
</div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "landing",
  data() {
    return {
      lin: firebase.auth().currentUser,
      items: [],
      newItem: {
        name: "",
        value: ""
      }
    };
  },
  methods: {
    addItem() {
      const userId = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref("dummy")
        .child(userId)
        .push({ a: this.newItem.name, b: this.newItem.value });
      this.newItem = { name: "", value: "" };
    }
  },
  mounted: function() {
    if (firebase.auth().currentUser) {
      const userId = firebase.auth().currentUser.uid;
      this.$bindAsArray(
        "items",
        firebase
          .database()
          .ref("dummy")
          .child(userId)
      );
    }
  }
};
</script>
