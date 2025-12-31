import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { FoxCharacter } from './FoxCharacter';

const compliments = [
  'Ты делаешь мой мир тише и спокойнее одним своим присутствием 🌿',
  'Ты красивее, чем ты сама о себе думаешь ✨',
  'Мне невероятно повезло познакомиться с тобой 🍀',
  'Ты самое тёплое, что есть в моей жизни ☀️',
  'Ты умеешь быть сильной и нежной одновременно 🌸',
  'Ты мой самый любимый человек в этом мире 💜',
  'Когда ты улыбаешься, у меня внутри всё становится на свои места 😊',
  'Ты делаешь обычные дни особенными ✨',
  'Я горжусь тобой намного чаще, чем говорю об этом (всегда то есть хихи) 🌟',
  'Ты заслуживаешь самой искренней любви 💕',
  'Ты не случайность, ты подарок 🎁',
  'С тобой даже молчание уютное 🤍',
  'Ты умеешь делать людей счастливее, просто будучи собой 💫',
  'Ты лучшее, что случилось со мной 💖',
  'Ты невероятно настоящая ✨',
  'Ты мой безопасный уголок 🏡',
  'Мне нравится, как ты думаешь, чувствуешь и живёшь 🌈',
  'Ты мой дом 🏠',
  'Ты делаешь этот мир мягче 🌸',
  'Ты важнее, чем ты думаешь 💝',
  'Ты красива во всех своих состояниях ✨',
  'Ты умеешь любить очень глубоко 💗',
  'Я люблю то, какая ты есть, без условий 💜',
  'Ты заслуживаешь заботы и тепла 🌺',
  'Ты моя радость 😊',
  'Ты мой покой 🕊️',
  'Ты мой самый светлый человек ☀️',
  'Ты удивительная ✨',
  'Ты причина, по которой мне хочется стараться 💪',
  'Ты делаешь меня лучше 🌟',
  'Ты самая нежная душа, которую я знаю 🦋',
  'Ты умеешь чувствовать по-настоящему 💫',
  'Ты невероятно важная часть моей жизни 💖',
  'Ты моя опора 🌳',
  'Ты заслуживаешь быть счастливой 🌈',
  'Ты больше, чем достаточно ✨',
  'Ты именно та, о ком я мечтала 💭',
  'Ты мой самый любимый звук и взгляд 👀',
  'Ты редкость 💎',
  'Ты чудо ✨',
  'Ты человек, ради которого хочется быть мягче 🌸',
  'Ты мой смысл в самых простых моментах 🍃',
  'Ты умеешь делать даже трудные дни легче 🌤️',
  'Ты мой свет 💡',
  'Ты невероятно ценная 💎',
  'Ты мой самый тёплый человек ☀️',
  'Ты любовь 💕',
  'Ты моя нежность 🌸',
  'Ты моя самая красивая история 📖',
  'Ты моё счастье 😊',
  'Ты достойна любви просто потому что ты это ты 💜',
  'Ты тот человек, которого я выбираю каждый день 💝',
  'Ты мой самый любимый «случай» 🍀',
  'Ты моё спокойствие 🕊️',
  'Ты моя радость даже в самых сложных днях 🌈',
  'Ты мой уют 🏡',
  'Ты самая красивая версия себя ✨',
  'Ты мой человек 💜',
  'Ты невероятно сильная 💪',
  'Ты нежность, которая лечит 🌸',
  'Ты мой самый тёплый выбор ☀️',
  'Ты мой свет даже в темноте 🌟',
  'Ты мой самый добрый мир 🌍',
  'Ты тот человек, которого хочется беречь 💝',
  'Ты моя самая большая ценность 💎',
  'Ты любовь, которую я не боюсь чувствовать 💗',
  'Ты мой самый мягкий дом 🏠',
  'Ты моя радость без условий 😊',
  'Ты мой смысл в мелочах 🍃',
  'Ты моя тихая счастливая мысль 💭',
  'Ты тот человек, с которым хочется быть настоящей ✨',
  'Ты мой самый любимый момент ⏰',
  'Ты мой самый красивый день 🌅',
  'Ты мой самый добрый выбор 💖',
  'Ты моя нежность и сила 🌸💪',
  'Ты мой человек навсегда 💜',
  'Ты моя самая светлая мысль ☀️',
  'Ты мой самый любимый человек на свете 💕',
  'Ты мой самый тёплый дом 🏡',
  'Ты моё всё 💖',
];

export function ComplimentsSection() {
  const [currentCompliment, setCurrentCompliment] = useState(compliments[0]);
  const [key, setKey] = useState(0);

  const getNewCompliment = () => {
    const availableCompliments = compliments.filter(c => c !== currentCompliment);
    const randomCompliment = availableCompliments[Math.floor(Math.random() * availableCompliments.length)];
    setCurrentCompliment(randomCompliment);
    setKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl text-purple-400 mb-4 flex items-center justify-center gap-4">
            <Heart className="w-12 h-12" />
            Комплименты
            <Sparkles className="w-12 h-12" />
          </h2>
        </motion.div>

        <div className="mb-12">
          <FoxCharacter emotion="loving" />
        </div>

        <div className="min-h-[200px] flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-pink-200"
            >
              <p className="text-4xl text-purple-600">
                {currentCompliment}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={getNewCompliment}
          className="px-12 py-4 bg-purple-400 text-white rounded-full text-2xl hover:bg-purple-500 transition-colors shadow-lg"
        >
          Мне нужен комплимент 💕
        </motion.button>
      </div>
    </div>
  );
}