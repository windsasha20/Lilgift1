import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LovingSection } from './components/LovingSection';
import { ReadMeSection } from './components/ReadMeSection';
import { ComplimentsSection } from './components/ComplimentsSection';
import { FightSection } from './components/FightSection';
import { SecretSection } from './components/SecretSection';
import { Navigation } from './components/Navigation';

export default function App() {
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  if (!started) {
    return <WelcomeScreen onStart={() => setStarted(true)} />;
  }

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return <WelcomeScreen onStart={() => setCurrentSection(1)} />;
      case 1:
        return <LovingSection />;
      case 2:
        return <ReadMeSection />;
      case 3:
        return <ComplimentsSection />;
      case 4:
        return <FightSection />;
      case 5:
        return <SecretSection />;
      default:
        return <WelcomeScreen onStart={() => setCurrentSection(1)} />;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {renderSection()}
      <Navigation currentSection={currentSection} onNavigate={setCurrentSection} />
    </div>
  );
}