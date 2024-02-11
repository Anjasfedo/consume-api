<script lang="ts" setup>
const route = useRoute();

console.log(route.params.chapter);

const {
  data: chapters,
  pending,
  refresh,
} = await useAsyncData("chapters", () =>
  $fetch(`/api/chapter?endpoint=/ch/${route.params.chapter}`)
);
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else>
    <h1>{{ chapters.result.title }}</h1>
    <div v-for="image in chapters.result.image" class="px-52">
      <q-img :src="image" />
    </div>
  </div>
</template>

<style scoped></style>
