import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  // Placeholder testimonials - in real implementation, these would be actual screenshots
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Marketing Executive", 
      content: "Alhamdulillah setelah ikut program InterviewMate, akhirnya diterima di perusahaan impian! Materinya sangat praktis dan applicable.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Rizki A.",
      role: "Software Engineer",
      content: "CVMate bener-bener game changer! CV saya yang dulunya sering ditolak, sekarang hampir selalu lolos screening tahap awal.",
      rating: 5, 
      avatar: "👨‍💻"
    },
    {
      name: "Maya L.",
      role: "Fresh Graduate",
      content: "Career Mapping Guide membantu saya menemukan passion dan jalur karier yang tepat. Sekarang saya confident dengan pilihan saya!",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Budi S.",
      role: "Career Changer", 
      content: "Tadinya bingung mau switch career ke bidang apa. Setelah 3 Days Career Clarity, sekarang udah punya roadmap yang jelas!",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Apa Kata Mereka yang Udah Coba? ⭐
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Bukti nyata dari member yang berhasil upgrade karier
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-card hover-lift">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-primary/60" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground font-medium mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Style Note */}
          <div className="bg-secondary/10 border-l-4 border-secondary rounded-r-2xl p-6 text-center">
            <p className="text-muted-foreground">
              💬 <strong>Real testimonials</strong> dari member Ruang Karir yang berhasil upgrade karier
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;