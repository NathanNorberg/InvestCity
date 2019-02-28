<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Welcome Back {{ investor.name }}</h1>
    </v-container>

    <v-container v-for="ent in entities"  :key="`${ent.id}`">
      <v-card>
        <v-card-title>
          <h3>{{ ent.name }} || Total Amount Invested:</h3>
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
          :items="getInvestment(ent.id)"
          :search="search"
        >
        <template slot="items" slot-scope="props">
          <tr :key="`${props.item.id}`">
            <td class="text-xs-left"><router-link :to="`/investorInvestmentDetails/${props.item.id}`">{{ props.item.name }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorInvestmentDetails/${props.item.id}`">{{ props.item.category }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorInvestmentDetails/${props.item.id}`">{{ props.item.grouping }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorInvestmentDetails/${props.item.id}`">{{ props.item.purchaseDate }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorInvestmentDetails/${props.item.id}`">{{ props.item.status }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorInvestmentDetails/${props.item.id}`">{{ props.item.soldDate }}</router-link></td>
            <td class="text-xs-left"><router-link :to="`/investorInvestmentDetails/${props.item.id}`">{{ props.item.docs }}</router-link></td>
          </tr>
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
    this.$store.dispatch('getEntities')
    this.$store.dispatch('getInvestments')
    this.$store.dispatch('getInvestmentInvestors')
    this.$store.dispatch('getInvestors')
    setTimeout(()=>{
      console.log(this.getInvestment(3))
    }, 1000);
  },
  computed: {
      entities(){
        return this.$store.getters.getEntitiesByInvestorId(parseInt(localStorage.getItem('investor_id')));
      },
      investment(){
         return this.$store.state.investments.map(investment => {return {text:investment.name, value: investment.id}})
       },
       investor(){
         return this.$store.getters.getInvestorsByInvestorId(parseInt(localStorage.getItem('investor_id')));
       },
   },

   methods: {
     getInvestment(id){
       return this.$store.getters.getInvestmentbyInvestmentInvestorEntityId(id)
     },
     getEntities(id){
       console.log('id is', id);
       if(!id){
         return [];
       }
       return this.$store.getters.getEntitiesByInvestorId(id).map(ent => {return {text:ent.name, value: ent.id}});
     }
   }
  }
</script>

<style scoped>

</style>
