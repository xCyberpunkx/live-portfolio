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
    <main className="bg-zinc-950 min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        
        <header className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            Technical <span className="text-white/50">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed">
            Short reflections on software engineering and system design.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="group flex flex-col bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              
              <p className="text-white/70 mb-8 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-white group-hover:translate-x-1 group-hover:text-blue-400 transition-all">
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
