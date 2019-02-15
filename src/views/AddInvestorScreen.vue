<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <AddInvestor />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AddInvestor from '../components/AddInvestor.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AddInvestor': AddInvestor,
    }
  }
</script>
