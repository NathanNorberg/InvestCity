<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Add New Entity For {{ investor.name }}</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
            <v-text-field
              v-model="name"
              label='Entity Name'
              value=''

            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="entityNotes"
                label="Entity Notes"
                value=''


              ></v-textarea>
            </v-flex>

            <v-btn color="success" @click='addEntity' >Add Entity</v-btn>
            <v-btn color="warning" :to="`/investorDetails/${investor.id}`">Cancel</v-btn>
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
      entityNotes: ""
    }
  },
  created () {
    this.$store.dispatch('getInvestors')
  },
  computed: {
      investor(){
        return this.$store.getters.getInvestorsByInvestorId(this.$route.params.id);
      },
    },

  methods: {
    addEntity() {
       return this.$store.dispatch('addInvestorEntity',{
        investor_id: 1,
        name: this.name,
        entityNotes: this.entityNotes,
        }).then(()=>{
        this.$router.push("/adminInvestorDashboard");
        alert("Your Entity Has been added");
      })
    }
  }

}
</script>

<style scoped>

</style>
