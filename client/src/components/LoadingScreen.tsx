import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex justify-center items-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <span className="loader mb-4"></span>
        <motion.div 
          className="text-white font-display text-2xl mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          AVANTGARDE
        </motion.div>
        <motion.div 
          className="text-white font-sans text-sm tracking-widest mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          LOADING EXPERIENCE
        </motion.div>
      </div>
    </motion.div>
  );
}
