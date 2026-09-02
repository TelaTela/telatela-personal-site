import type { ComponentProps } from "react";
import { Card, CardTitle } from "./card";
import { getTags } from "../lib/collections/blog";

export default async function BlogTagsList({
  className,
}: ComponentProps<typeof Card>) {
  const tags = await getTags();

  return (
    <Card className={className}>
      <CardTitle>
        <h1>Blog Tags</h1>
      </CardTitle>

      <div className="text-dark-accent-amber flex gap-2 font-semibold">
        {Object.entries(tags).map(([tag, count]) => (
          <a
            key={tag}
            className="hover:cursor-pointer hover:underline focus:underline active:underline"
            href={`/blog/tag/${tag}`}
          >
            {tag}
          </a>
        ))}
      </div>
    </Card>
  );
}
