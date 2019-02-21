<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Create News</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form @submit="onSubmit">
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

            <v-btn color="success" type='submit'>Add News</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>

import firebase  from '../firebase/init.js';
import router from '../router'


export default {
  name: 'AddNews',

  data (){
    return {
      ref: firebase.firestore().collection('adminNews'),
      adminNews: {}
    }
  },

  mounted () {
  },

    methods: {
      onSubmit (evt) {
        evt.preventDefault()

        this.ref.add(this.adminNews).then((docRef) => {
          this.adminNews.newsTitle = ''
          this.adminNews.newsBody = ''
          router.push({
            name: 'ManageNewsScreen'
          })
        })
        .catch((error) => {
          alert("Error adding document: ", error);
        });
      }
    }


}
</script>

<style scoped>

</style>
