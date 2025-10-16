import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import SocialSection from './components/sections/SocialSection';
import LifeUpdateSection from './components/sections/CertificationsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      <Header />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <SocialSection />
        <LifeUpdateSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;