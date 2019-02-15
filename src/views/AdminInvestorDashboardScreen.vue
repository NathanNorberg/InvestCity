<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <AdminInvestorDashboard />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AdminInvestorDashboard from '../components/AdminInvestorDashboard.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AdminInvestorDashboard': AdminInvestorDashboard,
    }
  }
</script>
