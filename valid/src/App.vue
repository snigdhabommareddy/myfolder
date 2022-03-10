<template>
  <div id="app">
    <Validation />
  </div>
</template>

<script>
import Validation from './components/Validation.vue'

export default {
  name: 'App',
  components: {
    Validation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
