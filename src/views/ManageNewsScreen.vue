<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <br>
    <br>
    <ManageNews />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import ManageNews from '../components/ManageNews.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'ManageNews': ManageNews,
    }
  }
</script>
