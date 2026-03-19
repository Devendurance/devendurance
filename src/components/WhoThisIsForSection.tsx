const WhoThisIsForSection = () => {
  const idealClients = [
    "Founders building something real in Web3 and who think long-term",
    "Early-stage team building without a growth lead",
    "Projects who want clarity before committing budget",
    "Teams who want structure before spend",
  ];

  const notFor = [
    "Founders looking for shortcuts",
    "Teams that want vanity metrics",
    "Anyone who just wants to \"go viral\"",
    "Anyone expecting results without doing the inner work",
  ];

  return (
    <section className="bg-secondary py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-muted-foreground text-sm font-normal tracking-widest uppercase text-center mb-16">
          Who This Is For
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ideal Clients */}
          <div className="bg-background rounded-md border border-border p-8">
            <h3 className="text-foreground text-lg font-extrabold mb-6">
              This is for you if…
            </h3>
            <ul className="space-y-4">
              {idealClients.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 text-lg leading-6 shrink-0">✓</span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-background rounded-md border border-border p-8">
            <h3 className="text-foreground text-lg font-extrabold mb-6">
              This is not for you if…
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 text-lg leading-6 shrink-0">✗</span>
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
