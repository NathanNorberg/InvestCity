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
            v-model="newsTitle"
            v-validate="'required|max:50'"
            :counter="50"
            :error-messages="errors.collect('newsTitle')"
            label="News Title"
            data-vv-name="newsTitle"
            required
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="newsBody"
                label="Body"
                value=""
                hint="Body"
                v-validate="'required'"
                :error-messages="errors.collect('newsBody')"
                data-vv-name="newsBody"
                required
              ></v-textarea>
            </v-flex>

            <v-btn color="success" @click="onSubmit" >Add News</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'


export default {


  data (){
    return {
      newsTitle: '',
      newsBody: ''
    }
  },

  mounted () {
  },

  methods: {
    onSubmit() {
       return this.$store.dispatch('addAdminNews',{
        newsTitle: this.newsTitle,
        newsBody: this.newsBody,
        }).then(
      this.$router.push('/adminNews'))
      .catch( (error) => {
      console.log(error);
    })
    }
  }

}
</script>

<style scoped>

</style>
