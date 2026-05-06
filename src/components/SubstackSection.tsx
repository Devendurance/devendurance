import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

interface Post {
  title: string;
  excerpt: string;
  link: string;
  comingSoon?: boolean;
}

const posts: Post[] = [
  {
    title: "the pattern i kept seeing before i had the words for it",
    excerpt: "false growth autopsy no. 001 – KOL campaigns",
    link: "https://devendurance.substack.com/p/the-pattern-i-kept-seeing-before",
  },
  { title: "Coming Soon", excerpt: "", link: "", comingSoon: true },
  { title: "Coming Soon", excerpt: "", link: "", comingSoon: true },
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
          {posts.map((post, i) =>
            post.comingSoon ? (
              <div
                key={i}
                className="flex-shrink-0 w-[300px] md:w-[calc((100%-2.5rem)/3)] snap-start rounded-2xl border border-dashed border-border bg-card/50 p-7 flex items-center justify-center min-h-[220px]"
              >
                <span className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                  Coming Soon
                </span>
              </div>
            ) : (
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
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default SubstackSection;
