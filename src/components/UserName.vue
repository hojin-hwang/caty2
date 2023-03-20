<script setup>
    import { defineProps, ref } from 'vue';
    const props = defineProps(['name', 'age']);
    const age = ref(props.age);

    const addAge = () => {age.value++};
</script>

<template>
    <article>
        <h1>Hi Nice Meet You</h1>
        <span>His Name is {{ props.name}}</span>
        <span> His age is {{ age }}</span>
        <button @click="addAge()">add Age</button>
    </article>
</template>

<style scoped>
article{display: flex; flex-direction: column;align-items: center;}
button{width:100px;}
</style>