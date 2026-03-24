import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import tweet1 from "@/assets/tweet-1.webp";
import tweet2 from "@/assets/tweet-2.webp";
import tweet3 from "@/assets/tweet-3.webp";
import tweet4 from "@/assets/tweet-4.webp";
import tweet5 from "@/assets/tweet-5.webp";
import tweet6 from "@/assets/tweet-6.webp";

type TweetCategory = "Project Breakdowns" | "Worldviews & Opinions" | "Growth Case Studies";

interface TweetItem {
  src: string;
  alt: string;
  link: string;
  category: TweetCategory;
}

const tweets: TweetItem[] = [
  { src: tweet1, alt: "XION – 1 Billion Identities breakdown", link: "https://x.com/devendyyy/status/2032897305091911802", category: "Project Breakdowns" },
  { src: tweet2, alt: "XION – Redacted File breakdown", link: "https://x.com/devendyyy/status/2033607096030429625", category: "Project Breakdowns" },
  { src: tweet3, alt: "Injective – AI Innovations breakdown", link: "https://x.com/devendyyy/status/2032943280976179658", category: "Project Breakdowns" },
  { src: tweet4, alt: "Alignment over persuasion", link: "https://x.com/devendyyy/status/2033505198828576768", category: "Worldviews & Opinions" },
  { src: tweet5, alt: "A blockchain is not a product", link: "https://x.com/devendyyy/status/2032777537672069174", category: "Worldviews & Opinions" },
  { src: tweet6, alt: "Fear, Pain, Desire, Convenience", link: "https://x.com/devendyyy/status/2032517680352149850", category: "Worldviews & Opinions" },
];

const categoryColors: Record<TweetCategory, string> = {
  "Project Breakdowns": "bg-primary/15 text-primary",
  "Worldviews & Opinions": "bg-accent text-accent-foreground",
  "Growth Case Studies": "bg-green-500/15 text-green-400",
};

const CategoryCarousel = ({ category, items }: { category: TweetCategory; items: TweetItem[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
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
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 300;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 16 : cardWidth + 16, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${categoryColors[category]}`}>
          {category}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-1.5 rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-1.5 rounded-full border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((tweet) => (
          <a
            key={tweet.link}
            href={tweet.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start rounded-lg border border-border bg-background overflow-hidden hover:border-primary/40 transition-colors"
          >
            <img src={tweet.src} alt={tweet.alt} className="w-full h-auto block" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
};

const TweetsSection = () => {
  const grouped = tweets.reduce<Record<TweetCategory, TweetItem[]>>(
    (acc, tweet) => {
      acc[tweet.category].push(tweet);
      return acc;
    },
    {
      "Project Breakdowns": [],
      "Worldviews & Opinions": [],
      "Growth Case Studies": [],
    }
  );

  const activeCategories = (Object.entries(grouped) as [TweetCategory, TweetItem[]][]).filter(
    ([, items]) => items.length > 0
  );

  return (
    <section className="bg-secondary py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-muted-foreground text-sm font-normal tracking-widest uppercase">
            How I Think in Public
          </h2>
          <a
            href="https://x.com/devendyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Follow on X
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-14">
          {activeCategories.map(([category, items]) => (
            <CategoryCarousel key={category} category={category} items={items} />
          ))}
        </div>

        {/* Substack Section */}
        <div className="mt-16 pt-14 border-t border-border">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/15 text-primary">
              From the Newsletter
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Placeholder cards — replace with your actual Substack posts */}
            <a
              href="https://substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-border bg-background p-5 hover:border-primary/40 transition-colors group"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Substack</p>
              <h3 className="text-foreground font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                Coming Soon — Your First Post Title
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                Share your Substack post links and I'll add them here as preview cards.
              </p>
            </a>
          </div>
          <p className="text-muted-foreground text-xs mt-4 italic">
            Share your Substack URL and post links to populate this section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TweetsSection;
