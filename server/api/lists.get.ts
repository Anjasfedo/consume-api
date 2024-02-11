import { getDataByPage, getTotalPage } from "../helpers/serverHelpers";

export default defineEventHandler(async (event) => {
  const { page, filter } = getQuery(event);

  // https://komiku-api.fly.dev/api/comic/list
  // https://komiku-api.fly.dev/api/comic/list?filter=manga
  // https://komiku-api.fly.dev/api/comic/list?filter=manhwa
  // https://komiku-api.fly.dev/api/comic/list?filter=manhua

  const lists = await $fetch(
    `https://komiku-api.fly.dev/api/comic/list?filter=${filter}`
  );

  const pageSize = 10;

  const result = getDataByPage(lists.data, page, pageSize);

  const totalPages = getTotalPage(lists.data, pageSize);

  return { result, totalPages };
});
