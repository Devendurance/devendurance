const CtaSection = () => {
  return (
    <section className="w-full bg-foreground py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-background text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Let's talk before you spend.
        </h2>
        <p className="text-background/60 text-base md:text-lg mb-10">
          One conversation could save you months of wasted budget.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/devendurance/connect-and-share-ideas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-medium text-sm px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
          <a
            href="https://x.com/devendyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-background/20 text-background font-medium text-sm px-8 py-3 rounded-md hover:bg-background/10 transition-colors"
          >
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
