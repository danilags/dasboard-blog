<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav-bar :statusLogin="statusLogin" :username="username" :idUser="id_user"></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  data() {
    return {
      statusLogin : false,
      username: localStorage.getItem('username'),
      id_user: localStorage.getItem('id')
    }
  },
  components: {
    NavBar
  },
  mounted() {
    if (window.localStorage.getItem('token')) {
      this.statusLogin = true
    } else {
      this.statusLogin = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
