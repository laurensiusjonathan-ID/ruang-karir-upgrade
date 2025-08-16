import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h5 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
            ✨ Siap <span className="text-primary">Naik Level</span> Kariermu? 
          </h5>

          {/* Title */}
          <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
            Mulai Langkah Pertama Menuju{" "}
            <span className="text-primary">Karier Impianmu</span> 🚀
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Bergabunglah dengan <strong className="text-secondary">750+ member</strong> yang sudah 
            membuktikan keefektifan metode Ruang Karir dalam mengembangkan karier mereka.
          </p>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">750+ Member Aktif</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium">Rating 5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">✅ Terpercaya & Proven</span>
            </div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild variant="primary" size="lg" className="w-full sm:w-auto group">
              <a href="#products">
                💡 Temukan Solusi Cepat untuk Kariermu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
              <a href="https://s.id/RuangKarir" target="_blank" rel="noopener noreferrer">
                Gabung Komunitas Gratis
              </a>
              <Users className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <p className="text-sm text-muted-foreground">
                <strong>Tools Praktis</strong><br />
                Langsung bisa dipakai
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🤝</div>
              <p className="text-sm text-muted-foreground">
                <strong>Mentoring Personal</strong><br />
                Support dari expert
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm text-muted-foreground">
                <strong>Hasil Cepat</strong><br />
                Dalam hitungan minggu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;