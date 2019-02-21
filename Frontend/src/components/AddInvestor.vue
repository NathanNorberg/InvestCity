<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Create New Investor</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form @submit="onSubmit">
            <v-text-field
            v-model="name"
            v-validate="'required|max:50'"
            :counter="50"
            :error-messages="errors.collect('name')"
            label="Investor Name"
            data-vv-name="name"
            required
            ></v-text-field>

            <v-text-field
              v-model="entityName"
              v-validate="'required'"
              :error-messages="errors.collect('entityName')"
              label="Entity Name"
              data-vv-name="entityName"
              required
            ></v-text-field>

            <v-text-field
              v-model="emailAndLogin"
              v-validate="'required|emailAndLogin'"
              :error-messages="errors.collect('emailAndLogin')"
              label="Email / Login"
              data-vv-name="emailAndLogin"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              v-validate="'required|password'"
              :error-messages="errors.collect('password')"
              label="Password"
              data-vv-name="password"
              required
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              v-validate="'required|confirmPassword'"
              :error-messages="errors.collect('confirmPassword')"
              label="Confirm Password"
              data-vv-name="confirmPassword"
              required
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
              v-model="address"
              label="Address"
              value=""
              hint="Address"
              v-validate="'required'"
              data-vv-name="address"
              required
              ></v-textarea>
            </v-flex>

              <v-text-field
                v-model="city"
                v-validate="'required|city'"
                :error-messages="errors.collect('city')"
                label="City"
                data-vv-name="city"
                required
              ></v-text-field>

              <v-select
              v-model="state"
              v-validate="'required'"
              :items="states"
              :error-messages="errors.collect('state')"
              label="State"
              data-vv-name="state"
              required
              ></v-select>

              <v-text-field
                v-model="contactNumber"
                v-validate="'required|contactNumber'"
                :error-messages="errors.collect('contactNumber')"
                label="Contact Number"
                data-vv-name="contactNumber"
                required
              ></v-text-field>

              <v-text-field
                v-model="mobileNumber"
                v-validate="'required|mobileNumber'"
                :error-messages="errors.collect('mobileNumber')"
                label="Mobile Number"
                data-vv-name="mobileNumber"
                required
              ></v-text-field>

              <v-select
              v-model="states"
              v-validate="'required'"
              :items="status"
              :error-messages="errors.collect('state')"
              label="Status"
              data-vv-name="state"
              required
              ></v-select>

              <v-flex xs8>
                <v-textarea
                  v-model="notesForInvestors"
                  label="Investor Notes (Internal Use Only):"
                  value=""
                  hint="Investor Notes (Internal Use Only):"
                  v-validate="'required'"
                  data-vv-name="notesForInvestors"
                  required
                ></v-textarea>
              </v-flex>


            <v-btn color="success" type='submit'>Submit</v-btn>
            <v-btn color="warning" to="/adminInvestorDashboard">Cancel</v-btn>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {


data () {
  return {
        name: '',
        entityName: '',
        emailAndLogin: '',
        confirmPassword: '',
        password: '',
        address: '',
        city: '',
        contactNumber: '',
        mobileNumber: '',
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
        status: [
          'Active',
          'Inactive',
        ],
        notesForInvestors: '',
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
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {

    onSubmit() {
       axios.post('http://localhost:8000/adminNews/addAdminNews',{
        name: this.name,
        entityName: this.entityName,
        emailAndLogin: this.emailAndLogin,
        password: this.password,
        confirmPassword: this.confirmPassword,
        address: this.address,
        city: this.city,
        states: this.states,
        contactNumber: this.contactNumber,
        mobileNumber: this.mobileNumber,
        status: this.status,
        notesForInvestors: this.notesForInvestors,
        }).then( (response) => {
          console.log(response);
          this.$router.push('/adminInvestorDashboard')
        }).catch( (error) => {
          console.log(error);
        })
      }


  }
}
</script>

<style scoped>

</style>
