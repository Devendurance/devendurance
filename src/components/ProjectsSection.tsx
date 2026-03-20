import { ArrowUpRight } from "lucide-react";

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
  {
    name: "Merlin Market",
    logo: merlinLogo,
    category: "Prediction Market",
    role: "Growth Strategy",
    description:
      "Designed and executed the full pre-growth strategy ahead of launch. Built the content system and distribution rhythm across X, and diagnosed early retention signals.",
    link: "https://x.com/merlinmarkets",
  },
  {
    name: "Injective",
    logo: injectiveLogo,
    category: "DeFi",
    role: "Ambassador",
    description:
      "Created high-performing content and threads simplifying complex concepts around Injective's UVP and architecture for mass audiences using strategic storytelling.",
    link: "https://x.com/injective",
  },
  {
    name: "XION",
    logo: xionLogo,
    category: "Infrastructure",
    role: "Ambassador",
    description:
      "Authored viral threads breaking down XION's modular architecture and unique value proposition, converting readers into new community members through strategic storytelling.",
    link: "https://x.com/burnt_xion",
  },
  {
    name: "Aptos",
    logo: aptosLogo,
    category: "DeFi",
    role: "Content Contributor",
    description:
      "Authored viral threads breaking down Aptos's architecture and unique value proposition through strategic storytelling, converting readers into new community members.",
    link: "https://x.com/aptos",
  },
  {
    name: "Arbitrum",
    logo: arbitrumLogo,
    category: "DeFi",
    role: "Ambassador",
    description:
      "Drove awareness of Arbitrum ecosystem projects through research-backed content and contributed to community engagement and campaign amplification.",
    link: "https://x.com/arbitrum",
  },
  {
    name: "Zentry",
    logo: zentryLogo,
    category: "AI",
    role: "Ambassador",
    description:
      "Created content reinforcing Zentry's thesis and AI narrative, strengthening visibility and thought leadership around the ecosystem.",
    link: "https://x.com/zentry",
  },
  {
    name: "Tanssi",
    logo: tanssiLogo,
    category: "DeFi",
    role: "Ambassador",
    description:
      "Supported Tanssi's growth through community engagement and content that distilled the protocol's value for broader audiences.",
    link: "https://x.com/tanssinetwork",
  },
  {
    name: "Impossible Cloud Network",
    logo: icnLogo,
    category: "AI",
    role: "Ambassador",
    description:
      "Authored viral threads breaking down ICN's modular architecture and unique value proposition, converting readers into new community members through strategic storytelling.",
    link: "https://x.com/icn_protocol",
  },
  {
    name: "Naoris Protocol",
    logo: naorisLogo,
    category: "Infrastructure",
    role: "Ambassador",
    description:
      "Authored viral threads breaking down Naoris' architecture and unique value proposition through strategic storytelling, converting readers into community members.",
    link: "https://x.com/naorisprotocol",
  },
  {
    name: "Orbitt AI",
    logo: orbittLogo,
    category: "AI",
    role: "Ambassador",
    description:
      "Simplified complex token management concepts to boost adoption and community engagement via content and storytelling.",
    link: "https://x.com/orbitt_ai",
  },
];

const roleColors: Record<string, string> = {
  "Growth Strategy": "bg-primary/10 text-primary",
  Ambassador: "bg-muted text-muted-foreground",
  "Content Contributor": "bg-accent text-accent-foreground",
};

const ProjectsSection = () => {
  return (
    <section className="px-6 py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-neutral-500 text-sm font-normal tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold mb-12">
          Projects I've Worked With
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-xl border border-neutral-800 bg-neutral-950 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Logo + link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-5 pb-0"
              >
                <img
                  src={project.logo}
                  alt={project.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <ArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Content */}
              <div className="p-5 pt-4">
                <h3 className="text-foreground font-semibold text-base mb-2">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                    {project.category}
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${roleColors[project.role]}`}
                  >
                    {project.role}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
