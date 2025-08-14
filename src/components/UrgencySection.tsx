import { Button } from "@/components/ui/button";
import { Gift, Zap, Clock } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Kesempatan Nggak Datang Dua Kali ⚡
          </h2>

          {/* Urgency Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Bonus */}
            <div className="bg-background rounded-2xl p-8 shadow-card hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">🎁 Bonus Minggu Ini</h3>
              <p className="text-muted-foreground">
                <strong className="text-primary">Template CV ATS GRATIS</strong><br />
                untuk pembelian produk apapun
              </p>
            </div>

            {/* Promo Time */}
            <div className="bg-background rounded-2xl p-8 shadow-card hover-lift">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">⚡ Harga Promo</h3>
              <p className="text-muted-foreground">
                Diskon hingga <strong className="text-secondary">50%</strong><br />
                hanya sampai akhir bulan ini
              </p>
            </div>

            {/* Deadline */}
            <div className="bg-background rounded-2xl p-8 shadow-card hover-lift">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-4">⏰ Terbatas</h3>
              <p className="text-muted-foreground">
                Setelah tanggal ini<br />
                <strong className="text-destructive">harga kembali normal</strong>
              </p>
            </div>
          </div>

          {/* Countdown/Urgency Message */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center mb-8">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ⏳ Sisa waktu promo:
              </h3>
              <div className="text-4xl md:text-6xl font-bold mb-4">
                3 HARI
              </div>
              <p className="text-lg opacity-90">
                Jangan sampai menyesal karena tidak ambil kesempatan ini!
              </p>
            </div>
          </div>

          {/* Final Note */}
          <div className="bg-muted rounded-xl p-6">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Pro tip:</strong> Member yang bergabung lebih awal selalu punya advantage lebih besar dalam karier mereka
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;