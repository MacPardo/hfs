<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Quiz/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Quiz from './components/quiz/Quiz.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Quiz
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
