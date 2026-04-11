import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    text: "Excelente atención y profesionalismo. El equipo de Tría me hizo sentir cómoda desde el primer momento. Mi sonrisa nunca estuvo mejor.",
    rating: 5,
  },
  {
    name: "Carlos Fernández",
    text: "Después de años postergando mi tratamiento de ortodoncia, encontré en Tría el lugar perfecto. Tecnología de primera y un trato humano excepcional.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    text: "Llevé a mis hijos y fue una experiencia increíble. La Dra. Molina tiene una paciencia y dedicación admirables. Súper recomendable.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="opiniones" className="py-24 lg:py-40 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Testimonios</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Lo que dicen nuestros pacientes
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative min-h-[280px]">
          <Quote size={80} className="text-primary/10 absolute -top-4 left-0" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center relative z-10"
            >
              <div className="flex justify-center gap-1 mb-8">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-10 italic">
                "{testimonials[current].text}"
              </p>
              <p className="font-body text-lg font-semibold text-primary">
                {testimonials[current].name}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i === current ? "bg-primary w-8" : "bg-border hover:bg-primary/30"
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
