import type { CollectionEntry } from "astro:content";
import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

interface BlogsListProps {
  posts: CollectionEntry<"blog">[];
}

export default function BlogsList({
  className,
  posts,
}: ComponentProps<"ul"> & BlogsListProps) {
  return (
    <ul className={cn("list-inside list-disc", className)}>
      {posts.map((post) => (
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
