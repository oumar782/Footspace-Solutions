
import React, { useState } from "react";
import Header from "../Composant/headers.jsx"; // Header ici
import Images from "../Composant/imageslider.jsx"; // Import du slider image
import Features from "../Composant/Features.jsx"; // Import des fonctionnalités
import Statistics from "../Composant/Statistics.jsx"; // Import des statistiques
import Tarifs from "../Composant/Tarif.jsx"; // Import des tarifs
import Personnalisable from "../Composant/Personnalisable.jsx"; // Import de la page Personnalisable
import Contact from "../Composant/Contact.jsx"; // Import de la page Contact

const Homepages = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header />
      <Images />
      <Features />
      <Statistics />
      <Tarifs />
      <Personnalisable />
      <Contact />





       
        
    </>
  );
};

export default Homepages;