import { motion } from 'motion/react';

interface CatCharacterProps {
  onClick?: () => void;
  className?: string;
}

export function CatCharacter({ onClick, className = '' }: CatCharacterProps) {
  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <div className="text-7xl">🐱</div>
      <div className="absolute -bottom-1 right-0 text-3xl">🖤</div>
    </motion.div>
  );
}
