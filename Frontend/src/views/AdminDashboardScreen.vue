<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <AdminDashboard />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AdminDashboard from '../components/AdminDashboard.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AdminDashboard': AdminDashboard,
    }
  }
</script>
