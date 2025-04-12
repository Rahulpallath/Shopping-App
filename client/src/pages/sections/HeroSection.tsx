import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";

export default function HeroSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsInView(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 z-10"></div>
          <motion.img 
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
            alt="Fashion model in stylish outfit" 
            className="absolute object-cover object-center h-full w-full"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 overflow-hidden">
            <SplitText delay={0.1}>REDEFINE</SplitText>
            <SplitText delay={0.2}>YOUR</SplitText>
            <SplitText delay={0.3}>STYLE</SplitText>
          </h1>
          
          <motion.p 
            className="font-sans text-white text-lg md:text-xl opacity-90 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience our 2023 collection that pushes boundaries and challenges conventional fashion norms.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a 
              href="#products" 
              className="bg-white text-black py-3 px-8 font-accent tracking-wider text-lg inline-flex items-center transition-all duration-300 hover:bg-primary hover:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP NOW
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
            
            <motion.a 
              href="#collections" 
              className="border border-white text-white py-3 px-8 font-accent tracking-wider text-lg inline-flex items-center transition-all duration-300 hover:bg-white hover:text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a href="#collections" className="text-white animate-bounce">
          <ArrowRight className="transform rotate-90" size={24} />
        </a>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl animate-float"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute top-20 -left-20 w-80 h-80 bg-accent rounded-full opacity-10 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{ animationDelay: "2s" }}
        className="animate-float"
      />
    </section>
  );
}
