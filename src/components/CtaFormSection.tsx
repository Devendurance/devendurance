import ContactForm from "@/components/ContactForm";
import { useReveal } from "@/hooks/useReveal";

const CtaFormSection = () => {
  const { ref, className } = useReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className={`max-w-2xl mx-auto ${className}`}>
        <div className="text-center mb-10">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Get in Touch
          </p>
          <h2
            className="text-foreground text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Herotenn', 'Manrope', sans-serif" }}
          >
            Let's talk before you spend.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            One conversation could save you months of wasted budget.
          </p>
        </div>

        <div className="rounded-2xl p-6 sm:p-8 bg-card border border-border">
          <ContactForm />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <a
            href="https://calendly.com/devendurance/connect-and-share-ideas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-semibold text-sm px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Call
          </a>
          <a
            href="https://x.com/devendyyy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-border text-foreground font-semibold text-sm px-7 py-3 rounded-full hover:border-primary/40 transition-colors"
          >
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaFormSection;
