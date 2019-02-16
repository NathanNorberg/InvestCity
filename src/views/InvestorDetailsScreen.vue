<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <InvestorDetails />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import InvestorDetails from '../components/InvestorDetails.vue'
  export default {
    components: {
      'AdminNav': AdminNav,
      'InvestorDetails': InvestorDetails
    }
  }
</script>

<style scoped>

</style>
