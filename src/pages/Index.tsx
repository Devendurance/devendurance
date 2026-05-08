import profileImage from "@/assets/profile.webp";
import NavBar from "@/components/NavBar";
import PhilosophySection from "@/components/PhilosophySection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialProofSection from "@/components/SocialProofSection";
import TweetsSection from "@/components/TweetsSection";
import SubstackSection from "@/components/SubstackSection";
import CtaFormSection from "@/components/CtaFormSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <NavBar />

      {/* Hero — centered */}
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-12"
      >
        <div className="max-w-2xl w-full text-center flex flex-col items-center">
          <div className="pfp-ring mb-8">
            <img
              src={profileImage}
              alt="Endy"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover block"
            />
          </div>
          <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Pre-Growth Strategist
          </p>
          <h1 className="text-foreground text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-glow">
            Endy.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            I work with founders before they spend on marketing, so when they do, it actually works.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://solo.to/devendurance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-block font-semibold text-sm px-7 py-3 rounded-full"
            >
              Work With Me
            </a>
            <a
              href="https://calendly.com/devendurance/connect-and-share-ideas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-border text-foreground font-semibold text-sm px-7 py-3 rounded-full hover:border-primary/40 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <div id="contact"><CtaFormSection /></div>
      <div id="philosophy"><PhilosophySection /></div>
      <div id="who"><WhoThisIsForSection /></div>
      <div id="services"><ServicesSection /></div>
      <div id="projects"><ProjectsSection /></div>
      <div id="social-proof"><SocialProofSection /></div>
      <div id="tweets"><TweetsSection /></div>
      <div id="substack"><SubstackSection /></div>

      <footer className="border-t border-border py-10 px-6">
        <p className="text-muted-foreground text-xs text-center">
          © {new Date().getFullYear()} Endy. Crafted with care.
        </p>
      </footer>
    </div>
  );
};

export default Index;
