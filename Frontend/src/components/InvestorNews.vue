<template>
  <v-container grid-list-md>
    <v-container text-xs-center>
      <v-btn color="grey lighten-5" to="/investorDashboard">Return to Dashboard</v-btn>
    </v-container>
    <v-layout row wrap>
      <v-flex text-xs-center offset-xs1 xs10>
        <v-card dark color="secondary">
          <v-card-text  class="px-0"><h1>CNI News</h1></v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="news in adminNews" :key="`${news.id}`" offset-xs1 xs10>
        <v-card>
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-left"><h3>{{ news.title }}</h3>
              <p class="text-xs-left"><p><i>(date)</i></p>
              <p class="text-xs-left"><p>{{ news.body }}</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
    data(){
      return{
      }
    },
    created(){
      this.$store.dispatch('getAllAdminNews')
    },
    computed: {
      adminNews(){
        return this.$store.state.adminNews;
      }
    }


}
</script>

<style scoped>

</style>
