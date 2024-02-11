import {
  getDataByPage,
  getTotalPage,
  PAGESIZE,
} from "../helpers/serverHelpers";

export default defineEventHandler(async (event) => {
  const { page, filter } = getQuery(event);

  // https://komiku-api.fly.dev/api/comic/list
  // https://komiku-api.fly.dev/api/comic/list?filter=manga
  // https://komiku-api.fly.dev/api/comic/list?filter=manhwa
  // https://komiku-api.fly.dev/api/comic/list?filter=manhua

  const lists: any = await $fetch(
    `https://komiku-api.fly.dev/api/comic/list?filter=${filter}`
  );

  const pageSize = PAGESIZE;

  const totalPages = getTotalPage(lists.data, pageSize);

  const result = getDataByPage(lists.data, page || 1, pageSize);

  return { result, totalPages };
});
