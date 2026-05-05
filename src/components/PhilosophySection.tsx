import AutoplayCarousel from "./AutoplayCarousel";
import { useReveal } from "@/hooks/useReveal";

const statements = [
  "Growth is not a tactic. It's what happens when clarity, alignment, and belief are already in place.",
  "Money only amplifies what already exists. If the structure is broken, spend makes it worse.",
  "I don't do marketing. I build the conditions under which marketing actually works.",
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
          items={statements.map((s, i) => (
            <div key={i} className="px-4 text-center">
              <p className="text-foreground text-2xl md:text-4xl font-bold leading-tight tracking-tight">
                "{s}"
              </p>
            </div>
          ))}
          interval={5000}
        />
      </div>
    </section>
  );
};

export default PhilosophySection;
