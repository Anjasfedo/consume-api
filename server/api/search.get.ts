import {
  getDataByPage,
  getTotalPage,
  ListT,
  PAGESIZE,
} from "../helpers/serverHelpers";

export default defineEventHandler(async (event) => {
  try {
    const { name } = getQuery(event);

    const encodedName = encodeURIComponent(name);

    const searchs = await $fetch(
      `https://komiku-api.fly.dev/api/comic/search/${encodedName}`
    );

    const result = searchs.data;

    return { result };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { error: "Comic not found" };
    } else {
      return { error };
    }
  }
});
