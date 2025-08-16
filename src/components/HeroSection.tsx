import { Button } from "@/components/ui/button";
import { FaInstagram, FaTiktok, FaLinkedin, FaThreads } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/22bfbbbf-7fbd-45d8-bf0b-58e564d02536.png" 
              alt="Ruang Karir Logo" 
              className="w-48 h-48 mx-auto mb-6"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Dari Komunitas Gratis{" "}
            <span className="text-primary">750+ Anggota</span>, Sekarang Saatnya Bantu Kamu{" "}
            <span className="text-secondary">Upgrade Karier</span> Lebih Cepat{" "}
            <span className="text-3xl md:text-5xl">🚀</span>
          </h1>

          {/* Founder Photo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/e0de029f-29f7-497f-a0d7-049274a9c9d7.png" 
              alt="Dhanes - Founder Ruang Karir" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-card object-cover border-4 border-primary"
            />
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Aku <strong className="text-foreground">Dhanes</strong>, founder Ruang Karir – komunitas self-help & jobseeker{" "}
            <span className="text-primary font-semibold">GRATIS</span> yang sudah bantu ratusan orang level up skill dan dapat kerja.
            <br />
            <br />
            Berpengalaman 5+ tahun di dunia HR dan merekrut 1000+ orang, aku pernah bekerja di perusahaan internasional di bidang AI dan saat ini berkarier di creative agency Singapore.
            Pengalaman ini bikin aku paham tren industri global dan strategi kerja yang dibutuhkan untuk bersaing.
            <br />
            <br />
            Sekarang hadir dengan tools & mentoring{" "}
            <span className="text-secondary font-semibold">premium</span> biar kamu bisa sampai ke tujuan lebih cepat.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-5 max-w-3xl mx-auto leading-relaxed">
            Aku sering bagi tips karier & rahasia lolos kerja di sini <br />
            Yuk connect & follow biar nggak ketinggalan insight terbaru 🚀
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8 text-secondary">
            <a href="https://www.threads.com/@kerjabarengdhanes" target="_blank"><FaThreads className="w-6 h-6 hover:opacity-80" /></a>
            <a href="https://www.instagram.com/kerjabarengdhanes" target="_blank"><FaInstagram className="w-6 h-6 hover:opacity-80" /></a>
            <a href="https://www.tiktok.com/@kerjabarengdhanes" target="_blank"><FaTiktok className="w-6 h-6 hover:opacity-80" /></a>
            <a href="https://www.linkedin.com/in/dhaneswaraintan/" target="_blank"><FaLinkedin className="w-6 h-6 hover:opacity-80" /></a>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Lihat Semua Produk Premium
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Gabung Komunitas Gratis
            </Button>
          </div> */}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;