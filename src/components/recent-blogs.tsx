import { getCollection } from "astro:content";

interface RecentBlogsProps {
  maxPost?: number;
}

export default async function ({ maxPost = 5 }: RecentBlogsProps) {
  const allPosts = (await getCollection("blog"))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    .slice(0, maxPost);

  return (
    <ul className="list-inside list-disc">
      {allPosts.map((post) => (
        <li key={post.id}>
          <a
            className="hover:text-dark-text-primary focus:text-dark-text-primary active:text-dark-text-primary hover:underline focus:underline active:underline"
            href={`/blog/${post.id}`}
          >
            {post.data.title} ({post.data.publishedAt.toLocaleDateString()})
          </a>
        </li>
      ))}
    </ul>
  );
}
