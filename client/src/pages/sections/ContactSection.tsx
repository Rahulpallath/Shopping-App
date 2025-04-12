import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible",
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="text-primary mr-4 mt-1" size={20} />,
      title: "Visit Us",
      content: "123 Fashion Avenue, New York, NY 10001"
    },
    {
      icon: <Mail className="text-primary mr-4 mt-1" size={20} />,
      title: "Email Us",
      content: "info@avantgarde.com"
    },
    {
      icon: <Phone className="text-primary mr-4 mt-1" size={20} />,
      title: "Call Us",
      content: "+1 (212) 555-8765"
    }
  ];
  
  const socialLinks = [
    { icon: <Instagram size={22} />, href: "#" },
    { icon: <Twitter size={22} />, href: "#" },
    { icon: <Facebook size={22} />, href: "#" },
    { icon: <Linkedin size={22} />, href: "#" }
  ];
  
  const fadeInUp = {
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
    <section id="contact" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-neutral-dark dark:text-foreground opacity-80 mb-10 leading-relaxed">
              Have questions about our collections or interested in collaboration opportunities? We'd love to hear from you. Fill out the form, and our team will get back to you shortly.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.icon}
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="opacity-75">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="flex space-x-6 mt-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  className="text-neutral-dark dark:text-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#F5F5F5] dark:bg-neutral-dark p-8 lg:p-12 relative z-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full border-b border-neutral-dark dark:border-white bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full border-b border-neutral-dark dark:border-white bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full border-b border-neutral-dark dark:border-white bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full border-b border-neutral-dark dark:border-white bg-transparent py-2 focus:outline-none focus:border-primary transition-colors"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <motion.button 
                    type="submit" 
                    className="bg-black dark:bg-white text-white dark:text-black py-3 px-8 font-accent tracking-wider hover:bg-primary hover:text-white transition-colors disabled:opacity-70"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      "SEND MESSAGE"
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
            
            <div className="w-full h-full bg-secondary absolute top-6 left-6 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
