<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <AdminProfile />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AdminProfile from '../components/AdminProfile.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AdminProfile': AdminProfile,
    }
  }
</script>
