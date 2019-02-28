<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <InvestorEntity />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import InvestorEntity from '../components/InvestorEntity.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'InvestorEntity': InvestorEntity,
    }
  }
</script>
