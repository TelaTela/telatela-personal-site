import type { ComponentProps } from "react";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const defaultHeadingClasses = "text-dark-text-primary font-bold";
const headingVariants = cva(defaultHeadingClasses, {
  variants: {
    size: {
      1: "text-3xl",
      2: "text-2xl",
      3: "text-xl",
      4: "text-lg",
      5: "text-md",
      6: "text-sm",
    },
    spacing: {
      default: "mt-4 mb-1",
      top: "mt-4",
      bottom: "mb-1",
      none: "mt-0 mb-0",
    },
  },
  defaultVariants: {
    size: 1,
    spacing: "default",
  },
});

const H1 = ({
  className,
  size = 1,
  spacing = "default",
  ...props
}: ComponentProps<"h1"> & VariantProps<typeof headingVariants>) => (
  <h1
    className={cn(headingVariants({ size, spacing, className }))}
    {...props}
  />
);

const H1BottomSpacing = ({ ...props }: ComponentProps<typeof H1>) => (
  <H1 spacing="bottom" {...props} />
);

const H1NoSpacing = ({ ...props }: ComponentProps<typeof H1>) => (
  <H1 spacing="none" {...props} />
);

const H2 = ({ className, ...props }: ComponentProps<"h2">) => (
  <h2 className={cn("text-2xl", defaultHeadingClasses, className)} {...props} />
);

const H3 = ({ className, ...props }: ComponentProps<"h3">) => (
  <h3 className={cn("text-xl", defaultHeadingClasses, className)} {...props} />
);

const P = ({ ...props }: ComponentProps<"p">) => (
  <p className="mb-4" {...props} />
);

const A = ({ className, href, ...props }: ComponentProps<"a">) => (
  <a
    className={cn(
      "hover:text-dark-text-primary focus:text-dark-text-primary active:text-dark-text-primary underline",
      className,
    )}
    href={href}
    {...props}
  />
);

const Ul = ({ className, ...props }: ComponentProps<"ul">) => (
  <ul className={cn("mb-4 list-inside list-disc", className)} {...props} />
);

const Ol = ({ className, ...props }: ComponentProps<"ol">) => (
  <ol
    className={cn("group/ol mb-4 list-inside list-decimal", className)}
    {...props}
  />
);

const BlockQuoute = ({ className, ...props }: ComponentProps<"blockquote">) => (
  <blockquote
    className={cn("border-s-dark-border mb-4 border-s-4 ps-4", className)}
    {...props}
  />
);

const Pre = ({ className, ...props }: ComponentProps<"pre">) => (
  <pre className={cn("mb-4 px-4 py-2", className)} {...props} />
);

const components = {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  ol: Ol,
  blockquote: BlockQuoute,
  pre: Pre,
};

export {
  A,
  H1,
  H2,
  H3,
  H1NoSpacing,
  H1BottomSpacing,
  P,
  Ul,
  Ol,
  BlockQuoute,
  Pre,
  components,
  defaultHeadingClasses,
};
