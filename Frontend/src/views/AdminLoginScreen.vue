<template>
  <div>
    <Header />
    <br>
    <br>
    <AdminLogin />
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import AdminLogin from '../components/AdminLogin.vue'

  export default {
    components: {
      'Header': Header,
      'AdminLogin': AdminLogin
    }
  }
</script>
