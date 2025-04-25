import React, { useRef, useEffect } from 'react';
import { 
  Calendar, 
  CreditCard, 
  Users, 
  MessageSquare, 
  Clock, 
  Settings,
  CheckCircle,
  Calendar as CalendarIcon,
  BarChart
} from 'lucide-react';
import "../style/Feature.css";

const Features = () => {
  const featuresRef = useRef(null);

  // Données des fonctionnalités
  const features = [
    {
      icon: CalendarIcon,
      title: "Réservations Automatisées",
      description: "Permettez à vos clients de réserver des créneaux horaires à tout moment, depuis n'importe quel appareil."
    },
    {
      icon: Clock,
      title: "Gestion des Créneaux Horaires",
      description: "Planifiez et gérez facilement vos créneaux horaires pour optimiser votre organisation et répondre à vos besoins spécifiques."
    },
    {
      icon: Users,
      title: "Gestion des clients",
      description: "Constituez une base de données clients et fidélisez votre clientèle avec des offres personnalisées."
    },
    {
      icon: BarChart,
      title: "Analyse des revenus",
      description: "Suivez vos performances financières et optimisez vos tarifs en fonction de la demande."
    },
    {
      icon: Users,
      title: "Gestion d'Équipe",
      description: "Gérez efficacement votre personnel et vos membres avec des outils de gestion d'équipe puissants."
    },
    {
      icon: Settings,
      title: "Personnalisation Avancée",
      description: "Adaptez la plateforme à vos besoins spécifiques avec nos options de personnalisation avancées."
    },
    {
      icon: CreditCard,
      title: "Paiement intégré",
      description: "Acceptez les paiements en ligne et sécurisez vos réservations avec des acomptes."
    },
 
  ];

  // Gestion de la révélation des éléments lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      if (featuresRef.current) {
        const elements = featuresRef.current.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.75) {
            el.classList.add('is-visible');
          }
        });
      }
    };

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier immédiatement au chargement

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Forcer le défilement vers une position légèrement descendue lors du clic sur un lien
  useEffect(() => {
    const handleLinkClick = (event) => {
      const target = event.target.closest('a'); // Vérifier si le clic est sur un lien
      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');

        // Si le lien est une ancre, laissez le navigateur gérer le défilement
        if (href && href.startsWith('#')) {
          return;
        }

        event.preventDefault(); // Empêcher le comportement par défaut du lien

        // Rediriger après un court délai
        setTimeout(() => {
          window.location.href = href;
        }, 10);

        // Forcer le défilement vers une position légèrement descendue (50px)
        window.scrollTo({
          top: 50, // Ajoute une marge de 50px depuis le haut
          behavior: 'smooth'
        });
      }
    };

    // Ajouter l'écouteur d'événement global pour les clics sur les liens
    document.addEventListener('click', handleLinkClick);

    // Nettoyer l'écouteur d'événement
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <section id="features" className="features-section" ref={featuresRef}>
      <div className="decorative-elements">
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-circle circle-3"></div>
      </div>
      
      <div className="features-container">
        <div className="features-header reveal-on-scroll">
          <div className="features-badge">
            <CheckCircle size={16} className="badge-icon" />
            <span>Tout ce dont vous avez besoin</span>
          </div>
          
          <h2 className="features-title">
            Toutes les <span className="gradient-text">fonctionnalités</span>  dont vous avez besoin pour gérer vos terrains
          </h2>
          <p className="features-subtitle">
          Footspace-Solutions combine des outils puissants et une interface intuitive pour optimiser la gestion de vos terrains de football.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon-container">
                <feature.icon size={24} className="feature-icon" />
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
              <div className="feature-card-footer">
                {/* Optionnel : Ajoutez des liens ici */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;