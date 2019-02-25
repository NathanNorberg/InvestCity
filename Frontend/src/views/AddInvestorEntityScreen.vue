<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <AddInvestorEntity />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AddInvestorEntity from '../components/AddInvestorEntity.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AddInvestorEntity': AddInvestorEntity,
    }
  }
</script>
