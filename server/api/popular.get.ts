import { PAGESIZE } from "../helpers/serverHelpers";

export default defineEventHandler(async (event) => {
  const { page } = getQuery(event);

  const lists = await $fetch(
    `https://komiku-api.fly.dev/api/comic/popular/page/${page || 1}`
  );

  const pageSize = PAGESIZE;

  const totalPages = 8;

  const result = lists.data

  return { result, totalPages };
});
