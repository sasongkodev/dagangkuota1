import { useState } from "react";
import {
  Wifi,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Send,
  Shield,
  Zap,
  CreditCard,
  Youtube,
  Instagram,
  MessageCircle,
  Radio,
} from "lucide-react";

const Footer = () => {
  // --- Variabel Informasi Kontak ---
  const WHATSAPP_NUMBER = "+6288216379780";
  const EMAIL = "support@dagangkuota.com";
  const PHONE = "+62 882-1637-9780";
  const ADDRESS = "Sedayu, Yogyakarta";
  // --- Akhir Variabel Informasi Kontak ---

  const menuLinks = [
    { title: "Beranda", href: "#beranda" },
    { title: "Paket Internet", href: "#paket" },
    { title: "Keunggulan", href: "#fitur" },
    { title: "Cara Beli", href: "#carabeli" },
    { title: "Testimoni", href: "#testimoni" },
    { title: "Kontak", href: "#kontak" },
  ];

  const productLinks = [
    { title: "Pulsa All Operator", href: "#pulsa" },
    { title: "Paket Data", href: "#paket" },
    { title: "Token PLN", href: "#token" },
    { title: "Voucher Game", href: "#voucher" },
    { title: "TV Kabel", href: "#tv" },
    { title: "PPOB", href: "#ppob" },
  ];

  // Social Media dengan icon dan link yang diperbarui
  const socialMedia = [
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtube.com/@dagang_kuota_nusantara",
      color: "hover:bg-red-600",
      bgColor: "bg-red-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/@dagang_kuota_nusantara",
      color: "hover:bg-pink-600",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      name: "TikTok",
      icon: <Radio className="w-5 h-5" />,
      url: "https://www.tiktok.com/@dagang_kuota_nusantara",
      color: "hover:bg-black",
      bgColor: "bg-black",
    },
    {
      name: "Telegram",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
        </svg>
      ),
      url: "https://t.me/infodagangkuota",
      color: "hover:bg-blue-400",
      bgColor: "bg-blue-400",
    },
    {
      name: "WhatsApp Channel",
      icon: <MessageCircle className="w-5 h-5" />,
      url: "https://whatsapp.com/channel/0029Vb5oJKf8F2pKu4oJeW0Y",
      color: "hover:bg-green-600",
      bgColor: "bg-green-500",
    },
  ];

  const getWhatsAppLink = (message = "") => {
    const fullMessage = message
      ? `Halo, ${message}`
      : "Halo, saya ingin menghubungi DagangKuota.com";
    return `https://wa.me/${WHATSAPP_NUMBER.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(fullMessage)}`;
  };

  // Direct link ke logo di Dropbox (sama dengan di navbar)
  const logoUrl =
    "https://www.dropbox.com/scl/fi/cmqm7tgjt8waxn3nuwld0/react.svg?rlkey=9sabvj5oeu7o95bcij1msev58&st=obgoy1zl&raw=1";

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <a
                href="#beranda"
                className="flex items-center text-2xl font-extrabold text-violet-600 font-nunito hover:text-violet-700 transition focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg"
                aria-label="Beranda DagangKuota"
              >
                <img
                  src={logoUrl}
                  alt="Logo DagangKuota"
                  className="h-8 w-auto mr-2"
                />
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
                  {/* Dagang */}
                </span>
                {/* <span className="text-white">Kuota</span> */}
              </a>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Solusi digital terpercaya untuk kebutuhan pulsa, kuota, dan
              pembayaran Anda. Harga bersaing, transaksi cepat, dan layanan
              24/7.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} ${social.color} text-white p-3 rounded-full transition duration-300 transform hover:scale-110 flex items-center justify-center`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Menu
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-violet-500"></span>
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                  >
                    <span className="mr-2">•</span> {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Produk
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-violet-500"></span>
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                  >
                    <Zap className="w-4 h-4 mr-2 text-yellow-500" />{" "}
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Kontak Kami
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-violet-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-violet-400 mt-1 mr-3 flex-shrink-0" />
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-violet-400 mt-1 mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-violet-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">{ADDRESS}</span>
              </li>
              <li className="mt-4">
                <a
                  href={getWhatsAppLink("Saya ingin informasi lebih lanjut.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DagangKuota.com. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition"
              >
                Bantuan
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-600 text-xs">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-1 text-green-500" />
              <span>Transaksi Aman</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-1 text-yellow-500" />
              <span>Proses Cepat</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 mr-1 text-blue-500" />
              <span>Bayar di Tempat</span>
            </div>
            <div className="flex items-center">
              <Smartphone className="w-4 h-4 mr-1 text-violet-500" />
              <span>Layanan 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
