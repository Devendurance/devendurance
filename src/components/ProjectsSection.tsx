import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";

import injectiveLogo from "@/assets/projects/injective.webp";
import xionLogo from "@/assets/projects/xion.webp";
import aptosLogo from "@/assets/projects/aptos.webp";
import arbitrumLogo from "@/assets/projects/arbitrum.webp";
import zentryLogo from "@/assets/projects/zentry.webp";
import tanssiLogo from "@/assets/projects/tanssi.webp";
import icnLogo from "@/assets/projects/icn.webp";
import naorisLogo from "@/assets/projects/naoris.webp";
import merlinLogo from "@/assets/projects/merlin.webp";
import orbittLogo from "@/assets/projects/orbitt.webp";

const projects = [
  { name: "Merlin Market", logo: merlinLogo, category: "Prediction Market", role: "Growth Lead", description: "Designed and executed the full pre-growth strategy ahead of launch. Built the content system and distribution rhythm across X, and diagnosed early retention signals.", link: "https://x.com/merlinmarkets" },
  { name: "Injective", logo: injectiveLogo, category: "DeFi", role: "Ambassador", description: "Created high-performing content and threads simplifying complex concepts around Injective's UVP and architecture for mass audiences using strategic storytelling.", link: "https://x.com/injective" },
  { name: "XION", logo: xionLogo, category: "Infrastructure", role: "Ambassador", description: "Authored viral threads breaking down XION's modular architecture and unique value proposition, converting readers into new community members.", link: "https://x.com/burnt_xion" },
  { name: "Aptos", logo: aptosLogo, category: "DeFi", role: "Content Contributor", description: "Authored viral threads breaking down Aptos's architecture and UVP through strategic storytelling, converting readers into new community members.", link: "https://x.com/aptos" },
  { name: "Arbitrum", logo: arbitrumLogo, category: "DeFi", role: "Ambassador", description: "Drove awareness of Arbitrum ecosystem projects through research-backed content and contributed to community engagement and campaign amplification.", link: "https://x.com/arbitrum" },
  { name: "Zentry", logo: zentryLogo, category: "AI", role: "Ambassador", description: "Created content reinforcing Zentry's thesis and AI narrative, strengthening visibility and thought leadership around the ecosystem.", link: "https://x.com/zentry" },
  { name: "Tanssi", logo: tanssiLogo, category: "DeFi", role: "Ambassador", description: "Supported Tanssi's growth through community engagement and content that distilled the protocol's value for broader audiences.", link: "https://x.com/tanssinetwork" },
  { name: "Impossible Cloud Network", logo: icnLogo, category: "AI", role: "Ambassador", description: "Authored viral threads breaking down ICN's modular architecture and UVP, converting readers into new community members.", link: "https://x.com/icn_protocol" },
  { name: "Naoris Protocol", logo: naorisLogo, category: "Infrastructure", role: "Ambassador", description: "Authored viral threads breaking down Naoris' architecture and UVP through strategic storytelling.", link: "https://x.com/naorisprotocol" },
  { name: "Orbitt AI", logo: orbittLogo, category: "AI", role: "Ambassador", description: "Simplified complex token management concepts to boost adoption and community engagement via content and storytelling.", link: "https://x.com/orbitt_ai" },
];

const ProjectsSection = () => {
  const { ref, className } = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 320;
    el.scrollBy({ left: dir === "left" ? -(cardWidth + 32) : cardWidth + 32, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div ref={ref} className={`max-w-6xl mx-auto ${className}`}>
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold tracking-tight">
              Projects I've Worked With
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canLeft}
              className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canRight}
              className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 md:gap-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-3 -mx-6 px-6"
        >
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[280px] sm:w-[320px] snap-start rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-5">
                <img
                  src={project.logo}
                  alt={project.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-foreground font-bold text-lg mb-1 tracking-tight">
                {project.name}
              </h3>
              <p className="text-primary text-sm font-semibold mb-3">
                {project.role}
              </p>
              <span className="inline-block text-[10px] font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground mb-3 tracking-wider uppercase">
                {project.category}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
