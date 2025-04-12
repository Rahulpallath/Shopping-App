import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function SplitText({ children, className = "", delay = 0 }: SplitTextProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Split the text into words
  const words = children.split(' ');

  return (
    <div className={`split-text-container ${className}`} ref={ref}>
      <motion.span
        className="split-text block"
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{ 
          duration: 0.5, 
          ease: [0.16, 1, 0.3, 1],
          delay: delay 
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}
