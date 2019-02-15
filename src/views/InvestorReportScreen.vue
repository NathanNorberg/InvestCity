<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <br>
    <br>
    <InvestorReport />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestorReport from '../components/InvestorReport.vue'

  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestorReport': InvestorReport,
    }
  }
</script>
