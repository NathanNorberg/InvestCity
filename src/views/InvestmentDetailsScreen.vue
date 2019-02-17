<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <InvestmentDetails />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import InvestmentDetails from '../components/InvestmentDetails.vue'
  export default {
    components: {
      'AdminNav': AdminNav,
      'InvestmentDetails': InvestmentDetails,
    }
  }
</script>

<style scoped>

</style>
