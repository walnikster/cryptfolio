<template>
<div>
<ul v-if="lin">
  <input v-model="newItem.name" type="text">
  <input v-model="newItem.value" type="text">
<button id="add" @click="addItem">Add</button>
<li v-for="item in items" v-bind:key="item.key" >{{item.a}} - {{item.b}} - {{item.key}} <span @click="deleteItem(item.key)">delete</span></li>
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
      let its = [];
      firebase
        .database()
        .ref("dummy")
        .child(userId)
        .on("value", function(dataSnapshot) {
          dataSnapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item["key"] = childSnapshot.key;
            its.push(item);
          });
        });
      this.items = its;
    },
    deleteItem(key) {
      const userId = firebase.auth().currentUser.uid;
      firebase
        .database()
        .ref("dummy")
        .child(userId)
        .child(key)
        .remove();
      let its = [];
      firebase
        .database()
        .ref("dummy")
        .child(userId)
        .on("value", function(dataSnapshot) {
          dataSnapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item["key"] = childSnapshot.key;
            its.push(item);
          });
        });
      this.items = its;
    }
  },
  mounted: function() {
    if (firebase.auth().currentUser) {
      const userId = firebase.auth().currentUser.uid;
      let its = [];
      this.items = [];
      firebase
        .database()
        .ref("dummy")
        .child(userId)
        .on("value", function(dataSnapshot) {
          dataSnapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item["key"] = childSnapshot.key;
            its.push(item);
          });
        });
      this.items = its;
      console.log(this.items);
    }
  }
};
</script>
