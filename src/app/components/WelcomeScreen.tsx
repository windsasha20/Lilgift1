import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FoxCharacter } from './FoxCharacter';
import { CatCharacter } from './CatCharacter';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [showSadScene, setShowSadScene] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="text-center px-8">
        <AnimatePresence mode="wait">
          {!showSadScene ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <motion.h1
                className="text-4xl md:text-5xl text-pink-400 mb-8"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Приветик, лисичка моя... хочешь отправиться в маленькое путешествие?
              </motion.h1>

              <div className="flex justify-center">
                <FoxCharacter emotion="loving" />
              </div>

              <div className="flex gap-6 justify-center mt-12">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onStart}
                  className="px-12 py-4 bg-purple-400 text-white rounded-full text-2xl hover:bg-purple-500 transition-colors shadow-lg"
                >
                  Да 💜
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSadScene(true)}
                  className="px-12 py-4 bg-gray-200 text-gray-600 rounded-full text-2xl hover:bg-gray-300 transition-colors shadow-lg"
                >
                  Нет
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="sad"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8 filter grayscale"
            >
              <div className="flex justify-center items-center gap-8">
                <FoxCharacter emotion="sad" className="grayscale" />
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <CatCharacter />
                </motion.div>
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="text-6xl mb-4">💔</div>
                <p className="text-3xl text-gray-600 mb-8">
                  я всё равно буду ждать тебя тут
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSadScene(false)}
                  className="px-8 py-3 bg-purple-300 text-white rounded-full text-xl hover:bg-purple-400 transition-colors shadow-lg"
                >
                  Вернуться 💜
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
