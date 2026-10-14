"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

const CONTACT_EMAIL = "fisfelipeborges@gmail.com";

export default function Contact() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "—"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const quickLinks = [
    {
      icon: <Mail className="text-accent-fg" />,
      title: t("contact.email"),
      content: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: <Phone className="text-accent-fg" />,
      title: t("contact.whatsapp"),
      content: "+55 51 99236-7575",
      href: "https://wa.me/5551992367575?text=Hello%20Felipe!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.",
    },
    {
      icon: <MapPin className="text-accent-fg" />,
      title: t("contact.location"),
      content: t("contact.city"),
      href: "https://www.google.com/maps/place/Porto+Alegre,+RS/",
    },
  ];

  return (
    <section
      id="contact"
      className="section flex flex-col items-center text-center"
    >
      <SectionHeading
        eyebrow={t("contact.heading")}
        title={t("contact.title")}
        description={t("contact.p")}
      />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-xl text-left space-y-4"
      >
        <div>
          <label htmlFor="contact-name" className="block text-sm text-[#9b9b9b] mb-1.5">
            {t("contact.form.name")}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("contact.form.namePlaceholder")}
            className="w-full rounded-lg bg-[#151515] border border-[#1f1f1f] px-4 py-2.5 text-white placeholder:text-[#8a8a8a] outline-none transition focus:border-[#9b2242] focus-visible:ring-2 focus-visible:ring-[#9b2242]/50"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm text-[#9b9b9b] mb-1.5">
            {t("contact.form.email")}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("contact.form.emailPlaceholder")}
            className="w-full rounded-lg bg-[#151515] border border-[#1f1f1f] px-4 py-2.5 text-white placeholder:text-[#8a8a8a] outline-none transition focus:border-[#9b2242] focus-visible:ring-2 focus-visible:ring-[#9b2242]/50"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm text-[#9b9b9b] mb-1.5">
            {t("contact.form.message")}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("contact.form.messagePlaceholder")}
            className="w-full rounded-lg bg-[#151515] border border-[#1f1f1f] px-4 py-2.5 text-white placeholder:text-[#8a8a8a] outline-none transition focus:border-[#9b2242] focus-visible:ring-2 focus-visible:ring-[#9b2242]/50 resize-y"
          />
        </div>

        <button type="submit" className="btn btn-accent w-full sm:w-auto">
          <Send className="w-4 h-4" aria-hidden="true" />
          {t("contact.form.submit")}
        </button>
        <p className="text-xs text-[#9b9b9b]">{t("contact.form.note")}</p>
      </motion.form>

      <div className="mt-12 grid sm:grid-cols-3 gap-3 sm:gap-6 max-w-2xl w-full">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px rgba(155, 34, 66, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex flex-row sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center bg-[#151515] border border-[#1f1f1f] rounded-xl px-4 py-3 sm:py-5 cursor-pointer group transition"
          >
            {item.icon}
            <div>
              <p className="text-xs text-[#9b9b9b]">{item.title}</p>
              <p className="text-white text-sm break-words">{item.content}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-sm text-[#9b9b9b] mt-10"
      >
        {t("contact.foot")}
      </motion.p>
    </section>
  );
}
