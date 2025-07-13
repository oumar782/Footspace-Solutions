import React, { useState } from "react";
import Header from "../Composant/headers";
import Images from "../Composant/imageslider";
import Features from "../Composant/Features";
import Statistics from "../Composant/Statistics";
import Tarifs from "../Composant/Tarif";
import Personnalisable from "../Composant/Personnalisable";
import Contact from "../Composant/Contact";
import Modal from "../Composant/modal.jsx";

const Homepages = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <Modal onClose={closeModal} />}
      
      <div className="page-wrapper">
        <Header showBandeau={true} />
        <main className="content">
          <Images />
          <Features />
          <Statistics />
          <Tarifs />
          <Personnalisable />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Homepages;