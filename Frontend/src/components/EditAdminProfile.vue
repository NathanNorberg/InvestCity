<template>
  <v-container>

    <v-container text-xs-center>
      <h1>Update Your Information</h1>
    </v-container>

    <v-card>
      <v-flex>
        <v-container>

            <v-text-field
              v-model="adminSupers.name"
              label="Name"
            ></v-text-field>

            <v-text-field
              v-model="adminSupers.emailAndLogin"
              label="Email / Login"
            ></v-text-field>

            <v-text-field
              v-model="adminSupers.password"
              label="Password"
            ></v-text-field>

              <v-text-field
                v-model="adminSupers.city"
                label="City"
              ></v-text-field>


                <v-select
                v-model="adminSupers.state"
                :items="states"
                label="State"
                ></v-select>

              <v-text-field
                v-model="adminSupers.contactNumber"
                label="Contact Number"
              ></v-text-field>



              <v-btn color="success" @click="updateProfile">Update Profile</v-btn>
              <v-btn color="warning" to="/adminDashboard">Cancel</v-btn>
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

  data(){
    return{
        name: '',
        emailAndLogin: '',
        password: '',
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
        state: '',
        contactNumber: '',
    }
  },

 created(){
   this.$store.dispatch('getAdminSupers')
 },

 methods: {
   updateProfile(e) {
     e.preventDefault()
     return this.$store.dispatch('editAdminNews',{
       id: this.$route.params.id,
       name: this.adminSupers.name,
       emailAndLogin: this.adminSupers.emailAndLogin,
       password: this.adminSupers.password,
       city: this.adminSupers.city,
       state: this.adminSupers.state,
       contactNumber: this.adminSupers.contactNumber,
       }).then(()=>{
         alert("Your Profile Has Been Updated");
         this.$router.push('/adminDashboard');
     })
   },
},


 computed: {
   adminSupers(){
     return this.$store.state.adminSupers.length ? this.$store.state.adminSupers.filter(adminSuper => adminSuper.id == this.$route.params.id)[0] : {};
   }
 },

}
</script>

<style scoped>

</style>
