// App.js
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />        // Votre section Accueil
        <Projects />    // Votre section Projets
        <Resume />      // Votre section CV
        {/* Vous pouvez ajouter plus de sections ici si nécessaire */}
      </main>
    </div>
  );
}

export default App;
