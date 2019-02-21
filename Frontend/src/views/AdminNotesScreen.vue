<template>
  <div>
    <AdminNav />
    <br>
    <br>
    <AdminNotes />
  </div>
</template>

<script>
  import AdminNav from '../components/AdminNav.vue'
  import AdminNotes from '../components/AdminNotes.vue'

  export default {
    components: {
      'AdminNav': AdminNav,
      'AdminNotes': AdminNotes,
    }
  }
</script>
