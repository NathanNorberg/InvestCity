<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Manage Investments</h1>
    </v-container>
    <v-card>
      <v-card-title>
        Investments
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
        :items="investments"
        :search="search"
      >
      <div v-for="investment in investments" :key="`${investment.id}`">
        <template  slot="items" slot-scope="props">
          <td><router-link :to="`/investmentDetails/${investment.id}`">{{ investment.name }}</router-link></td>
          <td class="text-xs-left"><router-link :to="`/investmentDetails/${investment.id}`">{{ investment.category }}</router-link></td>
          <td class="text-xs-left"><router-link :to="`/investmentDetails/${investment.id}`">{{ investment.grouping }}</router-link></td>
          <td class="text-xs-left">{{ investment.acquisitionDate }}</td>
          <td class="text-xs-left">{{ investment.status }}</td>
          <td class="text-xs-left">{{ investment.soldDate }}</td>
          <td class="text-xs-left"><router-link :to="`/investmentDetails/${investment.id}`">{{ investment.docs }}</router-link></td>
        </template>
      </div>
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
          { text: 'Category', value: 'category' },
          { text: 'Grouping', value: 'grouping' },
          { text: 'Acquisition Date', value: 'acquisitionDate' },
          { text: 'Status', value: 'status' },
          { text: 'Sold Date', value: 'soldDate' },
          { text: 'Docs', value: 'docs' },
        ]
      }
    },
      created () {
        this.$store.dispatch('getAllInvestments')
      },
      computed: {
        investments(){
          return this.$store.state.investments;
        }
      }
  }
</script>

<style scoped>

</style>
