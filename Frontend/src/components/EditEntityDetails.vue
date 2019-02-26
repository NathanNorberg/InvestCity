<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Update Entity Information For {{ entities.name }}</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
            <v-text-field
              v-model="entities.name"
              label='Entity Name'
              value=''
              ></v-text-field>

              <v-flex xs8>
                <v-textarea
                v-model="entities.entityNotes"
                label="Entity Notes"
                value=''
                ></v-textarea>
              </v-flex>

            <v-flex xs8>
              <v-textarea
              v-model="entities.address"
              label="Address"
              hint="Address"
              value=''
              ></v-textarea>
            </v-flex>

              <v-text-field
                v-model="entities.city"
                label="City"
                value=''
              ></v-text-field>

              <v-select
              v-model="entities.state"
              :items="states"
              label="State"
              value=''
              ></v-select>

              <v-text-field
                v-model="entities.contactNumber"
                label="Contact Number"
                value=''
              ></v-text-field>

              <v-text-field
                v-model="entities.mobileNumber"
                label="Mobile Number"
                value=''
              ></v-text-field>


            <v-btn color="success" @click="updateEntity" >Update Entity</v-btn>
            <v-btn color="warning" :to="`/entityDetails/${entities.id}`">Cancel</v-btn>
            <v-container text-xs-right>
              <v-btn color="error" @click="deleteEntity" >Delete Entity</v-btn>
            </v-container>

        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>


export default {


  data (){
    return {
      name: "",
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
      entityNotes: ""
    }
  },

  created(){
    this.$store.dispatch('getEntities')
  },

  methods: {
    updateEntity(e) {
      e.preventDefault()
      return this.$store.dispatch('editInvestorEntity',{
        id: this.$route.params.id,
        name: this.entities.name,
        address: this.entities.address,
        city: this.entities.city,
        state: this.entities.state,
        contactNumber: this.entities.contactNumber,
        mobileNumber: this.entities.mobileNumber,
        entityNotes: this.entities.entityNotes,
      }).then(()=>{
        alert("Your Entity Has Been Updated");
        this.$router.push('/adminInvestorDashboard');
    })
  },

  deleteEntity(e) {
    e.preventDefault()
    return this.$store.dispatch('deleteInvestorEntity', {
      id: this.$route.params.id
    }).then(() =>{
      alert("Your Entity Has Been Deleted");
      this.$router.push('/adminInvestorDashboard');
  })
},

  },


  computed: {
    entities(){
      return this.$store.state.entities.length ? this.$store.state.entities.filter(entity => entity.id == this.$route.params.id)[0] : {};
    }
  },


}
</script>

<style scoped>

</style>
