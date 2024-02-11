
export default defineEventHandler(async (event) => {
  const { endpoint } = getQuery(event);

  const lists = await $fetch(
    `https://komiku-api.fly.dev/api/comic/chapter${endpoint}`
  );

  const result = lists.data

  return { result };
});
