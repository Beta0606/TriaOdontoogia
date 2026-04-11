import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import imgOrtodoncia from "@/assets/service-ortodoncia.jpg";
import imgEndodoncia from "@/assets/service-endodoncia.jpg";
import imgPeriodoncia from "@/assets/service-periodoncia.jpg";
import imgOdontopediatria from "@/assets/service-odontopediatria.jpg";
import imgLimpieza from "@/assets/service-limpieza.jpg";
import imgImplantes from "@/assets/service-implantes.jpg";

const services = [
  {
    title: "Ortodoncia",
    desc: "Brackets metálicos, estéticos y alineadores invisibles para lograr la sonrisa que siempre soñaste. Tratamientos personalizados para todas las edades.",
    image: imgOrtodoncia,
  },
  {
    title: "Endodoncia",
    desc: "Tratamientos de conducto con microscopía avanzada y técnicas mínimamente invasivas. Salvamos tu pieza dental con precisión y sin dolor.",
    image: imgEndodoncia,
  },
  {
    title: "Periodoncia",
    desc: "Cuidado integral de encías con tecnología láser. Prevención y tratamiento de enfermedades periodontales para una base saludable.",
    image: imgPeriodoncia,
  },
  {
    title: "Odontopediatría",
    desc: "Atención cálida y especializada para los más pequeños. Un ambiente amigable donde los niños aprenden a cuidar su salud bucal.",
    image: imgOdontopediatria,
  },
  {
    title: "Limpieza Profesional",
    desc: "Higiene profunda con ultrasonido para eliminar sarro y manchas. Mantené tu sonrisa brillante y prevenI problemas futuros.",
    image: imgLimpieza,
  },
  {
    title: "Implantes Dentales",
    desc: "Soluciones permanentes de última generación. Recuperá la funcionalidad y estética de tu sonrisa con implantes de titanio.",
    image: imgImplantes,
  },
];

const ServiceBlock = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-0`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="overflow-hidden rounded-3xl">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            width={960}
            height={1280}
            className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`w-full lg:w-1/2 ${isReversed ? "lg:pr-20" : "lg:pl-20"}`}
      >
        <span className="font-body text-sm font-bold text-primary tracking-[0.15em] uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
          {service.title}
        </h3>
        <p className="font-body text-muted-foreground text-lg leading-relaxed">
          {service.desc}
        </p>
      </motion.div>
    </div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="servicios" className="py-24 lg:py-40 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">
            Nuestros Servicios
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Especialidades
          </h2>
        </motion.div>

        <div className="space-y-24 lg:space-y-40">
          {services.map((service, i) => (
            <ServiceBlock key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
