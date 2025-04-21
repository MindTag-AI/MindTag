import React from 'react';
import ReactDOM from 'react-dom';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import RoadmapSection from './components/RoadmapSection';

function App() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <RoadmapSection />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
