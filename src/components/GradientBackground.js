import React from "react";
import { motion } from "framer-motion";

const GradientBackground = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1, // Ensure it stays behind other components
        background: 'linear-gradient(135deg, #ff0066, #00d4ff)', // Initial gradient
        filter: 'blur(60px)', // Add blur to mimic the effect in the image
      }}
      animate={{
        background: [
          "linear-gradient(135deg, #ff0066, #00d4ff)",
          "linear-gradient(135deg, #8e44ad, #3498db)",
          "linear-gradient(135deg, #e74c3c, #f1c40f)",
          "linear-gradient(135deg, #1abc9c, #2ecc71)",
          "linear-gradient(135deg, #d35400, #f39c12)"
        ],
        transition: {
          duration: 12, // Duration of one full cycle
          ease: "linear",
          repeat: Infinity, // Infinite loop
          repeatType: "mirror" // Reverse on completion for smooth transition
        }
      }}
    />
  );
};

export default GradientBackground;
