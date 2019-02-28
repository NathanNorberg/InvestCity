<template>
  <v-container grid-list-md text-xs-center>
    <v-container>
      <v-btn color="grey lighten-5" to="/investorDashboard">Return to Investor Dashboard</v-btn>
      <v-btn color="teal lighten-1" :to="/investorProfile/"+localStorage.getItem('investor_id')>Back to Profile</v-btn>
    </v-container>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">{{ entity.name }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-container fluid grid-list-md>
      <v-layout row wrap>
      <v-flex d-flex xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs11>
        <v-card>
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-left"><strong>Entity Name:</strong> {{ entity.name }}</p>
              <p class="text-xs-left"><strong>Address:</strong> {{ entity.address }}</p>
              <p class="text-xs-left"><strong>City:</strong> {{ entity.city }}</p>
              <p class="text-xs-left"><strong>Contact Number:</strong> {{ entity.contactNumber }}</p>
              <p class="text-xs-left"><strong>Mobile Number:</strong> {{ entity.mobileNumber }}</p>
              <p class="text-xs-left"><strong>Investor Notes:</strong> {{ entity.entityNotes }}</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>


  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getEntities')
  },
  computed: {
      entity(){
        return this.$store.getters.getEntitiesByEntityId(this.$route.params.id);
      }
    }
}
</script>

<style scoped>

</style>
