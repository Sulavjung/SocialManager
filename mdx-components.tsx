// mdx-components.tsx
import type { MDXComponents } from "mdx/types";
import Callout from "./components/Callout";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="prose-h1 text-4xl font-bold tracking-tight lg:text-5xl mt-12 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="prose-h2 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-10 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="prose-h3 scroll-m-20 text-2xl font-semibold tracking-tight mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="prose-h4 scroll-m-20 text-xl font-medium tracking-tight mt-6 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="prose-p leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 mb-4 overflow-x-auto rounded-lg border bg-muted p-4">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="border-b">{children}</thead>,
  th: ({ children }) => (
    <th className="border px-4 py-2 text-left font-medium bg-muted/50">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border px-4 py-2 text-muted-foreground">{children}</td>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-8 border-t" />,
  Callout,
};

export function useMDXComponents(): MDXComponents {
  return mdxComponents;
}
