export default defineEventHandler( async (event) => {

  const repo = await $fetch('https://komiku-api.fly.dev/api/comic/list')

  return repo
})
