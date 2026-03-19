import profileImage from "@/assets/profile.webp";
import PhilosophySection from "@/components/PhilosophySection";

const Index = () => {
  return (
    <div className="bg-background">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-3xl w-full">
        {/* Profile Photo */}
        <div className="shrink-0">
          <img
            src={profileImage}
            alt="Endurance"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border border-border"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="text-muted-foreground text-sm font-normal tracking-widest uppercase mb-2">
            Pre-Growth Strategist
          </p>
          <h1 className="text-foreground text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Endurance
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
            I work with founders before they spend on marketing, so when they do, it actually works.
          </p>
          <a
            href="https://solo.to/devendurance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-medium text-sm px-6 py-3 rounded-md hover:opacity-90"
          >
            Work With Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
