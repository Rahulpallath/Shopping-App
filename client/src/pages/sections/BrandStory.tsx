import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BrandStory() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const stats = [
    { number: "5+", label: "Years" },
    { number: "20+", label: "Collections" },
    { number: "12", label: "Awards" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[4/5] relative z-10 overflow-hidden">
                <motion.img 
                  src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                  alt="Fashion designer working" 
                  className="w-full h-full object-cover object-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  loading="lazy"
                />
              </div>
              
              <motion.div 
                className="w-64 h-64 bg-primary absolute -bottom-10 -left-10 z-0 rounded-full opacity-20 animate-float"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              <motion.div 
                className="absolute top-1/2 -right-16 transform -translate-y-1/2 z-20 hidden md:block"
                initial={{ opacity: 0, x: 100, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-secondary text-white p-6 w-64">
                  <p className="font-display italic text-lg">"Fashion is not just about clothes, it's about creating a statement."</p>
                  <p className="mt-2 text-right font-medium">— Anna Chen, Founder</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">Our Brand Story</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-neutral-dark dark:text-foreground opacity-80 mb-6 leading-relaxed">
              Avantgarde was born from a vision to create clothing that challenges convention. Founded in 2018 by designer Anna Chen, our brand approaches fashion as an art form, where each piece tells a story and provokes thought.
            </p>
            <p className="text-neutral-dark dark:text-foreground opacity-80 mb-6 leading-relaxed">
              We believe in sustainable practices and ethical production. Every garment is meticulously crafted in our atelier using responsibly sourced materials. Our design philosophy centers on unconventional silhouettes, experimental textures, and boundary-pushing aesthetics.
            </p>
            <p className="text-neutral-dark dark:text-foreground opacity-80 mb-8 leading-relaxed">
              More than just clothing, we create experiences that empower wearers to express their individuality and challenge fashion norms.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              <motion.a 
                href="#" 
                className="bg-black dark:bg-white text-white dark:text-black py-3 px-8 font-accent tracking-wider inline-flex items-center transition-all duration-300 hover:bg-primary hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                OUR PROCESS
                <ArrowRight className="ml-2" size={18} />
              </motion.a>
              
              <motion.a 
                href="#" 
                className="border border-black dark:border-white text-black dark:text-white py-3 px-8 font-accent tracking-wider inline-flex items-center transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SUSTAINABILITY
              </motion.a>
            </div>
            
            <motion.div 
              className="flex items-center space-x-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  {index > 0 && <div className="h-10 w-px bg-gray-300 dark:bg-gray-700 mx-6 -ml-6"></div>}
                  <motion.div 
                    className="font-display text-4xl mb-1"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm uppercase tracking-wider opacity-70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
