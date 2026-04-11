import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamImage = "https://res.cloudinary.com/dsxdmimiz/image/upload/v1775875364/tria.odonto_655181319_17854425927684388_1785971982902671219_n_agqpvz.jpg";

const members = [
  { name: "Dr. Agustín Biagi", role: "Especialista en Odontopediatría" },
  { name: "Dra. Luciana Noir", role: "Especialista en Ortodoncia" },
  { name: "Dra. Mayra Molina", role: "Odontología General" },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipo" className="py-24 lg:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Profesionales</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Nuestro Equipo
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Big team photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={teamImage}
                alt="Equipo Tría Odontología"
                loading="lazy"
                className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full rounded-3xl bg-primary/10" />
          </motion.div>

          {/* Team members */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              Un equipo de profesionales apasionados por la odontología,
              comprometidos con tu bienestar y la excelencia en cada tratamiento.
            </p>

            {members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-500"
              >
                <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-body text-muted-foreground mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
