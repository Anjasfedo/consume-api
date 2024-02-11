
export default defineEventHandler(async (event) => {
  const { endpoint } = getQuery(event);

  const infos = await $fetch(
    `https://komiku-api.fly.dev/api/comic/info/${endpoint}`
  );

  const result = infos.data

  return { result };
});
