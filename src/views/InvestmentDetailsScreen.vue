<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <br>
    <br>
    <InvestmentDetails />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestmentDetails from '../components/InvestmentDetails.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestmentDetails': InvestmentDetails,
    }
  }
</script>

<style scoped>

</style>
