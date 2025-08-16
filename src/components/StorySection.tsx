import { Users, TrendingUp, Award, Zap } from "lucide-react";

const StorySection = () => {
  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "750+",
      label: "Anggota Aktif",
      color: "text-primary"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "Tiap 2 Minggu",
      label: "Program Level Up Skill Gratis",
      color: "text-secondary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "100%",
      label: "Pendampingan Karir di komunitas",
      color: "text-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "Puluhan",
      label: "Member Dapet Kerja Cepat",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Berawal dari Satu Ide... 💡
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Dalam waktu singkat, Ruang Karir berkembang menjadi komunitas career self-help 
              yang membantu ratusan orang mencapai karier impian mereka.
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-8 card-gradient rounded-2xl shadow-card hover-lift">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${achievement.color}`}>
                  {achievement.number}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>

          {/* Story Content */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Dari 0 hingga 750+ Member dalam 1 Bulan! 🎉
              </h3>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Dimulai dari keinginan sederhana untuk membantu sesama jobseeker, 
                  Ruang Karir kini menjadi rumah bagi ratusan profesional yang saling mendukung.
                </p>
                <p>
                  Setiap hari, anggota komunitas berbagi tips karier, review CV, latihan interview, 
                  dan merayakan kesuksesan bersama. <span className="font-semibold text-primary">Dan sekarang, 
                  saatnya kamu bergabung!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;