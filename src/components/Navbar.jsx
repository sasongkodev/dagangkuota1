import { useState, useEffect, useCallback } from "react";
import { Menu, X, ShoppingCart, Phone, MessageCircle } from "lucide-react";

// Constants
const WHATSAPP_NUMBER = "+6288216379780";
const WHATSAPP_MESSAGE = "Halo%20saya%20mau%20beli%20kuota";
const LOGO_URL =
  "https://www.dropbox.com/scl/fi/cmqm7tgjt8waxn3nuwld0/react.svg?rlkey=9sabvj5oeu7o95bcij1msev58&st=obgoy1zl&raw=1";

// Menu items configuration
const MENU_ITEMS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Paket Internet", href: "#paket" },
  { label: "Keunggulan", href: "#fitur" },
  { label: "Cara Beli", href: "#carabeli" },
  { label: "Testimoni", href: "#testimoni" },
  {
    label: "Blog",
    href: "https://blog.dagangkuota.com",
    external: true,
  },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect with useCallback for optimization
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Utility function for external links
  const getLinkProps = (item) => {
    if (item.external) {
      return {
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    return {};
  };

  // WhatsApp link generator
  const getWhatsAppLink = useCallback(() => {
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${WHATSAPP_MESSAGE}`;
  }, []);

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
            className="flex items-center text-2xl font-extrabold text-violet-600 font-nunito hover:text-violet-700 transition focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg"
            aria-label="Beranda DagangKuota"
          >
            <img
              src={LOGO_URL}
              alt="Logo DagangKuota"
              className="h-8 w-auto"
              loading="eager"
              decoding="async"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav
          className="hidden md:flex items-center space-x-1"
          role="navigation"
          aria-label="Menu Utama"
        >
          {MENU_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...getLinkProps(item)}
              className="px-4 py-2 font-semibold text-gray-800 hover:text-violet-600 transition-colors duration-200 relative group rounded-lg hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
            </a>
          ))}

          <div className="flex items-center space-x-2 ml-4">
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-2 rounded-full hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
              title="Hubungi Kami"
              aria-label="Telepon Kami"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href="#paket"
              className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-2 rounded-full hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
              title="Keranjang"
              aria-label="Lihat Paket"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>

            {/* WhatsApp Button */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full transition-all duration-300 font-bold flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              aria-label="Chat via WhatsApp"
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
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
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
        <div
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-md px-4 pb-6 pt-2 shadow-lg border-t border-gray-100"
        >
          <div className="flex flex-col space-y-2">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...getLinkProps(item)}
                className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-violet-50 hover:text-violet-600 transition font-semibold relative group focus:outline-none focus:ring-2 focus:ring-violet-500"
                onClick={closeMenu}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {item.label}
                <span className="absolute bottom-2 right-4 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-6 rounded-full"></span>
              </a>
            ))}

            <div className="flex items-center justify-between mt-4 px-2 pt-4 border-t border-gray-100">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-3 rounded-full hover:bg-violet-50 flex-1 justify-center focus:outline-none focus:ring-2 focus:ring-violet-500"
                style={{ fontFamily: "'Nunito', sans-serif" }}
                onClick={closeMenu}
              >
                <Phone className="w-5 h-5" />
                <span>Telepon</span>
              </a>

              <a
                href="#paket"
                className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-3 rounded-full hover:bg-violet-50 flex-1 justify-center focus:outline-none focus:ring-2 focus:ring-violet-500"
                style={{ fontFamily: "'Nunito', sans-serif" }}
                onClick={closeMenu}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Keranjang</span>
              </a>
            </div>

            {/* WhatsApp Button Mobile */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-4 py-3 rounded-full text-center transition font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              onClick={closeMenu}
              aria-label="Chat via WhatsApp"
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
