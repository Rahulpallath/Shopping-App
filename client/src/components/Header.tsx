import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, Search, ShoppingBag, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const { isDarkTheme, toggleTheme } = useTheme();

  const isScrolled = scrollPosition > 50;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-4 dark:bg-background" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 py-0 flex justify-between items-center">
          <div className="logo">
            <Link href="/" className="font-display text-2xl md:text-3xl tracking-wider">
              AVANTGARDE
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#collections" className="hover:text-primary transition-colors duration-300">COLLECTIONS</a>
            <a href="#products" className="hover:text-primary transition-colors duration-300">SHOP</a>
            <a href="#about" className="hover:text-primary transition-colors duration-300">ABOUT</a>
            <a href="#lookbook" className="hover:text-primary transition-colors duration-300">LOOKBOOK</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">CONTACT</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full" 
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#" aria-label="Search">
              <Search size={18} />
            </a>
            <a href="#" className="relative" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="bg-primary text-white text-xs rounded-full h-4 w-4 inline-flex items-center justify-center absolute -mt-2 -ml-1">2</span>
            </a>
            <button 
              onClick={toggleMobileMenu} 
              className="block md:hidden" 
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col justify-center items-center text-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.77, 0.2, 0.05, 1.0] }}
          >
            <motion.button 
              onClick={toggleMobileMenu} 
              className="absolute top-8 right-8 text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              aria-label="Close menu"
            >
              <X size={24} />
            </motion.button>
            
            <nav className="flex flex-col space-y-6 text-2xl font-display text-center">
              {["COLLECTIONS", "SHOP", "ABOUT", "LOOKBOOK", "CONTACT"].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors duration-300"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            
            <motion.div 
              className="mt-12 flex space-x-6 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { icon: "instagram", href: "#" },
                { icon: "twitter", href: "#" },
                { icon: "facebook", href: "#" },
                { icon: "pinterest", href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={social.icon}
                  href={social.href}
                  className="hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
