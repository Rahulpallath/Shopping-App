import { motion } from "framer-motion";

export default function RunwaySection() {
  return (
    <section className="py-12 overflow-hidden relative">
      <motion.div 
        className="absolute w-full py-10 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="marquee-container relative whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee">
            {[
              { text: "REDEFINING FASHION", className: "text-white" },
              { text: "BREAK BOUNDARIES", className: "text-primary" },
              { text: "AVANTGARDE 2023", className: "text-white" },
              { text: "CREATIVE EXPRESSION", className: "text-secondary" },
              { text: "REDEFINING FASHION", className: "text-white" },
              { text: "BREAK BOUNDARIES", className: "text-primary" },
              { text: "AVANTGARDE 2023", className: "text-white" },
              { text: "CREATIVE EXPRESSION", className: "text-secondary" }
            ].map((item, index) => (
              <span key={index} className={`${item.className} font-accent tracking-widest text-4xl mx-6`}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
