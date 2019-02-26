<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Create New Investor</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
            <v-text-field
            v-model="name"
            label="Investor Name"
            value=""
            ></v-text-field>

            <v-text-field
              v-model="emailAndLogin"
              label="Email / Login"
              value=""
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              value=""
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              label="Confirm Password"
              value=""
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
              v-model="address"
              label="Address"
              value=""
              hint="Address"
              ></v-textarea>
            </v-flex>

              <v-text-field
                v-model="city"
                label="City"
                value=""
              ></v-text-field>

              <v-select
              v-model="state"
              :items="states"
              label="State"
              value=""
              ></v-select>

              <v-text-field
                v-model="contactNumber"
                label="Contact Number"
                value=""
              ></v-text-field>

              <v-text-field
                v-model="mobileNumber"
                label="Mobile Number"
                value=""
              ></v-text-field>

              <v-select
              v-model="status"
              :items="investorStatus"
              label="Status"
              value=""
              ></v-select>

              <v-flex xs8>
                <v-textarea
                  v-model="notesForInvestors"
                  label="Investor Notes (Internal Use Only):"
                  value=""
                  hint="Investor Notes (Internal Use Only):"
                ></v-textarea>
              </v-flex>


            <v-btn color="success" @click='submitInvestor'>Submit</v-btn>
            <v-btn color="warning" to="/adminInvestorDashboard">Cancel</v-btn>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>

export default {


data () {
  return {
        name: "",
        emailAndLogin: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        contactNumber: "",
        mobileNumber: "",
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
        state: "",
        investorStatus: [
          'Active',
          'Inactive',
        ],
        status: "",
        notesForInvestors: ""
      }
  },


  methods: {

    submitInvestor() {
       return this.$store.dispatch('addInvestors',{
        name: this.name,
        entityName: this.entityName,
        emailAndLogin: this.emailAndLogin,
        password: this.password,
        confirmPassword: this.confirmPassword,
        address: this.address,
        city: this.city,
        state: this.state,
        contactNumber: this.contactNumber,
        mobileNumber: this.mobileNumber,
        status: this.status,
        notesForInvestors: this.notesForInvestors,
        }).then(()=>{
          this.$router.push('/adminInvestorDashboard');
          alert("Your Investor Has been added");
        })
      }
    }


  }
</script>

<style scoped>

</style>
