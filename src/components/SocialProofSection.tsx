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

const categoryColors: Record<string, string> = {
  "Content Writing": "bg-primary text-primary-foreground",
  "Growth Lead": "bg-accent text-accent-foreground",
};

const SocialProofSection = () => {
  return (
    <section className="bg-secondary px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-sm font-normal tracking-widest uppercase mb-3">
          Social Proof
        </p>
        <h2 className="text-foreground text-3xl md:text-4xl font-bold mb-12">
          What People Are Saying
        </h2>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {proofItems.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid rounded-lg border border-border bg-background overflow-hidden shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="px-3 py-2">
                <span
                  className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}
                >
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
