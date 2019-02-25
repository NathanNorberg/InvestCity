<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Manage Investors</h1>
    </v-container>
    <v-card>
      <v-card-title>
        Investors
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="investors"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <tr v-for="investor in investors" :key="`${investor.id}`">
            <td><router-link :to="`/investorDetails/${investor.id}`">{{ investor.name }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorDetails/${investor.id}`">{{ investor.emailAndLogin }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorDetails/${investor.id}`"><p v-for="ent in entities" :key="`${investor.id}`">{{ ent.name }}</p></router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorDetails/${investor.id}`">{{ investor.city }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorDetails/${investor.id}`">{{ investor.state }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorDetails/${investor.id}`">{{ investor.status }}</router-link></td>
          </tr>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'Name', align: 'left', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Entities', value: 'entities' },
          { text: 'State', value: 'state' },
          { text: 'City', value: 'city' },
          { text: 'Status', value: 'status' }
        ],

      }
    },
    created () {
      this.$store.dispatch('getInvestors')
      this.$store.dispatch('getInvestorEntities')
    },
    computed: {
      investors(){
        return this.$store.state.investors;
      },
      entities(){
        return this.$store.getters.getEntitiesByInvestorId(this.$route.params.id);
      },
    }
  }
  </script>

<style scoped>

</style>
