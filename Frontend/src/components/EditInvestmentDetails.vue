<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Update Project Name</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <v-select
            v-model="investments.category"
            :items="categories"
            label="Category"
            value=''
          ></v-select>

          <v-select
            v-model="investments.grouping"
            :items="groupings"
            label="Grouping"
            value=''
          ></v-select>

          <v-text-field
            v-model="investments.name"
            label="Project Name"
            value=''
          ></v-text-field>

          <v-flex xs8>
            <v-textarea
              v-model="investments.briefDescription"
              label="Brief Description"
              value=""
              hint="Brief Description"
            ></v-textarea>
            </v-flex>

            <v-text-field
              v-model="investments.purchasePrice"
              label="Purchase Price (In US Dollars)"
              value=''
            ></v-text-field>

            <v-flex xs12 sm6 md4>
              <v-menu
                ref="purchaseMenu"
                v-model="investments.purchaseMenu"
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
                  v-model="investments.purchaseDate"
                  label="Date Purchased"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="investments.purchaseDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="purchaseMenu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.purchaseMenu.save(purchaseDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>

            <v-flex xs8>
              <v-textarea
              v-model="investments.location"
              label="Location"
              value=""
              hint="Location"
              ></v-textarea>
            </v-flex>

            <v-text-field
              v-model="investments.city"
              label="City"
              value=''
            ></v-text-field>


            <v-text-field
            v-model="investments.county"
            label="County"
            value=''
            ></v-text-field>



            <v-select
            v-model="investments.state"
            :items="states"
            label="State"
            value=''
            ></v-select>

            <v-text-field
              v-model="investments.projectSize"
              label="Project Size"
              value=''
            ></v-text-field>

            <v-text-field
              v-model="investments.sellingPrice"
              value=''
              label="Selling Price (In US Dollars)"
            ></v-text-field>

            <v-select
              v-model="investments.status"
              :items="statuses"
              label="Status"
              value=''
            ></v-select>
            <v-flex xs12 sm6 md4>
              <v-menu
                ref="soldMenu"
                v-model="investments.soldMenu"
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
                  v-model="investments.soldDate"
                  label="Date Sold"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="investments.soldDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="soldMenu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.soldMenu.save(soldDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>

            <v-text-field
              v-model="investments.grossReturn"
              label="Gross Return (In US Dollars)"
              value=''
            ></v-text-field>

            <v-text-field
              v-model="investments.netInvestorReturn"
              label="Net Investor Return (In US Dollars)"
              value=''
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="investments.detailedDescription"
                label="Detailed Description"
                value=""
                hint="Detailed Description"
              ></v-textarea>
            </v-flex>

            <v-flex xs8>
              <v-textarea
                v-model="investments.notesForInvestors"
                label="Notes For Investors"
                value=""
                hint="Notes For Investors"
              ></v-textarea>
            </v-flex>


            <v-btn color="success" @click="updateInvestment">Update</v-btn>
            <v-btn color="warning" :to="`/investmentDetails/${investments.id}`">Cancel</v-btn>
            <v-container text-xs-right>
              <v-btn color="error" @click="deleteInvestment">Delete Investment Project</v-btn>
            </v-container>
        </v-container>
      </v-flex>
    </v-card>

  </v-container>
</template>

<script>

export default {

data() {
  return{
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
      grouping: '',
      category: '',
      briefDescription: '',
      grossReturn: '',
      netInvestorReturn: '',
      purchasePrice: '',
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
      county: '',
      city: '',
      state: '',
      location: '',
      projectSize: '',
      sellingPrice: '',
      status: '',
      statuses: [
        'Current',
        'Sold',
      ],
      soldDate: new Date().toISOString().substr(0, 10),
      soldMenu: false,
      soldModal: false,
      soldMenu2: false,
      detailedDescription: '',
      notesForInvestors: '',
  }
},


created(){
  this.$store.dispatch('getInvestments')
},

methods: {
  updateInvestment(e) {
    e.preventDefault()
    return this.$store.dispatch('editInvestment',{
      id: this.$route.params.id,
      category: this.investments.category,
      grouping: this.investments.grouping,
      name: this.investments.name,
      briefDescription: this.investments.briefDescription,
      purchasePrice: this.investments.purchasePrice,
      sellingPrice: this.investments.sellingPrice,
      grossReturn: this.investments.grossReturn,
      netInvestorReturn: this.investments.netInvestorReturn,
      purchaseDate: this.investments.purchaseDate,
      state: this.investments.state,
      county: this.investments.county,
      city: this.investments.city,
      location: this.investments.location,
      projectSize: this.investments.projectSize,
      status: this.investments.status,
      soldDate: this.investments.soldDate,
      detailedDescription: this.investments.detailedDescription,
      notesForInvestors:this.investments.notesForInvestors
      }).then(()=>{
        alert("Your Investment Has Been Updated");
        this.$router.push('/adminInvestmentDashboard');
    })
  },
  deleteInvestment (e) {
    e.preventDefault()
    return this.$store.dispatch('deleteInvestment', {
      id: this.$route.params.id
    }).then(() =>{
      alert("Your Investment Has Been Deleted");
      this.$router.push('/adminInvestmentDashboard');
    })
    }
  },
  computed: {
    investments(){
      return this.$store.state.investments.length ? this.$store.state.investments.filter(investment => investment.id == this.$route.params.id)[0] : {};
    }
  },

}
</script>

<style scoped>

</style>
