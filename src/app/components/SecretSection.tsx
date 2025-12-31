import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Heart } from 'lucide-react';
import { FoxCharacter } from './FoxCharacter';

export function SecretSection() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = 'нампинг'; // Можно изменить на любое кодовое слово

  const handleUnlock = () => {
    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true);
    } else {
      alert('Попробуй ещё раз 💜');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mb-8"
              >
                <Lock className="w-24 h-24 text-purple-400 mx-auto" />
              </motion.div>

              <h2 className="text-5xl text-purple-400 mb-8">
                Тайный раздел 🔒
              </h2>

              <p className="text-2xl text-gray-600 mb-8">
                Ты точно хочешь сюда?
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-pink-200 max-w-md mx-auto">
                <p className="text-xl text-gray-700 mb-6">
                  Введи кодовое слово:
                </p>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                  className="w-full px-6 py-3 border-2 border-purple-200 rounded-full text-center text-xl focus:outline-none focus:border-purple-400 mb-6"
                  placeholder="💜"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleUnlock}
                  className="w-full px-8 py-3 bg-purple-400 text-white rounded-full text-xl hover:bg-purple-500 transition-colors shadow-lg"
                >
                  Открыть 🔓
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mb-8"
              >
                <Unlock className="w-24 h-24 text-purple-400 mx-auto" />
              </motion.div>

              <h2 className="text-5xl text-purple-400 mb-8 flex items-center justify-center gap-4">
                <Heart className="w-12 h-12" />
                Для тебя, моя единственная
                <Heart className="w-12 h-12" />
              </h2>

              <div className="mb-8">
                <FoxCharacter emotion="loving" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 shadow-2xl border-4 border-purple-300 max-w-3xl mx-auto"
              >
                <div className="space-y-6 text-left">
                  <p className="text-2xl text-gray-800 leading-relaxed">
                    Моя любимая лисичка,
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    ты разгадала загадку жака фреско, и я очень тобой горжусь, малышка!
ты у меня такая умная, гениальная и вообще самая прекрасная на свете.
не хочу звучать как тот, чьё имя нельзя произносить, однако год выдался непростым, но и интересным. мы провели его достаточно продуктивно, насыщенно, душевно и в целом очень круто.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    честно признаюсь, большую часть года я провела в мечтах, с лёгким трепетом думая, что же нас ждёт впереди, и очень надеюсь, что эти мечты и простые мыслишки, с которых я хихикаю в течение дня, станут чем-то реальным.
меня очень умиляют твои иногда вскользь брошенные фразочки о том, как ты хочешь обустроить дом, какие штучки хочешь в качестве подарочков, что-то из твоих гиперфикс. кстати, поразительно, но я подсчитала, что начиная с августа ты провела больше 250 часов чистого времени без перерывов, пересматривая кхемджиру, наслаждаясь фанфиками, просматривая интервью и так далее. это почти две недели без сна, еды и других изысков повседневности, а это только кхемджира, без благословения небожителей, темного дворецкого или системы спаси себя сам.
я говорю это к тому, что всегда восхищалась твоей преданностью к гиперфиксу и надеюсь хотя бы чуть-чуть приблизиться к пониманию концепта гиперфикса.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    очень восхищаюсь твоей целеустремлённостью, даже если я говорю это каждый раз, когда подворачивается случай, я всё равно не устану. каждый день ты прилагаешь невероятное количество усилий, чтобы все видели, что ты slay и свага, и никто даже рядом не стоял по уровню пиздатости, because you’re serving cunt, and i`m proud of my girl so much!!

и знаешь, что ещё круто? даже когда мы немножко конфликтуем или просто вредничаем, я понимаю, что мы учимся слышать и понимать, что значит быть рядом настоящими, со всеми нюансами и эмоциями, и это делает наши моменты вместе ещё ценнее.
я хочу, чтобы мы продолжали расти вместе, открывая новые шутки, идеи, странные и смешные штуки, которыми наполняем наши дни и ночи.
мне нравится каждый твой смех, каждая искренняя эмоция, и даже когда я вижу, что ты расстроена или устала, я хочу быть рядом, чтобы поддержать, пошутить или просто молча обниматься (даже если пока что не получается).
                     </p>
                    <p className="text-xl text-gray-700 leading-relaxed">
                    я люблю, как мы можем быть одновременно серьёзными и глупыми, как создаём наши маленькие миры и ритуалы, которые никому другому не нужны, кроме нас, и это делает меня невероятно счастливой.
хочу, чтобы этот новый год стал ещё одним временем, когда мы наполняем наши дни смехом, искренностью, теплом и сюрпризами, и чтобы все мечты, которые иногда кажутся далекими и фантастическими, стали хотя бы на шаг ближе к реальности.

я люблю тебя за твою преданность, за твою страсть, за то, как ты сияешь даже тогда, когда кажется, что мир вокруг немного сумасшедший, и я горжусь, что могу идти рядом с тобой, смеяться с тобой, мечтать и создавать наше маленькое, прекрасное, безумное настоящее вместе.
                  </p>
                  <p className="text-2xl text-purple-600 text-center mt-8">
                    Я люблю тебя вечно 💜✨
                  </p>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsUnlocked(false);
                  setPassword('');
                }}
                className="mt-8 px-8 py-3 bg-gray-300 text-gray-700 rounded-full text-lg hover:bg-gray-400 transition-colors shadow-lg"
              >
                Закрыть 🔒
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
