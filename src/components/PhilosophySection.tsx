import AutoplayCarousel from "./AutoplayCarousel";
import { useReveal } from "@/hooks/useReveal";
import { Sprout } from "lucide-react";

type Slide =
  | { kind: "quote"; text: string }
  | { kind: "card"; title: string; body: string; accent?: boolean };

const slides: Slide[] = [
  {
    kind: "quote",
    text: "Growth is not a tactic. It's what happens when clarity, alignment, and belief are already in place.",
  },
  {
    kind: "quote",
    text: "Money only amplifies what already exists. If the structure is broken, spend makes it worse.",
  },
  {
    kind: "quote",
    text: "I don't do marketing. I build the conditions under which marketing actually works.",
  },
  {
    kind: "card",
    title: "Why Pre-Growth?",
    body: "Most founders spend on marketing before they're ready. The narrative isn't clear, the audience isn't defined, and the product still means different things to different people. Money hits a broken structure and just leaks out. Pre-growth is about fixing that before a single dollar is spent on amplification — because growth was never the problem. Premature growth was.",
  },
  {
    kind: "card",
    title: "The Endy Origin",
    body: "I started out as a general Web3 writer and marketer — doing content, campaigns, and whatever else early ecosystems needed. But working with projects like Injective and XION, I kept seeing the same pattern: good teams spending on growth before the foundation existed. That kept bothering me. So I stopped trying to be a full-service guy and went deep on the one thing nobody was fixing — the structure that has to exist before marketing works.",
    accent: true,
  },
];

const PhilosophySection = () => {
  const { ref, className } = useReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className={`max-w-3xl mx-auto ${className}`}>
        <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase text-center mb-12">
          How I Think
        </p>
        <AutoplayCarousel
          items={slides.map((s, i) =>
            s.kind === "quote" ? (
              <div key={i} className="px-4 text-center min-h-[260px] flex items-center justify-center">
                <p className="text-foreground text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                  "{s.text}"
                </p>
              </div>
            ) : (
              <div
                key={i}
                className={`relative rounded-2xl border bg-card text-card-foreground p-8 md:p-10 min-h-[260px] flex flex-col justify-center overflow-hidden ${
                  s.accent ? "border-primary/40" : "border-border"
                }`}
              >
                {s.accent && (
                  <Sprout
                    className="absolute -right-6 -bottom-6 h-40 w-40 text-primary/10"
                    aria-hidden="true"
                  />
                )}
                <h3 className="font-herotenn text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {s.body}
                </p>
              </div>
            )
          )}
          interval={5000}
        />
      </div>
    </section>
  );
};

export default PhilosophySection;
