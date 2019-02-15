<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <EditInvestorDetails />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import EditInvestorDetails from '../components/EditInvestorDetails.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'EditInvestorDetails': EditInvestorDetails,
    }
  }
</script>
