<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <EditInvestorProfile />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import EditInvestorProfile from '../components/EditInvestorProfile.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'EditInvestorProfile': EditInvestorProfile,
    }
  }
</script>

<style scoped>

</style>
