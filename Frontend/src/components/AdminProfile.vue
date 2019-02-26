<template>
  <v-container>
    <v-container text-xs-center>
      <v-btn color="grey lighten-5" to="/adminDashboard">Return to Dashboard</v-btn>
      <v-btn color="teal lighten-1" to="/editAdminProfile/1">Edit Admin Information</v-btn>
    </v-container>


      <v-flex text-xs-center xs12>
        <v-card dark color="primary">
          <v-card-text  class="px-0">Admin Profile</v-card-text>
        </v-card>
      </v-flex>

      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">{{ adminSuper.name }}</v-card-text>
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
                <p class="text-xs-left"><strong>Admin Name:</strong> {{ adminSuper.name }}</p>
                <p class="text-xs-left"><strong>Email / Login:</strong> {{ adminSuper.emailAndLogin }}</p>
                <p class="text-xs-left"><strong>Password:</strong> {{ adminSuper.password }}</p>
                <p class="text-xs-left"><strong>City:</strong> {{ adminSuper.city }}</p>
                <p class="text-xs-left"><strong>State:</strong> {{ adminSuper.state }}</p>
                <p class="text-xs-left"><strong>Contact Number:</strong> {{ adminSuper.contactNumber }}</p>
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
  created () {
    this.$store.dispatch('getAdminSupers')
  },
  computed: {
      adminSuper(){
        return this.$store.getters.getAdminSupersByAdminSuperId(this.$route.params.id);
      },
    }
}
</script>

<style scoped>

</style>
