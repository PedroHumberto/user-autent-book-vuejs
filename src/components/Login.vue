<template>
  <div>
      <h2>LogIn</h2>
      <router-link to="/register">Register</router-link>
      <hr>

      <my-input title="Email">
          <input type="email" v-model="user.email">
      </my-input>
      <my-input title="Password">
          <input type="password" v-model="user.password">
      </my-input>
      <br>
      <input @click="login" type="submit" :value="state" :disabled="state != 'Enter'">
  </div>
</template>

<script>
import User from '../services/user'
export default {
    name:'my-login',
    data() {
        return {
            state: 'Enter',
            user: {email: '', password: ''}
        }
    },
    methods: {
        login(){
            this.state = 'Loading...'
            User.login( this.user ).then(res => {
                if(res.data.success){
                    this.$store.dispatch('loginUser', res.data.user)
                    this.$router.replace('/notes')
                }else{
                    this.state = 'Enter'
                }
            }).catch(e => {
                    console.log(e)
                    this.state = 'Enter'
                    
                })
        }
    },

}
</script>

<style>

</style>