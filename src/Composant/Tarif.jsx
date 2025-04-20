import React, { useState } from "react";
import { Check } from "lucide-react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "../style/tarif.css";
import SubscriptionModal from "../Pages/SubscriptionModal.jsx";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Idéal pour les petites structures avec 1 à 2 terrains",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Jusqu'à 2 terrains",
        "Réservations en ligne",
        "Paiements intégrés",
        "Tableau de bord basique",
        "Support par email",
      ],
      limitations: ["Personnalisation limitée", "Pas d'application mobile", "Statistiques basiques"],
      subscriptionLink: "/souscription",
    },
    {
      id: "pro",
      name: "Pro",
      description: "Pour les complexes sportifs avec plusieurs terrains",
      monthlyPrice: 179,
      annualPrice: 149,
      popular: true,
      features: [
        "Jusqu'à 5 terrains",
        "Réservations en ligne",
        "Paiements intégrés",
        "Tableau de bord avancé",
        "Statistiques détaillées",
        "Application mobile",
        "Personnalisation avancée",
        "Support prioritaire",
      ],
      subscriptionLink: "/souscription"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Solution complète pour les grands complexes sportifs",
      monthlyPrice: 349,
      annualPrice: 299,
      features: [
        "Terrains illimités",
        "Réservations en ligne",
        "Paiements intégrés",
        "Tableau de bord premium",
        "Statistiques avancées",
        "Application mobile personnalisée",
        "Personnalisation complète",
        "API dédiée",
        "Support 24/7",
        "Gestionnaire de compte dédié",
      ],
      subscriptionLink: "/souscription"
    },
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan({
      ...plan,
      billingType: isAnnual ? "annual" : "monthly",
      price: isAnnual ? plan.annualPrice : plan.monthlyPrice,
      annualTotal: plan.annualPrice * 12
    });
    setShowModal(true);
  };

  const handleDirectSubscription = (plan) => {
    toast.info(`Redirection vers la souscription ${plan.name}...`);
    setTimeout(() => {
      navigate(plan.subscriptionLink);
    }, 1500);
  };

  const handleSubscribe = (formData) => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          console.log('Souscription envoyée:', {
            plan: selectedPlan,
            userData: formData
          });
          resolve(`Souscription à ${selectedPlan.name} confirmée`);
          setTimeout(() => navigate('/accueil'), 2000);
        }, 1500);
      }),
      {
        pending: 'Traitement de votre souscription...',
        success: {
          render({data}) {
            return data;
          },
          autoClose: 2000
        },
        error: 'Erreur lors de la souscription'
      }
    );
    setShowModal(false);
  };

  return (
    <>
      <section id="pricing" className="pricing-section">
        <div className="containerz">
          <div className="headerz">
            <div className="badgez">Tarifs</div>
            <h2>Des forfaits adaptés à vos besoins</h2>
            <div className="title-underline"></div>
            <p className="subtitlez">
              Choisissez la formule qui correspond le mieux à la taille de votre structure.
            </p>
          </div>

          <div className="billing-switch-container">
            <div className="billing-switch">
              <span className={!isAnnual ? "active" : ""}>Mensuel</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isAnnual}
                  onChange={(e) => {
                    setIsAnnual(e.target.checked);
                    toast.info(`Affichage des tarifs ${e.target.checked ? 'annuels' : 'mensuels'}`);
                  }}
                />
                <span className="slider round"></span>
              </label>
              <span className={isAnnual ? "active" : ""}>
                Annuel <span className="discount">-20%</span>
              </span>
            </div>
          </div>

          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`plan-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && <div className="popular-badge">Populaire</div>}

                <div className="card-header">
                  <h3 className="plan-title">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  <div className="price-container">
                    <p className="price">
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}€
                      <span>/mois</span>
                    </p>
                  </div>
                  {isAnnual && (
                    <p className="annual-price">
                      Facturé annuellement ({plan.annualPrice * 12}€)
                    </p>
                  )}
                </div>

                <div className="card-content">
                  <ul className="features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <Check className="icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.limitations?.map((limitation, i) => (
                      <li key={`limitation-${i}`} className="limitation">
                        <span>✕</span>
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="plan-actions">
                    <button
                      onClick={() => handlePlanSelect(plan)}
                      className={plan.popular ? "primary-button" : "outline-button"}
                    >
                      {plan.popular ? "Souscrire maintenant" : "Choisir cette offre"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && selectedPlan && (
        <SubscriptionModal
          plan={selectedPlan}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubscribe}
        />
      )}
    </>
  );
}