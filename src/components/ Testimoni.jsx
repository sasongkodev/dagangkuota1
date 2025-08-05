// Testimoni.jsx
import { useState } from "react";
import { Quote, User, Building, GraduationCap, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const Testimoni = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rina",
      age: "27 Tahun",
      occupation: "Pelaku UMKM",
      quote:
        "Sejak pakai DagangKuota.com, saya bisa jualan kuota ke tetangga dengan harga bersaing. Transaksinya cepat, dan CS-nya selalu siap bantu. Cocok banget buat usaha kecil kayak saya!",
      icon: <Building className="w-5 h-5 text-violet-600" />,
      color: "from-violet-50 to-purple-50",
      borderColor: "border-violet-200",
      bgColor: "bg-violet-100",
    },
    {
      id: 2,
      name: "Budi",
      age: "41 Tahun",
      occupation: "Guru",
      quote:
        "Saya sering isi kuota dan token PLN lewat DagangKuota. Gampang banget, tinggal klik via WhatsApp, langsung diproses. Enggak perlu ribet ke konter.",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      color: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      name: "Andi",
      age: "19 Tahun",
      occupation: "Mahasiswa",
      quote:
        "Lagi deadline, kuota abis, panik dong. Untung ada DagangKuota, isi kuota cuma hitungan detik. Sekarang jadi langganan, hemat dan cepet!",
      icon: <UserCircle className="w-5 h-5 text-green-600" />,
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      bgColor: "bg-green-100",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section
      id="testimoni"
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
            <Quote className="w-4 h-4 mr-2" />
            Ulasan Pengguna
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Apa Kata{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Mereka?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dengarkan langsung pengalaman pengguna kami dalam menggunakan
            layanan DagangKuota.com
          </p>
        </motion.div>

        {/* Testimonial Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 shadow-lg border ${testimonial.borderColor} ${testimonial.color} relative overflow-hidden`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-200">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative z-10">
                {/* Profile */}
                <div className="flex items-start mb-6">
                  <div
                    className={`p-3 rounded-full ${testimonial.bgColor} mr-4`}
                  >
                    {testimonial.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.age} – {testimonial.occupation}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel - Mobile */}
        <div className="md:hidden relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl p-8 shadow-lg border ${testimonials[activeIndex].borderColor} ${testimonials[activeIndex].color} relative overflow-hidden mb-8`}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-gray-200">
              <Quote className="w-10 h-10" />
            </div>

            <div className="relative z-10">
              {/* Profile */}
              <div className="flex items-start mb-6">
                <div
                  className={`p-3 rounded-full ${testimonials[activeIndex].bgColor} mr-4`}
                >
                  {testimonials[activeIndex].icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeIndex].age} –{" "}
                    {testimonials[activeIndex].occupation}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic mb-6 text-sm">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === activeIndex ? "bg-violet-600 w-6" : "bg-gray-300"
                }`}
                aria-label={`Lihat testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition"
              aria-label="Testimonial sebelumnya"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition"
              aria-label="Testimonial berikutnya"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Bergabunglah dengan Ribuan Pengguna Puas Kami
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Pengguna Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2">
                  50K+
                </div>
                <div className="text-gray-600">Transaksi/Bulan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600">Rating Rata-rata</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Layanan Pelanggan</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimoni;
