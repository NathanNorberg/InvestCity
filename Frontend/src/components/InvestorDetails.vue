<template>
  <v-container grid-list-md text-xs-center>
    <v-container>
      <v-btn color="grey lighten-5" to="/adminInvestorDashboard">Return to Investor Dashboard</v-btn>
      <v-btn color="teal lighten-1" to="/editInvestorDetails/1">Edit Investor Information</v-btn>
    </v-container>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">{{ investor.name }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-right">Investor Name:</p>
              <p class="text-xs-right">Entity Name:</p>
              <p class="text-xs-right">Email / Login:</p>
              <p class="text-xs-right">Password:</p>
              <p class="text-xs-right">Address:</p>
              <p class="text-xs-right">City:</p>
              <p class="text-xs-right">State:</p>
              <p class="text-xs-right">Contact Number:</p>
              <p class="text-xs-right">Mobile Number:</p>
              <p class="text-xs-right">Investor Notes: (Internal Use Only)</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <v-card>
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-left"><strong>Investor Name:</strong>{{ investor.name }}</p>
              <p class="text-xs-left"><strong>Entity Name:</strong>{{ investor.entity }}</p>
              <p class="text-xs-left"><strong>Email / Login:</strong>{{ investor.emailAndLogin }}</p>
              <p class="text-xs-left"><strong>Password:</strong>{{ investor.password }}</p>
              <p class="text-xs-left"><strong>Address:</strong>{{ investor.address }}</p>
              <p class="text-xs-left"><strong>City:</strong>{{ investor.city }}</p>
              <p class="text-xs-left"><strong>State:</strong>{{ investor.state }}</p>
              <p class="text-xs-left"><strong>Contact Number:</strong>{{ investor.contactNumber }}</p>
              <p class="text-xs-left"><strong>Mobile Number:</strong>{{ investor.mobileNumber }}</p>
              <p class="text-xs-left"><strong>Investor Notes:</strong>{{ investor.investorNotes }}</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">Investments That {{ investor.name }} is Involved</v-card-text>
          </v-card>
        </v-flex>

        <h1>Copy Investor Dashboard Here</h1>

      </v-layout>


  </v-container>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getAllInvestors')
  },
  computed: {
      investors(){
        return this.$store.getters.getInvestorByInvestorId(this.$route.params.id);
      },
    }
}
</script>

<style scoped>

</style>
