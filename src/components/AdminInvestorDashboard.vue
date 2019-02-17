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
        :items="desserts"
        :search="search"
      >
        <template slot="items" slot-scope="props">
          <td><router-link to="/investorDetails/1">{{ props.item.name }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorDetails/1">{{ props.item.email }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorDetails/1">{{ props.item.entities }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorDetails/1">{{ props.item.state }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorDetails/1">{{ props.item.city }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorDetails/1">{{ props.item.status }}</router-link></td>
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
        desserts: [
          {
            name: 'Justin Beiber',
            email: 'justin@gmail.com',
            entities: 'Beliebers',
            state: 'Florida',
            city: 'Orlando',
            status: 'Active'
          },
          {
            name: 'Nathan Norberg',
            email: 'nathan@gmail.com',
            entities: 'Nugman',
            state: 'Arizona',
            city: 'Mesa',
            status: 'Active'
          },
          {
            name: 'Lucas Romero',
            email: 'lucas@gmail.com',
            entities: 'FIT',
            state: 'California',
            city: 'Coronado',
            status: 'Active'
          },
          {
            name: 'Lionel Messi',
            email: 'lionel@gmail.com',
            entities: 'FCB',
            state: 'New Mexico',
            city: 'Albuquerque',
            status: 'Active'
          },
          {
            name: 'Cristiano Ronaldo',
            email: 'cristiano@gmail.com',
            entities: 'AbCity',
            state: 'New York',
            city: 'Manhattan',
            status: 'Inactive'
          },
          {
            name: 'LeBron James',
            email: 'lebron@gmail.com',
            entities: 'KingStudios',
            state: 'Ohio',
            city: 'Cleveland',
            status: 'Active'
          },
          {
            name: 'Stephen Curry',
            email: 'stephen@gmail.com',
            entities: 'DDDraino',
            state: 'California',
            city: 'San Francisco',
            status: 'Inactive'
          },
          {
            name: 'Thomas Brady',
            email: 'thomas@gmail.com',
            entities: 'RingCity',
            state: 'Massachusetts',
            city: 'Boston',
            status: 'Inactive'
          },
          {
            name: 'Marshall Mathers',
            email: 'marshall@gmail.com',
            entities: 'MMM',
            state: 'Michigan',
            city: 'Detroit',
            status: 'Active'
          },
          {
            name: 'Kimberly Kardashian',
            email: 'kimberly@gmail.com',
            entities: "PlasticCity",
            state: 'Utah',
            city: 'Salt Lake City',
            status: 'Active'
          },
          {
            name: 'Kylie Jenner',
            email: 'kylie@gmail.com',
            entities: 'MoMoney',
            state: 'Oregon',
            city: 'Portland',
            status: 'Active'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
