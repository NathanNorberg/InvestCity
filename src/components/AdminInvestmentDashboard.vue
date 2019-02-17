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
        <template to="/investmentDetails/1" slot="items" slot-scope="props">
          <td><router-link to="/investmentDetails/1">{{ props.item.name }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investmentDetails/1">{{ props.item.category }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investmentDetails/1">{{ props.item.grouping }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investmentDetails/1">{{ props.item.status }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investmentDetails/1">{{ props.item.docs }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investmentDetails/1">{{ props.item.notes }}</router-link></td>
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
          { text: 'Category', value: 'category' },
          { text: 'Grouping', value: 'grouping' },
          { text: 'Status', value: 'status' },
          { text: 'Docs', value: 'docs' },
          { text: 'Notes', value: 'notes' }
        ],
        investments: [
          {
            name: 'Frozen Yogurt',
            category: 'Undeveloped Land',
            grouping: 'Bridge Loan',
            status: 'Current',
            docs: 4.0,
            notes: '1%'
          },
          {
            name: 'Ice cream sandwich',
            category: 'Mixed Use',
            grouping: 'M & I',
            status: 'Sold',
            docs: 4.3,
            notes: '1%'
          },
          {
            name: 'Eclair',
            category: 'Finished Lots',
            grouping: '',
            status: 'Current',
            docs: 6.0,
            notes: '7%'
          },
          {
            name: 'Cupcake',
            category: 'Commercial Property',
            grouping: 'Note Purchase',
            status: 'Current',
            docs: 4.3,
            notes: '8%'
          },
          {
            name: 'Gingerbread',
            category: 'Improved Land',
            grouping: 'Bridge Loan Syndication',
            status: 'Sold',
            docs: 3.9,
            notes: '16%'
          },
          {
            name: 'Jelly bean',
            category: 'Finished Lots',
            grouping: '',
            status: 'Sold',
            docs: 0.0,
            notes: '0%'
          },
          {
            name: 'Lollipop',
            category: 'Industial Property',
            grouping: 'Bridge Loan',
            status: 'Current',
            docs: 0,
            notes: '2%'
          },
          {
            name: 'Honeycomb',
            category: 'Finished Lots',
            grouping: 'M & I',
            status: 'Current',
            docs: 6.5,
            notes: '45%'
          },
          {
            name: 'Donut',
            category: 'Improved Lots',
            grouping: '',
            status: 'Sold',
            docs: 4.9,
            notes: '22%'
          },
          {
            name: 'KitKat',
            category: 'Undeveloped Land',
            grouping: 'Texas',
            status: 'Current',
            docs: 7,
            notes: '6%'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
