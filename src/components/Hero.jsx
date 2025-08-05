import { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Zap,
  Wifi,
  Tv2,
  Smartphone,
  CreditCard,
  Gift,
} from "lucide-react";

const HeroSection = () => {
  // --- Variabel Nomor WhatsApp ---
  // Ganti nomor di sini jika ada perubahan
  const WHATSAPP_NUMBER = "+6288216379780";
  // --- Akhir Variabel Nomor WhatsApp ---

  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      name: "Paket Data",
      icon: <Wifi className="w-8 h-8 text-violet-600" />,
      color: "bg-violet-50",
      price: "Mulai Rp10.000",
    },
    {
      name: "Pulsa All Operator",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50",
      price: "Harga Terbaik",
    },
    {
      name: "Token PLN",
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      color: "bg-yellow-50",
      price: "Instan & Pra Bayar",
    },
    {
      name: "Voucher Game",
      icon: <Gift className="w-8 h-8 text-red-600" />,
      color: "bg-red-50",
      price: "Berbagai Game",
    },
    {
      name: "TV Kabel",
      icon: <Tv2 className="w-8 h-8 text-green-600" />,
      color: "bg-green-50",
      price: "Prabayar",
    },
    {
      name: "PPOB",
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50",
      price: "Pembayaran Digital",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative pt-24 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 blur-xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ["#8B5CF6", "#3B82F6", "#10B981"][i % 3]
              }, transparent)`,
              animation: `float ${
                Math.random() * 10 + 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Headline */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-gray-900">
            <span className="block">Isi Pulsa, Kuota & PPOB</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
              Jadi Makin Gampang & Untung!
            </span>
          </h1>
          <p className="mt-5 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Semua kebutuhan digital kamu tersedia dalam satu tempat. Harga
            bersahabat dan pilihan lengkap.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-100">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-full flex items-center justify-between p-6 md:p-8 ${product.color}`}
                >
                  <div className="flex items-center">
                    <div className="p-3 bg-white rounded-xl shadow-sm mr-5">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{product.price}</p>
                    </div>
                  </div>
                  <button className="flex items-center text-sm font-medium text-violet-600 hover:text-violet-800">
                    Lihat Detail <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + products.length) % products.length
              )
            }
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % products.length)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow hover:bg-white"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-5 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentSlide === index ? "bg-violet-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          {/* Tombol Pesan via WhatsApp diperbarui */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(
              /\D/g,
              ""
            )}?text=Halo%20saya%20mau%20beli%20kuota`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-4 rounded-full font-medium text-center hover:opacity-90 transition"
          >
            <span className="flex items-center justify-center">
              Pesan via WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </a>
          <a
            href="#paket"
            className="bg-white border border-gray-300 text-gray-800 px-7 py-4 rounded-full font-medium text-center hover:bg-gray-50 transition"
          >
            Lihat Produk
          </a>
        </div>

        {/* Marquee Text */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center mx-6 text-gray-600 text-sm font-medium"
              >
                <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                <span>Pulsa & Kuota Murah</span>
                <span className="mx-3">•</span>
                <Wifi className="w-4 h-4 text-blue-500 mr-2" />
                <span>Internet Cepat</span>
                <span className="mx-3">•</span>
                <CreditCard className="w-4 h-4 text-green-500 mr-2" />
                <span>PPOB Lengkap</span>
                <span className="mx-3">•</span>
                <Gift className="w-4 h-4 text-red-500 mr-2" />
                <span>Voucher Game</span>
                <span className="mx-3">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
