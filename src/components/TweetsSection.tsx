import { ArrowUpRight } from "lucide-react";

import tweet1 from "@/assets/tweet-1.webp";
import tweet2 from "@/assets/tweet-2.webp";
import tweet3 from "@/assets/tweet-3.webp";
import tweet4 from "@/assets/tweet-4.webp";
import tweet5 from "@/assets/tweet-5.webp";
import tweet6 from "@/assets/tweet-6.webp";

type TweetCategory = "Project Breakdowns" | "Worldviews & Views" | "Growth Case Studies";

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
  { src: tweet4, alt: "Alignment over persuasion", link: "https://x.com/devendyyy/status/2033505198828576768", category: "Worldviews & Views" },
  { src: tweet5, alt: "A blockchain is not a product", link: "https://x.com/devendyyy/status/2032777537672069174", category: "Worldviews & Views" },
  { src: tweet6, alt: "Fear, Pain, Desire, Convenience", link: "https://x.com/devendyyy/status/2032517680352149850", category: "Worldviews & Views" },
];

const categoryColors: Record<TweetCategory, string> = {
  "Project Breakdowns": "bg-primary/15 text-primary",
  "Worldviews & Views": "bg-accent text-accent-foreground",
  "Growth Case Studies": "bg-green-500/15 text-green-400",
};

const TweetsSection = () => {
  const grouped = tweets.reduce<Record<TweetCategory, TweetItem[]>>(
    (acc, tweet) => {
      acc[tweet.category].push(tweet);
      return acc;
    },
    {
      "Project Breakdowns": [],
      "Worldviews & Views": [],
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

        <div className="space-y-16">
          {activeCategories.map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${categoryColors[category]}`}
                >
                  {category}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((tweet) => (
                  <a
                    key={tweet.link}
                    href={tweet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-border bg-background overflow-hidden hover:border-primary/40 transition-colors"
                  >
                    <img src={tweet.src} alt={tweet.alt} className="w-full h-auto block" loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TweetsSection;
