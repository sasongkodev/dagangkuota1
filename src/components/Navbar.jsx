import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const menuItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Paket Internet", href: "#paket" },
    { label: "Keunggulan", href: "#fitur" },
    { label: "Cara Beli", href: "#carabeli" },
    { label: "Testimoni", href: "#testimoni" },
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
            className="text-2xl font-extrabold text-violet-600 font-nunito hover:text-violet-700 transition"
          >
            DagangKuota
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-semibold text-gray-800 hover:text-violet-600 transition-colors duration-200 relative group"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <div className="flex items-center space-x-4 ml-4">
            <a
              href="tel:+6281234567890"
              className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition"
              title="Hubungi Kami"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href="#paket"
              className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition"
              title="Keranjang"
            >
              <ShoppingCart className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/62XXXXXXXXXX?text=Halo%20saya%20mau%20beli%20kuota"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full transition-all duration-300 font-bold flex items-center gap-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-4 pb-6 pt-2 shadow-lg">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-violet-50 hover:text-violet-600 transition font-semibold"
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center justify-between mt-4 px-4">
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-2"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <Phone className="w-5 h-5" />
                <span>Telepon</span>
              </a>

              <a
                href="#paket"
                className="flex items-center gap-2 text-gray-700 hover:text-violet-600 transition p-2"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Keranjang</span>
              </a>
            </div>

            <a
              href="https://wa.me/62XXXXXXXXXX?text=Halo%20saya%20mau%20beli%20kuota"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-3 rounded-full text-center transition font-bold flex items-center justify-center gap-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
