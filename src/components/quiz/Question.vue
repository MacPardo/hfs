<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ title }}</h3>
      <ul class="list-group">
        <li v-for="(alt, index) in alternatives" v-bind:key="index" class="list-group-item">
          <button
            :class="`btn ${btnClass(index)}`"
            v-on:click="chooseAlternative(index)"
          >{{ alt.text }}</button>
        </li>
      </ul>
      <button class="btn btn-outline-secondary" :disabled="!choiceMade" v-on:click="complete()">Próxima Pergunta</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data: function() {
    return {
      choiceMade: false,
      correctAnswer: false,
      answer: 0
    };
  },
  props: {
    title: String,
    alternatives: Array, // [{text: String, correct: Bool}]
    onComplete: Function
  },
  methods: {
    chooseAlternative: function(index) {
      if (this.choiceMade) return;
      this.correctAnswer = this.alternatives[index].correct;
      this.choiceMade = true;
      this.answer = index;
    },
    btnClass: function(index) {
      if (this.choiceMade && this.alternatives[index].correct) {
        return "btn-success";
      } else if (this.choiceMade && this.answer === index) {
        return "btn-danger";
      } else if (this.choiceMade) {
        return "btn-link";
      } else {
        return "btn-outline-primary";
      }
    },
    complete: function() {
      if (!this.choiceMade) return;
      this.onComplete(this.correctAnswer);
    }
  }
};
</script>