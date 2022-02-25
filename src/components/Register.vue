<template>
    <div>
        <h2>Register in the sistem</h2>
        <hr>
        <my-input title="Name">
            <input type="text" v-model="user.name">
        </my-input>
        <my-input title="Email">
            <input type="email" v-model="user.email">
        </my-input>
        <my-input title="Password">
            <input type="password" v-model="user.password">
        </my-input>

        <br>
        <input 
        @click="register" 
        type="submit" 
        :value="state" 
        :disabled="state !='Register'">
        

        
    </div>
</template>

<script>
import User from '../services/user'

export default {
    name: 'my-register',
    data () {
        return {
            state: 'Register',
            user: {name: '', email: '', password: '' }
        }
    },
    methods: {
        register() {
            this.state = 'Loading...'
            User.register( this. user ).then(res => {
                if(res.data.success){
                    alert('Successs Registration!')
                    this.$router.replace('/')
                }
                else{
                    this.state = 'Register'
                }
            }).catch( e => console.log(e))
        }
    },
}
</script>

<style>

</style>