import { useReveal } from "@/hooks/useReveal";

const WhoThisIsForSection = () => {
  const { ref, className } = useReveal();

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
    <section className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className={`max-w-5xl mx-auto ${className}`}>
        <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase text-center mb-12">
          Who This Is For
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-card rounded-2xl border border-border p-7 sm:p-9">
            <h3 className="text-foreground text-xl font-bold mb-6">
              This is for you if…
            </h3>
            <ul className="space-y-4">
              {idealClients.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary text-lg leading-6 shrink-0">✓</span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-border p-7 sm:p-9">
            <h3 className="text-foreground text-xl font-bold mb-6">
              This is not for you if…
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-destructive text-lg leading-6 shrink-0">✗</span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
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
