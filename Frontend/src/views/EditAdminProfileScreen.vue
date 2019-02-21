<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <EditAdminProfile />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import EditAdminProfile from '../components/EditAdminProfile.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'EditAdminProfile': EditAdminProfile,
    }
  }
</script>
