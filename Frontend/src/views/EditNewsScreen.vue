<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <EditNews />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import EditNews from '../components/EditNews.vue'
  export default {
    components: {
      'AdminNav': AdminNav,
      'EditNews': EditNews,
    }
  }
</script>

<style scoped>

</style>
