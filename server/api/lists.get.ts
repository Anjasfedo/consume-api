import { getDataByPage, getTotalPage } from "../helpers/serverHelpers";

export default defineEventHandler(async (event) => {

  const { page } = getQuery(event);

  const lists = await $fetch("https://komiku-api.fly.dev/api/comic/list");

  const pageSize = 10;

  const result = getDataByPage(lists.data, page, pageSize);

  const totalPages = getTotalPage(lists.data, pageSize)

  return { result, totalPages };
});
