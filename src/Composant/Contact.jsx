// Contact.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  User,
  Mail,
  Building2,
  MapPin,
  Send,
  Phone,
  CheckCircle2,
  X,
  Loader2,
  Clock,
  CalendarDays,
  ChevronRight,
  Sparkles
} from "lucide-react";
import "../style/contact.css";

// Composant Toast optimisé
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="toast__icon" size={20} />,
    error: <X className="toast__icon" size={20} />
  };

  return (
    <div className={`toast toast--${type}`} role="alert">
      <div className="toast__content">
        {icons[type]}
        <span className="toast__message">{message}</span>
      </div>
      <button className="toast__close" onClick={onClose} aria-label="Fermer">
        <X size={16} />
      </button>
    </div>
  );
};

// Loading Modal
const LoadingModal = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="modal-overlay" aria-live="polite" aria-busy="true">
      <div className="modal modal--loading">
        <div className="modal__content">
          <Loader2 className="modal__icon modal__icon--spin" size={40} />
          <p className="modal__message">Envoi en cours...</p>
        </div>
      </div>
    </div>
  );
};

// Toast Manager
const ToastManager = ({ toasts, removeToast }) => (
  <div className="toast-container" aria-live="polite">
    {toasts.map((toast) => (
      <Toast
        key={toast.id}
        message={toast.message}
        type={toast.type}
        onClose={() => removeToast(toast.id)}
      />
    ))}
  </div>
);

