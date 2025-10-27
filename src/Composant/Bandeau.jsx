// Bandeau.jsx
import "../style/Bandeau.css";
import React, { useState } from 'react';
import { Rocket, Trophy, BarChart3, PartyPopper, Phone } from "lucide-react";

const Bandeau = () => {
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    { id: 1, icon: <Rocket size={18} />, badge: 'C’est parti !', text: 'Footspace-Solutions est là — bookez, gérez et kiffez vos matchs sans prise de tête 🔥' },
    { id: 2, icon: <Trophy size={18} />, text: 'Gérez vos réservations et terrains comme jamais auparavant' },
    { id: 3, icon: <BarChart3 size={18} />, badge: 'Nouveau', text: 'Dashboard ultra complet pour booster votre activité' },
    { id: 4, icon: <PartyPopper size={18} />, text: 'Rejoignez-nous et digitalisez votre business dès maintenant !' },
    { id: 5, icon: <Phone size={18} />, text: 'Contactez-nous sur WhatsApp : +212 7 21 97 62 88' }
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
