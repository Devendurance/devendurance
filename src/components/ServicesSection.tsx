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
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-muted-foreground text-sm font-normal tracking-widest uppercase text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-md border border-border p-8"
            >
              <h3 className="text-foreground text-lg font-extrabold mb-3">
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
