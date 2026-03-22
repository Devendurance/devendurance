import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type TweetCategory = "Project Breakdowns" | "Worldviews & Thoughts" | "Growth Case Studies";

interface TweetItem {
  id: string;
  category: TweetCategory;
}

const tweets: TweetItem[] = [
  { id: "2032897305091911802", category: "Project Breakdowns" },
  { id: "2033607096030429625", category: "Project Breakdowns" },
  { id: "2032943280976179658", category: "Project Breakdowns" },
  { id: "2033505198828576768", category: "Worldviews & Thoughts" },
  { id: "2032777537672069174", category: "Worldviews & Thoughts" },
  { id: "2032517680352149850", category: "Worldviews & Thoughts" },
];

const categoryColors: Record<TweetCategory, string> = {
  "Project Breakdowns": "bg-primary/15 text-primary",
  "Worldviews & Thoughts": "bg-accent text-accent-foreground",
  "Growth Case Studies": "bg-green-500/15 text-green-400",
};

const TweetEmbed = ({ tweetId }: { tweetId: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && (window as any).twttr?.widgets) {
      ref.current.innerHTML = "";
      (window as any).twttr.widgets.createTweet(tweetId, ref.current, {
        theme: "dark",
        dnt: true,
        conversation: "none",
      });
    }
  }, [tweetId]);

  return (
    <div ref={ref} className="min-h-[200px] flex items-center justify-center">
      <div className="text-muted-foreground text-sm">Loading tweet…</div>
    </div>
  );
};

const TweetsSection = () => {
  useEffect(() => {
    if (!(window as any).twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.head.appendChild(script);
    }
  }, []);

  const grouped = tweets.reduce<Record<TweetCategory, TweetItem[]>>(
    (acc, tweet) => {
      acc[tweet.category].push(tweet);
      return acc;
    },
    {
      "Project Breakdowns": [],
      "Worldviews & Thoughts": [],
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {items.map((tweet) => (
                  <div
                    key={tweet.id}
                    className="rounded-lg border border-border bg-background overflow-hidden"
                  >
                    <TweetEmbed tweetId={tweet.id} />
                  </div>
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
