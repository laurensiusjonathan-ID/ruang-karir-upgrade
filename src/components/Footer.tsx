const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/22bfbbbf-7fbd-45d8-bf0b-58e564d02536.png" 
              alt="Ruang Karir Logo" 
              className="w-16 h-16 mx-auto mb-4 filter invert"
            />
            <h3 className="text-2xl font-bold">Ruang Karir</h3>
            <p className="text-background/70 mt-2">
              Komunitas Career Self-Help untuk Upgrade Karier
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-2 mb-8">
            <p className="text-background/70">
              📧 hello@ruangkarir.com
            </p>
            <p className="text-background/70">
              📱 WhatsApp: +62 xxx-xxxx-xxxx
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/70 text-sm">
              © 2024 Ruang Karir. All rights reserved. Made with ❤️ for Indonesian jobseekers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;