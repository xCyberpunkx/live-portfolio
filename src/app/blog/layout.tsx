import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Technical Resources | Rouabah Zine Eddine",
  description: "Short insights on software engineering, web development, and system design.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
