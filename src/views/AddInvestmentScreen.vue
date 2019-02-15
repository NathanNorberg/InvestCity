<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <AddInvestment />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AddInvestment from '../components/AddInvestment.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AddInvestment': AddInvestment,
    }
  }
</script>
