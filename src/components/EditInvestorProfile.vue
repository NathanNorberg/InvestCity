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
              v-model="investors.emailAndLogin"
              v-validate="'required|emailAndLogin'"
              :error-messages="errors.collect('emailAndLogin')"
              label="Email / Login"
              data-vv-name="emailAndLogin"
              required
            ></v-text-field>
            <v-text-field
              v-model="investors.password"
              v-validate="'required|password'"
              :error-messages="errors.collect('password')"
              label="Password"
              data-vv-name="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="investors.confirmPassword"
              v-validate="'required|confirmPassword'"
              :error-messages="errors.collect('confirmPassword')"
              label="Confirm Password"
              data-vv-name="confirmPassword"
              required
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
              v-model="investors.address"
              label="Address"
              value=""
              hint="Address"
              v-validate="'required'"
              data-vv-name="address"
              required
              ></v-textarea>

              <v-text-field
                v-model="investors.city"
                v-validate="'required|city'"
                :error-messages="errors.collect('city')"
                label="City"
                data-vv-name="city"
                required
              ></v-text-field>


                <v-select
                v-model="investors.state"
                v-validate="'required'"
                :items="investors.states"
                :error-messages="errors.collect('state')"
                label="State"
                data-vv-name="state"
                required
                ></v-select>
              </v-flex>

              <v-text-field
                v-model="investors.contactNumber"
                v-validate="'required|contactNumber'"
                :error-messages="errors.collect('contactNumber')"
                label="Contact Number"
                data-vv-name="contactNumber"
                required
              ></v-text-field>

              <v-text-field
                v-model="investors.mobileNumber"
                v-validate="'required|mobileNumber'"
                :error-messages="errors.collect('mobileNumber')"
                label="Mobile Number"
                data-vv-name="mobileNumber"
                required
              ></v-text-field>

              <v-checkbox
                v-model="investors.checkbox"
                v-validate="'required'"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="Update Complete?"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

            <v-btn color="success" @click="investorProfileUpdate">Update</v-btn>
            <v-btn color="warning" to="/investorProfile">Cancel</v-btn>
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
      investors:{
        select: null,
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
        county: '',
        city: '',
        address: '',
        contactNumber: '',
        mobileNumber: '',
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
            Category: {
              required: 'Select field is required'
            }
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
        emailAndLogin: this.investors.emailAndLogin,
        password: this.investors.password,
        confirmPassword: this.investors.confirmPassword,
        states: this.investors.states,
        county: this.investors.county,
        city: this.investors.city,
        contactNumber: this.investors.contactNumber,
        mobileNumber: this.investors.mobileNumber,
      }).then(function(data){
        console.log(data)
      })
    },
  }
}
</script>

<style scoped>

</style>
