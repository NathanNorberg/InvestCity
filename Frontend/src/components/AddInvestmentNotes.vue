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
            <v-btn color="warning" to="/investorInvestmentDetails/1">Cancel</v-btn>
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
  name: 'investorInvestmentNotes',

  data (){
    return {
      ref: firebase.firestore().collection('investorInvestmentNotes'),
      investorInvestmentNotes: {}
    }
  },
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.investorInvestmentNotes).then((docRef) => {
        this.investorInvestmentNotes.noteTitle = ''
        this.investorInvestmentNotes.noteBody = ''
        router.push({
          name: 'investorDashboardScreen'
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