// Formulaire de contact
function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    entreprise: "",
    terrains: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);
  const formRef = useRef(null);

  const addToast = useCallback((message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const validateField = useCallback((name, value) => {
    switch (name) {
      case "nom":
        return !value.trim() ? "Nom requis" : "";
      case "email":
        return !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "Email invalide" : "";
      case "entreprise":
        return !value.trim() ? "Entreprise requise" : "";
      case "terrains":
        return value && value < 0 ? "Nombre de terrains invalide" : "";
      default:
        return "";
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  }, [form, validateField]);

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    
    if (touched[id]) {
      const error = validateField(id, value);
      setErrors((prev) => ({
        ...prev,
        [id]: error
      }));
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((e) => {
    const { id, value } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    
    const error = validateField(id, value);
    setErrors((prev) => ({ ...prev, [id]: error }));
  }, [validateField]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Marquer tous les champs comme touchés
    const allTouched = Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length > 0) {
      addToast("Veuillez corriger les erreurs dans le formulaire", "error");
      
      // Focus sur le premier champ en erreur
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = formRef.current?.querySelector(`#${firstErrorField}`);
      errorElement?.focus();
      return;
    }

    setIsSubmitting(true);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch("https://backend-foot-omega.vercel.app/api/demonstration/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          entreprise: form.entreprise,
          nombreterrains: form.terrains,
          message: form.message
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) throw new Error("Erreur lors de l'envoi");
      
      await response.json();
      addToast("Votre demande a été envoyée avec succès !", "success");
      
      setForm({
        nom: "",
        email: "",
        entreprise: "",
        terrains: "",
        message: ""
      });
      setTouched({});
      setErrors({});
      
    } catch (error) {
      console.error("Erreur:", error);
      addToast(
        error.name === "AbortError" 
          ? "Le serveur met trop de temps à répondre" 
          : "Une erreur est survenue. Veuillez réessayer.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <LoadingModal isVisible={isSubmitting} />
      <ToastManager toasts={toasts} removeToast={removeToast} />
      
      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="contact-form__group">
          <label htmlFor="nom" className="contact-form__label">
            <User size={18} className="contact-form__icon" />
            <span>Nom complet</span>
          </label>
          <input
            type="text"
            id="nom"
            className={`contact-form__input ${errors.nom && touched.nom ? "contact-form__input--error" : ""}`}
            placeholder="Jean Dupont"
            value={form.nom}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.nom && touched.nom}
          />
          {errors.nom && touched.nom && (
            <span className="contact-form__error" role="alert">{errors.nom}</span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            <Mail size={18} className="contact-form__icon" />
            <span>Email</span>
          </label>
          <input
            type="email"
            id="email"
            className={`contact-form__input ${errors.email && touched.email ? "contact-form__input--error" : ""}`}
            placeholder="jean@entreprise.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.email && touched.email}
          />
          {errors.email && touched.email && (
            <span className="contact-form__error" role="alert">{errors.email}</span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="entreprise" className="contact-form__label">
            <Building2 size={18} className="contact-form__icon" />
            <span>Entreprise</span>
          </label>
          <input
            type="text"
            id="entreprise"
            className={`contact-form__input ${errors.entreprise && touched.entreprise ? "contact-form__input--error" : ""}`}
            placeholder="Nom de votre entreprise"
            value={form.entreprise}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!errors.entreprise && touched.entreprise}
          />
          {errors.entreprise && touched.entreprise && (
            <span className="contact-form__error" role="alert">{errors.entreprise}</span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="terrains" className="contact-form__label">
            <MapPin size={18} className="contact-form__icon" />
            <span>Nombre de terrains</span>
          </label>
          <input
            type="number"
            id="terrains"
            className="contact-form__input"
            placeholder="0"
            min="0"
            value={form.terrains}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            <Send size={18} className="contact-form__icon" />
            <span>Message <span className="contact-form__optional">(optionnel)</span></span>
          </label>
          <textarea
            id="message"
            className="contact-form__textarea"
            placeholder="Partagez-nous vos besoins spécifiques..."
            rows={4}
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="contact-form__button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="contact-form__button-icon contact-form__button-icon--spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Send size={18} className="contact-form__button-icon" />
              <span>Envoyer la demande</span>
            </>
          )}
        </button>
      </form>
    </>
  );
}

// Informations de contact
function ContactInfo() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Rue de Bethune, Casablanca, Maroc",
      link: null
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@footspacesolutions.com",
      link: "mailto:contact@footspacesolutions.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 0721976288 / 0688112830",
      link: "tel:+2120721976288"
    }
  ];

  const hours = [
    { day: "Lundi - Vendredi", hours: "9h00 - 18h00" },
    { day: "Samedi", hours: "10h00 - 16h00" },
    { day: "Dimanche", hours: "Fermé" }
  ];

  return (
    <div className="contact-info">
      <div className="contact-info__header">
        <Sparkles size={24} className="contact-info__header-icon" />
        <h2 className="contact-info__title">Nos coordonnées</h2>
        <p className="contact-info__subtitle">Nous sommes à votre écoute</p>
      </div>
      
      <div className="contact-info__grid">
        {contactItems.map((item, index) => (
          <div key={index} className="contact-info__card">
            <div className="contact-info__card-icon">
              <item.icon size={24} />
            </div>
            <h3 className="contact-info__card-title">{item.title}</h3>
            {item.link ? (
              <a href={item.link} className="contact-info__card-link">
                {item.content}
                <ChevronRight size={16} />
              </a>
            ) : (
              <address className="contact-info__card-address">{item.content}</address>
            )}
          </div>
        ))}
      </div>
      
      <div className="contact-info__hours">
        <div className="contact-info__hours-header">
          <Clock size={20} />
          <h3>Horaires d'ouverture</h3>
        </div>
        <div className="contact-info__hours-list">
          {hours.map((item, index) => (
            <div key={index} className="contact-info__hours-item">
              <span className="contact-info__hours-day">
                <CalendarDays size={14} />
                {item.day}
              </span>
              <span className="contact-info__hours-time">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant principal
const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`contact-page ${isLoaded ? "contact-page--loaded" : ""}`}>
      {/* Background décoratif */}
      <div className="contact-bg">
        <div className="contact-bg__gradient" />
        <div className="contact-bg__pattern" />
        <div className="contact-bg__blob contact-bg__blob--1" />
        <div className="contact-bg__blob contact-bg__blob--2" />
      </div>
      
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-header__badge">
            <Sparkles size={16} />
            <span>Contactez-nous</span>
          </div>
          <h1 className="contact-header__title">
            Prêt à optimiser
            <span className="contact-header__highlight"> vos réservations ?</span>
          </h1>
          <p className="contact-header__description">
            Contactez-nous pour une démonstration personnalisée ou pour obtenir plus d'informations.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
        </div>
        
        {/* Contenu principal */}
        <div className="contact-grid">
          <div className="contact-grid__form">
            <ContactForm />
          </div>
          <div className="contact-grid__info">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;