<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <EditInvestmentNotes />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import EditInvestmentNotes from '../components/EditInvestmentNotes.vue'
  export default {
    components: {
      'InvestorNav': InvestorNav,
      'EditInvestmentNotes': EditInvestmentNotes
    }
  }
</script>

<style scoped>

</style>
