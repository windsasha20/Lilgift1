import { motion } from 'motion/react';
import { Mail, Heart, MessageCircle, Lock, Home, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentSection: number;
  onNavigate: (section: number) => void;
}

const sections = [
  { id: 0, icon: Home, label: 'Главная' },
  { id: 1, icon: Sparkles, label: 'Любимочка' },
  { id: 2, icon: Mail, label: 'Письма' },
  { id: 3, icon: Heart, label: 'Комплименты' },
  { id: 4, icon: MessageCircle, label: 'Ссоры' },
  { id: 5, icon: Lock, label: 'Тайное' },
];

export function Navigation({ currentSection, onNavigate }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg shadow-lg z-50 border-t-2 border-pink-200"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-around items-center">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(section.id)}
              className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-colors ${
                currentSection === section.id
                  ? 'text-purple-500'
                  : 'text-gray-400 hover:text-purple-400'
              }`}
            >
              <section.icon className="w-6 h-6" />
              <span className="text-xs hidden md:block">{section.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}