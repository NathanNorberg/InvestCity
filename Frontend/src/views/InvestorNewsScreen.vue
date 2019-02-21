<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <InvestorNews />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestorNews from '../components/InvestorNews.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestorNews': InvestorNews
    }
  }
</script>

<style scoped>

</style>
