import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/SubscriptionModal.css";

const SubscriptionModal = ({ plan, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      toast.error("Veuillez accepter les conditions générales", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    onSubmit(formData);
  };

  return (
    <>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="modal-header">
            <h2>Souscription à l'offre {plan.name}</h2>
            <div className="title-underline"></div>   
            <p className="modalet" >
            Un immense merci pour votre fidélité. Votre confiance est notre plus grande motivation, et nous nous engageons à continuer de vous accompagner avec excellence et innovation.
            </p>
            <div className="plan-summary">
              <p><strong>Formule :</strong> {plan.name} ({plan.billingType === "annual" ? "Annuel" : "Mensuel"})</p>
              <p><strong>Prix :</strong> {plan.price}€/{plan.billingType === "annual" ? "an" : "mois"}</p>
              {plan.billingType === "annual" && (
                <p className="savings-notice">
                  <Check size={16} /> Économisez {(plan.monthlyPrice * 12 - plan.annualPrice * 12)}€ par an
                </p>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="subscription-form">
            <div className="form-section">
              <h3>Informations personnelles</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email professionnel</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label>Entreprise (optionnel)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="terms-section">
              <label className="terms-checkbox">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                <span className="terms-text">
                  J'accepte les{" "}
                  <a href="#" className="terms-link">
                    conditions générales de vente
                  </a>
                </span>
              </label>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-button" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="submit-button">
                Confirmer la souscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubscriptionModal;