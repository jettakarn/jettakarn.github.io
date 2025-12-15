'use client';

import { motion } from "framer-motion"; 

const FixedBranding = () => {
  return (
    <motion.div
      className="
        relative 
        p-6 
        sm:fixed sm:top-0 sm:left-0 sm:z-50 sm:p-8
      " 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ 
        duration: 0.8,
        delay: 0.2,
        type: "spring",
        stiffness: 100 
      }}
    >
      <div className="flex flex-col space-y-[-0.25rem]">
        <div className="w-16 h-1 bg-yellow-400 mb-2">
            <div className="h-full bg-gradient-to-r from-white to-yellow-400"></div>
        </div>
        
        <p className="text-xl sm:text-2xl font-normal tracking-wide">
          Jetson's
        </p>

        <p className="text-3xl sm:text-4xl font-bold tracking-wider">
          Orbit
        </p>
      </div>
    </motion.div>
  );
};

export default FixedBranding;