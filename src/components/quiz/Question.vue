<template>
  <div class="card">
    <div class="card-body">
      <h3>{{ title }}</h3>
      <ul>
        <li v-for="(alt, index) in alternatives" v-bind:key="index">
          <button class="btn btn-link">{{ alt.text }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    title: String,
    alternatives: Array // [{text: String, correct: Bool}]
  }
};
</script>