<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <AddNews />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AddNews from '../components/AddNews.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AddNews': AddNews,
    }
  }
</script>
