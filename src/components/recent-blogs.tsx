import { getCollection } from "astro:content";

interface RecentBlogsProps {
  maxPost?: number;
}

export default async function ({ maxPost = 5 }: RecentBlogsProps) {
  const allPosts = (await getCollection("blog"))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    .slice(0, maxPost);

  return (
    <ul className="list-disc">
      {allPosts.map((post) => (
        <li key={post.id}>
          <a href={`/blog/${post.id}`}>{post.data.title}</a>
        </li>
      ))}
    </ul>
  );
}
