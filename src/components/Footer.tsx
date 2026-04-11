import { MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface-dark py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <img
            src="https://res.cloudinary.com/dsxdmimiz/image/upload/v1775878963/Dise%C3%B1o_sin_t%C3%ADtulo_5_1_jzqdgv.png"
            alt="Tría Odontología"
            className="h-12 w-auto mb-6 brightness-0 invert opacity-80"
          />
          <p className="font-body text-sm text-surface-dark-foreground/50 leading-relaxed max-w-xs">
            Odontología especializada con tecnología de vanguardia y atención personalizada en Lomas de Zamora.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-surface-dark-foreground mb-6">Contacto</h4>
          <div className="space-y-4 font-body text-sm text-surface-dark-foreground/50">
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-primary shrink-0" /> Lomas de Zamora, Buenos Aires
            </p>
            <a
              href="https://wa.me/5491178265522"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
            >
              <Phone size={16} className="text-primary shrink-0" /> +54 9 11 7826-5522
            </a>
            <a
              href="https://www.instagram.com/tria.odonto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-300"
            >
              <Instagram size={16} className="text-primary shrink-0" /> @tria.odonto
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold text-surface-dark-foreground mb-6">Horarios</h4>
          <div className="space-y-3 font-body text-sm text-surface-dark-foreground/50">
            <p>Lunes a Viernes: 9:00 - 20:00</p>
            <p>Sábados: 9:00 - 14:00</p>
          </div>
        </div>
      </div>
      <div className="border-t border-surface-dark-foreground/10 pt-8 text-center">
        <p className="font-body text-sm text-surface-dark-foreground/30">
          © {new Date().getFullYear()} Tría Odontología Especializada. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
