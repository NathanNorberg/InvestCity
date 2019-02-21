<template>
  <v-container>
    <v-container text-xs-center>
      <v-btn color="grey lighten-5" to="/adminDashboard">Return to Dashboard</v-btn>
      <v-btn color="teal lighten-1" :to="`/editAdminProfile/${admin.id}`">Edit Admin Information</v-btn>
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
              <p class="text-xs-left"><strong>Admin Name:</strong>{{ admin.name }}</p>
              <p class="text-xs-left"><strong>Email / Login:</strong>{{ admin.emailAndLogin }}</p>
              <p class="text-xs-left"><strong>Password:</strong>{{ admin.password }}</p>
              <p class="text-xs-left"><strong>City:</strong>{{ admin.city }}</p>
              <p class="text-xs-left"><strong>State:</strong>{{ admin.state }}</p>
              <p class="text-xs-left"><strong>Contact Number:</strong>{{ admin.contactNumber }}</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getAllAdminSuper')
  },
}
</script>

<style scoped>

</style>
