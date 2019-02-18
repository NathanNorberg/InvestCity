<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Create New Investment Project</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form>

            <v-select
              v-model="investment.category"
              v-validate="'required'"
              :items="investment.category"
              :error-messages="errors.collect('categories')"
              label="Category"
              data-vv-name="categories"
              required
            ></v-select>

            <v-select
              v-model="investment.grouping"
              v-validate="'required'"
              :items="investment.grouping"
              :error-messages="errors.collect('grouping')"
              label="Grouping"
              data-vv-name="grouping"
              required
            ></v-select>

            <v-text-field
            v-model="investment.name"
            v-validate="'required|max:50'"
            :counter="50"
            :error-messages="errors.collect('name')"
            label="Project Name"
            data-vv-name="name"
            required
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="investment.briefDescription"
                label="Brief Description"
                value=""
                hint="Brief Description"
                v-validate="'required'"
                data-vv-name="briefDescription"
                required
              ></v-textarea>
              </v-flex>

              <v-text-field
                v-model="investment.purchasePrice"
                v-validate="'required|purchasePrice'"
                :error-messages="errors.collect('purchasePrice')"
                label="Purchase Price (In US Dollars)"
                data-vv-name="purchasePrice"
                required
              ></v-text-field>

              <v-flex xs12 sm6 md4>
                <v-menu
                  ref="purchaseMenu"
                  v-model="investment.purchaseMenu"
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
                    v-model="investment.purchaseDate"
                    label="Date Purchased"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="investment.purchaseDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="purchaseMenu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.purchaseMenu.save(purchaseDate)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-flex xs8>
                <v-textarea
                v-model="investment.location"
                label="Location"
                value=""
                hint="Location"
                v-validate="'required'"
                data-vv-name="location"
                required
                ></v-textarea>
              </v-flex>

              <v-text-field
                v-model="investment.city"
                v-validate="'required|city'"
                :error-messages="errors.collect('city')"
                label="City"
                data-vv-name="city"
                required
              ></v-text-field>


              <v-text-field
              v-model="investment.county"
              v-validate="'required|county'"
              :error-messages="errors.collect('county')"
              label="County"
              data-vv-name="county"
              required
              ></v-text-field>

              <v-select
              v-model="investment.state"
              v-validate="'required'"
              :items="investment.states"
              :error-messages="errors.collect('state')"
              label="State"
              data-vv-name="state"
              required
              ></v-select>
              <v-text-field
                v-model="investment.projectSize"
                v-validate="'required|projectSize'"
                :error-messages="errors.collect('projectSize')"
                label="Project Size"
                data-vv-name="projectSize"
                required
              ></v-text-field>

              <v-text-field
                v-model="investment.sellingPrice"
                v-validate="'required|sellingPrice'"
                :error-messages="errors.collect('sellingPrice')"
                label="Selling Price (In US Dollars)"
                data-vv-name="sellingPrice"
                required
              ></v-text-field>

              <v-select
                v-model="investment.status"
                v-validate="'required'"
                :items="investment.status"
                :error-messages="errors.collect('status')"
                label="Status"
                data-vv-name="status"
                required
              ></v-select>
              <v-flex xs12 sm6 md4>
                <v-menu
                  ref="soldMenu"
                  v-model="investment.soldMenu"
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
                    v-model="investment.soldDate"
                    label="Date Sold"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="investment.soldDate" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="soldMenu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.soldMenu.save(soldDate)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>

              <v-text-field
                v-model="investment.grossReturn"
                v-validate="'required|grossReturn'"
                :error-messages="errors.collect('grossReturn')"
                label="Gross Return (In US Dollars)"
                data-vv-name="grossReturn"
                required
              ></v-text-field>

              <v-text-field
                v-model="investment.netInvestorReturn"
                v-validate="'required|netInvestorReturn'"
                :error-messages="errors.collect('netInvestorReturn')"
                label="Net Investor Return (In US Dollars)"
                data-vv-name="netInvestorReturn"
                required
              ></v-text-field>

              <v-flex xs8>
                <v-textarea
                  v-model="investment.detailedDescription"
                  label="Detailed Description"
                  value=""
                  hint="Detailed Description"
                  v-validate="'required'"
                  data-vv-name="detailedDescription"
                  required
                ></v-textarea>
              </v-flex>

              <v-flex xs8>
                <v-textarea
                  v-model="investment.notesForInvestors"
                  label="Notes For Investors"
                  value=""
                  hint="Notes For Investors"
                  v-validate="'required'"
                  data-vv-name="notesForInvestors"
                  required
                ></v-textarea>
              </v-flex>

              <v-checkbox
                v-model="investment.checkbox"
                v-validate="'required'"
                :error-messages="errors.collect('checkbox')"
                value="1"
                label="New Project Form Complete?"
                data-vv-name="checkbox"
                type="checkbox"
                required
              ></v-checkbox>

            <v-btn color="success" v-on:click.prevent="post">Add Investment</v-btn>
            <v-btn color="warning" to="/adminInvestmentDashboard">Cancel</v-btn>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data() {
    return{
      investment:{
        category: [
          'Undeveloped Land',
          'Finished Lots',
          'Income Producing Property',
          'Commercial Property',
          'Industrial Property',
          'Improved Land',
          'Mixed Use',
        ],
        grouping: [
          'Bridge Loan',
          'Land/Asset Purchase',
          'Other'
        ],
        name: '',
        briefDescription: '',
        select: null,
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
        county: '',
        city: '',
        location: '',
        projectSize: '',
        status: [
          'Current',
          'Sold',
        ],
        soldDate: new Date().toISOString().substr(0, 10),
        soldMenu: false,
        soldModal: false,
        soldMenu2: false,
        detailedDescription: '',
        notesForInvestors: '',
        checkbox: null,
        dictionary: {
          attributes: {
            // custom attributes
          },
          custom: {
            name: {
              required: () => 'Name can not be empty',
              max: 'The name field may not be greater than 50 characters'
              // custom messages
            },
            state: {
              required: 'Select field is required'
            },
            Category: {
              required: 'Select field is required'
            }
          }
        }
      }
    }
  },

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    post: function(){
      this.$validator.validateAll()
      this.$http.post('http://jsonplaceholder.typicode.com/posts',{
        category: this.investment.category,
        grouping: this.investment.grouping,
        name: this.investment.name,
        briefDescription: this.investment.briefDescription,
        purchasePrice: this.investment.purchasePrice,
        purchaseDate: this.investment.purchaseDate,
        state: this.investment.state,
        county: this.investment.county,
        city: this.investment.city,
        location: this.investment.location,
        projectSize: this.investment.projectSize,
        status: this.investment.status,
        soldDate: this.investment.soldDate,
        detailedDescription: this.investment.detailedDescription,
        notesForInvestors: this.investment.notesForInvestors,
      }).then(function(data){
        console.log(data);
      })
    },
  }
}
</script>

<style scoped>

</style>
