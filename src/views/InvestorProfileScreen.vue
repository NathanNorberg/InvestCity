<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <InvestorProfile />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestorProfile from '../components/InvestorProfile.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestorProfile': InvestorProfile,
    }
  }
</script>

<style scoped>

</style>
