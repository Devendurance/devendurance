const PhilosophySection = () => {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-16 text-center">
        <h2 className="text-muted-foreground text-sm font-normal tracking-widest uppercase">
          How I Think
        </h2>

        <div className="space-y-12">
          <p className="text-foreground text-2xl md:text-3xl font-extrabold leading-snug">
            "Most startups don't have a marketing problem. They have a clarity problem."
          </p>

          <p className="text-foreground text-2xl md:text-3xl font-extrabold leading-snug">
            "Strategy without foundation is just expensive guessing."
          </p>

          <p className="text-foreground text-2xl md:text-3xl font-extrabold leading-snug">
            "Get the positioning right first. Everything else follows."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
