<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Edit News</h1>
    </v-container>
    <v-card>
      <v-flex>
        <v-container>
          <form >
            <v-text-field
            v-model="investorInvestments.newsTitle"
            label="News Title"
            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="investorInvestments.newsBody"
                label="Body"
                hint="Body"
                value=''
              ></v-textarea>
            </v-flex>


            <v-btn color="success" @click="updateInvestmentInvestor">Update Investor</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
            <v-container text-xs-right>
              <v-btn color="error" @click="deleteInvestmentInvestor" >Delete Investor</v-btn>
            </v-container>
          </form>
        </v-container>
      </v-flex>
    </v-card>
  </v-container>
</template>

<script>

export default {

  data (){
    return{
      newsTitle: "",
      newsBody: ""
    }
  },


  created(){
    this.$store.dispatch('getAdminNews')
  },

  methods: {
    updateInvestmentInvestor(e) {
      e.preventDefault()
      return this.$store.dispatch('editAdminNews',{
        id: this.$route.params.id,
        newsTitle: this.adminNews.newsTitle,
        newsBody: this.adminNews.newsBody,
        }).then(()=>{
          alert("Your News Has Been Updated");
          this.$router.push('/manageNews');
      })
    },
    deleteInvestmentInvestor (e) {
      e.preventDefault()
      return this.$store.dispatch('deleteAdminNews', {
        id: this.$route.params.id
      }).then(() =>{
        alert("Your News Has Been Deleted");
        this.$router.push('/manageNews');
    })
  }
},
  computed: {
    investmentInvestors(){
      return this.$store.state.investmentInvestors.length ? this.$store.state.investmentInvestors.filter(investInvestor => investInvestor.id == this.$route.params.id)[0] : {};
    }
  },


}
</script>

<style scoped>

</style>
