export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    category: string;
    content: string[];
  }
  
  export const posts: BlogPost[] = [
    {
      title: "Edge Architectures 2026",
      excerpt: "The shift towards edge computing and distributed performance.",
      date: "Dec 20, 2025",
      readTime: "2 min",
      slug: "future-web-architectures",
      category: "Architecture",
      content: [
        "The web is moving away from centralized data centers. By 2026, the 'Edge' won't just be a CDN layer; it will be where the majority of our application logic lives. This shift is driven by the demand for sub-50ms latency and the rise of real-time AI processing at the perimeter.",
        "Frameworks like Next.js and SvelteKit are already optimizing for this through Middleware and Edge Functions. However, the next challenge is 'Edge Data'—how do we sync state across a globally distributed fleet of edge nodes without sacrificing consistency?",
        "We are seeing the emergence of distributed databases that support multi-region replication by default. The future web architect must think in terms of eventual consistency and localized compute to deliver truly instantaneous experiences."
      ]
    },
    {
      title: "Network Resilience",
      excerpt: "Why protocol knowledge is critical for infrastructure.",
      date: "Dec 12, 2025",
      readTime: "3 min",
      slug: "network-resilience-web",
      category: "Networking",
      content: [
        "In an era of high-level abstractions, the fundamental protocols—TCP/IP, DNS, and HTTP/3—are often overlooked. Yet, understanding these is what separates a developer from an engineer. Resilience isn't just about having a backup server; it's about understanding how your application behaves under packet loss or high jitter.",
        "HTTP/3 (QUIC) is a game changer, solving the head-of-line blocking problem that plagued HTTP/2. Implementing it correctly requires a deep dive into UDP-based communication and how it interacts with modern firewalls and load balancers.",
        "Building for resilience means assuming the network will fail. Implementing robust retry strategies with exponential backoff, circuit breakers, and stateful offline-first capabilities is essential for modern enterprise-grade software."
      ]
    },
    {
      title: "Clean Code",
      excerpt: "Maintainable structures in enterprise software.",
      date: "Nov 28, 2025",
      readTime: "2 min",
      slug: "clean-code-large-scale",
      category: "Development",
      content: [
        "Clean code is not about perfection; it's about maintainability. In large-scale projects, the cost of code is not in its writing, but in its reading and modification. A codebase that is 'clean' is one where a new developer can contribute within hours, not weeks.",
        "Modularity is the cornerstone of clean architecture. By enforcing strict boundaries between layers (Domain, Infrastructure, Application), we reduce cognitive load and make testing straightforward. Dependency injection and the SOLID principles remain as relevant today as they were two decades ago.",
        "Finally, documentation through tests is the most effective way to maintain clean code. A well-tested component is self-documenting and provides the safety net required for aggressive refactoring as requirements evolve."
      ]
    }
  ];
  