import React, { useRef, useEffect } from 'react';
import { 
  Calendar, 
  CreditCard, 
  Users, 
  MessageSquare, 
  Clock, 
  Settings,
  CheckCircle
} from 'lucide-react';
import "../style/Feature.css";

const Features = () => {
  const featuresRef = useRef(null);

  // Données des fonctionnalités
  const features = [
    {
      icon: Calendar,
      title: "Calendrier Intelligent",
      description: "Planifiez facilement vos événements avec notre système de calendrier avancé et intuitif."
    },
    {
      icon: CreditCard,
      title: "Paiements Sécurisés",
      description: "Traitez les paiements en toute sécurité avec notre système de paiement intégré et protégé."
    },
    {
      icon: Users,
      title: "Gestion d'Équipe",
      description: "Gérez efficacement votre personnel et vos membres avec des outils de gestion d'équipe puissants."
    },
    {
      icon: MessageSquare,
      title: "Communication Centralisée",
      description: "Gardez tout le monde informé grâce à notre système de communication centralisé."
    },
    {
      icon: Clock,
      title: "Réservations Automatisées",
      description: "Automatisez vos réservations et éliminez les chevauchements de planification."
    },
    {
      icon: Settings,
      title: "Personnalisation Avancée",
      description: "Adaptez la plateforme à vos besoins spécifiques avec nos options de personnalisation avancées."
    }
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
            Toutes les <span className="gradient-text">fonctionnalités</span> dont vous avez besoin
          </h2>
          <p className="features-subtitle">
            Découvrez comment Footspace Solutions peut transformer la gestion de vos activités sportives
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