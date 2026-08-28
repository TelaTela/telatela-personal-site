import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

export default function SideLinkItem({
  className,
  href,
  target = "_self",
  ...props
}: ComponentProps<"a">) {
  return (
    <li>
      <a
        className={cn(
          "hover:text-dark-text-primary focus:text-dark-text-primary active:text-dark-text-primary underline",
          className,
        )}
        href={href}
        target={target}
        {...props}
      />
    </li>
  );
}
