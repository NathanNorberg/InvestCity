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
              label="Email / Login"
            ></v-text-field>

            <v-text-field
              v-model="investors.password"
              label="Password"
            ></v-text-field>

            <v-text-field
              v-model="investors.confirmPassword"
              label="Confirm Password"
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
              v-model="investors.address"
              label="Address"
              value=""
              hint="Address"
              ></v-textarea>

              <v-text-field
                v-model="investors.city"
                v-validate="'required|city'"
                label="City"
              ></v-text-field>


                <v-select
                v-model="investors.state"
                :items="states"
                label="State"
                ></v-select>
              </v-flex>

              <v-text-field
                v-model="investors.contactNumber"
                label="Contact Number"
              ></v-text-field>

              <v-text-field
                v-model="investors.mobileNumber"
                label="Mobile Number"
              ></v-text-field>


            <v-btn color="success" @click="updateInvestor">Update</v-btn>
            <v-btn color="warning" :to="`/investorProfile/${investors.id}`">Cancel</v-btn>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data(){
    return{
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
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  created(){
    this.$store.dispatch('getInvestors')
  },

  methods: {
    updateInvestor(e) {
      e.preventDefault()
      return this.$store.dispatch('editInvestor',{
        id: this.$route.params.id,
        emailAndLogin: this.investors.emailAndLogin,
        password: this.investors.password,
        state: this.investors.state,
        city: this.investors.city,
        contactNumber: this.investors.contactNumber,
        mobileNumber: this.investors.mobileNumber,
      }).then(()=>{
        alert("Your Investor Has Been Updated");
        this.$router.push('/investorProfile/'+this.$route.params.id);
    })
  },
},

computed: {
  investors(){
    return this.$store.state.investors.length ? this.$store.state.investors.filter(investor => investor.id == this.$route.params.id)[0] : {};
  }
}
}
</script>

<style scoped>

</style>
