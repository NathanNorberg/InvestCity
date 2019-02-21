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
      <v-flex v-for="(blog) in blogs" :key="blog.id" offset-xs1 xs10>
        <v-card>
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-left"><h3>{{ blog.title }}</h3>
              <p class="text-xs-left"><p><i>(date)</i></p>
              <p class="text-xs-left"><p>{{ blog.body }}</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

  data () {
    return {
        blogs: []
    }
},


  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
        this.blogs = data.body.slice(0,10);
    });
  }


}
</script>

<style scoped>

</style>
