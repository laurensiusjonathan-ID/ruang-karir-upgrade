import { Button } from "@/components/ui/button";
import { FileText, Mic, Map, Package, Clock } from "lucide-react";
import React, { useRef } from "react";

// Tambahkan tags pada data produk (contoh)
const aiAssistant = [
  {
    icon: <FileText className="w-8 h-8" />,
    emoji: "📝",
    name: "CVMate",
    benefit: "Asisten AI yang siap biknin dan reviewin CVmu dalam hitungan menit sesuai job inceran + pasti ATS!",
    color: "text-primary",
    image: "/products/cvmate.jpg",
    link: "https://s.id/CVMate",
    tags: ["⭐ Paling Laris"]

  },
  {
    icon: <Mic className="w-8 h-8" />,
    emoji: "🎤",
    name: "InterviewMate",
    benefit: "Asisten AI yang siap temenin kamu latihan interview realtime dengan Voice Mode dan feedback sesuai job inceran!",
    color: "text-secondary",
    image: "/products/interviewmate.png",
    link: "https://s.id/InterviewMate",
    tags: ["🚀 Fast-track dapet kerja"]
  },
  {
    icon: <Mic className="w-8 h-8" />,
    emoji: "🎤",
    name: "LinkMate",
    benefit: "Asisten AI yang siap optimize profile LinkedInmu jadi magnet HR dan temukan peluang karir lebih di LinkedIn",
    color: "text-secondary",
    image: "/products/linkmate.png",
    link: "https://s.id/iMovU",
    tags: []
  },
]

const personalConsul = [
  {
    icon: <Clock className="w-8 h-8" />,
    emoji: "⏳",
    name: "3 Days Career Clarity",
    benefit: "Mentoring intensif + roadmap karier + dummy project",
    color: "text-primary",
    image: "/products/3-days-career-clarity.png",
    link: "https://s.id/YO3Gj",
    tags: ["🚀 Fast-track dapet kerja", "⭐ Paling Laris"]
  },
  {
    icon: <Mic className="w-8 h-8" />,
    emoji: "🎤",
    name: "Bedah CV",
    benefit: "Bedah CV-mu bareng HR Experienced",
    color: "text-secondary",
    image: "/products/bedah-cv.png",
    link: "https://s.id/USFWf",
    tags: []
  },
]

const toolsCareer = [
  {
    icon: <Package className="w-8 h-8" />,
    emoji: "📦",
    name: "Job Hunter Kit",
    benefit: "Semua alat persiapan kerja dalam 1 paket hemat",
    color: "text-secondary",
    image: "/products/job-hunter-kit.png",
    link: "https://s.id/jzf0J",
    tags: ["⭐ Paling Laris"]
  },
  {
    icon: <Package className="w-8 h-8" />,
    emoji: "📦",
    name: "Job Hunter 101",
    benefit: "Webbook hacks dan tips kerja buat Freshgraduates",
    color: "text-secondary",
    image: "/products/webbook.jpg",
    link: "https://s.id/tr4gN",
    tags: ["💼 Untuk Freshgraduate"]
  },
  {
    icon: <Map className="w-8 h-8" />,
    emoji: "🗺",
    name: "Career Mapping Guide",
    benefit: "Temukan arah karier & skill yang tepat",
    color: "text-primary",
    image: "/products/career-mapping-guide.png",
    link: "https://s.id/CareerFinder",
    tags: []
  }
];

// Ubah tipe Product agar support tags
type Product = {
  icon: React.ReactNode;
  emoji: string;
  name: string;
  benefit: string;
  color: string;
  image: string;
  link: string;
  tags?: string[];
};

const ProductsSection = () => {
  const DragScroll = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: React.MouseEvent) => {
      isDown = true;
      ref.current!.classList.add("dragging");
      startX = e.pageX - ref.current!.offsetLeft;
      scrollLeft = ref.current!.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      ref.current!.classList.remove("dragging");
    };

    const onMouseUp = () => {
      isDown = false;
      ref.current!.classList.remove("dragging");
    };

    const onMouseMove = (e: React.MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - ref.current!.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll-fast
      ref.current!.scrollLeft = scrollLeft - walk;
    };

    return (
      <div
        ref={ref}
        className="flex gap-8 overflow-x-auto pb-4 -mx-4 px-4 cursor-grab select-none hide-scrollbar lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:p-0"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {children}
      </div>
    );
  };

  return (
    <section id="products" className="py-20 bg-muted">
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

          <div className="space-y-16">
            {/* AI Assistant */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">AI Assistant</h2>
              {/* Mobile: horizontal scroll */}
              <DragScroll>
                {aiAssistant.map((product, index) => (
                  <div className="min-w-[280px] max-w-[340px] flex-shrink-0 lg:min-w-0 lg:max-w-none" key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </DragScroll>
            </div>

            {/* Career Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Career Map</h2>
              <DragScroll>
                {personalConsul.map((product, index) => (
                  <div className="min-w-[280px] max-w-[340px] flex-shrink-0 lg:min-w-0 lg:max-w-none" key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </DragScroll>
            </div>

            {/* Bundle */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">Bundle</h2>
              <DragScroll>
                {toolsCareer.map((product, index) => (
                  <div className="min-w-[280px] max-w-[340px] flex-shrink-0 lg:min-w-0 lg:max-w-none" key={index}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </DragScroll>
            </div>
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

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-background rounded-2xl p-8 shadow-card hover-lift transition-smooth group relative">
    {/* Tags */}
    {product.tags && product.tags.length > 0 && (
      <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
        {product.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-black/30 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-sm shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
    <div className="flex items-center justify-center mb-6">
      <img src={product.image} alt={product.name} className="w-36 h-36 object-contain" />
    </div>
    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
      {product.name}
    </h3>
    <p className="text-muted-foreground mb-6 leading-relaxed">
      {product.benefit}
    </p>
    <Button asChild variant="outline"
      className="w-full group-hover:border-primary group-hover:text-primary transition-smooth">
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        Lihat Detail
      </a>
    </Button>
  </div>
);

export default ProductsSection;