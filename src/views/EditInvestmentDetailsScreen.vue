<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <EditInvestmentDetails />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import EditInvestmentDetails from '../components/EditInvestmentDetails.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'EditInvestmentDetails': EditInvestmentDetails,
    }
  }
</script>
