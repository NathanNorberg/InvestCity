<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Edit News</h1>
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
                hint="Body"
                v-validate="'required'"
                :error-messages="errors.collect('newsBody')"
                data-vv-name="newsBody"
                required
              ></v-textarea>
            </v-flex>


              <v-checkbox
                v-model="checkbox"
                v-validate="'required'"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="News Update Complete?"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

            <v-btn color="success" @click="updateNews">Update</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
            <v-container text-xs-right>
              <v-btn color="error" @click="deleteNews" >Delete News</v-btn>
            </v-container>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data (){
    return{
      adminNews:{
        newsTitle: 'Prefilled Title',
        newsBody: 'Prefilled Body',
        checkbox: null,
      }
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    updateNews () {
      this.$http.post('http://jsonplaceholder.typicode.com/posts/1',{
        newsTitle: this.adminNews.newsTitle,
        newsBody: this.adminNews.newsBody
      }).then(function(data){
        console.log(data)
      })
    },

    deleteNews () {

      console.log('Delete Has been fired')

    }

  }


}
</script>

<style scoped>

</style>
