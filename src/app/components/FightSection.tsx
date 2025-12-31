import { useState } from 'react';
import { motion } from 'motion/react';
import { FoxCharacter } from './FoxCharacter';
import { CatCharacter } from './CatCharacter';
import { Heart } from 'lucide-react';

const messages = [
  {
    title: 'мы команда',
    content: 'мы всё равно команда. даже если сейчас больно, непонятно и много чувств. я не твой враг и никогда им не буду. мы по одну сторону, всегда. и мне важно помнить об этом, даже когда я ошибаюсь 💜🤝',
  },
  {
    title: 'твои чувства важны',
    content: 'твои чувства важны. абсолютно все и без исключения. я правда хочу тебя слышать, а не спорить. мне важно понять, что ты чувствуешь, а не быть правой. ты имеешь право на свои эмоции. 💭❤️',
  },
  {
    title: 'я люблю тебя',
    content: 'я люблю тебя. не только когда всё легко и хорошо. я люблю тебя и в сложные моменты тоже. моя любовь к тебе не исчезает из за ссор или недопонимания. ты для меня важна всегда 💕',
  },
  {
    title: 'простим друг друга',
    content: 'если я причинила тебе боль, мне правда жаль. я беру за это ответственность и мне важно стать лучше. я хочу учиться быть бережнее к тебе. давай не держать это между нами. давай идти дальше вместе, ещё ближе, чем раньше 🌈✨',
  },
];

export function FightSection() {
  const [reconciled, setReconciled] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl text-pink-400 mb-4 flex items-center justify-center gap-4">
            <Heart className="w-12 h-12" />
            Когда мы поссоримся
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-200"
            >
              <h3 className="text-2xl text-purple-400 mb-4">{message.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{message.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setReconciled(!reconciled)}
            className="px-12 py-4 bg-purple-400 text-white rounded-full text-2xl hover:bg-purple-500 transition-colors shadow-lg mb-12"
          >
            {reconciled ? 'Мы помирились! 💕' : 'Давай помиримся 🫂'}
          </motion.button>

          {reconciled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center items-center gap-12"
            >
              <FoxCharacter emotion="loving" />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="text-6xl"
              >
                💕
              </motion.div>
              <CatCharacter />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
