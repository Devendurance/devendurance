import { useReveal } from "@/hooks/useReveal";

const services = [
  {
    title: "Pre-Launch Positioning Audit",
    description:
      "Before you spend a dollar, know if your structure can hold growth. Clarify your positioning, messaging, and audience before you spend a single dollar on marketing.",
  },
  {
    title: "Go-To-Market Architecture",
    description:
      "Structure your launch or relaunch with a clear plan that connects positioning to distribution.",
  },
  {
    title: "Growth Architecture Review",
    description:
      "A full teardown of your current strategy. What's missing, what's broken, what's premature, what's working — so you stop guessing and start building.",
  },
  {
    title: "Advisory & Consultancy Retainers",
    description:
      "Ongoing strategic guidance for founders who want a thinking partner, not just a service provider.",
  },
];

const ServicesSection = () => {
  const { ref, className } = useReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className={`max-w-5xl mx-auto ${className}`}>
        <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase text-center mb-12">
          Services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 sm:p-9 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-foreground text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
