import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Phone, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Variabel Nomor WhatsApp ---
  // Ganti nomor di sini jika ada perubahan
  const WHATSAPP_NUMBER = "+6288216379780";
  // --- Akhir Variabel Nomor WhatsApp ---

  // Load Nunito font dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Menambahkan item "Blog" ke menu
  const menuItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Paket Internet", href: "#paket" },
    { label: "Keunggulan", href: "#fitur" },
    { label: "Cara Beli", href: "#carabeli" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Blog", href: "https://blog.dagangkuota.com" }, // Tautan ke subdomain blog
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-3 shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#beranda"
            className="text-2xl font-extrabold text-violet-600 font-nunito hover:text-violet-700 transition flex items-center"
          >
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">
              Dagang
            </span>
            <span className="text-gray-900">Kuota</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              // Menentukan apakah tautan eksternal (blog) atau internal
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="px-4 py-2 font-semibold text-gray-800 hover:text-violet-600 transition-colors duration-200 relative group rounded-lg hover:bg-violet-50"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </a>
          ))}

          <div className="flex items-center space-x-2 ml-4">
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-2 rounded-full hover:bg-violet-50"
              title="Hubungi Kami"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href="#paket"
              className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-2 rounded-full hover:bg-violet-50"
              title="Keranjang"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>

            {/* Tombol WhatsApp diperbarui */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(
                /\D/g,
                ""
              )}?text=Halo%20saya%20mau%20beli%20kuota`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full transition-all duration-300 font-bold flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 bg-violet-50 hover:bg-violet-100 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-violet-600" />
          ) : (
            <Menu className="w-6 h-6 text-violet-600" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-4 pb-6 pt-2 shadow-lg border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                // Menentukan apakah tautan eksternal (blog) atau internal
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-violet-50 hover:text-violet-600 transition font-semibold relative group"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {item.label}
                <span className="absolute bottom-2 right-4 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-6 rounded-full"></span>
              </a>
            ))}

            <div className="flex items-center justify-between mt-4 px-2 pt-4 border-t border-gray-100">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-3 rounded-full hover:bg-violet-50 flex-1 justify-center"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <Phone className="w-5 h-5" />
                <span>Telepon</span>
              </a>

              <a
                href="#paket"
                className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-3 rounded-full hover:bg-violet-50 flex-1 justify-center"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Keranjang</span>
              </a>
            </div>

            {/* Tombol WhatsApp Mobile diperbarui */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(
                /\D/g,
                ""
              )}?text=Halo%20saya%20mau%20beli%20kuota`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-3 rounded-full text-center transition font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
