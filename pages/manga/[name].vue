<script lang="ts" setup>
const route = useRoute();

const {
  data: infos,
  pending,
  refresh,
} = await useAsyncData("infos", () =>
  $fetch(`/api/info?endpoint=manga/${route.params.name}`)
);
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else>
    <h1 class="text-h3">{{ infos.result.title }}</h1>
    <q-img
      :src="infos.result.thumbnail"
      style="max-width: 300px; min-height: 150px"
    />
    <h1>Author: {{ infos.result.author }}</h1>
    <h1>rating: {{ infos.result.rating }}</h1>
    <h1>Status: {{ infos.result.status }}</h1>
    <h1>Tipe: {{ infos.result.type }}</h1>
    <div class="flex gap-5">
        <h1>Genre:</h1>
        <h1 v-for="genre in infos.result.genre">{{ genre }}</h1>
    </div>

    <h1>Chapter</h1>
    <div class="flex gap-4 grow flex-wrap">
      <q-btn v-for="chapter in infos.result.chapter_list">
        <NuxtLink  :to="chapter.endpoint">{{ chapter.name }}</NuxtLink>
      </q-btn>
    </div>
  </div>
</template>

<style scoped></style>
