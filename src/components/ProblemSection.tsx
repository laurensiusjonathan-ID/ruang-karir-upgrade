import { CheckCircle2, X } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Kirim CV ke banyak perusahaan tapi nggak ada panggilan?",
    "Dipanggil interview tapi mentok jawabannya?", 
    "Nggak tahu mau kerja di bidang apa?",
    "Bingung cara mulai upgrade skill?"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pernah Ngerasa Kayak Gini? 🤔
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Jangan khawatir, kamu nggak sendiri...
          </p>

          {/* Problems List */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-6 card-gradient rounded-xl shadow-card hover-lift">
                <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-left text-foreground font-medium">{problem}</p>
              </div>
            ))}
          </div>

          {/* Closing Message */}
          <div className="bg-primary/10 rounded-2xl p-8 border-l-4 border-primary">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              Kamu nggak sendiri. Ratusan member di{" "}
              <span className="text-primary">Ruang Karir</span> juga ngalamin hal yang sama 
              sebelum akhirnya naik level. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;