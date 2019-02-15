<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <br>
    <br>
    <InvestorDashboard />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestorDashboard from '../components/InvestorDashboard.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestorDashboard': InvestorDashboard
    }
  }
</script>

<style scoped>

</style>
