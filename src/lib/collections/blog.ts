import { getCollection } from "astro:content";

async function getAll() {
  return await getCollection("blog");
}

async function latest(max?: number) {
  const blogs = (await getAll()).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );

  if (max && max > 0) {
    return blogs.slice(0, max);
  }

  return blogs;
}

async function oldest(max?: number) {
  const blogs = (await getAll()).sort(
    (a, b) => a.data.publishedAt.valueOf() - b.data.publishedAt.valueOf(),
  );

  if (max && max > 0) {
    return blogs.slice(0, max);
  }

  return blogs;
}

async function getTags() {
  const blogs = await getAll();

  const tagCounts = blogs.reduce<Record<string, number>>((acc, blog) => {
    (blog.data.tags ?? []).forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });

    return acc;
  }, {});

  return tagCounts;
}

async function filteredByTag(tag: string) {
  const blogs = (await getAll()).filter((blog) =>
    blog.data.tags?.includes(tag),
  );

  return blogs;
}

export { getAll, latest, oldest, getTags, filteredByTag };
