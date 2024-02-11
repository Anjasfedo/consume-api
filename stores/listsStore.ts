export const useListsStore = defineStore("lists", () => {
  const currentPage = ref(null);
  // const name = ref("Eduardo");
  const currentPageValue = computed(() => currentPage.value);
  function increment() {
    currentPage.value++;
  }

  return { currentPage, increment, currentPageValue };
});
