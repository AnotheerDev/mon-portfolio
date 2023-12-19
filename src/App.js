// App.js
import React, {useState, useRef} from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [useRef(null), useRef(null), useRef(null)]; // pour Home, Projects, Resume

  const scrollToSection = (index) => {
    setActiveIndex(index);
    sections[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <main>
        <div ref={sections[0]}><Home /></div>
        <div ref={sections[1]}><Projects /></div>
        <div ref={sections[2]}><Resume /></div>
        {/* Vous pouvez ajouter plus de sections ici si nécessaire */}
        <Footer />
      </main>
      <div className="navigation-buttons">
        {activeIndex > 0 && <button onClick={() => scrollToSection(activeIndex - 1)}>&uarr;</button>}
        {activeIndex < sections.length - 1 && <button onClick={() => scrollToSection(activeIndex + 1)}>&darr;</button>}
      </div>
    </div>
    
  );
}

export default App;
