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
                </v-container>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    <v-btn color="success" to="/addProjectNote/1">Add a Project Note</v-btn>


    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">Your Notes</v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs2>
        <v-card dark color="secondary">
          <v-card-text class="px-0">
            <v-container>
              <p>Note 1</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs10>
        <v-card>
          <v-card-text class="px-0">
            <v-container>
              <p>Pre filled with exisiting notes that have been added previously by the investor at a time before this moment that have been accumulated</p>
              <v-btn text-xs-right color="teal lighten-1" to="/editProjectNote/1">Edit Note</v-btn>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
    <v-flex xs2>
      <v-card dark color="secondary">
        <v-card-text class="px-0">
          <v-container>
            <p>Note 2</p>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs10>
      <v-card>
        <v-card-text class="px-0">
          <v-container>
            <p>Pre filled with exisiting notes that have been added previously by the investor at a time before this moment that have been accumulated</p>
            <v-btn text-xs-right color="teal lighten-1" to="/editProjectNote/1">Edit Note</v-btn>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>

  <v-layout>
  <v-flex xs2>
    <v-card dark color="secondary">
      <v-card-text class="px-0">
        <v-container>
          <p>Note 3</p>
        </v-container>
      </v-card-text>
    </v-card>
  </v-flex>

  <v-flex xs10>
    <v-card>
      <v-card-text class="px-0">
        <v-container>
          <p>Pre filled with exisiting notes that have been added previously by the investor at a time before this moment that have been accumulated</p>
          <v-btn text-xs-right color="teal lighten-1" to="/editProjectNote/1">Edit Note</v-btn>
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
    this.$store.dispatch('getInvestments')
  },

  computed: {
      investment(){
        return this.$store.getters.getInvestmentByInvestmentId(this.$route.params.id);
      },
    },

  methods: {
    getInvestor(id){
      return this.$store.getters.getInvestorsByInvestorId(id)
    },
  }


}
</script>

<style scoped>

</style>
