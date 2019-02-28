<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Create New Investment Project</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>


            <v-select
              v-model="category"
              :items="categories"
              label="Category"
              value=''
            ></v-select>

            <v-select
              v-model="grouping"
              :items="groupings"
              label="Grouping"
              value=''
            ></v-select>

            <v-text-field
              v-model="name"
              label="Project Name"
              value=''
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="briefDescription"
                label="Brief Description"
                value=""
                hint="Brief Description"
              ></v-textarea>
              </v-flex>

              <v-text-field
                v-model="purchasePrice"
                label="Purchase Price (In US Dollars)"
                value=''
              ></v-text-field>

              <v-flex xs12 sm6 md4>
                <v-menu
                  ref="purchaseMenu"
                  v-model="purchaseMenu"
                  value=''
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="purchaseDate"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="purchaseDate"
                    label="Date Purchased"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="purchaseDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="purchaseMenu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.purchaseMenu.save(purchaseDate)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex xs8>
                <v-textarea
                v-model="location"
                label="Location"
                value=""
                hint="Location"
                ></v-textarea>
              </v-flex>

              <v-text-field
                v-model="city"
                label="City"
                value=''
              ></v-text-field>


              <v-text-field
              v-model="county"
              label="County"
              value=''
              ></v-text-field>



              <v-select
              v-model="state"
              :items="states"
              label="State"
              value=''
              ></v-select>

              <v-text-field
                v-model="projectSize"
                label="Project Size"
                value=''
              ></v-text-field>

              <v-text-field
                v-model="sellingPrice"
                value=''
                label="Selling Price (In US Dollars)"
              ></v-text-field>

              <v-select
                v-model="status"
                :items="statuses"
                label="Status"
                value=''
              ></v-select>
              <v-flex xs12 sm6 md4>
                <v-menu
                  ref="soldMenu"
                  v-model="soldMenu"
                  value=''
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="soldDate"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="soldDate"
                    label="Date Sold"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="soldDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="soldMenu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.soldMenu.save(soldDate)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-text-field
                v-model="grossReturn"
                label="Gross Return (In US Dollars)"
                value=''
              ></v-text-field>

              <v-text-field
                v-model="netInvestorReturn"
                label="Net Investor Return (In US Dollars)"
                value=''
              ></v-text-field>

              <v-flex xs8>
                <v-textarea
                  v-model="detailedDescription"
                  label="Detailed Description"
                  value=""
                  hint="Detailed Description"
                ></v-textarea>
              </v-flex>

              <v-flex xs8>
                <v-textarea
                  v-model="notesForInvestors"
                  label="Notes For Investors"
                  value=""
                  hint="Notes For Investors"
                ></v-textarea>
              </v-flex>

              <v-flex xs8>
                <v-textarea
                  v-model="fullReportNotes"
                  label="Full Report Notes"
                  value=""
                  hint="Full Report Notes"
                ></v-textarea>
                </v-flex>

            <v-btn color="success" @click='submitInvestment'>Add Investment</v-btn>
            <v-btn color="warning" to="/adminInvestmentDashboard">Cancel</v-btn>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>


export default {


  data (){
    return {

        categories: [
          'Undeveloped Land',
          'Finished Lots',
          'Income Producing Property',
          'Commercial Property',
          'Industrial Property',
          'Improved Land',
          'Mixed Use',
        ],
        groupings: [
          'Bridge Loan',
          'Land/Asset Purchase',
          'Other'
        ],
        name: '',
        category: '',
        grouping: '',
        briefDescription: '',
        purchasePrice: '',
        sellingPrice: '',
        grossReturn: '',
        netInvestorReturn: '',
        purchaseDate: new Date().toISOString().substr(0, 10),
        purchaseMenu: false,
        purchaseModal: false,
        purchaseMenu2: false,
        states: [
          'Alabama',
          'Alaska',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'Florida',
          'Georgia',
          'Hawaii',
          'Idaho',
          'Illinois',
          'Indiana',
          'Iowa',
          'Kansas',
          'Kentucky',
          'Luisiana',
          'Maine',
          'Maryland',
          'Massachusetts',
          'Michigan',
          'Minnesota',
          'Mississippi',
          'Missouri',
          'Montana',
          'Nebraska',
          'Nevada',
          'New Hampshire',
          'New Jersey',
          'New Mexico',
          'New York',
          'North Carolina',
          'North Dakota',
          'Ohio',
          'Oklahoma',
          'Oregon',
          'Pennsylvania',
          'Rhode Island',
          'South Carolina',
          'South Dakota',
          'Tennessee',
          'Texas',
          'Utah',
          'Vermont',
          'Virginia',
          'Washington',
          'West Virginia',
          'Wisconsin',
          'Wyoming',
        ],
        statuses: [
          'Current',
          'Sold',
        ],
        state: '',
        county: '',
        city: '',
        location: '',
        status: '',
        projectSize: '',
        detailedDescription: '',
        fullReportNotes: '',
        notesForInvestors: '',
        soldDate: new Date().toISOString().substr(0, 10),
        soldMenu: false,
        soldModal: false,
        soldMenu2: false,

    }
  },


  methods: {
    submitInvestment() {
       return this.$store.dispatch('addInvestment',{
        category: this.category,
        grouping: this.grouping,
        name: this.name,
        briefDescription: this.briefDescription,
        purchasePrice: this.purchasePrice,
        sellingPrice: this.sellingPrice,
        grossReturn: this.grossReturn,
        netInvestorReturn: this.netInvestorReturn,
        purchaseDate: this.purchaseDate,
        state: this.state,
        county: this.county,
        city: this.city,
        location: this.location,
        projectSize: this.projectSize,
        status: this.status,
        soldDate: this.soldDate,
        detailedDescription: this.detailedDescription,
        notesForInvestors:this.notesForInvestors,
        fullReportNotes: this.fullReportNotes
      }).then(()=>{
      this.$router.push('/adminInvestmentDashboard');
      alert("Your Investment Has been added");
    })
  },

  
  }

}
</script>

<style scoped>

</style>
