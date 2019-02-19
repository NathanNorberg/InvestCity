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
        <v-flex class="mt-4">
          <v-avatar size="150">
            <img
              src="../assets/CNI_Logo.png"
            >
          </v-avatar>
        </v-flex>
        <v-flex>
          <v-list>
            <v-list-tile-title>
              CNI Admin
            </v-list-tile-title>
            <v-list-tile-sub-title>
              Phoenix
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
        {name: 'Manage Investments', icon: 'dashboard', route: '/adminInvestmentDashboard'},
        {name: 'Add Investment', icon: '', route: '/addInvestment'},
        {name: 'Manage Investors', icon: 'contacts', route: '/adminInvestorDashboard'},
        {name: 'Add Investor', icon: '', route: '/addInvestor'},
        {name: 'Manage News', icon: 'chat', route: '/manageNews'},
        {name: 'Add News', icon: '', route: '/addNews'},
        {name: 'Admin Settings', icon: 'settings', route: '/adminProfile'}
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
