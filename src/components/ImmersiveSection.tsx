import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import immersiveBg from "@/assets/immersive-bg.jpg";

const ImmersiveSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="relative h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      <motion.img
        src={immersiveBg}
        alt="Clínica dental moderna Tría"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/85 via-surface-dark/60 to-surface-dark/40" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-3xl mx-auto text-center px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-surface-dark-foreground leading-[1.05] mb-6"
        >
          Donde la ciencia se encuentra con{" "}
          <span className="text-secondary">el arte</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-lg md:text-xl text-surface-dark-foreground/70 max-w-xl mx-auto"
        >
          Un espacio diseñado para tu bienestar, con tecnología de punta
          y un equipo comprometido con la excelencia.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ImmersiveSection;
