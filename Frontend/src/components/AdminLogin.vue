<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Admin Login</v-toolbar-title>
          </v-toolbar>
          <v-form @submit.prevent="login">
            <v-card-text>
              <v-text-field
                label="User Name"
              ></v-text-field>
              <v-text-field
                label="Password"
                type="password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type='login' color="success" >Login</v-btn>
              <!-- <v-btn color="success" @click="login">Login</v-btn> -->
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
     data(){
       return{
          name: "",
          password: ""
       }
     },
     methods: {
      login () {
      axios.post('http://localhost:8000/adminLogin', {
      name: this.name,
      password: this.password
      })
      .then(res => {
        this.$store.state.isLoggedIn = true;
        this.$store.state.admin = {
          'token': res.data.token, 'admin_id': res.config.data, 'name': res.data.name
        }
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('admin_id', res.data.admin.id);
        localStorage.setItem('name', res.data.admin.name);
        this.$router.push('/adminDashboard')
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
  });
      }
    }
  }
</script>
