<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Update Investor Name Information</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
            <v-text-field
            v-model="investors.name"
            label="Investor Name"
            value=''
            ></v-text-field>
            <v-text-field
              v-model="investors.emailAndLogin"
              label="Email / Login"
              value=''
            ></v-text-field>
            <v-text-field
              v-model="investors.password"
              label="Password"
              value=''
            ></v-text-field>
            <v-text-field
              v-model="investors.confirmPassword"
              label="Confirm Password"
              value=''
            ></v-text-field>
            <v-flex xs8>
              <v-textarea
              v-model="investors.address"
              label="Address"
              hint="Address"
              value=''
              ></v-textarea>
              <v-text-field
              v-model="investors.city"
              label="City"
              value=''
              ></v-text-field>
            <v-select
              v-model="investors.state"
              :items="states"
              label="State"
              value=''
              ></v-select>
              </v-flex>
              <v-text-field
                v-model="investors.contactNumber"
                label="Contact Number"
                value=''
              ></v-text-field>

              <v-text-field
                v-model="investors.mobileNumber"
                label="Mobile Number"
                value=''
              ></v-text-field>

              <v-flex xs8>
                <v-textarea
                  v-model="investors.notesForInvestors"
                  label="Investor Notes (Internal Use Only):"
                  hint="Investor Notes (Internal Use Only):"
                  value=''
                ></v-textarea>
              </v-flex>


            <v-btn color="success" @click="updateInvestor">Update</v-btn>
            <v-btn color="warning" :to="`/investorDetails/${investors.id}`" >Cancel</v-btn>
            <v-container text-xs-right>
              <v-btn color='error' @click="deleteThisInvestor" >Delete Investor</v-btn>
            </v-container>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>

export default {

  data(){
    return{
        name: '',
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
        city: '',
        address: '',
        contactNumber: '',
        mobileNumber: '',
        status: [
          'Active',
          'Inactive',
        ],
        notesForInvestors: '',
    }
  },

  created(){
    this.$store.dispatch('getInvestors')
  },

  methods: {
    updateInvestor(e) {
      e.preventDefault()
      return this.$store.dispatch('editInvestor',{
        id: this.$route.params.id,
        name: this.investors.name,
        entityName: this.investors.entityName,
        emailAndLogin: this.investors.emailAndLogin,
        password: this.investors.password,
        confirmPassword: this.investors.confirmPassword,
        states: this.investors.states,
        city: this.investors.city,
        contactNumber: this.investors.contactNumber,
        mobileNumber: this.investors.mobileNumber,
        status: this.investors.status,
        notesForInvestors: this.investors.notesForInvestors,
      }).then(()=>{
        alert("Your Investor Has Been Updated");
        this.$router.push('/investorDetails/'+this.$route.params.id);
    })
  },

    deleteThisInvestor (e) {
      e.preventDefault()
      return this.$store.dispatch('deleteInvestor', {
        id: this.$route.params.id
      }).then(() =>{
        alert("Your Investor Has Been Deleted");
        this.$router.push('/adminInvestorDashboard');
    })
  }

  },

  computed: {
    investors(){
      return this.$store.state.investors.length ? this.$store.state.investors.filter(investor => investor.id == this.$route.params.id)[0] : {};
    }
  },
}
</script>

<style scoped>

</style>
