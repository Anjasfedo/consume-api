import { PAGESIZE } from "../helpers/serverHelpers";

export default defineEventHandler(async (event) => {
  const { page } = getQuery(event);

  const lists = await $fetch(
    `https://komiku-api.fly.dev/api/comic/recommended/page/${page || 1}`
  );

  const pageSize = PAGESIZE;

  const totalPages = 20;

  return { lists, totalPages };
});
