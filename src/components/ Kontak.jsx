// Kontak.jsx
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Mail as MailIcon,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const Kontak = () => {
  // --- Variabel Nomor WhatsApp ---
  // Ganti nomor di sini jika ada perubahan
  const WHATSAPP_NUMBER = "+6288216379780";
  // --- Akhir Variabel Nomor WhatsApp ---

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk membuat link WhatsApp
  const getWhatsAppLink = (message = "") => {
    const fullMessage = message
      ? `Halo, saya ${formData.name} (${formData.email}). ${message}`
      : "Halo, saya ingin menghubungi DagangKuota.com";
    return `https://wa.me/${WHATSAPP_NUMBER.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(fullMessage)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = getWhatsAppLink(`Pesan: ${formData.message}`);
    window.open(whatsappUrl, "_blank");
    // Reset form setelah dikirim
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-violet-600" />,
      title: "Telepon / WhatsApp",
      // Gunakan variabel nomor WhatsApp
      desc: `+${WHATSAPP_NUMBER.replace(/\D/g, "").replace(
        /(\d{2})(\d{4})(\d{4})(\d{4})/,
        "$1 $2-$3-$4"
      )}`,
      action: (
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-violet-600 hover:text-violet-800 font-medium"
        >
          <MessageCircle className="w-4 h-4 mr-1" />
          Chat Sekarang
        </a>
      ),
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      desc: "support@dagangkuota.com",
      action: (
        <a
          href="mailto:support@dagangkuota.com"
          className="mt-3 inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <Send className="w-4 h-4 mr-1" />
          Kirim Email
        </a>
      ),
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Alamat",
      desc: "Jl. Teknologi No. 123, Jakarta Selatan",
      action: (
        <a
          href="https://maps.google.com/?q=Jl. Teknologi No. 123, Jakarta Selatan"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-green-600 hover:text-green-800 font-medium"
        >
          <MapPin className="w-4 h-4 mr-1" />
          Lihat di Peta
        </a>
      ),
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      title: "Jam Operasional",
      desc: "Senin - Minggu: 24 Jam",
      action: (
        <span className="mt-3 inline-flex items-center text-yellow-600 font-medium">
          <Clock className="w-4 h-4 mr-1" />
          Selalu Siap Melayani
        </span>
      ),
    },
  ];

  return (
    <section
      id="kontak"
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
            <MessageCircle className="w-4 h-4 mr-2" />
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Punya Pertanyaan?{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Kami Siap Membantu!
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tim kami siap melayani Anda 24/7. Hubungi kami melalui saluran yang
            paling nyaman untuk Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informasi Kontak
              </h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-xl mr-5">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{info.desc}</p>
                      {info.action}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0 p-3 bg-green-500 rounded-xl mr-5">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Layanan Cepat via WhatsApp
                  </h4>
                  <p className="text-gray-600 mt-1 text-sm">
                    Dapatkan respon instan dari tim kami melalui WhatsApp.
                  </p>
                </div>
              </div>
              <a
                href={getWhatsAppLink("Saya ingin informasi lebih lanjut.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium flex items-center justify-center transition-all duration-300 shadow hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat via WhatsApp Sekarang
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Kirim Pesan
              </h3>
              <p className="text-gray-600 mb-8">
                Kirim pertanyaan atau permintaan Anda, kami akan segera
                merespon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-violet-500 focus:border-violet-500"
                      placeholder="Nama Anda"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Alamat Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-violet-500 focus:border-violet-500"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Pesan Anda
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-violet-500 focus:border-violet-500"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 rounded-xl font-medium flex items-center justify-center transition-all duration-300 shadow hover:shadow-md"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Trust Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-6 border border-violet-200"
            >
              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                  Keamanan & Privasi Terjamin
                </h4>
                <p className="text-gray-600 text-sm">
                  Data Anda aman dengan kami. Kami tidak akan membagikan
                  informasi pribadi Anda kepada pihak ketiga.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
