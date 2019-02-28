<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>Admin Login</v-toolbar-title>
          </v-toolbar>
          <v-form >
            <v-card-text>
              <v-text-field
                v-model='emailAndLogin'
                label="Email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn  to="/" color="grey lighten-5" >Investor</v-btn>
              <v-btn @click="adminLogin" color="success" >Login</v-btn>
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
import jwt from 'jsonwebtoken'
  export default {
     data(){
       return{
          emailAndLogin: "",
          password: ""
       }
     },
     methods: {
       adminLogin () {
        console.log(this.emailAndLogin, this.password)
        axios.post('http://localhost:8000/adminLogin', {
        emailAndLogin: this.emailAndLogin,
        password: this.password
        })
        .then(res => {
          console.log(res)
          res.data = JSON.parse(res.data);
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('admin_id', res.data.admin.id)
          localStorage.setItem('adminName', res.data.admin.name)
          console.log('this is the res', res)
          console.log('you logged in')
          this.$store.state.isLoggedIn = true;
          this.$store.state.auth = {
            admin: jwt.decode(localStorage.getItem('token'))
          }
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
