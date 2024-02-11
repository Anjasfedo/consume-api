<script lang="ts" setup>
const currentPage = ref(1);

const { data: lists, pending } = await useLazyAsyncData(
  "lists",
  () => $fetch(`/api/lists?page=${currentPage.value}`)
);
</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else>
    <div class="flex">
      <q-card
        v-for="data in lists?.result"
        class="my-card p-1 bg-slate-800 m-4"
      >
        <q-img :src="data.image"> </q-img>
        <q-btn flat class="font-semibold w-full"
          ><NuxtLink :to="data.endpoint">{{ data.title }}</NuxtLink></q-btn
        >
      </q-card>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="currentPage"
        :max="lists?.totalPages"
        boundary-numbers
        :max-pages="6"
        direction-links
      />
    </div>
  </div>
</template>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
  height: 100%;
}
</style>
