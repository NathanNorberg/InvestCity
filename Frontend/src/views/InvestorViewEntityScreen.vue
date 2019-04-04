<template>
  <div>
    <InvestorNav />
    <br>
    <br>
    <InvestorViewEntity />
  </div>
</template>

<script>
  import InvestorNav from '../components/InvestorNav.vue'
  import InvestorViewEntity from '../components/InvestorViewEntity.vue'

  export default {
    components: {
      'InvestorNav': InvestorNav,
      'InvestorViewEntity': InvestorViewEntity,
    }
  }
</script>
