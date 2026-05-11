import { useEffect, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 300ms ease, transform 300ms ease",
      }}
    >
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://t.me/devendurance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct Strategy Line on Telegram"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card text-foreground transition-all duration-300 hover:scale-105"
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "hsl(0 0% 100% / 0.15)",
                boxShadow:
                  "inset 0 1px 0 0 hsl(0 0% 100% / 0.06), 0 0 18px 2px hsl(199 89% 60% / 0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Send className="w-5 h-5" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" style={{ fontFamily: "'Herotenn', 'Manrope', sans-serif" }}>
            Direct Strategy Line
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <a
      href="#contact"
      onClick={handleClick}
      aria-label="Let's talk"
      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-card text-foreground text-sm transition-all duration-300"
      style={{
        fontFamily: "'Herotenn', 'Manrope', sans-serif",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "hsl(0 0% 100% / 0.15)",
        boxShadow:
          "inset 0 1px 0 0 hsl(0 0% 100% / 0.06), 0 0 18px 2px hsl(217 91% 60% / 0.2)",
        backdropFilter: "blur(10px)",
      }}
      >
        <MessageCircle className="w-4 h-4" />
        <span>Let's Talk</span>
      </a>
    </div>
  );
};

export default StickyCtaFab;