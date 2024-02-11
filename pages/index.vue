<script lang="ts" setup>
const current = ref(1);

const { data: lists } = useAsyncData("lists", () =>
  $fetch("/api/lists")
);

</script>

<template>
  <div>{{ lists }}</div>
  <div class="q-pa-lg flex flex-center">
    <q-pagination v-model="current" :max="5" />
  </div>
</template>

<style scoped></style>
