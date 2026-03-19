const WhoThisIsForSection = () => {
  const idealClients = [
    "Founders before their first real marketing spend",
    "Early-stage teams building without a growth lead",
    "Entrepreneurs who want clarity before committing budget",
    "Builders who know something's off but can't name it",
  ];

  const notFor = [
    "Companies looking for someone to run their ads",
    "Teams who just want more content, faster",
    "Founders who've already scaled and need optimization",
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
