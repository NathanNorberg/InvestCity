<template>
  <v-container grid-list-md>
    <v-container text-xs-center>
      <v-btn color="grey lighten-5" to="/adminDashboard">Return to Dashboard</v-btn>
    <v-btn color="success" to="/addNews">Add News</v-btn>
  </v-container>
    <v-layout row wrap>
      <v-flex text-xs-center offset-xs1 xs10>
        <v-card dark color="secondary">
          <v-card-text  class="px-0"><h1>CNI News</h1></v-card-text>
        </v-card>
      </v-flex>
      <v-flex  offset-xs1 xs10>
        <v-card>
          <v-card-text  class="px-0">
            <v-container v-for="news in adminNews"  :key="`${news.id}`">
              <p class="text-xs-left"><h3>Title:{{ news.title }}</h3>
              <p class="text-xs-left"><p><i>(date)</i></p>
              <p class="text-xs-left"><p>Blah{{ news.body }}</p>
              <router-link :to="`/editNews/${news.id}`"><v-btn color="teal lighten-1">Edit News</v-btn></router-link>
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
    created() {
      this.$store.dispatch('getAdminNewsByAdminNewsId')
    },

}

</script>

<style scoped>

</style>
