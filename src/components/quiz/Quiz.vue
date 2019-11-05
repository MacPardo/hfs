<template>
  <div>
    <h1>woohooo</h1>
    <Question
      v-bind:title="currentQuestion.title"
      v-bind:alternatives="currentQuestion.alternatives"
    />
  </div>
</template>

<script>
import questions from "./questions";
import Question from "./Question";

export default {
  components: {
    Question
  },
  name: "Quiz",
  data: () => {
    return {
      questions: questions,
      currentQuestionIndex: 0,
      finished: false
    };
  },
  computed: {
    currentQuestion: function() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  nextQuestion() {
    if (this.currentQuestionIndex === questions.length - 1) {
      this.finished = true;
    } else {
      this.currentQuestionIndex++;
    }
  }
};
</script>