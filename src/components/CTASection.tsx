import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--surface-dark-foreground)) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-[1.05]">
            ¿Listo para transformar
            <br />
            tu sonrisa?
          </h2>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Dá el primer paso hacia la sonrisa que siempre quisiste.
            Nuestro equipo te espera.
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-surface-dark text-surface-dark-foreground px-14 py-5 rounded-full font-body font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Reservar Turno
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
