<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Add Investment Note</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form @submit="onSubmit">
            <v-text-field
            v-model="investorInvestmentNotes.noteTitle"
            v-validate="'required|max:50'"
            :counter="50"
            :error-messages="errors.collect('noteTitle')"
            label="Note Title"
            data-vv-name="noteTitle"
            required
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="investorInvestmentNotes.noteBody"
                label="Note Body"
                value=""
                hint="Note Body"
                v-validate="'required'"
                :error-messages="errors.collect('noteBody')"
                data-vv-name="noteBody"
                required
              ></v-textarea>
            </v-flex>



            <v-btn color="success" type='submit'>Submit</v-btn>
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
      noteTitle: '',
      noteBody: '',
    }
  },
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    onSubmit() {
       axios.post('http://localhost:8000/adminNews/addAdminNews',{
        investor_id: localStorage.getItem('investor_id'),
        noteTitle: this.noteTitle,
        noteBody: this.noteBody
        }).then( (response) => {
          console.log(response);
          this.$router.push('/manageNews')
          }).catch( (error) => {
          console.log(error);
        })
      }
  }



}
</script>

<style scoped>

</style>
