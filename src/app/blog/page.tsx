import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { posts } from "./blog-data";

export const metadata: Metadata = {
  title: "Blog & Technical Resources | Rouabah Zine Eddine",
  description: "Short insights on software engineering, web development, and system design.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        
        <header className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            Technical <span style={{ color: "var(--text-muted)" }}>Insights</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Short reflections on software engineering and system design.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="group flex flex-col border rounded-2xl p-6 sm:p-8 hover:border-blue-500/20 transition-all duration-500"
              style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em] border px-3 py-1 rounded-full"
                  style={{ color: "var(--text-muted)", backgroundColor: "var(--bg-surface-strong)", borderColor: "var(--border-default)" }}
                >
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-blue-400 transition-colors" style={{ color: "var(--text-primary)" }}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="mb-8 leading-relaxed flex-grow" style={{ color: "var(--text-secondary)" }}>
                {post.excerpt}
              </p>

              <div className="pt-6 border-t flex items-center justify-between" style={{ borderColor: "var(--border-default)" }}>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="group-hover:translate-x-1 group-hover:text-blue-400 transition-all" style={{ color: "var(--text-primary)" }}>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
