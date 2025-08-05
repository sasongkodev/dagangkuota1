import { useState } from "react";
import {
  Wifi,
  Smartphone,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const PaketInternet = () => {
  // --- Variabel Nomor WhatsApp ---
  // Ganti nomor di sini jika ada perubahan
  const WHATSAPP_NUMBER = "+6288216379780";
  // --- Akhir Variabel Nomor WhatsApp ---

  const [selectedOperator, setSelectedOperator] = useState("all");
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-violet-600" />,
      title: "Semua Operator",
      desc: "Tersedia untuk Telkomsel, Indosat, XL, Tri, dan lainnya",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Harga Terbaik",
      desc: "Harga kompetitif & transparan tanpa biaya tersembunyi",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Instan Aktif",
      desc: "Langsung masuk & siap digunakan dalam hitungan detik",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Aman & Terpercaya",
      desc: "Transaksi aman dengan sistem terpercaya",
    },
  ];
  // Paket internet yang diperbarui berdasarkan file yang diunggah
  const packages = [
    {
      operator: "Telkomsel",
      namaPaket: "Hot Promo",
      kuota: "N/A", // Informasi kuota tidak diberikan
      masaAktif: "14 Hari",
      harga: "Rp 30.000",
      originalPrice: "Rp 35.000", // Asumsi harga asli, bisa disesuaikan
      popular: false,
      icon: "📶",
      color: "from-red-500 to-orange-500",
    },
    {
      operator: "Telkomsel",
      namaPaket: "KaHot Promo",
      kuota: "N/A", // Informasi kuota tidak diberikan
      masaAktif: "30 Hari",
      harga: "Rp 35.000",
      originalPrice: "Rp 40.000", // Asumsi harga asli, bisa disesuaikan
      popular: true,
      icon: "📶",
      color: "from-red-500 to-orange-500",
    },
    {
      operator: "Telkomsel",
      namaPaket: "HOTPROMO",
      kuota: "N/A", // Informasi kuota tidak diberikan
      masaAktif: "30 Hari",
      harga: "Rp 53.000",
      originalPrice: "Rp 60.000", // Asumsi harga asli, bisa disesuaikan
      popular: false,
      icon: "📶",
      color: "from-red-500 to-orange-500",
    },
    {
      operator: "Smartfren",
      namaPaket: "Smart Unlimited Nonstop 3GB",
      kuota: "3GB + Unlimited App",
      masaAktif: "14 Hari",
      harga: "Rp 18.000",
      originalPrice: "Rp 20.000", // Asumsi harga asli, bisa disesuaikan
      popular: false,
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
    },
    {
      operator: "Smartfren",
      namaPaket: "Smart Unlimited Nonstop 4GB",
      kuota: "4GB + Unlimited App",
      masaAktif: "14 Hari",
      harga: "Rp 20.000",
      originalPrice: "Rp 22.000", // Asumsi harga asli, bisa disesuaikan
      popular: false,
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
    },
    {
      operator: "Smartfren",
      namaPaket: "Smart Unlimited Nonstop 6GB",
      kuota: "6GB + Unlimited App",
      masaAktif: "30 Hari",
      harga: "Rp 40.000",
      originalPrice: "Rp 45.000", // Asumsi harga asli, bisa disesuaikan
      popular: true,
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
    },
    {
      operator: "Smartfren",
      namaPaket: "Smart Unlimited Nonstop 12GB",
      kuota: "12GB + Unlimited App",
      masaAktif: "30 Hari",
      harga: "Rp 58.000",
      originalPrice: "Rp 65.000", // Asumsi harga asli, bisa disesuaikan
      popular: false,
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
    },
    {
      operator: "Smartfren",
      namaPaket: "Smart Unlimited Nonstop 30GB",
      kuota: "30GB + Unlimited App",
      masaAktif: "30 Hari",
      harga: "Rp 79.000",
      originalPrice: "Rp 85.000", // Asumsi harga asli, bisa disesuaikan
      popular: false,
      icon: "🚀",
      color: "from-cyan-500 to-blue-500",
    },
  ];
  const filteredPackages =
    selectedOperator === "all"
      ? packages
      : packages.filter((pkg) =>
          pkg.operator.toLowerCase().includes(selectedOperator.toLowerCase())
        );
  // Perbarui daftar operator agar sesuai dengan paket yang tersedia
  const operators = ["all", "telkomsel", "smartfren"];

  // Fungsi untuk membuat link WhatsApp
  const getWhatsAppLink = (packageName, operator, price) => {
    const message = `Halo, saya tertarik membeli paket *${packageName}* dari *${operator}* seharga *${price}*. Mohon bantuannya.`;
    return `https://wa.me/${WHATSAPP_NUMBER.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="paket"
      className="bg-gradient-to-b from-white to-gray-50 px-4 py-20 md:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-6">
            <Wifi className="w-4 h-4 mr-2" />
            Paket Internet Terlengkap
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Kuota Internet untuk
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Semua Kebutuhanmu
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Dapatkan paket internet terbaik dengan harga kompetitif. Cocok untuk
            penggunaan pribadi, keluarga, maupun kebutuhan bisnis. Semua paket
            langsung aktif dan bisa digunakan kapan saja.
          </p>
        </motion.div>
        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {operators.map((operator) => (
            <button
              key={operator}
              onClick={() => setSelectedOperator(operator)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedOperator === operator
                  ? "bg-violet-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {operator === "all"
                ? "Semua Operator"
                : operator.charAt(0).toUpperCase() + operator.slice(1)}
            </button>
          ))}
        </motion.div>
        {/* Packages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredPackages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {item.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-bl-2xl text-xs font-bold">
                  POPULER
                </div>
              )}
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.operator}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.namaPaket}</p>{" "}
                    {/* Menampilkan nama paket */}
                  </div>
                </div>
                <div className="mb-6">
                  {/* Menampilkan kuota jika tersedia */}
                  {item.kuota !== "N/A" && (
                    <div className="flex items-center mb-2">
                      <Wifi className="w-5 h-5 text-violet-600 mr-2" />
                      <span className="font-semibold text-gray-900">
                        {item.kuota}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{item.masaAktif}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Langsung Aktif</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {item.harga}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      {item.originalPrice}
                    </span>
                  </div>
                  <div className="mt-1 text-green-600 text-sm font-medium">
                    Hemat{" "}
                    {Math.round(
                      ((parseInt(item.originalPrice.replace(/[^0-9]/g, "")) -
                        parseInt(item.harga.replace(/[^0-9]/g, ""))) /
                        parseInt(item.originalPrice.replace(/[^0-9]/g, ""))) *
                        100
                    )}
                    %
                  </div>
                </div>
                {/* Tombol Beli Sekarang dengan link WhatsApp */}
                <a
                  href={getWhatsAppLink(
                    item.namaPaket,
                    item.operator,
                    item.harga
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white py-3 rounded-xl font-medium hover:from-violet-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Beli Sekarang
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6">
              "Paket internetnya murah dan langsung aktif. Sangat membantu untuk
              kebutuhan kerja dari rumah!"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                A
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Andi Prasetyo</p>
                <p className="text-gray-600 text-sm">Pengguna Setia</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Siap Mencoba Paket Internet Terbaik?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#paket"
              className="bg-violet-600 text-white px-8 py-4 rounded-full font-medium hover:bg-violet-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Wifi className="w-5 h-5 mr-2" />
              Lihat Semua Paket
            </a>
            {/* Tombol Pesan via WhatsApp di CTA juga diperbarui */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(
                /\D/g,
                ""
              )}?text=Halo%20saya%20mau%20beli%20paket%20internet`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full font-medium hover:bg-violet-50 transition-all duration-300 flex items-center justify-center"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PaketInternet;
