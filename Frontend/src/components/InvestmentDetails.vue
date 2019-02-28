<template>
  <v-container>
    <v-container grid-list-md text-xs-center>
      <v-btn color="grey lighten-5" to="/adminInvestmentDashboard">Return to Investment Dashboard</v-btn>
      <v-btn color="teal lighten-1" :to="`/editInvestmentDetails/${investment.id}`">Edit Investment Information</v-btn>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="primary">
            <v-card-text class="px-0">{{ investment.name }}</v-card-text>
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
                  <p class="text-xs-left"><strong>Category:</strong> {{ investment.category }}</p>
                  <p class="text-xs-left"><strong>Grouping:</strong> {{ investment.grouping }}</p>
                  <p class="text-xs-left"><strong>Project Name:</strong> {{ investment.name }}</p>
                  <p class="text-xs-left"><strong>Brief Description:</strong> {{ investment.briefDescription }}</p>
                  <p class="text-xs-left"><strong>Purchase Price:</strong> ${{ investment.purchasePrice }}</p>
                  <p class="text-xs-left"><strong>Date Purchased:</strong> {{ investment.purchaseDate }}</p>
                  <p class="text-xs-left"><strong>Location:</strong> {{ investment.location }}</p>
                  <p class="text-xs-left"><strong>City:</strong> {{ investment.city }}</p>
                  <p class="text-xs-left"><strong>County:</strong> {{ investment.county }}</p>
                  <p class="text-xs-left"><strong>State:</strong> {{ investment.state }}</p>
                  <p class="text-xs-left"><strong>Project Size:</strong> {{ investment.projectSize }}</p>
                  <p class="text-xs-left"><strong>Status:</strong> {{ investment.status }}</p>
                  <p v-if="investment.status == 'Current'" class="text-xs-left"><strong>Date Sold:</strong> N/A</p>
                  <p v-else class="text-xs-left"><strong>Date Sold:</strong> {{ investment.soldDate }}</p>
                  <p v-if="investment.status == 'Current'" class="text-xs-left"><strong>Selling Price:</strong> N/A</p>
                  <p v-else class="text-xs-left"><strong>Selling Price:</strong> ${{ investment.sellingPrice }}</p>
                  <p v-if="investment.status == 'Current'" class="text-xs-left"><strong>Gross Return:</strong> N/A</p>
                  <p v-else class="text-xs-left"><strong>Gross Return:</strong> ${{ investment.grossReturn }}</p>
                  <p v-if="investment.status == 'Current'" class="text-xs-left"><strong>Net Investor Return:</strong> N/A</p>
                  <p v-else class="text-xs-left"><strong>Net Investor Return:</strong> ${{ investment.netInvestorReturn }}</p>
                  <p class="text-xs-left"><strong>Detailed Description:</strong> {{ investment.detailedDescription }}</p>
                  <p class="text-xs-left"><strong>Notes For Investors:</strong> {{ investment.notesForInvestors }}</p>
                  <p class="text-xs-left"><strong>Full Report Notes:</strong> {{ investment.fullReportNotes }}</p>
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-flex text-xs-center xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">{{ investment.name }} Investors</v-card-text>
        </v-card>
      </v-flex>
      <v-container fluid grid-list-md>
        <v-layout v-for="investmentInvestor in investmentInvestors"  :key="`${investmentInvestor.id}`" row wrap>
        <v-flex d-flex xs1>
          <v-card dark color="secondary">
            <v-card-text class="px-0">
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex  d-flex xs11>
          <v-card>
            <v-card-text class="px-0">
              <v-container>
                <p class="text-xs-left"><strong>Investor Name:</strong> {{ getInvestor(investmentInvestor.investor_id).name }}</p>
                <p class="text-xs-left"><strong>Entity Name:</strong> {{ getEntity(investmentInvestor.investorEntity_id).name }}</p>
                <p class="text-xs-left"><strong>Amount Invested:</strong> ${{ investmentInvestor.capitalInvested }}</p>
                <v-btn color="error" @click="deleteInvestmentInvestor(investmentInvestor.id)" >Remove Investor</v-btn>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
  <v-container>
    <v-flex xs12 sm4 d-flex>
      <v-select
        label="Investor"
        v-model="investor"
        value=''
        outline
        :items="investors">
      </v-select>
    </v-flex>
    <v-flex xs12 sm4 d-flex>
      <v-select
        label="Investor Entity"
        value=''
        v-model="investorEntity"
        outline
        :items="getEntities(investor)">
      </v-select>
    </v-flex>
    <v-flex xs12 sm4 d-flex>
      <v-text-field
        v-model="capitalInvested"
        label="Amount Invested"
        value=''>
      </v-text-field>
    </v-flex>
    <v-btn color="success" @click='submitInvestor'>Add Investor</v-btn>
  </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      investor: '',
      investorEntity: '',
      capitalInvested: ''
    }
  },


  created () {
    this.$store.dispatch('getInvestments')
    this.$store.dispatch('getInvestmentInvestors')
    this.$store.dispatch('getInvestors')
    this.$store.dispatch('getEntities')
  },
  computed: {
      investment(){
        return this.$store.getters.getInvestmentByInvestmentId(this.$route.params.id);
      },
      investmentInvestors(){
        return this.$store.getters.getInvestmentInvestorsByInvestmentId(this.$route.params.id)
      },
      investors(){
         return this.$store.state.investors.map(investor => {return {text:investor.name, value: investor.id}})
       },
       investInvestors(){
         return this.$store.state.investmentInvestors;
       }
    },
    methods: {
      submitInvestor() {
         return this.$store.dispatch('addInvestmentInvestor',{
          investment_id: this.$route.params.id,
          investor_id: this.investor,
          investorEntity_id: this.investorEntity,
          capitalInvested: this.capitalInvested,
        }).then(()=>{
          alert("Your Investor Has been added");
        window.location.reload() //re render page
      })
    },
    getInvestor(id){
      return this.$store.getters.getInvestorsByInvestorId(id)
    },
    getEntity(id){
      return this.$store.getters.getEntitiesByEntityId(id)
    },

    deleteInvestmentInvestor (id) {
      return this.$store.dispatch('deleteInvestmentInvestor', {
        id: id //Change to be the id of the investmentInvestor
      }).then(() =>{
        alert("Your Investor Has Been Deleted");
        window.location.reload()
    })
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
