<script lang="ts" setup>
const route = useRoute();

const router = useRouter();

const openChapter = (chapter, param = router.currentRoute.value.query.info) => {
  router.push({
    path: `${chapter}`,
    query: {
      info: param,
    },
  });
};

console.log(router.currentRoute.value.query.info);

const {
  data: chapters,
  pending,
  refresh,
} = await useAsyncData("chapters", () =>
  $fetch(
    `/api/chapter?chapter=${route.params.chapter}&info=${router.currentRoute.value.query.info}`
  )
);

</script>

<template>
  <div v-if="pending">Loading</div>
  <div v-else>
    <h1>{{ chapters?.result.data.title }}</h1>
    <div v-for="image in chapters.result.data.image" class="px-52">
      <q-img :src="image" />
    </div>
    <div>
      <!-- Tombol untuk chapter sebelumnya -->
      <q-btn
        v-if="chapters?.result.chapterBefore"
        color="primary"
        @click="openChapter(chapters.result.chapterBefore.endpoint)"
      >
        {{ chapters.result.chapterBefore.name }}
      </q-btn>

      <!-- Teks alternatif jika chapter sebelumnya tidak ada -->
      <span v-else> Tidak ada chapter sebelumnya </span>

      <!-- Tombol untuk chapter setelahnya -->
      <q-btn
        v-if="chapters?.result.chapterAfter"
        color="primary"
        @click="openChapter(chapters.result.chapterAfter.endpoint)"
      >
        {{ chapters.result.chapterAfter.name }}
      </q-btn>

      <!-- Teks alternatif jika chapter setelahnya tidak ada -->
      <span v-else> Tidak ada chapter setelahnya </span>
    </div>
  </div>
</template>

<style scoped></style>
