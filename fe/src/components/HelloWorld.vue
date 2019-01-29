<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-for="(user,index) in users" :key="index">{{user.name}}</li>
      </ul>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr v-for="(user,index) in users" :key="index"> 
            <td>{{index}}</td>
            <td>{{user.name}}</td>
            


          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>yongqing</td>
            <td>99</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  data() {
    return {
      data: [
        {
          id: 1,
          name: "zhaoye",
          score: 60
        },
        {
          id: 2,
          name: "zhaoye2",
          score: 61
        }
      ]
    };
  }
};
</script>
