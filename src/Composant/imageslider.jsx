import React from 'react';
import { ArrowRight, Calendar, Clock, Users, ChevronDown } from 'lucide-react';
import "../style/ims.css";
import logos from "../assets/Image/photo.png"; // Mise à jour du chemin

const ImageSlider = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background decorations */}
      <div className="hero-background">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Hero content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-emoji">🌱</span>
              <span className="hero-badge-text">La gestion de vos terrains de football simplifiée</span>
            </div>
            
            <h1 className="hero-title">
              <span>Transformez votre </span>
              <span className="hero-title-gradient">expérience de gestion de terrain </span>
            </h1>
            
            <p className="hero-description">
            Révolutionnez la gestion de vos terrains de football avec Footspace-Solutions. Simplifiez la réservation, optimisez vos créneaux et maximisez vos revenus, tout en offrant à vos clients une expérience moderne et fluide.
            </p>
            
            <div className="hero-buttons">
  {/* Bouton principal : "Découvrir la plateforme" */}
  <a 
    href="/fonctionnalites" 
    className="hero-button hero-button-primary"
    style={{ textDecoration: 'none' }} // Suppression du soulignement
  >
    Découvrir la plateforme
    <ArrowRight size={16} className="hero-button-icon" />
  </a>

  {/* Bouton secondaire : "Demander une démo" */}
  <a 
    href="/contact" 
    className="hero-button hero-button-secondary"
    style={{ textDecoration: 'none' }} // Suppression du soulignement
  >
    Demander une démo
  </a>
</div>
            
            <div className="hero-features">
              {[{ icon: Calendar, text: "Calendrier intégré" }, { icon: Users, text: "Gestion d'équipe" }, { icon: Clock, text: "Réservations en ligne" }]
                .map((feature, index) => (
                  <div key={index} className="hero-feature">
                    <feature.icon size={20} className="hero-feature-icon" />
                    <span>{feature.text}</span>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Hero image */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <div className="hero-image-gradient">
                <div className="hero-image-inner">
                  <img 
                    src={logos} // Utilisation du chemin mis à jour
                    alt="Footspace Solutions dashboard" 
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
            <div className="hero-image-blob hero-image-blob-1"></div>
            <div className="hero-image-blob hero-image-blob-2"></div>
            
            {/* Floating badge */}
            <div className="hero-status-badge">
              <div className="hero-status-content">
                <div className="hero-status-dot"></div>
                <span className="hero-status-text">En ligne</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
