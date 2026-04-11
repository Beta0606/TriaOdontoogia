import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Heart, Sparkles } from "lucide-react";

const benefits = [
  { icon: Shield, text: "Tecnología de última generación" },
  { icon: Zap, text: "Tratamientos rápidos y efectivos" },
  { icon: Heart, text: "Atención personalizada" },
  { icon: Sparkles, text: "Resultados garantizados" },
];

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
              Innovación Dental
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-6">
              Tecnología aplicada a{" "}
              <span className="text-primary">tu sonrisa</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              Combinamos la experiencia profesional con equipamiento de última
              generación para brindarte tratamientos precisos, cómodos y con
              resultados excepcionales.
            </p>

            <div className="space-y-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <b.icon size={22} className="text-primary" />
                  </div>
                  <p className="font-body text-foreground font-medium">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover"
              >
                <source
                  src="https://res.cloudinary.com/dsxdmimiz/video/upload/v1775875733/Animaci%C3%B3n_Dental_Solicitud_y_Resultado_ugge0v.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            {/* Decorative accent */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-3xl border-2 border-primary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
