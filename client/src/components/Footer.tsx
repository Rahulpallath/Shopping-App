import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <div className="mb-6">
              <a href="#" className="font-display text-2xl tracking-wider">AVANTGARDE</a>
            </div>
            <p className="opacity-70 mb-6">
              Redefining fashion through avant-garde designs and sustainable practices. A new vision for the modern wardrobe.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Collections", href: "#collections" },
                { name: "Lookbook", href: "#lookbook" },
                { name: "Our Story", href: "#about" },
                { name: "Sustainability", href: "#" },
                { name: "Press", href: "#" },
                { name: "Careers", href: "#" }
              ].map(link => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="opacity-70 hover:opacity-100 hover:text-primary transition-colors flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="font-medium text-lg mb-6">Customer Care</h3>
            <ul className="space-y-3">
              {[
                { name: "Shipping & Returns", href: "#" },
                { name: "FAQ", href: "#" },
                { name: "Size Guide", href: "#" },
                { name: "Care Instructions", href: "#" },
                { name: "Contact Us", href: "#contact" }
              ].map(link => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    className="opacity-70 hover:opacity-100 hover:text-primary transition-colors flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={item}>
            <h3 className="font-medium text-lg mb-6">Newsletter</h3>
            <p className="opacity-70 mb-4">
              Sign up to receive updates on new collections and exclusive events.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border border-white py-2 px-3 w-full focus:outline-none focus:border-primary placeholder-gray-500 text-white"
                required
              />
              <motion.button 
                type="submit" 
                className="bg-white text-black py-2 px-4 hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-70 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AVANTGARDE. All rights reserved.
            </div>
            
            <div className="flex space-x-4 text-sm opacity-70">
              <motion.a 
                href="#" 
                className="hover:text-primary"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-primary"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-primary"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Cookies Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
