<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Create News</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form>
            <v-text-field
            v-model="adminNews.newsTitle"
            v-validate="'required|max:50'"
            :counter="50"
            :error-messages="errors.collect('newsTitle')"
            label="News Title"
            data-vv-name="newsTitle"
            required
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="adminNews.newsBody"
                label="Body"
                value=""
                hint="Body"
                v-validate="'required'"
                :error-messages="errors.collect('newsBody')"
                data-vv-name="newsBody"
                required
              ></v-textarea>
            </v-flex>

            <v-btn color="success" v-on:click.prevent="addNews">Add News</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>


export default {

  data (){
    return{
      adminNews:{
        newsTitle: '',
        newsBody: '',
      }
    }
  },

  mounted () {
  },

  methods: {
    addNews () {
      this.$http.post('https://investcity-474c2.firebaseio.com/news.json').add({
        newsTitle: this.adminNews.newsTitle,
        newsBody: this.adminNews.newsBody,
        timestamp: Date.now()
      })
    },
  }


}
</script>

<style scoped>

</style>
