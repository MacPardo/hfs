<template>
    <div>
        <h3>{{ title }}</h3>
        <ul>
            <li v-for="(alt, index) in alternatives" v-bind:key="index">
                {{ alt.text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Question',
    props: {
        title: String,
        alternatives: Array // [{text: String, correct: Bool}]
    }
}
</script>