import React, { useState } from "react";
import { Calendar, Clock, Users, UsersRound, Smartphone, TrendingUp, BarChart3, Target } from "lucide-react";
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
              <span>Transformez votre </span>
              <span className="hero-title-gradient">expérience de gestion de terrain</span>
              <br />
              avec FootSpace-Solutions
            </h1>
            <p className="hero-description">
              Solution clé en main pour la gestion premium de vos terrains. 
              Augmentez votre taux d'occupation de 40% avec notre interface 
              haut de gamme et nos outils analytiques avancés.
            </p>
            
            {/* Fonctionnalités principales */}
            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <UsersRound />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Gestion des abonnés</h3>
                  <p className="feature-description">
                    Suivez vos abonnés, gérez les cotisations et offrez une expérience personnalisée
                  </p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <BarChart3 />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Analyses des revenus</h3>
                  <p className="feature-description">
                    Visualisez vos performances financières avec des tableaux de bord intuitifs
                  </p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <Target />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Prévision de réservations</h3>
                  <p className="feature-description">
                    Anticipez la demande et optimisez votre planning avec nos prévisions IA
                  </p>
                </div>
              </div>
            </div>
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

            <div className="slots-container">
              {timeSlots.map((slot, index) => (
                <div key={index} className={`slot-item ${slot.status}`}>
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