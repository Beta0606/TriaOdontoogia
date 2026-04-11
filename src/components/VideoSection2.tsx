import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VideoSection2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-40 bg-card overflow-hidden">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Video Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
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
                  src="https://res.cloudinary.com/dsxdmimiz/video/upload/v1775877504/Futuristic_Dental_Animation_Generated_s5wxud.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-4">
              Compromiso
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.05] mb-6">
              Precisión y cuidado en{" "}
              <span className="text-primary">cada detalle</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Cada tratamiento es planificado con rigor científico y ejecutado
              con la más avanzada tecnología dental, garantizando resultados
              excepcionales y una experiencia confortable.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "+500", label: "Pacientes atendidos" },
                { num: "+15", label: "Años de experiencia" },
                { num: "99%", label: "Satisfacción" },
                { num: "3", label: "Especialistas" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <p className="font-display text-3xl font-bold text-primary">{stat.num}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection2;
