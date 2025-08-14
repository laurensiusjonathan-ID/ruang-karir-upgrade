import { Button } from "@/components/ui/button";
import { FileText, Mic, Map, Package, Clock } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: <FileText className="w-8 h-8" />,
      emoji: "📝",
      name: "CVMate",
      benefit: "CV ATS-friendly + cover letter auto-lirik HR",
      color: "text-primary"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      emoji: "🎤", 
      name: "InterviewMate",
      benefit: "Latihan interview + jawaban non-template",
      color: "text-secondary"
    },
    {
      icon: <Map className="w-8 h-8" />,
      emoji: "🗺",
      name: "Career Mapping Guide",
      benefit: "Temukan arah karier & skill yang tepat",
      color: "text-primary"
    },
    {
      icon: <Package className="w-8 h-8" />,
      emoji: "📦",
      name: "Job Hunter Kit",
      benefit: "Semua alat persiapan kerja dalam 1 paket hemat",
      color: "text-secondary"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      emoji: "⏳",
      name: "3 Days Career Clarity",
      benefit: "Mentoring intensif + roadmap karier + dummy project",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Biar Kariermu Nggak Jalan di Tempat 🚀
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Pilih produk yang sesuai dengan kebutuhan karier kamu
            </p>
          </div>

          {/* Products Carousel/Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-card hover-lift transition-smooth group">
                {/* Icon & Emoji */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-full bg-muted ${product.color}`}>
                    {product.icon}
                  </div>
                  <span className="text-4xl">{product.emoji}</span>
                </div>

                {/* Product Name */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                  {product.name}
                </h3>

                {/* Benefit */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.benefit}
                </p>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-smooth"
                >
                  Lihat Detail
                </Button>
              </div>
            ))}
          </div>

          {/* Mobile Scroll Hint */}
          <div className="lg:hidden text-center">
            <p className="text-sm text-muted-foreground">
              💡 Swipe untuk melihat produk lainnya
            </p>
          </div>

          {/* View All CTA */}
          <div className="text-center">
            <Button variant="primary" size="lg">
              Lihat Semua Produk Premium
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;