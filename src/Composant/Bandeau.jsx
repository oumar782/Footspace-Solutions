// Bandeau.jsx
import "../style/Bandeau.css";
import React, { useState } from 'react';

const Bandeau = () => {
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    { id: 1, icon: '🚀', badge: 'Officiel', text: 'Lancement de Footspace-Solutions le 13 Octobre 2025 !' },
    { id: 2, icon: '⚽', text: 'Gérez vos réservations et terrains comme jamais auparavant' },
    { id: 3, icon: '📊', badge: 'Nouveau', text: 'Dashboard ultra complet pour booster votre activité' },
    { id: 4, icon: '🎉', text: 'Rejoignez-nous et digitalisez votre business dès maintenant !' },
    { id: 5, icon: '📱', text: 'Pour plus d’infos, contactez-nous sur WhatsApp : +212 7 21 97 62 88' }
  ];

  if (!isVisible) return null;

  return (
    <div className="bandeau-container">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {announcements.map((item) => (
            <div key={item.id} className="announcement-item">
              <span className="announcement-icon">{item.icon}</span>
              {item.badge && <span className="announcement-badge">{item.badge}</span>}
              <span className="announcement-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Bandeau;
