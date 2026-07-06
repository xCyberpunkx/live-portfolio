import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Metadata } from "next";
import ProjectsGrid, { Project } from "@/components/sections/projects-grid";
import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Projects Portfolio | Rouabah Zine Eddine",
  description: "Explore a curated collection of software engineering projects — booking platforms, e-commerce systems with custom CMS backends, healthcare software, and business websites.",
};

const projects: Project[] = [
  {
    title: "Bookingo",
    category: "Booking Platform • Full-Stack",
    image: "/projects/bookingo.png",
    link: "https://www.bookingo.app/",
    github: "#",
    desc: "A booking.com-style reservation platform built end-to-end in Laravel — multi-tenant reservations, availability, and payment flows.",
    tech: ["Laravel", "PHP", "MySQL"],
    year: "2026",
    caseStudy: {
      problem: "Small hospitality operators had no affordable way to manage multi-property availability without enterprise software or spreadsheets.",
      approach: "Built a multi-tenant Laravel app with a shared availability engine, tenant-scoped dashboards, and a hold/cancel/refund payment flow.",
      outcome: "One codebase now serves multiple independent properties with isolated data, at a fraction of SaaS licensing cost.",
    },
  },
  {
    title: "DentalDZ",
    category: "E-Commerce • Full Backend CMS",
    image: "/projects/dentaldz.png",
    link: "https://www.dentaldz.com/",
    github: "#",
    desc: "Full e-commerce storefront for dental equipment, with a custom backend CMS for catalog and order management.",
    tech: ["React", "Supabase"],
    year: "2025",
    caseStudy: {
      problem: "The client sold dental equipment through calls and messages, with no online catalog or way to take orders unattended.",
      approach: "Built a React storefront on Supabase with a custom admin CMS for adding products, tracking stock, and managing incoming orders.",
      outcome: "The client now runs a self-service storefront and updates the catalog directly, without touching code or calling a developer.",
    },
  },
  {
    title: "BZ Boutique",
    category: "E-Commerce • Full Backend CMS",
    image: "/projects/bzboutique.png",
    link: "https://bz-boutique.lovable.app/",
    github: "#",
    desc: "Full boutique e-commerce site with a custom backend CMS for product and order management.",
    tech: ["React", "Supabase"],
    year: "2025",
    caseStudy: {
      problem: "A boutique retailer needed an online storefront but couldn't justify a monthly SaaS subscription for a small catalog.",
      approach: "Delivered a lightweight React + Supabase store with the same CMS pattern used on DentalDZ, sized down for a smaller inventory.",
      outcome: "The boutique now takes orders online with zero recurring platform fees, managed entirely through its own admin panel.",
    },
  },
  {
    title: "Groupe Gadi",
    category: "Static Website • Custom CMS Editor",
    image: "/projects/gadi.png",
    link: "https://www.groupegadi.com/",
    github: "#",
    desc: "Corporate website with a custom-built inline content editor, letting the client update page content directly.",
    tech: ["Next.js", "Custom CMS"],
    year: "2025",
    caseStudy: {
      problem: "The client needed a fast, static corporate site but wanted to edit page copy and images without filing a support ticket each time.",
      approach: "Paired a static Next.js front end with a purpose-built inline editor, so content blocks are editable directly on the page.",
      outcome: "The client updates their own site content in minutes, while keeping the performance benefits of a static build.",
    },
  },
  {
    title: "Clinic Management System",
    category: "Healthcare Software",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    link: "https://ramdani.vercel.app/",
    github: "https://github.com/xCyberpunkx/dental-backend",
    desc: "A comprehensive dental clinic management system designed for efficiency.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Drizzle ORM"],
    year: "2024",
    caseStudy: {
      problem: "A dental clinic tracked appointments and patient records on paper and spreadsheets, causing double-bookings and lost history.",
      approach: "Built a Next.js + PostgreSQL system with scheduling, patient records, and billing in one dashboard, using Drizzle ORM for type-safe queries.",
      outcome: "Staff now manage the full patient lifecycle — booking to billing — from a single interface, cutting scheduling conflicts.",
    },
  },
  {
    title: "Photographer Marketplace",
    category: "Marketplace Platform",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    link: "https://sawerni.vercel.app/",
    github: "https://github.com/xCyberpunkx/sawerni-kv",
    desc: "Algeria's first marketplace connecting verified photographers with clients.",
    tech: ["Next.js", "Supabase", "TypeScript", "Framer Motion"],
    year: "2025",
    caseStudy: {
      problem: "Clients in Algeria looking for photographers relied on word-of-mouth and unverified social media accounts, with no central place to compare or book.",
      approach: "Built a two-sided marketplace on Next.js and Supabase with photographer verification, portfolios, and a booking flow.",
      outcome: "Clients can now discover and book vetted photographers directly, giving the platform a trust layer the market didn't have.",
    },
  },
  {
    title: "Safouane Mokhtefi",
    category: "Portfolio • Graphic Design",
    image: "/projects/safouane-portfolio.png",
    link: "https://mokhtefi-safwan.vercel.app/",
    github: "#",
    desc: "Personal portfolio for a Graphic Designer from Algeria, specialized in visual communication and branding.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "A graphic designer had strong work but no dedicated site to present it — just scattered social posts and a PDF deck.",
      approach: "Built a minimalist Next.js portfolio structured around the designer's own visual identity, letting the work carry the design.",
      outcome: "The designer now has a single shareable link that presents their portfolio professionally to prospective clients.",
    },
  },
  {
    title: "STEREO MIND",
    category: "Productivity • Open Source",
    image: "/projects/stereo-mind.png",
    link: "https://stero-mind.vercel.app/",
    github: "#",
    desc: "A simple, free tool to help track learning, manage tasks, and reach goals without complicated setup.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "Most productivity apps are overloaded with features, which makes them frustrating for someone who just wants to track a few goals.",
      approach: "Built a deliberately minimal Next.js app focused on three things: tasks, learning progress, and goals — nothing else.",
      outcome: "An open-source tool anyone can self-host or fork, with an interface simple enough to use without a tutorial.",
    },
  },
  {
    title: "SnovaTech Solar Simulation",
    category: "Energy Technology • Web Application",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop",
    link: "https://snovatech.netlify.app/",
    github: "https://github.com/xCyberpunkx/Snovatech-Saas",
    desc: "Solar energy simulation platform for Algerian consumers with financial projections and ROI analysis.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Financial Algorithms"],
    year: "2024",
    caseStudy: {
      problem: "Algerian homeowners considering solar had no easy way to estimate real cost, payback period, or savings before contacting a supplier.",
      approach: "Built the front end for a simulation engine modeling panel output against irradiance data, upfront cost, and tariffs, with an interactive ROI timeline.",
      outcome: "Prospective buyers get a transparent, adjustable financial projection before ever talking to a supplier.",
    },
  },
  {
    title: "Electromalik",
    category: "Static Website • Inline Editor",
    image: "/projects/electromalik.png",
    link: "https://electromalik.vercel.app/",
    github: "#",
    desc: "Static storefront site with a fully integrated inline content editor for easy updates.",
    tech: ["Next.js", "Custom CMS"],
    year: "2025",
    caseStudy: {
      problem: "An electronics retailer needed an online presence but had no way to keep product listings current without ongoing developer help.",
      approach: "Reused the inline-editor CMS pattern from Groupe Gadi, adapted for a product-listing storefront.",
      outcome: "The retailer keeps listings up to date independently, on a fast static site with no hosting overhead.",
    },
  },
  {
    title: "Sahara Flow Dynamics",
    category: "Static Website",
    image: "/projects/ssh.png",
    link: "https://sahara-flow-dynamics.vercel.app/",
    github: "#",
    desc: "Static business website focused on clean presentation and fast load times.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "The business had no website at all, and needed a credible public-facing presence quickly.",
      approach: "Shipped a fast, static Next.js site prioritizing clear information architecture over heavy custom features.",
      outcome: "A lightweight, low-maintenance site the client can point customers to with confidence.",
    },
  },
  {
    title: "AGS Algeria",
    category: "Static Website",
    image: "/projects/ags.png",
    link: "https://ags-algeria.vercel.app/",
    github: "#",
    desc: "Static corporate website for AGS Algeria.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "AGS Algeria needed a straightforward corporate site to represent the company online.",
      approach: "Delivered a static Next.js site with a clean, professional layout matching the company's brand.",
      outcome: "A stable, fast-loading corporate presence with minimal ongoing hosting cost.",
    },
  },
  {
    title: "Neo Summer Sparks",
    category: "Appointment Booking • One-Page",
    image: "/projects/neo.png",
    link: "https://neosummersparks.vercel.app/",
    github: "#",
    desc: "One-page appointment booking site built for quick scheduling.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "The client needed customers to book appointments without back-and-forth messaging.",
      approach: "Built a focused one-page site with a scheduling widget as the primary call to action.",
      outcome: "Customers self-book appointments directly, cutting manual coordination for the client.",
    },
  },
  {
    title: "Cerine",
    category: "Portfolio • Developer",
    image: "/projects/cerine.png",
    link: "https://cerine.vercel.app/",
    github: "#",
    desc: "Developer portfolio site showcasing projects and technical skills.",
    tech: ["Next.js", "TypeScript"],
    year: "2025",
    caseStudy: {
      problem: "A developer needed a portfolio to show recruiters and clients real project work instead of a plain resume.",
      approach: "Built a Next.js/TypeScript portfolio structured around project case studies and a clear skills section.",
      outcome: "The developer now has a single link that demonstrates both their work and their technical range.",
    },
  },
  {
    title: "Didamed",
    category: "Static Website",
    image: "/projects/didiamed.png",
    link: "https://didamed.vercel.app/",
    github: "#",
    desc: "Static business website for Didamed.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "Didamed needed a professional website to establish credibility with prospective customers.",
      approach: "Delivered a static Next.js site with clear service information and contact details up front.",
      outcome: "A dependable, low-maintenance site that represents the business online.",
    },
  },
  {
    title: "ProAgroSud",
    category: "Static Website",
    image: "/projects/pas.png",
    link: "https://www.proagrosud.com/",
    github: "#",
    desc: "Static corporate website for ProAgroSud.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "ProAgroSud needed a corporate site that clearly communicated their agricultural services to potential partners.",
      approach: "Built a static Next.js site organized around services and company information, optimized for fast loading.",
      outcome: "A professional online presence partners can reference before reaching out directly.",
    },
  },
  {
    title: "Event SB Connect",
    category: "Event Platform",
    image: "/projects/batiwest.png",
    link: "https://event-sb-connect.vercel.app/",
    github: "#",
    desc: "Event platform site for managing and showcasing event information.",
    tech: ["Next.js", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "Event organizers needed a central place to publish event details instead of scattering info across social posts.",
      approach: "Built a Next.js site structured around event listings and key details, easy to update per event.",
      outcome: "Attendees now find event information in one place, reducing confusion from fragmented announcements.",
    },
  },
  {
    title: "Exact DZ",
    category: "Web Application",
    image: "/projects/exact.png",
    link: "https://exact-dz.vercel.app/",
    github: "#",
    desc: "React-based business website for Exact DZ.",
    tech: ["React"],
    year: "2025",
    caseStudy: {
      problem: "Exact DZ needed a functional business site built quickly on a lean stack.",
      approach: "Delivered a React-based site focused on the company's core service pages without unnecessary overhead.",
      outcome: "A working online presence shipped fast, without the cost of a larger framework setup.",
    },
  },
  {
    title: "DAMAC PLUS",
    category: "Real Estate • Architecture",
    image: "/projects/damac-plus.png",
    link: "https://damac-plus.vercel.app/",
    github: "#",
    desc: "Luxury real estate platform showcasing architectural distinction and urban living standards.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "A luxury real estate brand needed a site that matched the premium positioning of its properties, not a generic listing template.",
      approach: "Built a Next.js/TypeScript site with a visual style built around large imagery and restrained typography to signal quality.",
      outcome: "The site presents developments with the same premium feel the brand uses in its physical marketing.",
    },
  },
  {
    title: "MF BETON",
    category: "Industrial • Manufacturing",
    image: "/projects/mf-beton.png",
    link: "https://mfbeton-dz.vercel.app/",
    github: "#",
    desc: "Industrial excellence in concrete and prefabrication. A showcase of manufacturing capability and scale with a robust catalog system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "A concrete and prefabrication manufacturer needed to showcase its product range and manufacturing scale to B2B buyers.",
      approach: "Built a Next.js site with a structured catalog system covering the full range of prefabricated products.",
      outcome: "B2B buyers can browse the manufacturer's full catalog online before making direct contact.",
    },
  },
  {
    title: "KTM - Kadri Transformation Metallique",
    category: "Industrial • Metalworking",
    image: "/projects/ktm-metal.png",
    link: "https://www.k-tm.com/",
    github: "#",
    desc: "Excellence in action. Metallic transformation and industrial hangar construction. Highlighting expertise in large-scale metal structures.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "An industrial metalworking company needed a site that conveyed technical credibility for large-scale structural projects.",
      approach: "Built a Next.js site highlighting completed hangar and structural work with a focus on scale and capability.",
      outcome: "The company now has a technical showcase to send to prospective industrial clients.",
    },
  },
  {
    title: "Comptoir Oasis Hydraulique",
    category: "Plumbing • Electricity",
    image: "/projects/coh-plomberie.png",
    link: "https://coh-six.vercel.app/",
    github: "#",
    desc: "Your partner in plumbing, electricity, and hardware. Professional quality guaranteed with an extensive product catalog.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    caseStudy: {
      problem: "A plumbing and electrical supplier needed to present a large hardware catalog online in an organized way.",
      approach: "Built a Next.js site with a categorized catalog covering plumbing, electrical, and hardware product lines.",
      outcome: "Customers can browse the full product range before visiting or calling the store.",
    },
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32" style={{ backgroundColor: "var(--bg-base)" }}>
      <Navigation />
      <div className="container mx-auto px-6 py-12">
        <BreadcrumbSchema items={[{ name: "Projects", url: "/projects" }]} />
        <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />

        <header className="mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6" style={{ color: "var(--text-primary)" }}>
            Project <span style={{ color: "var(--text-muted)" }}>Archive</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A selection of technical missions and digital builds. Focused on performance, architecture, and user-centric design.
          </p>
        </header>

        <ProjectsGrid projects={projects} />
      </div>
      <Footer />
    </main>
  );
}
