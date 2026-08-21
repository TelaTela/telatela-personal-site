import * as React from "react";
import { cn } from "../lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-dark-border relative flex flex-col rounded-xl border-2 px-4 py-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-dark-bg text-dark-accent-amber absolute -top-3.5 left-3 px-1 text-xl leading-none font-semibold",
        className,
      )}
      {...props}
    />
  );
}

export { Card, CardTitle };
