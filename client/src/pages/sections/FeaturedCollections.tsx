import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Collection } from "@/lib/types";

export default function FeaturedCollections() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCollections, setVisibleCollections] = useState<Collection[]>([]);
  
  const { data: collections, isLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections"],
  });
  
  useEffect(() => {
    if (collections) {
      if (activeFilter === "all") {
        setVisibleCollections(collections);
      } else {
        setVisibleCollections(
          collections.filter(collection => collection.category === activeFilter)
        );
      }
    }
  }, [collections, activeFilter]);
  
  const filterButtons = [
    { label: "ALL", value: "all" },
    { label: "SUMMER", value: "summer" },
    { label: "WINTER", value: "winter" },
    { label: "LIMITED EDITION", value: "limited" }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="collections" className="py-20 md:py-32 bg-[#F5F5F5] dark:bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="fill-white dark:fill-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">Featured Collections</h2>
          <p className="text-neutral-dark dark:text-foreground opacity-75 max-w-xl mx-auto">
            Explore our latest collections designed to break boundaries and redefine modern fashion aesthetics.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filterButtons.map((button) => (
            <motion.button 
              key={button.value}
              className={`py-2 px-6 border-b-2 font-medium transition-all hover:text-primary cursor-pointer ${
                activeFilter === button.value ? "border-black dark:border-white" : "border-transparent"
              }`}
              onClick={() => setActiveFilter(button.value)}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {button.label}
            </motion.button>
          ))}
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="loader border-primary"></div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {visibleCollections.map((collection) => (
              <motion.div 
                key={collection.id}
                className="collection-item"
                variants={itemVariants}
              >
                <div className="group relative overflow-hidden h-[500px] cursor-pointer">
                  <div className="absolute inset-0 bg-black bg-opacity-20 z-10 transition-opacity group-hover:bg-opacity-40"></div>
                  <motion.img 
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <h3 className="font-display text-2xl mb-2">{collection.name}</h3>
                    <p className="font-sans opacity-90 mb-4">{collection.description}</p>
                    <motion.a 
                      href="#" 
                      className="inline-block font-accent tracking-wide py-2 px-4 bg-white text-black hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VIEW COLLECTION
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
