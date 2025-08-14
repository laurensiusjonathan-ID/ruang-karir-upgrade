import { Button } from "@/components/ui/button";
import { FileText, Mic, Map, Package, Clock } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: <FileText className="w-8 h-8" />,
      emoji: "📝",
      name: "CVMate",
      benefit: "Asisten AI yang siap bantu kamu bikin CV profesional dalam hitungan menit!",
      color: "text-primary",
      image: "/products/cvmate.jpg",
      link: "https://s.id/CVMate"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      emoji: "🎤", 
      name: "InterviewMate",
      benefit: "Asisten AI yang siap temenin kamu latihan interview realtime dengan Voice Mode dan feedback sesuai job inceran!",
      color: "text-secondary",
      image: "/products/interviewMate.png",
      link: "https://s.id/InterviewMate"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      emoji: "🎤", 
      name: "LinkMate",
      benefit: "Asisten AI yang siap optimize profile LinkedInmu jadi magnet HR dan temukan peluang karir lebih di LinkedIn",
      color: "text-secondary",
      image: "/products/linkmate.png",
      link: "https://s.id/iMovU"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      emoji: "⏳",
      name: "3 Days Career Clarity",
      benefit: "Mentoring intensif + roadmap karier + dummy project",
      color: "text-primary",
      image: "/products/3-days-career-clarity.png",
      link: "https://s.id/YO3Gj"
    },   
    {
      icon: <Mic className="w-8 h-8" />,
      emoji: "🎤", 
      name: "Bedah CV",
      benefit: "Bedah CV-mu bareng HR Experienced",
      color: "text-secondary",
      image: "/products/bedah-cv.png",
      link: "https://s.id/USFWf"
    },
    {
      icon: <Package className="w-8 h-8" />,
      emoji: "📦",
      name: "Job Hunter Kit",
      benefit: "Semua alat persiapan kerja dalam 1 paket hemat",
      color: "text-secondary",
      image: "/products/job-hunter-kit.png",
      link: "https://s.id/jzf0J"
    },
    {
      icon: <Package className="w-8 h-8" />,
      emoji: "📦",
      name: "Job Hunter 101",
      benefit: "Webbook hacks dan tips kerja buat Freshgraduates",
      color: "text-secondary",
      image: "/products/webbook.jpg",
      link: "https://s.id/tr4gN"
    },
    {
      icon: <Map className="w-8 h-8" />,
      emoji: "🗺",
      name: "Career Mapping Guide",
      benefit: "Temukan arah karier & skill yang tepat",
      color: "text-primary",
      image: "/products/career-mapping-guide.png",
      link: "https://s.id/CareerFinder"
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
                    <img src={product.image} alt={product.name} className="w-36 h-36" />
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
                <Button asChild 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-smooth"
                ><a href={product.link} target="_blank" rel="noopener noreferrer">
                    Lihat Detail
                  </a>
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
          {/* <div className="text-center">
            <Button variant="primary" size="lg">
              Lihat Semua Produk Premium
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;