export default defineEventHandler(async (event) => {
  const { chapter, info } = getQuery(event);

  // const cleanUrl = event.node.req.url.replace("/api/chapter?chapter=", "");

  // console.log(event.node.req);

  const chapters = await $fetch(
    `https://komiku-api.fly.dev/api/comic/chapter/ch/${chapter}`
  );

  const infos = await $fetch(
    `https://komiku-api.fly.dev/api/comic/info/manga/${info}/`
  );

  const selectedEndpoint = `/ch/${chapter}/`;

  const selectedIndex = infos.data.chapter_list.findIndex(
    (item) => item.endpoint === selectedEndpoint
  );

  const chapterAfter =
    selectedIndex > 0 ? infos.data.chapter_list[selectedIndex - 1] : null;

  const chapterBefore =
    selectedIndex < infos.data.chapter_list.length - 1
      ? infos.data.chapter_list[selectedIndex + 1]
      : null;

  const result = { data: chapters.data, chapterAfter, chapterBefore };

  return { result };
});
