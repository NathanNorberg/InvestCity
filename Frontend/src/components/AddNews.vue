<template>
  <v-container>
    <v-container text-xs-center>
      <h1>Create News</h1>
    </v-container>
    <v-card>
        <v-container>
          <form @submit="onSubmit">
            <v-text-field
              v-model="newsTitle"
              label='Title'
              value=''

            ></v-text-field>

            <v-flex xs8>
              <v-textarea
                v-model="newsBody"
                label="Body"
                value=''


              ></v-textarea>
            </v-flex>

            <v-btn color="success" type='submit' >Add News</v-btn>
            <v-btn color="warning" to="/manageNews">Cancel</v-btn>
          </form>
        </v-container>
    </v-card>
  </v-container>
</template>

<script>


export default {


  data (){
    return {
      newsTitle: "",
      newsBody: ""
    }
  },


  methods: {
    onSubmit() {
       return this.$store.dispatch('addAdminNews',{
        newsTitle: this.newsTitle,
        newsBody: this.newsBody,
        }).then(()=>{
        this.$Router.push('/manageNews');
        alert("Your News Has been added");
      })
    }
  }

}
</script>

<style scoped>

</style>
