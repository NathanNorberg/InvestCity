<template>
  <v-container>

    <v-container text-xs-center>
      <h1>Update Your Information</h1>
    </v-container>

    <v-card>
      <v-flex>
        <v-container>
          <form>

            <v-text-field
              v-model="admin.emailAndLogin"
              v-validate="'required|emailAndLogin'"
              :error-messages="errors.collect('emailAndLogin')"
              label="Email / Login"
              data-vv-name="emailAndLogin"
              required
            ></v-text-field>

            <v-text-field
              v-model="admin.password"
              v-validate="'required|password'"
              :error-messages="errors.collect('password')"
              label="Password"
              data-vv-name="password"
              required
            ></v-text-field>

            <v-text-field
              v-model="admin.confirmPassword"
              v-validate="'required|confirmPassword'"
              :error-messages="errors.collect('confirmPassword')"
              label="Confirm Password"
              data-vv-name="confirmPassword"
              required
            ></v-text-field>

              <v-text-field
                v-model="admin.city"
                v-validate="'required|city'"
                :error-messages="errors.collect('city')"
                label="City"
                data-vv-name="city"
                required
              ></v-text-field>


                <v-select
                v-model="admin.state"
                v-validate="'required'"
                :items="admin.states"
                :error-messages="errors.collect('state')"
                label="State"
                data-vv-name="state"
                required
                ></v-select>

              <v-text-field
                v-model="admin.contactNumber"
                v-validate="'required|contactNumber'"
                :error-messages="errors.collect('contactNumber')"
                label="Contact Number"
                data-vv-name="contactNumber"
                required
              ></v-text-field>


              <v-checkbox
                v-model="admin.checkbox"
                v-validate="'required'"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="Update Complete?"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

              <v-btn color="success" @click="submit">Update</v-btn>
              <v-btn color="warning" to="/adminProfile">Cancel</v-btn>
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

  data(){
    return{
      admin:{
        select: null,
        adminName: '',
        emailAndLogin: '',
        password: '',
        confirmPassword: '',
        states: [
          'Alabama',
          'Alaska',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'Florida',
          'Georgia',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Luisiana',
          'Maine',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Pennsylvania',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
        city: '',
        contactNumber: '',
        checkbox: null,
        dictionary: {
          attributes: {
            // custom attributes
          },
          custom: {
            name: {
              required: () => 'Name can not be empty',
              max: 'The name field may not be greater than 50 characters'
              // custom messages
            },
            state: {
              required: 'Select field is required'
            },
          }
        }
      }
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    investorProfileUpdate: function(){
      this.$validator.validateAll()
      this.$http.patch('http://jsonplaceholder.typicode.com/posts/1',{
        adminName: this.admin.adminName,
        emailAndLogin: this.admin.emailAndLogin,
        password: this.admin.password,
        confirmPassword: this.admin.confirmPassword,
        states: this.admin.states,
        city: this.admin.city,
        contactNumber: this.admin.contactNumber,
      }).then(function(data){
        console.log(data)
      })
    },
  }
}
</script>

<style scoped>

</style>
