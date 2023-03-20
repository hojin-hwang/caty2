<script setup>
    import { defineProps, ref } from 'vue';
    const name = defineProps(['name']);
    const age = ref(10)
</script>

<template>
    <article>
        <h1>Hi Nice Meet You</h1>
        <span>His Name is {{name}}</span>
        <span> His age is {{ age }}</span>
    </article>
</template>

<style scoped>
article{display: flex; flex-direction: column;}
</style>