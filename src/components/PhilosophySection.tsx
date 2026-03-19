const PhilosophySection = () => {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-16 text-center">
        <h2 className="text-muted-foreground text-sm font-normal tracking-widest uppercase">
          How I Think
        </h2>

        <div className="space-y-12">
          <p className="text-foreground text-2xl md:text-3xl font-extrabold leading-snug">
            "Growth is not a tactic. It's what happens when clarity, alignment, and belief are already in place."
          </p>

          <p className="text-foreground text-2xl md:text-3xl font-extrabold leading-snug">
            "Money only amplifies what already exists. If the structure is broken, spend makes it worse."
          </p>

          <p className="text-foreground text-2xl md:text-3xl font-extrabold leading-snug">
            "I don't do marketing. I build the conditions under which marketing actually works."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
