<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <EditEntityDetails />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import EditEntityDetails from '../components/EditEntityDetails.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'EditEntityDetails': EditEntityDetails,
    }
  }
</script>
