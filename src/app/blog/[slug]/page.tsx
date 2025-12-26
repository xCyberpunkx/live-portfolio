import { posts } from "../blog-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Blog | Rouabah Zine Eddine`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen pt-32">
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <Breadcrumbs 
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` }
          ]} 
        />

        <article className="max-w-4xl mx-auto mt-20">
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-white/40 border-y border-white/10 py-6">
              <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime} read</span>
            </div>
          </header>

          <div className="space-y-8">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-xl text-white/70 font-light leading-relaxed md:text-2xl">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="mt-24 pt-12 border-t border-white/10">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </footer>
        </article>
      </div>
      <Footer />
    </main>
  );
}
