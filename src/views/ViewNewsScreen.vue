<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <ViewNews />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import ViewNews from '../components/ViewNews.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'ViewNews': ViewNews,
    }
  }
</script>
