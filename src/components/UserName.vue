<script setup>
    import { defineProps } from 'vue';
    const name = defineProps(['name']);
</script>

<template>
<h1>Hi Nice Meet You</h1>
<span>His Name is {{name}}</span>
</template>

<style>

</style>