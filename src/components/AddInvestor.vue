<template>
  <v-flex>
    <form>
      <v-select
        v-model="select"
        v-validate="'required'"
        :categories="categories"
        :error-messages="errors.collect('categories')"
        label="Category"
        data-vv-name="categories"
        required
      ></v-select>
      <v-text-field
        v-model="grouping"
        v-validate="'required|grouping'"
        :error-messages="errors.collect('grouping')"
        label="Grouping"
        data-vv-name="grouping"
        required
      ></v-text-field>
      <v-text-field
      v-model="name"
      v-validate="'required|max:50'"
      :counter="50"
      :error-messages="errors.collect('name')"
      label="Project Name"
      data-vv-name="name"
      required
      ></v-text-field>
      <v-flex xs12 sm8 md11>
        <v-text-field
          v-validate="'required'"
          label="Brief Description"
          data-vv-name="brief-description"
          outline
          required
        ></v-text-field>
      </v-flex>
      <v-select
        v-model="select"
        v-validate="'required'"
        :items="items"
        :error-messages="errors.collect('select')"
        label="State"
        data-vv-name="select"
        required
      ></v-select>
      <v-checkbox
        v-model="checkbox"
        v-validate="'required'"
        :error-messages="errors.collect('checkbox')"
        value="1"
        label="Form Complete?"
        data-vv-name="checkbox"
        type="checkbox"
        required
      ></v-checkbox>

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-flex>
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
    categories: [
      'Undeveloped Land',
      'Finished Lots',
      'Income Producing Property',
      'Commercial Property',
      'Industrial Property',
      'Improved Land',
      'Mixed Use',
    ],
    grouping: '',
    name: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: null,
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty',
          max: 'The name field may not be greater than 50 characters'
          // custom messages
        },
        select: {
          required: 'Select field is required'
        }
      }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit () {
      this.$validator.validateAll()
    },
    clear () {
      this.name = ''
      this.grouping = ''
      this.categories = null
      this.select = null
      this.checkbox = null
      this.$validator.reset()
    }
  }
}
</script>

<style scoped>

</style>
