import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

interface Post {
  title: string;
  excerpt: string;
  link: string;
}

// Placeholder posts — share your Substack URL and post links to fill these in.
const posts: Post[] = [
  {
    title: "Why most growth strategies fail before they start",
    excerpt: "The hidden cost of moving fast without alignment, and what to do instead.",
    link: "https://substack.com",
  },
  {
    title: "Positioning isn't a tagline. It's a decision.",
    excerpt: "How founders confuse messaging with positioning — and lose months because of it.",
    link: "https://substack.com",
  },
  {
    title: "The audit before the ad spend",
    excerpt: "What I look for in early-stage projects before they touch a marketing budget.",
    link: "https://substack.com",
  },
];

const SubstackSection = () => {
  const { ref, className } = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 320;
    el.scrollBy({ left: dir === "left" ? -(cardWidth + 20) : cardWidth + 20, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className={`max-w-6xl mx-auto ${className}`}>
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Newsletter
            </p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold tracking-tight">
              Endy's Unfiltered Thoughts
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canLeft}
              className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canRight}
              className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 -mx-6 px-6"
        >
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[300px] md:w-[calc((100%-2.5rem)/3)] snap-start rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
                Substack
              </p>
              <h3 className="text-foreground font-bold text-lg mb-3 tracking-tight leading-snug">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Read post
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>

        <p className="text-muted-foreground text-xs italic mt-6 text-center">
          Share your Substack URL and post links to populate this section.
        </p>
      </div>
    </section>
  );
};

export default SubstackSection;
