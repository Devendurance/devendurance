import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import AutoplayCarousel from "./AutoplayCarousel";

import tweet1 from "@/assets/tweet-1.webp";
import tweet2 from "@/assets/tweet-2.webp";
import tweet3 from "@/assets/tweet-3.webp";
import tweet4 from "@/assets/tweet-4.webp";
import tweet5 from "@/assets/tweet-5.webp";
import tweet6 from "@/assets/tweet-6.webp";

interface TweetItem {
  src: string;
  alt: string;
  link: string;
}

const breakdowns: TweetItem[] = [
  { src: tweet1, alt: "XION – 1 Billion Identities breakdown", link: "https://x.com/devendyyy/status/2032897305091911802" },
  { src: tweet2, alt: "XION – Redacted File breakdown", link: "https://x.com/devendyyy/status/2033607096030429625" },
  { src: tweet3, alt: "Injective – AI Innovations breakdown", link: "https://x.com/devendyyy/status/2032943280976179658" },
];

const opinions: TweetItem[] = [
  { src: tweet4, alt: "Alignment over persuasion", link: "https://x.com/devendyyy/status/2033505198828576768" },
  { src: tweet5, alt: "A blockchain is not a product", link: "https://x.com/devendyyy/status/2032777537672069174" },
  { src: tweet6, alt: "Fear, Pain, Desire, Convenience", link: "https://x.com/devendyyy/status/2032517680352149850" },
];

const TweetCard = ({ item }: { item: TweetItem }) => (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block max-w-md mx-auto rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-colors"
  >
    <img src={item.src} alt={item.alt} className="w-full h-auto block" loading="lazy" />
  </a>
);

const TweetsSection = () => {
  const { ref, className } = useReveal();

  return (
    <section className="bg-background py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto ${className}`}>
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Think in Public
          </p>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            How I Think in Public
          </h2>
          <a
            href="https://x.com/devendyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Follow on X
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-center text-xs font-semibold tracking-wider uppercase text-primary mb-6">
              Project Breakdowns
            </p>
            <AutoplayCarousel items={breakdowns.map((t, i) => <TweetCard key={i} item={t} />)} interval={5000} />
          </div>
          <div>
            <p className="text-center text-xs font-semibold tracking-wider uppercase text-primary mb-6">
              Worldviews & Opinions
            </p>
            <AutoplayCarousel items={opinions.map((t, i) => <TweetCard key={i} item={t} />)} interval={5000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TweetsSection;
