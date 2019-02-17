<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Add Investment Note</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form>
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


              <v-checkbox
                v-model="adminInvestmentNotes.checkbox"
                v-validate="'required'"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="New Note Complete?"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

            <v-btn color="success" @click="submit">Submit</v-btn>
            <v-btn color="warning" to="/investorInvestmentDetails/1">Cancel</v-btn>
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
      adminInvestmentNotes:{
        noteTitle: '',
        noteBody: '',
        checkbox: null,
      }
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$http.post('http://jsonplaceholder.typicode.com/posts/1',{
        noteTitle: this.investorInvestmentNotes.noteTitle,
        noteBody: this.investorInvestmentNotes.noteBody
      }).then(function(data){
        console.log(data)
      })
    },

  }
}
</script>

<style scoped>

</style>
