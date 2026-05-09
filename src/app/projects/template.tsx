"use client";
import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 100, mass: 0.5 }} // Luxurious, heavy slide
      className="bg-[#121212] min-h-screen"
    >
      {children}
    </motion.div>
  );
}
