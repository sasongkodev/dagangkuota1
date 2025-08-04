import { useState } from "react";
import { Wifi, Smartphone, Zap, TrendingUp, Shield, Clock, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

const PaketInternet = () => {
  const [selectedOperator, setSelectedOperator] = useState("all");

  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-violet-600" />,
      title: "Semua Operator",
      desc: "Tersedia untuk Telkomsel, Indosat, XL, Tri, dan lainnya"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Harga Terbaik",
      desc: "Harga kompetitif & transparan tanpa biaya tersembunyi"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Instan Aktif",
      desc: "Langsung masuk & siap digunakan dalam hitungan detik"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Aman & Terpercaya",
      desc: "Transaksi aman dengan sistem terpercaya"
    }
  ];

  const packages = [
    {
      operator: "Telkomsel",
      kuota: "15 GB",
      masaAktif: "30 Hari",
      harga: "Rp 55.000",
      originalPrice: "Rp 65.000",
      popular: true,
      icon: "📶",
      color: "from-red-500 to-orange-500"
    },
    {
      operator: "Indosat",
      kuota: "10 GB",
      masaAktif: "30 Hari",
      harga: "Rp 40.000",
      originalPrice: "Rp 48.000",
      popular: false,
      icon: "📡",
      color: "from-yellow-500 to-red-500"
    },
    {
      operator: "XL",
      kuota: "7 GB",
      masaAktif: "7 Hari",
      harga: "Rp 20.000",
      originalPrice: "Rp 25.000",
      popular: false,
      icon: "📱",
      color: "from-blue-500 to-purple-500"
    },
    {
      operator: "Tri",
      kuota: "20 GB",
      masaAktif: "30 Hari",
      harga: "Rp 45.000",
      originalPrice: "Rp 55.000",
      popular: true,
      icon: "⚡",
      color: "from-green-500 to-blue-500"
    },
    {
      operator: "Axis",
      kuota: "5 GB",
      masaAktif: "15 Hari",
      harga: "Rp 25.000",
      originalPrice: "Rp 30.000",
      popular: false,
      icon: "🌐",
      color: "from-purple-500 to-pink-500"
    },
    {
      operator: "Smartfren",
      kuota: "12 GB",
      masaAktif: "30 Hari",
      harga: "Rp 35.000",
      originalPrice: "Rp 42.000",
      popular: false,
      icon: "🚀",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const filteredPackages = selectedOperator === "all" 
    ? packages 
    : packages.filter(pkg => pkg.operator.toLowerCase().includes(selectedOperator.toLowerCase()));

  const operators = ["all", "telkomsel", "indosat", "xl", "tri", "axis", "smartfren"];

  return (
    <section id="paket" className="bg-gradient-to-b from-white to-gray-50 px-4 py-20 md:px-10 lg:px-16">
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
            Dapatkan paket internet terbaik dengan harga kompetitif. Cocok untuk penggunaan pribadi, 
            keluarga, maupun kebutuhan bisnis. Semua paket langsung aktif dan bisa digunakan kapan saja.
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
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
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
              {operator === "all" ? "Semua Operator" : operator.charAt(0).toUpperCase() + operator.slice(1)}
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
                    <h3 className="text-xl font-bold text-gray-900">{item.operator}</h3>
                    <p className="text-gray-600 text-sm">Paket Internet</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Wifi className="w-5 h-5 text-violet-600 mr-2" />
                    <span className="font-semibold text-gray-900">{item.kuota}</span>
                  </div>
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
                    <span className="text-2xl font-bold text-gray-900">{item.harga}</span>
                    <span className="text-gray-500 line-through text-sm">{item.originalPrice}</span>
                  </div>
                  <div className="mt-1 text-green-600 text-sm font-medium">
                    Hemat {Math.round(
                      (
                        (parseInt(item.originalPrice.replace(/[^0-9]/g, '')) - parseInt(item.harga.replace(/[^0-9]/g, '')))
                        / parseInt(item.originalPrice.replace(/[^0-9]/g, ''))
                        * 100
                      )
                    )}%
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-violet-600 to-blue-600 text-white py-3 rounded-xl font-medium hover:from-violet-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Beli Sekarang
                </button>
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
              "Paket internetnya murah dan langsung aktif. Sangat membantu untuk kebutuhan kerja dari rumah!"
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
            <a
              href="https://wa.me/62XXXXXXXXXX?text=Halo%20saya%20mau%20beli%20paket%20internet"
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