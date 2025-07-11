import React, { useEffect, useRef, useState } from "react";
import "../style/contact.css";

// Icônes SVG optimisées
const UserIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const EnvelopeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="14" rx="2"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const BuildingIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <line x1="12" y1="6" x2="12" y2="6"/>
    <line x1="12" y1="12" x2="12" y2="12"/>
    <line x1="12" y1="18" x2="12" y2="18"/>
  </svg>
);

const MapPinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PaperPlaneIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const PhoneIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CheckCircleIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const XIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const LoaderIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

// Composant Toast optimisé
const Toast = ({ message, type, onClose }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onClose();
    }, 3000);
    
    return () => clearTimeout(timerRef.current);
  }, [onClose]);

  return (
    <div className={`toast toast--${type}`} role="alert">
      <div className="toast__content">
        {type === 'success' ? (
          <CheckCircleIcon className="toast__icon" aria-hidden="true" />
        ) : (
          <XIcon className="toast__icon" aria-hidden="true" />
        )}
        <span className="toast__message">{message}</span>
      </div>
      <button 
        className="toast__close" 
        onClick={onClose}
        aria-label="Fermer la notification"
      >
        <XIcon className="toast__close-icon" aria-hidden="true" />
      </button>
    </div>
  );
};

// Composant LoadingModal optimisé
const LoadingModal = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="modal-overlay" aria-live="polite" aria-busy="true">
      <div className="modal modal--loading">
        <div className="modal__content">
          <LoaderIcon 
            className="modal__icon modal__icon--spin" 
            aria-hidden="true" 
          />
          <p className="modal__message">Envoi en cours...</p>
        </div>
      </div>
    </div>
  );
};

