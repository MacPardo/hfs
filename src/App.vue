<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>testing</h1>
    <Question v-bind:title="testtitle" v-bind:alternatives="alternatives"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Question from './components/quiz/Question.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Question
  },
  data: () => {
    return {
      alternatives: [{text: 'wohooo'}],
      testtitle: 'lalala'
    }
  }
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
