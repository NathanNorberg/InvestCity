<template>
  <nav>
    <v-toolbar dark color="primary" app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>CNI</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-navigation-drawer
      app
      v-model="drawer"
      color="primary"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="250">
            <!-- TODO: make avatar component dynamic from auth user -->
            <img
              src="http://www.placepuppy.net/400/400"
            >
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-list>
            <v-list-tile-title>
              Name Here
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Admin
            </v-list-tile-sub-title>
          </v-list>
        </v-flex>
      </v-layout>
      <v-spacer></v-spacer>
      <v-divider></v-divider>
      <v-list>
        <!-- Link 1 -->
        <v-list-tile v-for="link in links" :key="`nav-${link.name}`" router :to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ link.name }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      mini: true,
      links: [
        {name: 'Home', icon: 'home', route: '/adminDashboard'},
        {name: 'View News', icon: 'chat', route: '/viewNews'},
        {name: 'Add News', icon: '', route: '/addNews'},
        {name: 'Manage Investments', icon: 'dashboard', route: '/adminInvestmentDashboard'},
        {name: 'Add Investment', icon: '', route: '/addInvestment'},
        {name: 'Manage Investors', icon: 'contacts', route: '/adminInvestorDashboard'},
        {name: 'Add Investor', icon: '', route: '/addInvestor'},
        {name: 'Profile Settings', icon: 'settings', route: '/'}
      ],
    }
  },
  computed: {
    auth() {
      return this.$store.state.users.byId[1]
    }
  }
}
</script>
