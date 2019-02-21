<template>
  <v-container>
    <v-container text-xs-center>
      <v-btn color="grey lighten-5" to="/adminDashboard">Return to Dashboard</v-btn>
      <v-btn color="teal lighten-1" to="/editAdminProfile">Edit Admin Information</v-btn>
    </v-container>

    <v-layout row wrap>

      <v-flex text-xs-center xs12>
        <v-card dark color="primary">
          <v-card-text  class="px-0">Admin Profile</v-card-text>
        </v-card>
      </v-flex>
      
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-right">Admin Name:</p>
              <p class="text-xs-right">Email / Login:</p>
              <p class="text-xs-right">Password:</p>
              <p class="text-xs-right">City:</p>
              <p class="text-xs-right">State:</p>
              <p class="text-xs-right">Contact Number:</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <v-card>
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-left"><strong>Admin Name:</strong> Pre-filled Investor Name Will Go Here</p>
              <p class="text-xs-left"><strong>Email / Login:</strong> Pre-filled Email / Login Will Go Here</p>
              <p class="text-xs-left"><strong>Password:</strong> Pre-filled Password Will Go Here</p>
              <p class="text-xs-left"><strong>City:</strong> Pre-filled City Will Go Here</p>
              <p class="text-xs-left"><strong>State:</strong> Pre-filled State Will Go Here</p>
              <p class="text-xs-left"><strong>Contact Number:</strong> Pre-filled Contact Number Will Go Here</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
