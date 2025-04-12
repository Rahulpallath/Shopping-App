import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been added to our newsletter",
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-6">Join Our Movement</h2>
          <p className="opacity-80 mb-8 leading-relaxed">
            Subscribe to get exclusive access to new collections, special offers, and fashion insights delivered straight to your inbox.
          </p>
          
          <form 
            className="flex flex-col sm:flex-row mt-10 max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border border-white py-3 px-4 w-full focus:outline-none focus:border-primary placeholder-gray-500 text-white mb-4 sm:mb-0 sm:mr-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button 
              type="submit" 
              className="bg-white text-black py-3 px-8 font-accent tracking-wider hover:bg-primary hover:text-white transition-colors disabled:opacity-70"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "SUBSCRIBE"
              )}
            </motion.button>
          </form>
          
          <p className="text-sm opacity-60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
