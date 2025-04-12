import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.8]);
  
  return (
    <section 
      ref={ref}
      className="relative h-[500px] overflow-hidden"
      style={{
        background: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80') center center/cover no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <motion.div 
        className="container mx-auto px-6 h-full flex items-center justify-center relative z-10"
        style={{ y, opacity }}
      >
        <motion.div 
          className="text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl mb-6">Redefining Boundaries</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Our designs challenge conventional fashion norms, pushing creativity to new horizons. Experience clothing that's both art and function.
          </p>
          <motion.a 
            href="#" 
            className="inline-block bg-white text-black py-3 px-8 font-accent tracking-wider hover:bg-primary hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DISCOVER OUR STORY
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
