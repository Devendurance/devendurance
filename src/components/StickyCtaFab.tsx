import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const StickyCtaFab = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("how-i-think") || document.getElementById("philosophy");
    if (!trigger) return;

    const onScroll = () => {
      const rect = trigger.getBoundingClientRect();
      // Show once user has scrolled past the bottom of the How I Think section
      setVisible(rect.bottom < 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      aria-label="Let's talk"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card text-foreground text-sm transition-all duration-300"
      style={{
        fontFamily: "'Herotenn', 'Manrope', sans-serif",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "hsl(0 0% 100% / 0.15)",
        boxShadow:
          "inset 0 1px 0 0 hsl(0 0% 100% / 0.06), 0 0 18px 2px hsl(217 91% 60% / 0.2)",
        backdropFilter: "blur(10px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <MessageCircle className="w-4 h-4" />
      <span>Let's Talk</span>
    </a>
  );
};

export default StickyCtaFab;