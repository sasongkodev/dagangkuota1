// CaraBeli.jsx
import { useState } from "react";
import {
  MessageCircle,
  Globe,
  Smartphone,
  ArrowRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";

const CaraBeli = () => {
  // --- Variabel Nomor WhatsApp ---
  // Ganti nomor di sini jika ada perubahan
  const WHATSAPP_NUMBER = "+6288216379780";
  // --- Akhir Variabel Nomor WhatsApp ---

  const steps = [
    {
      icon: <Globe className="w-8 h-8 text-violet-600" />,
      title: "Lewat Website (Langsung ke WhatsApp)",
      steps: [
        "Kunjungi website kami: dagangkuota.com",
        "Pilih produk yang kamu butuhkan",
        "Klik tombol “Pesan via WhatsApp”",
        "Tim kami akan bantu proses pesananmu dengan cepat dan ramah",
      ],
      color: "bg-violet-50",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Lewat Aplikasi (Segera Hadir di Play Store)",
      steps: [
        "Nantikan aplikasi DagangKuota.com di Google Play Store",
        "Beli pulsa, kuota, token, dan PPOB langsung dari aplikasi",
        "Transaksi otomatis, cepat, dan bisa kamu lakukan kapan saja!",
      ],
      color: "bg-blue-50",
    },
  ];

  // Fungsi untuk membuat link WhatsApp
  const getWhatsAppLink = () => {
    const message =
      "Halo, saya tertarik membeli produk di DagangKuota.com. Mohon bantuannya.";
    return `https://wa.me/${WHATSAPP_NUMBER.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="carabeli"
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-6">
            <Download className="w-4 h-4 mr-2" />
            Cara Pembelian
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              🛒 Cara Beli
            </span>{" "}
            di DagangKuota.com
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Belanja pulsa, kuota, dan kebutuhan digital lainnya kini makin
            gampang! Kamu bisa pilih cara yang paling nyaman:
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 shadow-lg border border-gray-100 ${step.color} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-white rounded-xl shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {step.steps.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-3">
                        <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {index + 1}.{itemIndex + 1}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/20"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/20"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-violet-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            🎯 Mau pesan sekarang?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Langsung aja klik tombol di bawah, dan kami siap bantu 24 jam
            nonstop!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Tombol Pesan Sekarang via WhatsApp */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-center hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Pesan Sekarang via WhatsApp</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            {/* Tombol Nantikan Aplikasi di Play Store */}
            <button
              disabled
              className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-8 py-4 rounded-full font-bold text-center cursor-not-allowed flex items-center justify-center opacity-80"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              <span>Nantikan Aplikasi di Play Store</span>
            </button>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            <span className="inline-flex items-center px-3 py-1 bg-violet-100 text-violet-800 rounded-full">
              🔘 CTA
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaraBeli;
