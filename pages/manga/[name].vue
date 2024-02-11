<script lang="ts" setup>
const route = useRoute()

const { data: lists, pending } = await useAsyncData(
  "lists",
  () => $fetch(`api/info?page=${$route.params.name}`)
);

</script>

<template>
{{ $route.params.name }}
</template>

<style scoped>
</style>
