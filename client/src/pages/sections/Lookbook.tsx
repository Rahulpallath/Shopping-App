import { motion } from "framer-motion";

export default function Lookbook() {
  const lookbookImages = [
    {
      src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      alt: "Lookbook image 1",
      className: "asym-1"
    },
    {
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80",
      alt: "Lookbook image 2",
      className: "asym-2"
    },
    {
      src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Lookbook image 3",
      className: "asym-3"
    },
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      alt: "Lookbook image 4",
      className: "asym-4"
    }
  ];
  
  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.7 }
    }
  };

  return (
    <section id="lookbook" className="py-20 bg-[#F5F5F5] dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">Seasonal Lookbook</h2>
          <p className="text-neutral-dark dark:text-foreground opacity-75 max-w-xl mx-auto">
            Explore our latest collection through artistic visual storytelling.
          </p>
        </motion.div>
        
        <div className="lookbook-grid h-[600px] md:h-[800px] mb-6">
          {lookbookImages.map((image, index) => (
            <div key={index} className={`${image.className} overflow-hidden relative`}>
              <motion.img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1 }}
                whileHover="hover"
                variants={imageVariants}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a 
            href="#" 
            className="inline-block bg-black dark:bg-white text-white dark:text-black py-3 px-8 font-accent tracking-wider hover:bg-primary hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW FULL LOOKBOOK
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent rounded-full opacity-10 blur-3xl animate-float"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute top-40 -left-20 w-64 h-64 bg-primary rounded-full opacity-20 blur-3xl animate-float"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
