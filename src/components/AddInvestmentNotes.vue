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
            v-model="noteTitle"
            v-validate="'required|max:50'"
            :counter="50"
            :error-messages="errors.collect('noteTitle')"
            label="Note Title"
            data-vv-name="noteTitle"
            required
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                name="noteBody"
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
                v-model="checkbox"
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

  data: () => ({
    noteTitle: '',
    noteBody: '',
    checkbox: null,
    dictionary: {
      attributes: {
        // custom attributes
      },
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
    },
  }
}
</script>

<style scoped>

</style>
