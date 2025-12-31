import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import sadImage from './assets/sad.jpg';
import happyImage from './assets/happy.jpg';

export function LovingSection() {
  const [isHappy, setIsHappy] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const touchStartTime = useRef<number>(0);
  const touchTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // При каждом входе персонаж грустный
    setIsHappy(false);
    setClickCount(0);
    setShowMessage(false);
  }, []);

  const handleClick = () => {
    if (!isHappy) {
      const newCount = clickCount + 1;
      setClickCount(newCount);
      
      if (newCount >= 3) {
        setIsHappy(true);
        setShowMessage(true);
      }
    }
  };

  const handleTouchStart = () => {
    if (!isHappy) {
      touchStartTime.current = Date.now();
      
      touchTimer.current = setTimeout(() => {
        setIsHappy(true);
        setShowMessage(true);
      }, 2000);
    }
  };

  const handleTouchEnd = () => {
    if (touchTimer.current) {
      clearTimeout(touchTimer.current);
      touchTimer.current = null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl text-purple-400 mb-4 flex items-center justify-center gap-4">
            <Heart className="w-12 h-12" />
            Любимочка
            <Heart className="w-12 h-12" />
          </h2>
          {!isHappy && (
            <p className="text-xl text-gray-600 italic">
              {clickCount > 0 
                ? `Погладь меня ещё ${3 - clickCount} раз(а)... 🥺` 
                : 'Погладь меня, пожалуйста... 🥺'}
            </p>
          )}
        </motion.div>

        <div className="flex flex-col items-center gap-8">
          <motion.div
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer select-none"
            style={{ touchAction: 'none' }}
          >
            <AnimatePresence mode="wait">
              {!isHappy ? (
                <motion.img
                  key="sad"
                  src={sadImage}
                  alt="Грустный персонаж"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-purple-200"
                />
              ) : (
                <motion.img
                  key="happy"
                  src={happyImage}
                  alt="Весёлый персонаж"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.8,
                    type: 'spring',
                    bounce: 0.4,
                  }}
                  className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-pink-300"
                />
              )}
            </AnimatePresence>

            {/* Сердечки при поглаживании */}
            {clickCount > 0 && !isHappy && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -50 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl pointer-events-none"
              >
                💕
              </motion.div>
            )}
          </motion.div>

          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-300 max-w-2xl"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  >
                    💕
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                    }}
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 0.8,
                    }}
                  >
                    💕
                  </motion.div>
                </div>
                <p className="text-3xl text-purple-600 leading-relaxed">
                  Спасибо, что навестила и погладила меня! Я буду ждать тебя здесь и в следующий раз! 💜
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
