import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <span className="font-bold text-2xl">Little Sprouts</span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md">
              Nurturing curious minds through play, nature, and meaningful experiences. 
              Building a foundation of love, respect, and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-background/70">{t('footer.address')}</p>
                  <p className="text-sm">123 Learning Lane, Education City</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-background/70">{t('footer.phone')}</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-background/70">{t('footer.email')}</p>
                  <p className="text-sm">hello@littlesprouts.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <p className="text-background/70">Monday - Friday</p>
              <p>7:30 AM - 5:30 PM</p>
              <p className="text-background/70 mt-4">Saturday - Sunday</p>
              <p>Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Little Sprouts Primary School. {t('footer.rights')}.
            </p>
            <p className="text-sm text-background/60 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for little learners
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
