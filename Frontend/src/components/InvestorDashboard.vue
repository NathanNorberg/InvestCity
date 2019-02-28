<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Welcome Back {{ investors.name }}</h1>
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
      }
    },


  created () {
    this.$store.dispatch('getEntities')
    this.$store.dispatch('getInvestments')
    this.$store.dispatch('getInvestmentInvestors')
    this.$store.dispatch('getInvestors')
  },
  computed: {
      entities(){
        return this.$store.getters.getEntitiesByInvestorId(1);
      },
      investment(){
         return this.$store.state.investments.map(investment => {return {text:investment.name, value: investment.id}})
       },
      investors(){
       return this.$store.state.investors;
     },
   },

   methods: {
     getInvestment(id){

     }
   }
  }
</script>

<style scoped>

</style>
