<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <AdminInvestmentDashboard />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AdminInvestmentDashboard from '../components/AdminInvestmentDashboard.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AdminInvestmentDashboard': AdminInvestmentDashboard,
    }
  }
</script>
