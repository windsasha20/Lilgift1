import { motion } from 'motion/react';

interface FoxCharacterProps {
  emotion?: 'happy' | 'sad' | 'loving' | 'dancing' | 'angry' | 'calm' | 'sleepy' | 'missing';
  onClick?: () => void;
  className?: string;
}

export function FoxCharacter({ emotion = 'happy', onClick, className = '' }: FoxCharacterProps) {
  const getEmotionStyle = () => {
    switch (emotion) {
      case 'sad':
        return '😢';
      case 'loving':
        return '🥰';
      case 'dancing':
        return '💃';
      case 'angry':
        return '😤';
      case 'calm':
        return '😌';
      case 'sleepy':
        return '😴';
      case 'missing':
        return '🥺';
      default:
        return '😊';
    }
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        y: {
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <div className="text-8xl">🦊</div>
      <div className="absolute -bottom-2 right-0 text-4xl">
        {getEmotionStyle()}
      </div>
      <div className="absolute top-0 left-0 text-3xl">💜</div>
    </motion.div>
  );
}
