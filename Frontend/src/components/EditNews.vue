<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Edit News</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form @delete="deleteNews"  @update="updateNews">
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

            <v-btn color="success" type="update">Update</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
            <v-container text-xs-right>
              <v-btn color="error" type="delete" >Delete News</v-btn>
            </v-container>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data (){
    return{
      adminNews:{
        newsTitle: '',
        newsBody: '',
        checkbox: null,
      }
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    updateNews() {
       axios.patch('http://localhost:8000/adminNews/editAdminNews/:id',{
        newsTitle: this.newsTitle,
        newsBody: this.newsBody,
        }).then( (response) => {
      console.log(response);
      this.$router.push('/adminNews')
    }).catch( (error) => {
      console.log(error);
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
