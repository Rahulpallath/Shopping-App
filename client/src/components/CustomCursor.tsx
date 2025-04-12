import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Only show cursor after first mouse movement
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the element or its parents have interactive elements
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('textarea') ||
        target.closest('.product-card') ||
        target.closest('.collection-item') ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea';
      
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', updateHoverState);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', updateHoverState);
    };
  }, [isVisible]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    // Add cursor-none class to all elements
    document.querySelectorAll('*').forEach(el => {
      (el as HTMLElement).style.cursor = 'none';
    });
    
    return () => {
      document.body.style.cursor = '';
      
      // Reset cursor style
      document.querySelectorAll('*').forEach(el => {
        (el as HTMLElement).style.cursor = '';
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 rounded-full bg-primary z-50 pointer-events-none mix-blend-difference"
      style={{
        x: position.x - 10,
        y: position.y - 10,
      }}
      animate={{
        width: isHovering ? 50 : 20,
        height: isHovering ? 50 : 20,
        backgroundColor: isHovering ? "rgb(80, 201, 206)" : "rgb(255, 51, 102)",
        x: position.x - (isHovering ? 25 : 10),
        y: position.y - (isHovering ? 25 : 10),
      }}
      transition={{
        type: "spring",
        mass: 0.3,
        stiffness: 400,
        damping: 25
      }}
    />
  );
}
