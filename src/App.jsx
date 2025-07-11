import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Import des composants
import Header from "./Composant/headers.jsx";
import Footer from "./Composant/Footer.jsx";
import Hero from "./Composant/Hero.jsx";
import Features from "./Composant/Features.jsx";
import Statistics from "./Composant/Statistics.jsx";
import Tarifs from "./Composant/Tarif.jsx";
import Personnalisable from "./Composant/Personnalisable.jsx";
import Contact from "./Composant/Contact.jsx";
import Homepage from "./Pages/Homepage.jsx";
import SubscriptionModal from "./Pages/SubscriptionModal.jsx";
import Images from "./Composant/imageslider.jsx";
import Bandeau from "./Composant/Bandeau.jsx";

import NotFound from "./Pages/NotFound"; // Import du nouveau composant 404

const GA_TRACKING_ID = "G-P73M64BH0Q";

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

const App = () => {
  // Ajout d'un effet pour réinitialiser le scroll au chargement de la page
  useEffect(() => {
    window.scrollTo(0, 0); // Assure que la page commence toujours en haut
  }, []);

  return (
    <Router>
      <TrackPageView />
      {/* Styles globaux pour éviter les barres de défilement horizontales */}
      <style>
       
      </style>
      <div style={{ paddingTop: '54px' }}> {/* Compensation pour le bandeau */}
      </div>
      <Bandeau />
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/accueil" />} />
          <Route path="/accueil" element={<Homepage />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/fonctionnalites" element={<Features />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/personnalisation" element={<Personnalisable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bandeau" element={<Bandeau />} />
          <Route path="/Souscription" element={<SubscriptionModal />} />
          <Route path="/ima" element={<Images />} />
          {/* Route 404 - doit être la dernière */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;