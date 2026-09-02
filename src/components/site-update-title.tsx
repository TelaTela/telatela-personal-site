import type { ComponentProps } from "react";
import { H1BottomSpacing } from "./mdx-components";

export default function SiteUpdateTitle({
  ...props
}: ComponentProps<typeof H1BottomSpacing>) {
  return <H1BottomSpacing size={2} {...props} />;
}
