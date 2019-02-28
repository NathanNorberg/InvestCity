<template>
  <div>
    <Header />
    <br>
    <br>
    <InvestorLogin />
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  import InvestorLogin from '../components/InvestorLogin.vue'

  export default {
    components: {
      'Header': Header,
      'InvestorLogin': InvestorLogin
    }
  }
</script>
