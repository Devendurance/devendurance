import { useEffect, useState, useRef, ReactNode } from "react";

interface AutoplayCarouselProps {
  items: ReactNode[];
  interval?: number | number[];
  className?: string;
  cardClassName?: string;
}

const AutoplayCarousel = ({
  items,
  interval = 5000,
  className = "",
  cardClassName = "",
}: AutoplayCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const delay = Array.isArray(interval)
      ? interval[index] ?? 5000
      : interval;
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % items.length);
    }, delay);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [paused, interval, items.length, index]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ease-out ${
              i === index
                ? "opacity-100 scale-100 relative"
                : "opacity-0 scale-[0.95] absolute inset-0 pointer-events-none"
            } ${cardClassName}`}
            aria-hidden={i !== index}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Pill pagination */}
      {items.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoplayCarousel;
