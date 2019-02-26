<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <EntityDetails />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import EntityDetails from '../components/EntityDetails.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'EntityDetails': EntityDetails,
    }
  }
</script>
