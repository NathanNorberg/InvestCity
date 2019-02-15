<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <br>
    <br>
    <InvestmentNotes />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestmentNotes from '../components/InvestmentNotes.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestmentNotes': InvestmentNotes
    }
  }
</script>

<style scoped>

</style>
