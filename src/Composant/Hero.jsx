import React, { useState } from "react";
import { Calendar, Clock, Users } from "lucide-react";
import "../style/Personnalisable.css";

export default function Hero() {
  const [activeDay, setActiveDay] = useState(2); // Jour actif par défaut

  // Données dynamiques pour les créneaux
  const timeSlots = [
    { time: "10:00 - 11:30", availability: "5/10", status: "available" },
    { time: "14:00 - 15:30", availability: "8/10", status: "popular" },
    { time: "18:00 - 19:30", availability: "2/10", status: "limited" }
  ];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="grid-layout">
          {/* Contenu texte */}
          <div className="content-wrapper">
            <h1 className="hero-title">
              <span className="title-gradient">Optimisez vos réservations</span>
              <br />
              avec FootSpace-Solutions
            </h1>
            <p className="hero-description">
              Solution clé en main pour la gestion premium de vos terrains. 
              Augmentez votre taux d'occupation de 40% avec notre interface 
              haut de gamme et nos outils analytiques avancés.
            </p>
            
           
          </div>

          {/* Carte de réservation */}
          <div className="card-elegant">
            <div className="card-header">
              <h3 className="card-title">
                <Calendar className="icon-header" />
                Réservation Premium
              </h3>
              <span className="card-badge">Disponible</span>
            </div>

            <div className="calendar-grid">
              {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day, i) => (
                <button
                  key={i}
                  className={`day-pill ${activeDay === i ? 'active-day' : ''}`}
                  onClick={() => setActiveDay(i)}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="time-slots-container">
              {timeSlots.map((slot, index) => (
                <div key={index} className={`time-slot ${slot.status}`}>
                  <div className="slot-info">
                    <Clock className="slot-icon" />
                    <span>{slot.time}</span>
                  </div>
                  <div className="slot-availability">
                    <Users className="slot-icon" />
                    <span>{slot.availability}</span>
                  </div>
                  <button className="slot-button">
                    Réserver
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}