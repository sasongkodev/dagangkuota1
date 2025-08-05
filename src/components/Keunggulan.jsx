// Keunggulan.jsx
import { useState, useEffect } from "react";
import {
  CheckCircle,
  Wallet,
  Package,
  Zap,
  Headphones,
  BarChart,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const Keunggulan = () => {
  // Animasi counter untuk statistik
  const [transactionSuccessRate, setTransactionSuccessRate] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransactionSuccessRate(99.9);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const advantages = [
    {
      icon: <Wallet className="w-8 h-8 text-green-600" />,
      title: "Harga Terjangkau, Bisa Untung Lagi",
      desc: "Nikmati harga yang ramah di kantong, cocok untuk pemakaian sendiri atau dijual kembali. Cuan jalan terus!",
      color: "bg-green-50",
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Produk Super Lengkap",
      desc: "Satu platform untuk semua: Pulsa, Paket Data, Token PLN, PPOB, TV Prabayar, dan Voucher Internet — lengkap dan selalu update.",
      color: "bg-blue-50",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Transaksi Cepat & Praktis",
      desc: "Beli apa pun langsung dari HP-mu. Proses otomatis dan real-time, tanpa ribet.",
      color: "bg-yellow-50",
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-600" />,
      title: "Layanan Pelanggan Aktif 24 Jam",
      desc: "Kami selalu siap bantu kapan saja, lewat WhatsApp atau aplikasi. Aman, nyaman, dan responsif.",
      color: "bg-purple-50",
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-600" />,
      title: "99,9% Transaksi Sukses",
      desc: "Dengan sistem otomatis dan server stabil, transaksi kamu hampir tanpa gagal. Kecepatan dan keandalan adalah prioritas kami.",
      color: "bg-red-50",
      stat: true,
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Segera Tersedia di Play Store",
      desc: "Gunakan versi web sekarang, dan nantikan aplikasi mobile kami yang segera hadir di Google Play Store. Transaksi akan makin mudah dan nyaman di genggaman.",
      color: "bg-indigo-50",
    },
  ];

  return (
    <section
      id="fitur"
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white"
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
            <CheckCircle className="w-4 h-4 mr-2" />
            Mengapa Memilih Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kenapa Pilih{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              DagangKuota.com
            </span>
            ?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            DagangKuota.com bukan sekadar tempat beli pulsa & kuota. Kami hadir
            sebagai solusi digital terpercaya untuk kebutuhan harian kamu — baik
            untuk pribadi maupun peluang bisnis.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${item.color} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>

                {/* Special stat display for transaction success rate */}
                {item.stat && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-red-600">
                        {transactionSuccessRate}%
                      </div>
                      <div className="ml-3 text-gray-700 font-medium">
                        Transaksi Sukses
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/30"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-violet-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Dipercaya oleh Ribuan Pengguna di Seluruh Indonesia
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600">
                  10K+
                </div>
                <div className="text-gray-600 mt-1">Pengguna Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600">
                  50K+
                </div>
                <div className="text-gray-600 mt-1">Transaksi/Bulan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600">
                  24/7
                </div>
                <div className="text-gray-600 mt-1">Layanan Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600">
                  5★
                </div>
                <div className="text-gray-600 mt-1">Rating Pelanggan</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Keunggulan;
