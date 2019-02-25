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
                  <p class="text-xs-left"><strong>Date Sold:</strong> {{ investment.soldDate }}</p>
                  <p class="text-xs-left"><strong>Selling Price:</strong> ${{ investment.sellingPrice }}</p>
                  <p class="text-xs-left"><strong>Gross Return:</strong> ${{ investment.grossReturn }}</p>
                  <p class="text-xs-left"><strong>Net Investor Return:</strong> ${{ investment.netInvestorReturn }}</p>
                  <p class="text-xs-left"><strong>Detailed Description:</strong> {{ investment.detailedDescription }}</p>
                  <p class="text-xs-left"><strong>Notes For Investors:</strong> {{ investment.notesForInvestors }}</p>
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
                <p class="text-xs-left"><strong>Investor Name:</strong></p>
                <p class="text-xs-left"><strong>Entity Name:</strong></p>
                <p class="text-xs-left"><strong>Amount Invested: $</strong></p>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
  <v-container>
    <v-flex xs12 sm4 d-flex>
      <v-select label="Investor" v-model="investor" value='' outline :items="intestors"></v-select>
    </v-flex>
    <v-flex xs12 sm4 d-flex>
      <v-select label="Investor Entity" value='' v-model="investorEntity" outline :items="intestors"></v-select>
    </v-flex>
    <v-flex xs12 sm4 d-flex>
      <v-text-field v-model="investmentAmount" label="Amount Invested" value=''></v-text-field>
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
      investmentAmount: ''
    }
  },


  created () {
    this.$store.dispatch('getInvestments')
    this.$store.dispatch('getInvestmentInvestors')
    this.$store.dispatch('getInvestors')
    this.$store.dispatch('getInvestorEntities')
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
    },
    methods: {
      submitInvestor() {
         return this.$store.dispatch('addInvestorEntity',{
          investment_id: this.investment_id,
          investor_id: this.investor_id,
          investorEntity_id: this.investorEntity_id,
          capitalInvested: this.capitalInvested,
        }).then(()=>{
        this.$router.push('/adminInvestmentDashboard');
        alert("Your Investor Has been added");
      })
      }
    }
}
</script>

<style scoped>

</style>
