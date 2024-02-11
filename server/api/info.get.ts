
export default defineEventHandler(async (event) => {
  const { info } = getQuery(event);

  const infos = await $fetch(
    `https://komiku-api.fly.dev/api/comic/info/${info}`
  );

  const result = infos.data

  return { result };
});
