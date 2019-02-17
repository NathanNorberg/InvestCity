<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <InvestorInvestmentDetails />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestorInvestmentDetails from '../components/InvestorInvestmentDetails.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestorInvestmentDetails': InvestorInvestmentDetails,
    }
  }
</script>

<style scoped>

</style>
