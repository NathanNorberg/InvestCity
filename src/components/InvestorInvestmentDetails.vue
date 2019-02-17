<template>
  <v-container grid-list-md text-xs-center>
    <v-btn color="grey lighten-5" to="/investorDashboard">Return to Dashboard</v-btn>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">Investment Name</v-card-text>
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
              <p class="text-xs-right">State:</p>
              <p class="text-xs-right">County:</p>
              <p class="text-xs-right">City:</p>
              <p class="text-xs-right">Location:</p>
              <p class="text-xs-right">Project Size:</p>
              <p class="text-xs-right">Status:</p>
              <p class="text-xs-right">Date Sold:</p>
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
              <p class="text-xs-left">Pre-filled Category Information Here</p>
              <p class="text-xs-left">Pre-filled Grouping Information Here</p>
              <p class="text-xs-left">Pre-filled Project Name Here</p>
              <p class="text-xs-left">Pre-filled Brief Description Here</p>
              <p class="text-xs-left">Pre-filled Purchase Price Here</p>
              <p class="text-xs-left">Pre-filled Date Purchase Here</p>
              <p class="text-xs-left">Pre-filled State Information Here</p>
              <p class="text-xs-left">Pre-filled County Information Here</p>
              <p class="text-xs-left">Pre-filled City Information Here</p>
              <p class="text-xs-left">Pre-filled Location Information Here</p>
              <p class="text-xs-left">Pre-filled Project Size Information Here</p>
              <p class="text-xs-left">Pre-filled Status Here</p>
              <p class="text-xs-left">Pre-filled Date Sold Here</p>
              <p class="text-xs-left">Pre-filled Detailed Description Here</p>
              <p class="text-xs-left">Pre-filled Notes For Investors Here</p>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-btn color="success" to="/investorNotes/1">Add a Project Note</v-btn>


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
              <v-btn text-xs-right color="teal lighten-1" to="/editInvestorNotes/1">Edit Note</v-btn>
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
            <v-btn text-xs-right color="teal lighten-1" to="/editInvestorNotes/1">Edit Note</v-btn>
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
          <v-btn text-xs-right color="teal lighten-1" to="/editInvestorNotes/1">Edit Note</v-btn>
        </v-container>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>


  </v-container>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
