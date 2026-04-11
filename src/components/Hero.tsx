import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import heroBg from "@/assets/hero-new.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Tría Odontología - Sonrisas saludables"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/50 to-surface-dark/80" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Aviso versión no oficial */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-base md:text-lg text-white/60 tracking-wide mb-4"
          >
            Versión no oficial de Tría Odontología
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-secondary mb-6"
          >
            Odontología Especializada
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-surface-dark-foreground mb-8"
          >
            Tu sonrisa,
            <br />
            <span className="text-secondary">nuestra pasión</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="font-body text-lg md:text-xl text-surface-dark-foreground/70 mb-12 max-w-2xl mx-auto"
          >
            Atención odontológica profesional con tecnología de vanguardia
            en un entorno moderno y confiable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-primary text-primary-foreground px-12 py-5 rounded-full font-body font-semibold text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
            >
              Reservar Turno
            </motion.a>

            <motion.a
              href="https://www.instagram.com/tria.odonto/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-surface-dark-foreground px-8 py-5 rounded-full font-body font-semibold text-base hover:bg-white/20 transition-all duration-300"
            >
              <Instagram size={18} />
              @tria.odonto
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-surface-dark-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-surface-dark-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
