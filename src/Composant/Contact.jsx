import React, { useEffect, useRef, useState } from "react";
import "../style/contact.css"; // Importation du fichier CSS pour le style

// Icônes SVG en ligne pour éviter toute dépendance extérieure
const UserIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const EnvelopeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="14" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
);

const BuildingIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="6" x2="12" y2="6"/><line x1="12" y1="12" x2="12" y2="12"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
);

const MapPinIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const PaperPlaneIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

const PhoneIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const GlobeIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);


  
function ContactForm() {
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    entreprise: "",
    terrains: "1-2",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validation simple pour prototype
  const validate = () => {
    let err = {};
    if (!form.prenom.trim()) err.prenom = "Prénom requis";
    if (!form.nom.trim()) err.nom = "Nom requis";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) err.email = "Email invalide";
    if (!form.entreprise.trim()) err.entreprise = "Entreprise requise";
    return err;
  };

  const handleChange = e => {
    const { id, value } = e.target;
    setForm(f => ({ ...f, [id]: value }));
    setErrors(e => ({ ...e, [id]: undefined }));
  };

  const handleBlur = e => {
    const { id, value } = e.target;
    if (!value.trim()) setErrors(e => ({ ...e, [id]: `${id[0].toUpperCase() + id.slice(1)} requis` }));
    else if (id==="email" && !value.match(/^[^@]+@[^@]+\.[^@]+$/)) setErrors(e => ({ ...e, email: "Email invalide" }));
    else setErrors(e => ({ ...e, [id]: undefined }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setSuccess(true);
        setIsSubmitting(false);
      }, 1300);
    } else {
      setErrors(err);
    }
  };

  if (success) {
    return (
      <div className="contact-form__success" aria-live="polite">
        <div className="contact-form__success-icon" aria-hidden="true">✓</div>
        <h2 className="contact-form__success-title">Demande envoyée !</h2>
        <p className="contact-form__success-message">Merci pour votre demande.<br/>Notre équipe va vous recontacter très prochainement.</p>
        <button className="contact-form__back-button" onClick={() => { setSuccess(false); setForm({prenom:"",nom:"",email:"",entreprise:"","terrains":"1-2",message:""}); setErrors({}); }}>Retour</button>
      </div>
    );
  }

  return (
    <form className="contact-form" autoComplete="off" onSubmit={handleSubmit} aria-label="Formulaire de contact">
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="prenom" className="contact-form__label"><UserIcon className="contact-form__icon"/><span>Prénom et Nom</span></label>
          <input type="text" className={`contact-form__input${errors.prenom?" contact-form__input--error":""}`} id="prenom" placeholder="Votre prénom" value={form.prenom} onChange={handleChange} onBlur={handleBlur} required aria-required="true" aria-invalid={errors.prenom?"true":"false"}/>
          {errors.prenom && <span className="contact-form__error">{errors.prenom}</span>}
        </div>
      
      </div>
      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label"><EnvelopeIcon className="contact-form__icon"/><span>Email</span></label>
        <input type="email" className={`contact-form__input${errors.email?" contact-form__input--error":""}`} id="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} onBlur={handleBlur} required aria-required="true" aria-invalid={errors.email?"true":"false"}/>
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>
      <div className="contact-form__group">
        <label htmlFor="entreprise" className="contact-form__label"><BuildingIcon className="contact-form__icon"/><span>Entreprise</span></label>
        <input type="text" className={`contact-form__input${errors.entreprise?" contact-form__input--error":""}`} id="entreprise" placeholder="Nom de votre entreprise" value={form.entreprise} onChange={handleChange} onBlur={handleBlur} required aria-required="true" aria-invalid={errors.entreprise?"true":"false"}/>
        {errors.entreprise && <span className="contact-form__error">{errors.entreprise}</span>}
      </div>
      <div className="contact-form__group">
        <label htmlFor="terrains" className="contact-form__label"><MapPinIcon className="contact-form__icon"/><span>Nombre de terrains</span></label>
        <select id="terrains" className="contact-form__select" value={form.terrains} onChange={handleChange}>
          <option value="1-2">1-2 terrains</option>
          <option value="3-5">3-5 terrains</option>
          <option value="6+">6+ terrains</option>
        </select>
        <div className="contact-form__select-arrow"></div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label"><PaperPlaneIcon className="contact-form__icon"/><span>Message (optionnel)</span></label>
        <textarea id="message" className="contact-form__textarea" placeholder="Partagez-nous vos besoins spécifiques..." rows={4} value={form.message} onChange={handleChange}></textarea>
      </div>
      <button type="submit" className={`contact-form__button${isSubmitting?" contact-form__button--loading":""}`} disabled={isSubmitting}>
        {isSubmitting ? (<span className="contact-form__button-loader"/>) : (<><PaperPlaneIcon className="contact-form__button-icon"/><span>Envoyer</span></>)}
      </button>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info" aria-label="Informations de contact">
      <h2 className="contact-info__title">Nos coordonnées</h2>
      <ul className="contact-info__list">
        <li className="contact-info__item contact-info__item--location">
          <div className="contact-info__icon-wrapper"><MapPinIcon className="contact-info__icon" /></div>
          <div className="contact-info__content">
            <h3 className="contact-info__subtitle">Adresse</h3>
            <p className="contact-info__text">Rue de Bethune, Casablanca, Maroc</p>
          </div>
        </li>
        <li className="contact-info__item contact-info__item--email">
          <div className="contact-info__icon-wrapper"><EnvelopeIcon className="contact-info__icon" /></div>
          <div className="contact-info__content">
            <h3 className="contact-info__subtitle">Email</h3>
            <a href="mailto:contact@example.com" className="contact-info__link">contact@footspacesolutions.com</a>
          </div>
        </li>
        <li className="contact-info__item contact-info__item--phone">
          <div className="contact-info__icon-wrapper"><PhoneIcon className="contact-info__icon" /></div>
          <div className="contact-info__content">
            <h3 className="contact-info__subtitle">Téléphone</h3>
            <a href="tel:+212 0721976288" className="contact-info__link">+212 0721976288 / 0688112830</a>
          </div>
        </li>
       
      </ul>
      <div className="contact-info__hours">
        <h3 className="contact-info__hours-title">Heures d'ouverture</h3>
        <ul className="contact-info__hours-list">
          <li className="contact-info__hours-item"><span className="contact-info__hours-day">Lundi - Vendredi</span><span className="contact-info__hours-time">9h00 - 18h00</span></li>
          <li className="contact-info__hours-item"><span className="contact-info__hours-day">Samedi</span><span className="contact-info__hours-time">10h00 - 16h00</span></li>
          <li className="contact-info__hours-item"><span className="contact-info__hours-day">Dimanche</span><span className="contact-info__hours-time">Fermé</span></li>
        </ul>
      </div>
    </div>
  );
}

// Page principale
const Contact = () => {
  // Mode sombre (bonus)
  const [dark, setDark] = useState(false);
  // Animation d’entrée
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 150);
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    return () => {
      document.body.classList.remove("dark-mode");
    };
  }, [dark]);

  return (
    <div className={`contact-page${dark ? " contact--dark" : ""}${loaded ? " contact--loaded" : ""}`}>
      <div className="contact-background">
        <div className="contact-background-pattern" />
        {/* Parallaxe subtil (bonus, facultatif) */}
      </div>
      <div className="contact-container">
        <header className="contact-header">
          <span className="contact-badge">Contactez-nous</span>
          <h1 className="contact-title">Prêt à optimiser vos réservations ?</h1>
          <p className="contact-description">Contactez-nous pour une démonstration personnalisée ou pour obtenir plus d'informations.</p>
        </header>
        <main className="contact-content">
          <section className="contact-form-section">
            <ContactForm />
          </section>
          <section className="contact-info-section">
            <ContactInfo />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
