<template>
  <v-container grid-list-md text-xs-center>
    <v-btn color="grey lighten-5" to="/adminInvestmentDashboard">Return to Investment Dashboard</v-btn>
    <v-btn color="teal lighten-1" :to="`/editInvestmentDetails/${investment.id}`">Edit Investment Information</v-btn>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">{{ investment.name }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-right">Category:</p>
              <p class="text-xs-right">Grouping:</p>
              <p class="text-xs-right">Project Name:</p>
              <p class="text-xs-right">Brief Description:</p>
              <p class="text-xs-right">Purchase Price:</p>
              <p class="text-xs-right">Date Purchased:</p>
              <p class="text-xs-right">Location:</p>
              <p class="text-xs-right">City:</p>
              <p class="text-xs-right">County:</p>
              <p class="text-xs-right">State:</p>
              <p class="text-xs-right">Project Size:</p>
              <p class="text-xs-right">Status:</p>
              <p class="text-xs-right">Date Sold:</p>
              <p class="text-xs-right">Selling Price:</p>
              <p class="text-xs-right">Gross Return:</p>
              <p class="text-xs-right">Net Investor Return:</p>
              <p class="text-xs-right">Detailed Description:</p>
              <p class="text-xs-right">Notes For Investors:</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs10>
        <v-card>
          <v-card-text class="px-0">
            <v-container>
              <p class="text-xs-left">{{ investment.category }}</p>
              <p class="text-xs-left">{{ investment.grouping }}</p>
              <p class="text-xs-left">{{ investment.name }}</p>
              <p class="text-xs-left">{{ investment.briefDescription }}</p>
              <p class="text-xs-left">{{ investment.purchasePrice }}</p>
              <p class="text-xs-left">{{ investment.purchaseDate }}</p>
              <p class="text-xs-left">{{ investment.location }}</p>
              <p class="text-xs-left">{{ investment.city }}</p>
              <p class="text-xs-left">{{ investment.county }}</p>
              <p class="text-xs-left">{{ investment.state }}</p>
              <p class="text-xs-left">{{ investment.projectSize }}</p>
              <p class="text-xs-left">{{ investment.status }}</p>
              <p class="text-xs-left">{{ investment.soldDate }}</p>
              <p class="text-xs-left">{{ investment.sellingPrice }}</p>
              <p class="text-xs-left">{{ investment.grossReturn }}</p>
              <p class="text-xs-left">{{ investment.netInvestorReturn }}</p>
              <p class="text-xs-left">{{ investment.detailedDescription }}</p>
              <p class="text-xs-left">{{ investment.notesForInvestors }}</p>
              <p class="text-xs-left">{{ investment.name }}</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('getAllInvestments')
  },
  computed: {
      investments(){
        return this.$store.getters.getInvestmentByInvestmentId(this.$route.params.id);
      },
    }
}
</script>

<style scoped>

</style>
