<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <AddInvestmentNotes />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import AddInvestmentNotes from '../components/AddInvestmentNotes.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'AddInvestmentNotes': AddInvestmentNotes
    }
  }
</script>

<style scoped>

</style>
