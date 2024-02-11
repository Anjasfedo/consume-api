export default defineEventHandler(async (event) => {
  const { endpoint } = getQuery(event);

  const chapters = await $fetch(
    `https://komiku-api.fly.dev/api/comic/chapter${endpoint}`
  );

  const result = chapters.data

  return { result };
});
