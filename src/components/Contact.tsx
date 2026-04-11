import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Check, Send } from "lucide-react";

const treatments = [
  "Consulta general", "Limpieza dental", "Blanqueamiento", "Extracción dental",
  "Ortodoncia", "Endodoncia", "Periodoncia", "Implantes", "Odontopediatría", "Control preventivo",
];

const availabilities = ["Mañana", "Tarde", "Cualquier horario"];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nombre: "", dni: "", sede: "Lomas de Zamora", tratamiento: "",
    telefono: "", email: "", motivo: "", disponibilidad: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const canNext = () => {
    if (step === 1) return form.nombre.trim() && form.dni.trim();
    if (step === 2) return form.sede;
    if (step === 3) return form.tratamiento;
    if (step === 4) return form.telefono.trim() && form.email.trim() && form.disponibilidad;
    return false;
  };

  const sendWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hola, quiero reservar turno:\n\nNombre: ${form.nombre}\nDNI: ${form.dni}\nSucursal: ${form.sede}\nTratamiento: ${form.tratamiento}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nDisponibilidad: ${form.disponibilidad}${form.motivo ? `\nMotivo: ${form.motivo}` : ""}`
    );
    window.open(`https://wa.me/5491178265522?text=${msg}`, "_blank");
  };

  const Row = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-start py-3 border-b border-border last:border-0">
      <span className="font-body text-sm text-muted-foreground w-36 shrink-0">{label}</span>
      <span className="font-body text-sm font-medium text-foreground text-right">{value}</span>
    </div>
  );

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-3">Contacto</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Reservá tu turno
          </h2>
          <p className="font-body text-muted-foreground">Completá el formulario y nos comunicaremos con vos.</p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {/* Progress — only show for steps 1–4 */}
          {step <= 4 && (
            <div className="flex items-center justify-between mb-10 px-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-body text-sm font-semibold transition-all duration-300 ${
                    step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {step > s ? <Check size={16} /> : s}
                  </div>
                  {s < 4 && <div className={`w-12 sm:w-20 h-0.5 mx-2 transition-all duration-300 ${step > s ? "bg-primary" : "bg-border"}`} />}
                </div>
              ))}
            </div>
          )}

          <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
            <AnimatePresence mode="wait">

              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h3 className="font-display text-xl font-semibold text-foreground">Datos personales</h3>
                  <input
                    type="text" placeholder="Nombre completo" value={form.nombre}
                    onChange={(e) => update("nombre", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                  <input
                    type="text" placeholder="DNI" value={form.dni}
                    onChange={(e) => update("dni", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h3 className="font-display text-xl font-semibold text-foreground">Elegí tu sede</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      onClick={() => update("sede", "Lomas de Zamora")}
                      className={`p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                        form.sede === "Lomas de Zamora" ? "border-primary bg-primary/5" : "border-border"
                      }`}
                    >
                      <MapPin size={20} className="text-primary mb-2" />
                      <p className="font-body text-sm font-semibold text-foreground">Lomas de Zamora</p>
                    </button>
                    {["Próximamente", "Próximamente"].map((_, i) => (
                      <div key={i} className="p-5 rounded-2xl border-2 border-border opacity-40 cursor-not-allowed">
                        <MapPin size={20} className="text-muted-foreground mb-2" />
                        <p className="font-body text-sm font-semibold text-muted-foreground">Próximamente</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h3 className="font-display text-xl font-semibold text-foreground">Elegí tu tratamiento</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {treatments.map((t) => (
                      <button
                        key={t}
                        onClick={() => update("tratamiento", t)}
                        className={`px-4 py-3 rounded-xl border-2 font-body text-sm transition-all duration-300 text-left ${
                          form.tratamiento === t ? "border-primary bg-primary/5 text-foreground font-medium" : "border-border text-muted-foreground hover:border-primary/30"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                  <h3 className="font-display text-xl font-semibold text-foreground">Datos de contacto</h3>
                  <input
                    type="tel" placeholder="Teléfono" value={form.telefono}
                    onChange={(e) => update("telefono", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                  <input
                    type="email" placeholder="Email" value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                  <textarea
                    placeholder="Motivo breve (opcional)" value={form.motivo}
                    onChange={(e) => update("motivo", e.target.value)}
                    rows={2}
                    className="w-full bg-background border border-border rounded-xl px-5 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  />
                  <div>
                    <p className="font-body text-sm text-muted-foreground mb-3">Disponibilidad horaria</p>
                    <div className="flex gap-3">
                      {availabilities.map((a) => (
                        <button
                          key={a}
                          onClick={() => update("disponibilidad", a)}
                          className={`px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                            form.disponibilidad === a ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"
                          }`}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Summary / confirmation */}
              {step === 5 && (
                <motion.div key="s5" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="space-y-5">
                  <div className="text-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Send size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">Revisá tu solicitud</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">Este es el mensaje que se enviará por WhatsApp</p>
                  </div>

                  <div className="bg-background rounded-2xl border border-border px-5 py-2">
                    <Row label="Nombre" value={form.nombre} />
                    <Row label="DNI" value={form.dni} />
                    <Row label="Sede" value={form.sede} />
                    <Row label="Tratamiento" value={form.tratamiento} />
                    <Row label="Teléfono" value={form.telefono} />
                    <Row label="Email" value={form.email} />
                    <Row label="Disponibilidad" value={form.disponibilidad} />
                    {form.motivo && <Row label="Motivo" value={form.motivo} />}
                  </div>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    Al confirmar, se abrirá WhatsApp con este mensaje listo para enviar.
                  </p>
                </motion.div>
              )}

            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="px-6 py-3 rounded-full border border-border font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {step === 5 ? "Editar" : "Anterior"}
                </button>
              )}
              <div className="ml-auto">
                {step < 4 ? (
                  <button
                    onClick={() => canNext() && setStep((s) => s + 1)}
                    disabled={!canNext()}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold disabled:opacity-40 hover:bg-primary/90 transition-all duration-300"
                  >
                    Siguiente
                  </button>
                ) : step === 4 ? (
                  <button
                    onClick={() => canNext() && setStep(5)}
                    disabled={!canNext()}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold disabled:opacity-40 hover:bg-primary/90 transition-all duration-300"
                  >
                    Revisar pedido
                  </button>
                ) : (
                  <button
                    onClick={sendWhatsApp}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
                  >
                    <Check size={16} />
                    Confirmar y enviar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
