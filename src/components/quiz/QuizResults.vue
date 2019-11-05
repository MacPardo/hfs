<template>
  <div>
    <p>Você acertou {{ correctCount }} de {{ questionCount }} </p>
    <ul>
      <li v-for="(answer, index) in answers" :key="index">{{ answer }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuizResults",
  props: {
    answers: Array
  },
  computed: {
    questionCount: function() {
      return this.answers.length;
    },
    correctCount: function() {
      return this.answers.filter(a => a).length;
    }
  }
};
</script>
