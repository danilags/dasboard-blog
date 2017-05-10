<template lang="html">
  <div class="login">
    <el-row >
      <div class="logo">
        <img src="https://s.w.org/about/images/logos/wordpress-logo-notext-rgb.png" alt="">
      </div>
      <div class="form login">
        <el-form label-width="120px" class="demo-ruleForm">
          <el-form-item label="Username">
            <el-input type="text" auto-complete="off" v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="pass">
            <el-input type="password" auto-complete="off" v-model="user.password"></el-input>
          </el-form-item>
          <el-button style="float:right" class="btn-login" type="success" @click="signIn()">Login</el-button>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      user: {
        username : null,
        password : null
      }
    }
  },
  methods: {
    
    showError(msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      })
    }
  },
  mounted() {
    this.signIn()
  }
}
</script>

<style lang="css">
.form.login {
    width: 400px;
    margin: 0 auto;
    padding: 50px 0px;
}

.logo img {
    width: 15%;
    padding: 20px 0;
}
</style>
