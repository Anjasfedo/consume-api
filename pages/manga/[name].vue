<script lang="ts" setup>
const route = useRoute()

console.log(route.params.name);

const { data: lists, pending, refresh } = await useAsyncData(
  "lists",
  () => $fetch(`/api/info?endpoint=manga/${route.params.name}`)
);

</script>

<template>
  <div v-if="pending">Loading</div>

<div v-else>{{ lists }}</div>
<button @click="refresh">refresh</button>
</template>

<style scoped>
</style>
