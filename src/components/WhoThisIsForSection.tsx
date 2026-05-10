import { useReveal } from "@/hooks/useReveal";
import { Check, X } from "lucide-react";

const WhoThisIsForSection = () => {
  const { ref, visible, className } = useReveal();

  const idealClients = [
    "Founders building something real in Web3 and who think long-term",
    "Early-stage team building without a growth lead",
    "Projects who want clarity before committing budget",
    "Teams who want structure before spend",
  ];

  const notFor = [
    "Founders looking for shortcuts",
    "Teams that want vanity metrics",
    'Anyone who just wants to "go viral"',
    "Anyone expecting results without doing the inner work",
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto ${className}`}>
        <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase text-center mb-12">
          Who This Is For
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-2">
          {/* YES card */}
          <div
            className="relative bg-card rounded-2xl p-9 sm:p-11 overflow-hidden"
            style={{
              borderColor: "hsl(0 0% 100% / 0.15)",
              boxShadow:
                "inset 0 1px 0 0 hsl(0 0% 100% / 0.06), 0 0 22px 2px hsl(172 80% 40% / 0.22)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(60% 60% at 20% 10%, hsl(172 80% 40% / 0.08), transparent 65%), radial-gradient(50% 50% at 90% 90%, hsl(172 80% 40% / 0.05), transparent 70%)",
              }}
            />
            <h3
              className="text-foreground text-xl font-bold mb-7"
              style={{ fontFamily: "'Herotenn', 'Manrope', sans-serif" }}
            >
              This is for you if you're…
            </h3>
            <ul className="space-y-4">
              {idealClients.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${0.2 + i * 0.2}s`,
                  }}
                >
                  <span
                    className="shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full"
                    style={{
                      backgroundColor: "hsl(172 80% 40% / 0.15)",
                      color: "hsl(172 80% 45%)",
                    }}
                  >
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO card */}
          <div
            className="relative bg-card rounded-2xl p-9 sm:p-11 overflow-hidden"
            style={{
              borderColor: "hsl(0 0% 100% / 0.15)",
              boxShadow: "inset 0 1px 0 0 hsl(0 0% 100% / 0.04)",
            }}
          >
            <h3
              className="text-foreground text-xl font-bold mb-7"
              style={{ fontFamily: "'Herotenn', 'Manrope', sans-serif" }}
            >
              This is not for you if you're…
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${0.2 + i * 0.2}s`,
                  }}
                >
                  <span
                    className="shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full"
                    style={{
                      backgroundColor: "hsl(215 16% 45% / 0.18)",
                      color: "hsl(215 16% 65%)",
                    }}
                  >
                    <X className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span
                    className="text-muted-foreground text-sm leading-relaxed line-through decoration-muted-foreground/40 decoration-1"
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