// ToastManager optimisé
const ToastManager = ({ toasts, removeToast }) => {
  return (
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
};

// Composant ContactForm optimisé
function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    entreprise: "",
    terrains: "",
    message: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);
  const formRef = useRef(null);

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const validate = () => {
    const err = {};
    if (!form.nom.trim()) err.nom = "Nom requis";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) err.email = "Email invalide";
    if (!form.entreprise.trim()) err.entreprise = "Entreprise requise";
    if (form.terrains < 0) err.terrains = "Nombre de terrains invalide";
    return err;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    
    // Validation en temps réel pour les champs modifiés
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (!value.trim()) {
      setErrors((prev) => ({ 
        ...prev, 
        [id]: `${id.charAt(0).toUpperCase() + id.slice(1)} requis` 
      }));
    } else if (id === "email" && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setErrors((prev) => ({ ...prev, email: "Email invalide" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      addToast('Veuillez corriger les erreurs dans le formulaire', 'error');
      
      // Focus sur le premier champ en erreur
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = formRef.current.querySelector(`#${firstErrorField}`);
      if (errorElement) {
        errorElement.focus();
      }
      
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi avec timeout
      const response = await Promise.race([
        fetch('http://localhost:5000/api/demonstrations/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nom: form.nom,
            email: form.email,
            entreprise: form.entreprise,
            nombreterrains: form.terrains,
            message: form.message
          }),
        }),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 5000)
        )
      ]);

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de la demande');
      }

      await response.json();
      
      addToast('Votre demande de démonstration a été envoyée avec succès!', 'success');
      setForm({
        nom: "",
        email: "",
        entreprise: "",
        terrains: "",
        message: ""
      });
    } catch (error) {
      console.error('Erreur:', error);
      addToast(
        error.message.includes('Timeout') 
          ? 'Le serveur met trop de temps à répondre' 
          : 'Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer.', 
        'error'
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
        aria-label="Formulaire de contact"
      >
        <div className="contact-form__group">
          <label htmlFor="nom" className="contact-form__label">
            <UserIcon className="contact-form__icon" aria-hidden="true" />
            <span>Nom complet</span>
          </label>
          <input
            type="text"
            className={`contact-form__input${errors.nom ? " contact-form__input--error" : ""}`}
            id="nom"
            placeholder="Veuillez saisir votre nom complet"
            value={form.nom}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? "nom-error" : undefined}
          />
          {errors.nom && (
            <span id="nom-error" className="contact-form__error" role="alert">
              {errors.nom}
            </span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">
            <EnvelopeIcon className="contact-form__icon" aria-hidden="true" />
            <span>Email</span>
          </label>
          <input
            type="email"
            className={`contact-form__input${errors.email ? " contact-form__input--error" : ""}`}
            id="email"
            placeholder="votre@email.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="contact-form__error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="entreprise" className="contact-form__label">
            <BuildingIcon className="contact-form__icon" aria-hidden="true" />
            <span>Entreprise</span>
          </label>
          <input
            type="text"
            className={`contact-form__input${errors.entreprise ? " contact-form__input--error" : ""}`}
            id="entreprise"
            placeholder="Nom de votre entreprise"
            value={form.entreprise}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={!!errors.entreprise}
            aria-describedby={errors.entreprise ? "entreprise-error" : undefined}
          />
          {errors.entreprise && (
            <span id="entreprise-error" className="contact-form__error" role="alert">
              {errors.entreprise}
            </span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="terrains" className="contact-form__label">
            <MapPinIcon className="contact-form__icon" aria-hidden="true" />
            <span>Nombre de terrains</span>
          </label>
          <input
            type="number"
            id="terrains"
            className={`contact-form__input${errors.terrains ? " contact-form__input--error" : ""}`}
            value={form.terrains}
            onChange={handleChange}
            onBlur={handleBlur}
            min="0"
            placeholder="0"
            aria-describedby={errors.terrains ? "terrains-error" : undefined}
          />
          {errors.terrains && (
            <span id="terrains-error" className="contact-form__error" role="alert">
              {errors.terrains}
            </span>
          )}
        </div>

        <div className="contact-form__group">
          <label htmlFor="message" className="contact-form__label">
            <PaperPlaneIcon className="contact-form__icon" aria-hidden="true" />
            <span>Message (optionnel)</span>
          </label>
          <textarea
            id="message"
            className="contact-form__textarea"
            placeholder="Partagez-nous vos besoins spécifiques..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            aria-describedby="message-help"
          />
          <span id="message-help" className="contact-form__help-text">
            Ce champ n'est pas obligatoire
          </span>
        </div>

        <button
          type="submit"
          className="contact-form__button"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          <PaperPlaneIcon className="contact-form__button-icon" aria-hidden="true" />
          <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}</span>
        </button>
      </form>
    </>
  );
}

// Composant ContactInfo optimisé
function ContactInfo() {
  return (
    <div className="contact-info" aria-label="Informations de contact">
      <h2 className="contact-info__title">Nos coordonnées</h2>
      
      <ul className="contact-info__list">
        <li className="contact-info__item contact-info__item--location">
          <div className="contact-info__icon-wrapper">
            <MapPinIcon className="contact-info__icon" aria-hidden="true" />
          </div>
          <div className="contact-info__content">
            <h3 className="contact-info__subtitle">Adresse</h3>
            <address className="contact-info__text">
              Rue de Bethune, Casablanca, Maroc
            </address>
          </div>
        </li>
        
        <li className="contact-info__item contact-info__item--email">
          <div className="contact-info__icon-wrapper">
            <EnvelopeIcon className="contact-info__icon" aria-hidden="true" />
          </div>
          <div className="contact-info__content">
            <h3 className="contact-info__subtitle">Email</h3>
            <p className="contact-info__text">
              <a 
                href="mailto:contact@footspacesolutions.com" 
                className="contact-info__link"
              >
                contact@footspacesolutions.com
              </a>
            </p>
          </div>
        </li>
        
        <li className="contact-info__item contact-info__item--phone">
          <div className="contact-info__icon-wrapper">
            <PhoneIcon className="contact-info__icon" aria-hidden="true" />
          </div>
          <div className="contact-info__content">
            <h3 className="contact-info__subtitle">Téléphone</h3>
            <p className="contact-info__text">
              <a 
                href="tel:+2120721976288" 
                className="contact-info__link"
              >
                +212 0721976288
              </a>
              <span className="contact-info__separator"> / </span>
              <a 
                href="tel:+2120688112830" 
                className="contact-info__link"
              >
                0688112830
              </a>
            </p>
          </div>
        </li>
      </ul>
      
      <div className="contact-info__hours">
        <h3 className="contact-info__hours-title">Heures d'ouverture</h3>
        <ul className="contact-info__hours-list">
          <li className="contact-info__hours-item">
            <span className="contact-info__hours-day">Lundi - Vendredi</span>
            <span className="contact-info__hours-time">9h00 - 18h00</span>
          </li>
          <li className="contact-info__hours-item">
            <span className="contact-info__hours-day">Samedi</span>
            <span className="contact-info__hours-time">10h00 - 16h00</span>
          </li>
          <li className="contact-info__hours-item">
            <span className="contact-info__hours-day">Dimanche</span>
            <span className="contact-info__hours-time">Fermé</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Composant Contact principal optimisé
const Contact = () => {
  const [dark, setDark] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove("dark-mode");
    };
  }, [dark]);

  return (
    <div 
      className={`contact-page${dark ? " contact--dark" : ""}${loaded ? " contact--loaded" : ""}`}
      role="main"
    >
      <div className="contact-background">
        <div className="contact-background-pattern" aria-hidden="true" />
      </div>
      
      <div className="contact-container">
        <header className="contact-header">
          <span className="contact-badge">Contactez-nous</span>
          <h1 className="contact-title">Prêt à optimiser vos réservations ?</h1>
          <p className="contact-description">
            Contactez-nous pour une démonstration personnalisée ou pour obtenir plus d'informations.
          </p>
        </header>
        
        <main className="contact-content">
          <section 
            className="contact-form-section"
            aria-labelledby="form-title"
          >
            <h2 id="form-title" className="visually-hidden">Formulaire de contact</h2>
            <ContactForm />
          </section>
          
          <section 
            className="contact-info-section"
            aria-labelledby="info-title"
          >
            <h2 id="info-title" className="visually-hidden">Informations de contact</h2>
            <ContactInfo />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;