// Home.jsx
import React, { useEffect } from 'react';
import './home.css';

const Home = () => {
  useEffect(() => {
    typewriter();
  }, []);

  const typewriter = () => {
    var aText = new Array(
      "Je suis JULIEN LEGER, un développeur web et web mobile. Je suis actuellement à la recherche d'une alternance pour le CDA (Concepteur Développeur d'Applications)"
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this position
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines

    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    function typewrite() {
      sContents = ' ';
      iRow = Math.max(0, iIndex - iScrollAt);
      var destination = document.getElementById("typedtext");

      if (destination) {
        while (iRow < iIndex) {
          sContents += aText[iRow++] + '<br />';
        }
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        if (iTextPos++ === iArrLength) {
          iTextPos = 0;
          iIndex++;
          if (iIndex !== aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewrite, 500);
          }
        } else {
          setTimeout(typewrite, iSpeed);
        }
      }
    }

    typewrite();
  }

  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="intro">
          <h1>Bienvenue sur Mon Portfolio</h1>
        </div>

          <img src="img/moi.jpg" alt="moi" className='img-profil'/>
          <div id="typedtext"></div>

      </div>
    </section>
  );
}

export default Home;
