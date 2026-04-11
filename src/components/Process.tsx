import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Search, Stethoscope, HeartPulse } from "lucide-react";

const steps = [
  { icon: CalendarCheck, number: "01", title: "Consulta", desc: "Reservá tu cita y contanos tus necesidades. Te recibiremos en un ambiente cálido y profesional." },
  { icon: Search, number: "02", title: "Diagnóstico", desc: "Evaluamos tu salud bucal con tecnología avanzada para diseñar un plan de tratamiento a tu medida." },
  { icon: Stethoscope, number: "03", title: "Tratamiento", desc: "Ejecutamos el plan con la más alta tecnología, priorizando tu comodidad y resultados óptimos." },
  { icon: HeartPulse, number: "04", title: "Seguimiento", desc: "Controlamos tu evolución y te acompañamos para mantener los resultados a largo plazo." },
];

const Process = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.5"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" className="py-24 lg:py-40 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Cómo Funciona</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Tu Proceso
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical line bg */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-[2px] bg-border" />
          {/* Animated fill line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 w-[2px] bg-primary origin-top"
          />

          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`relative flex items-start gap-10 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <step.icon size={28} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-24 lg:ml-0 lg:w-[calc(50%-4rem)] ${
                  i % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:ml-auto"
                }`}>
                  <span className="font-body text-5xl font-bold text-primary/15">{step.number}</span>
                  <h3 className="font-display text-2xl font-bold text-foreground -mt-3 mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
