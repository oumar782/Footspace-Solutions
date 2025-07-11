import React from "react";
import Header from "../Composant/headers";
import Images from "../Composant/imageslider";
import Features from "../Composant/Features";
import Statistics from "../Composant/Statistics";
import Tarifs from "../Composant/Tarif";
import Personnalisable from "../Composant/Personnalisable";
import Contact from "../Composant/Contact";

const Homepages = () => {
  return (
    <div className="page-wrapper">
      <Header showBandeau={true} /> {/* On passe une prop pour afficher le bandeau */}
      <main className="content">
        <Images />
        <Features />
        <Statistics />
        <Tarifs />
        <Personnalisable />
        <Contact />
      </main>
    </div>
  );
};

export default Homepages;