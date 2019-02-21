<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Welcome Back Investor</h1>
    </v-container>
    <v-container>
      <v-card>
        <v-card-title>
          <h3>Entity Name || Total Amount Invested:</h3>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="entity1"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="investments"
          :search="entity1"
        >
        <template to="/investmentDetails/1" slot="items" slot-scope="props">
          <td><router-link to="/investmentDetails/1">{{ props.item.name }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorInvestmentDetails/:id">{{ props.item.category }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorInvestmentDetails/:id">{{ props.item.grouping }}</router-link></td>
          <td class="text-xs-left">{{ props.item.acquisitionDate }}</td>
          <td class="text-xs-left">{{ props.item.status }}</td>
          <td class="text-xs-left">{{ props.item.soldDate }}</td>
          <td class="text-xs-left"><router-link to="/investorInvestmentDetails/:id">{{ props.item.docs }}</router-link></td>
        </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <v-card-title>
          <h3>Entity Name || Total Amount Invested:</h3>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="entity2"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="investments"
          :search="entity2"
        >
        <template to="/investmentDetails/1" slot="items" slot-scope="props">
          <td><router-link to="/investmentDetails/1">{{ props.item.name }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorInvestmentDetails/:id">{{ props.item.category }}</router-link></td>
          <td class="text-xs-left"><router-link to="/investorInvestmentDetails/:id">{{ props.item.grouping }}</router-link></td>
          <td class="text-xs-left">{{ props.item.acquisitionDate }}</td>
          <td class="text-xs-left">{{ props.item.status }}</td>
          <td class="text-xs-left">{{ props.item.soldDate }}</td>
          <td class="text-xs-left"><router-link to="/investorInvestmentDetails/:id">{{ props.item.docs }}</router-link></td>
        </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-container>

  </v-container>
</template>

<script>
export default {
    data () {
      return {
        entity1: '',
        entity2: '',
        headers: [
          { text: 'Name', align: 'left', value: 'name' },
          { text: 'Category', value: 'category' },
          { text: 'Grouping', value: 'grouping' },
          { text: 'Acquisition Date', value: 'acquisitionDate' },
          { text: 'Status', value: 'status' },
          { text: 'Sold Date', value: 'soldDate' },
          { text: 'Docs', value: 'docs' },
        ],
        investments: [
          {
            name: 'Frozen Yogurt',
            category: 'Undeveloped Land',
            grouping: 'Bridge Loan',
            acquisitionDate: 'date',
            status: 'Current',
            soldDate: 'Current',
            docs: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            category: 'Mixed Use',
            grouping: 'M & I',
            acquisitionDate: 'date',
            status: 'Sold',
            soldDate: 'Current',
            docs: 4.0,
          },
          {
            name: 'Eclair',
            category: 'Finished Lots',
            grouping: '',
            acquisitionDate: 'date',
            status: 'Current',
            soldDate: 'Current',
            docs: 4.0,
          },
          {
            name: 'Cupcake',
            category: 'Commercial Property',
            grouping: 'Note Purchase',
            acquisitionDate: 'date',
            status: 'Current',
            soldDate: 'Current',
            docs: 4.0,
          },
          {
            name: 'Gingerbread',
            category: 'Improved Land',
            grouping: 'Bridge Loan Syndication',
            acquisitionDate: 'date',
            status: 'Sold',
            soldDate: 'date',
            docs: 4.0,
          },
          {
            name: 'Jelly bean',
            category: 'Finished Lots',
            grouping: '',
            acquisitionDate: 'date',
            status: 'Sold',
            soldDate: 'date',
            docs: 4.0,
          },
          {
            name: 'Lollipop',
            category: 'Industial Property',
            grouping: 'Bridge Loan',
            acquisitionDate: 'date',
            status: 'Sold',
            soldDate: 'date',
            docs: 4.0,
          },
          {
            name: 'Honeycomb',
            category: 'Finished Lots',
            grouping: 'M & I',
            acquisitionDate: 'date',
            status: 'Current',
            soldDate: 'Current',
            docs: 4.0,
          },
          {
            name: 'Donut',
            category: 'Improved Lots',
            grouping: '',
            acquisitionDate: 'date',
            status: 'Sold',
            soldDate: 'date',
            docs: 4.0,
          },
          {
            name: 'KitKat',
            category: 'Undeveloped Land',
            grouping: 'Texas',
            acquisitionDate: 'date',
            status: 'Current',
            soldDate: 'Current',
            docs: 4.0,
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
