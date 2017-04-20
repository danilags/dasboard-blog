<template lang="html">
  <div class="navbar">
    <el-menu theme="light" class="el-menu-demo" mode="horizontal">
      <router-link to="/"><el-menu-item index="1">Beranda</el-menu-item></router-link>
      <router-link to="/about"><el-menu-item index="2">About</el-menu-item></router-link>
      <router-link to="/list"><el-menu-item index="2">List</el-menu-item></router-link>
      <router-link to="/login"><el-menu-item style="float: right;" index="3">Login</el-menu-item></router-link>
      <router-link to="/user"><el-menu-item style="float: right;" index="3">Profil</el-menu-item></router-link>
      <router-link to="/logout"><el-menu-item style="float: right;" index="3">Logout</el-menu-item></router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
