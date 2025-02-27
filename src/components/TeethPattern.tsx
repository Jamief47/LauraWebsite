import { motion } from 'framer-motion';

export const TeethPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" className="opacity-20">
        <motion.path
          d="M50,50 Q65,35 80,50 Q95,65 80,80 Q65,95 50,80 Q35,65 50,50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brand-yellow"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M150,80 Q165,65 180,80 Q195,95 180,110 Q165,125 150,110 Q135,95 150,80"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brand-yellow"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M250,50 Q265,35 280,50 Q295,65 280,80 Q265,95 250,80 Q235,65 250,50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-brand-yellow"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};