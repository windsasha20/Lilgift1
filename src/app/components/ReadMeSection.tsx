import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, X } from 'lucide-react';

interface Letter {
  id: string;
  title: string;
  content: string;
}

const letters: Letter[] = [
  { id: '1', title: 'сомневаешься в себе', content: 'моя хорошая, пожалуйста, не будь к себе такой строгой. ты намного сильнее, умнее и красивее, чем тебе кажется в такие моменты. даже если ты сейчас этого не видишь, я вижу всегда! я в тебе уверена и верю в тебя, даже когда ты сама в себя не веришь 💜' },
  { id: '2', title: "не можешь уснуть", content: 'закрой глазки. ты можешь просто лежать и ничего не делать. представь, что я рядом и нам некуда спешить. ты в безопасности. ты любима. пусть ночь будет мягкой, а сон спокойным. я всегда рядом в твоём кармашке 🌙✨' },
  { id: '3', title: 'не чувствуешь себя любимой', content: 'мне так хочется, чтобы ты это почувствовала. ты любима очень глубоко и по настоящему. не за что то и не потому что нужно. а просто потому что ты есть. я выбираю тебя снова и снова ❤️' },
  { id: '4', title: 'скучаешь по дому', content: 'я знаю, как это больно скучать по дому. но где бы ты ни была, моё сердце всегда рядом с тобой. ты не одна в этом чувстве. я держу тебя мысленно и никуда не отпускаю 🏡💕' },
  { id: '5', title: 'гордишься', content: 'посмотри, как много ты уже сделала. даже если путь был тяжёлым, ты всё равно шла вперёд. я так горжусь тобой. ты правда заслуживаешь этого чувства 🌟' },
  { id: '6', title: 'нуждаешься в мотивации', content: 'не нужно быть сильной сразу. достаточно одного маленького шага, потихонечку. я рядом и поддерживаю тебя в каждом из них. у тебя всё получится!! и даже если будет трудно, ты не одна 💜' },
  { id: '7', title: 'у тебя плохой день', content: 'если день был тяжёлым, это не значит, что с тобой что то не так. ты можешь устать. ты можешь быть слабой. я обнимаю тебя очень крепко. завтра будет новый день💜' },
  { id: '8', title: 'хочется смеяться', content: 'помнишь про пуссевые штучки? а про "забидели"? твой смех моя любимая мелодия! 😄🎵' },
  { id: '9', title: 'злишься', content: 'ты имеешь право злиться. твои чувства важны и настоящие. я люблю тебя не только в спокойные моменты, но и в такие. дыши. я рядом и никуда не уйду 🌸' },
  { id: '10', title: 'радуешься', content: 'когда ты счастлива, у меня внутри становится светло. мне так приятно видеть тебя радостной и живой. побудь в этом моменте. ты заслуживаешь счастья просто так 💖' },
  { id: '11', title: 'хочется обниматься', content: '🫂 я представляю, как обнимаю тебя. очень крепко и очень нежно. чувствуешь? это моя любовь окружает тебя хихих' },
  { id: '12', title: 'хорошие новости', content: 'урааа! я так рада за тебя. ты заслужила это больше, чем думаешь. мне хочется радоваться вместе с тобой и делить этот момент. я горжусь тобой. давай отпразднуем! 🎊🥳' },
  { id: '13', title: 'заболела', content: 'моя хорошая, пожалуйста, береги себя. дай себе время отдохнуть и восстановиться. я рядом мысленно и надеюсь, что тебя ничего не беспокоит, а вокруг тишина и покой. пусть тебе станет легче 🍵💕' },
  { id: '14', title: 'воспоминания', content: 'помнишь наши самые тёплые моменты? надеюсь, что это только начало, а впереди только куча прекрасных воспоминаний! 📸💫' },
  { id: '15', title: 'грустишь', content: 'ловить грустинки тоже хорошо! поплачь, если хочется (можешь даже позвонить в любое время). я здесь, и я люблю тебя даже в грустные дни. 💙😢' },
  { id: '16', title: 'overthinking', content: 'выдыхай, вкусняшечка моя. не всё нужно решать прямо сейчас, но всё хорошо. шаг за шагом и мы справимся. вместе 🌿' },
  { id: '17', title: 'тебе тревожно', content: 'ты в безопасности. всё будет хорошо и ты делаешь всё, чтобы плохое закончилось. дыши со мной, моя крутышка: вдох-выдох. я с тобой 🌊💜' },
  { id: '18', title: 'чувствуешь, что сдаешься', content: 'не сдавайся! ты уже проделала такой путь! я верю в тебя. давай вместе пройдём через это и порешаем всё (и всех) 🌈💪' },
  { id: '19', title: 'я ошиблась/обидела тебя', content: 'если я когда нибудь причинила тебе боль, знай, что мне правда жаль. я никогда не хочу ранить тебя и мне важно брать за это ответственность. ты заслуживаешь заботы, уважения и любви. я учусь быть лучше ради тебя и ради нас. и даже когда я ошибаюсь, моя любовь к тебе никуда не исчезает. 💕' },
  { id: '20', title: 'скучаешь по кому-то дорогому', content: 'скучать по кому-то, кто тебе дорог, это нормально. это значит, что ты умеешь чувствовать глубоко и по настоящему. не важно, по кому именно ты сейчас скучаешь. твои чувства не делают тебя плохой или неправильной. они просто говорят о том, что твоё сердце живое. я рядом с тобой в этой грустинке и мне хочется, чтобы тебе стало чуть теплее. 🤍' },
];

export function ReadMeSection() {
  const [openLetter, setOpenLetter] = useState<Letter | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl text-pink-400 mb-4 flex items-center justify-center gap-4">
            <Mail className="w-12 h-12" />
            READ ME WHEN...
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <div
                onClick={() => setOpenLetter(letter)}
                className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer border-2 border-pink-200 hover:border-purple-300 transition-all h-full flex items-center justify-center text-center"
              >
                <div>
                  <div className="text-4xl mb-3">💌</div>
                  <p className="text-sm text-purple-600 font-medium">
                    {letter.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {openLetter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setOpenLetter(null)}
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0.8, rotate: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl border-4 border-purple-300 relative"
              >
                <button
                  onClick={() => setOpenLetter(null)}
                  className="absolute top-4 right-4 text-purple-400 hover:text-purple-600 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="text-center">
                  <div className="text-6xl mb-6">💌</div>
                  <h3 className="text-3xl text-purple-400 mb-6 capitalize">
                    {openLetter.title}
                  </h3>
                  <p className="text-2xl text-gray-700 leading-relaxed whitespace-pre-line">
                    {openLetter.content}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
