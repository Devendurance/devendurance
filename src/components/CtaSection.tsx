import ContactForm from "@/components/ContactForm";

const CtaSection = () => {
  return (
    <section className="w-full py-24 px-6" style={{ background: "hsl(0 0% 8%)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4" style={{ color: "hsl(0 0% 98%)" }}>
            Let's talk before you spend.
          </h2>
          <p className="text-base md:text-lg mb-2" style={{ color: "hsl(0 0% 70%)" }}>
            One conversation could save you months of wasted budget.
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl p-6 sm:p-8 mb-10" style={{ background: "hsl(0 0% 10%)", border: "1px solid hsl(0 0% 18%)" }}>
          <ContactForm />
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/devendurance/30mins-with-endurance"
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
            className="inline-block border font-medium text-sm px-8 py-3 rounded-md transition-colors"
            style={{ color: "hsl(0 0% 98%)", borderColor: "hsl(0 0% 30%)" }}
          >
            Follow on X
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
