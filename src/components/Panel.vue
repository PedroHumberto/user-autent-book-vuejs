<template>
  <div>
      <span>
          Loged Panel with {{ $store.state.user.name  }}
      </span>
      <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
    name: 'my-panel',
    methods: {
        logout(){
            this.$store.dispatch('loginUser', {id: 0, name: '', email: ''})
            this.$router.replace('/')
        }
    },

}
</script>

<style>

</style>