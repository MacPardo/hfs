<template>
  <div>
    <h1>woohooo</h1>
    <Question
      :title="currentQuestion.title"
      :alternatives="currentQuestion.alternatives"
      :onComplete="onComplete"
      :key="currentQuestionIndex"
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
  methods: {
    nextQuestion: function() {
      if (this.currentQuestionIndex === questions.length - 1) {
        this.finished = true;
      } else {
        this.currentQuestionIndex++;
      }
    },
    onComplete: function(result) {
      // eslint-disable-next-line
      console.log("completedddd", result);
      this.nextQuestion();
    }
  }
};
</script>