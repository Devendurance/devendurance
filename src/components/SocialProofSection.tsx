import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import aptosContentTestimonial from "@/assets/aptos-content-testimonial.webp";
import xionReachout from "@/assets/xion-reachout.webp";
import merlinMarketsTestimonial from "@/assets/merlin-markets-testimonial.webp";
import aptosAccountQrt from "@/assets/aptos-account-qrt.webp";
import xionTestimonial from "@/assets/xion-testimonial.webp";

type ProofItem = {
  src: string;
  alt: string;
  category: "Content Writing" | "Growth Lead";
};

const proofItems: ProofItem[] = [
  { src: aptosAccountQrt, alt: "APTopia quote tweet praising content", category: "Content Writing" },
  { src: xionReachout, alt: "XION Ambassador Program outreach", category: "Content Writing" },
  { src: merlinMarketsTestimonial, alt: "Merlin Markets community recognition", category: "Growth Lead" },
  { src: aptosContentTestimonial, alt: "Aptos community content testimonial", category: "Content Writing" },
  { src: xionTestimonial, alt: "XION content contest 1st place recognition", category: "Content Writing" },
];

const SocialProofSection = () => {
  const { ref, className } = useReveal();
  const [selected, setSelected] = useState<ProofItem | null>(null);

  return (
    <>
      <section className="bg-background px-6 py-24 md:py-32">
        <div ref={ref} className={`max-w-6xl mx-auto ${className}`}>
          <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase mb-3 text-center">
            Social Proof
          </p>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            What People Are Saying
          </h2>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {proofItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(item)}
                className="block w-full break-inside-avoid rounded-2xl border border-border bg-card overflow-hidden text-left hover:border-primary/40 transition-colors"
              >
                <img src={item.src} alt={item.alt} className="w-full h-auto block" loading="lazy" />
                <div className="px-3 py-2.5">
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-primary tracking-wider uppercase">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 cursor-pointer animate-fade-in-up"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground/80 hover:text-foreground text-3xl font-light leading-none"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-[90vh] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default SocialProofSection;
