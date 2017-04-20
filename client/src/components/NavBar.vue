<template lang="html">
  <div class="navbar">
    <el-menu theme="light" class="el-menu-demo" mode="horizontal">
      <router-link to="/"><el-menu-item index="1">Beranda</el-menu-item></router-link>
      <router-link to="/about"><el-menu-item index="2">About</el-menu-item></router-link>
      <router-link to="/list"><el-menu-item index="2">Jobs</el-menu-item></router-link>
      <router-link :to="'/user/'+ idUser"><el-menu-item style="float: right;" index="3" v-if="statusLogin == true"><b>{{ username }}</b></el-menu-item></router-link>
      <router-link to="/login"><el-menu-item style="float: right;" index="3" v-if="statusLogin == false">Login</el-menu-item></router-link>
      <router-link to="/signup"><el-menu-item style="float: right;" index="3" v-if="statusLogin == false">Register</el-menu-item></router-link>
      <el-menu-item style="float: right;" index="3" @click="logout()" v-if="statusLogin == true">Logout</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['statusLogin', 'username', 'idUser'],
  data() {
    return {

    }
  },
  methods: {
    logout() {
      localStorage.clear()
      window.location.reload()
      window.location.href = 'http://localhost:8080/'
    }
  }
}
</script>

<style lang="css">
</style>
