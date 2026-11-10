"use client";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const paused = useRef(false);
  const n = slides.length;

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) setI((x) => (x + 1) % n);
    }, 4500);
    return () => clearInterval(t);
  }, [n]);

  const go = (d: number) => setI((x) => (x + d + n) % n);
  const touchX = useRef<number | null>(null);

  return (
    <div
      className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl border border-gold/40 shadow-lg"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s) => (
          <div key={s.src} className="aspect-[4/5] w-full shrink-0 bg-sand">
            {failed[s.src] ? (
              <div className="flex h-full items-center justify-center font-serif text-xl italic text-gold/70">Photo coming soon</div>
            ) : (
              <img
                src={s.src}
                alt={s.alt}
                className="h-full w-full object-cover"
                onError={() => setFailed((f) => ({ ...f, [s.src]: true }))}
              />
            )}
          </div>
        ))}
      </div>
      <button aria-label="Previous" onClick={() => go(-1)} className="absolute left-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-ivory/80 text-xl text-gold backdrop-blur">‹</button>
      <button aria-label="Next" onClick={() => go(1)} className="absolute right-3 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-ivory/80 text-xl text-gold backdrop-blur">›</button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, k) => (
          <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-1.5 bg-ivory/80"}`} />
        ))}
      </div>
    </div>
  );
}
