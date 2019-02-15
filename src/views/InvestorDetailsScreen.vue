<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <br>
    <br>
    <InvestorDetails />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestorDetails from '../components/InvestorDetails.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestorDetails': InvestorDetails
    }
  }
</script>

<style scoped>

</style>
