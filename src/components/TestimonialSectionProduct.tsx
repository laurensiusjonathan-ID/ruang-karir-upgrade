// src/components/TestimonialSectionProduct.tsx
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * ⬇️ Letakkan file gambar di: public/testimonials/products/
 * Contoh: /public/testimonials/products/01.png, 02.png, ... dst
 * Lalu daftarkan di array images di bawah.
 */
const images: string[] = [
  "/testimonials/products/01.png",
  "/testimonials/products/02.png",
  "/testimonials/products/03.png",
  "/testimonials/products/04.png",
  "/testimonials/products/05.png",
  "/testimonials/products/06.png",
  "/testimonials/products/07.png",
  "/testimonials/products/08.png",
  "/testimonials/products/09.png",
  "/testimonials/products/10.png",
  "/testimonials/products/11.png",
  "/testimonials/products/12.png",
  "/testimonials/products/13.png",
  "/testimonials/products/14.png",
  // …tambahkan semua fotomu di sini
];

const AUTOPLAY_MS = 3500;

export default function TestimonialSection() {
  const [i, setI] = useState(0);
  const timer = useRef<number | null>(null);
  const startX = useRef<number | null>(null);

  const next = () => setI((p) => (p + 1) % images.length);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);

  // autoplay
  useEffect(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [i]);

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // swipe (mobile)
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    startX.current = null;
  };

  if (images.length === 0) return null;

  return (
    <section className="pb-20">
      {/* Title and Description */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Bukan cuma janji, ini buktinya! </h2>
          <p className="text-muted-foreground md:text-lg">Cerita nyata dari pengguna yang udah ngerasain manfaatnya :</p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Apa Kata Mereka?</h2>
          <p className="text-muted-foreground md:text-lg">Testimoni asli – satu per satu</p>
        </div> */}

        <div
          className="relative max-w-3xl mx-auto select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Slide */}
          <div className="rounded-2xl shadow-card overflow-hidden bg-white">
            <img
              src={images[i]}
              alt={`Testimoni ${i + 1}`}
              className="w-full h-[520px] md:h-[620px] object-contain bg-gradient-to-b from-primary/5 to-secondary/5"
              loading="eager"
            />
          </div>

          {/* Controls */}
          <button
            aria-label="Sebelumnya"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Berikutnya"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow hover:bg-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === i ? "w-6 bg-secondary" : "w-2.5 bg-secondary/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      {/* Main CTA Buttons */}
      {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <Button variant="primary" size="lg" className="w-full sm:w-auto group" >
          Lihat Semua Produk Premium
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div> */}
    </section>
  );
}
