"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider"; // 👈 import necessário

export default function Contact() {
  const { t } = useI18n(); // 👈 acesso às traduções

  return (
    <section
      id="contact"
      className="section flex flex-col items-center text-center"
    >
      {/* Título fixo acima */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="uppercase tracking-widest text-[#9b9b9b] text-sm">
          {t("contact.heading")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl space-y-8"
      >
        {/* Título e introdução */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {t("contact.title")}
          </h2>
          <p className="text-[#9b9b9b] leading-relaxed">
            {t("contact.p")}
          </p>
        </div>

        {/* Cards de contato centralizados */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 justify-center">
          {[
            {
              icon: <Mail className="text-[#9b2242]" />,
              title: t("contact.email"),
              content: "felipe.borges@ufcspa.edu.br",
              href: "mailto:felipe.borges@ufcspa.edu.br",
            },
            {
              icon: <Phone className="text-[#9b2242]" />,
              title: t("contact.whatsapp"),
              content: "+55 51 99236-7575",
              href: "https://wa.me/5551992367575?text=Hello%20Felipe!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",
            },
            {
              icon: <MapPin className="text-[#9b2242]" />,
              title: t("contact.location"),
              content: t("contact.city"),
              href: "https://www.google.com/maps/place/Porto+Alegre,+RS/",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(155, 34, 66, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex flex-col items-center gap-3 bg-[#151515] border border-[#1f1f1f] rounded-xl px-8 py-6 min-w-[260px] cursor-pointer overflow-hidden group transition"
            >
              {/* Brilho radial no hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(155,34,66,0.12) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-2">
                {item.icon}
                <div>
                  <p className="text-sm text-[#9b9b9b]">{item.title}</p>
                  <p className="text-white transition">{item.content}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Texto final */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm text-[#9b9b9b] mt-10"
        >
          {t("contact.foot")}
        </motion.p>
      </motion.div>
    </section>
  );
}
