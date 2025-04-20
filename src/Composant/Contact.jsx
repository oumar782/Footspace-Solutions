import React from 'react';
import { FaUser, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import "../style/contact.css";

const Contact = () => {
    return (
        <div className="containerp">
            <section className="contact-section">
                <div className="contact-header">
                    <span className="contact-badge">Contactez-nous</span>
                    <div className="title-underline"></div>
                    <h1 className="contact-title">Prêt à optimiser vos réservations ?</h1>
                    <p className="contact-description">
                        Contactez-nous pour une démonstration personnalisée ou pour obtenir plus d'informations.
                    </p>
                </div>
                <div className="contact-card">
                    <div className="contact-card-header">
                        <h2 className="contact-card-title">Demande de démonstration</h2>
                        <p className="contact-card-description">
                            Remplissez le formulaire ci-dessous pour être contacté par notre équipe.
                        </p>
                    </div>
                    <form className="contact-form">
                        <div className="contact-form-grid">
                            <div className="contact-form-group">
                                <label htmlFor="prenom" className="contact-form-label">
                                    <FaUser className="icon" /> Prénom
                                </label>
                                <input type="text" id="prenom" className="contact-form-input" placeholder="Entrez votre prénom" />
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="nom" className="contact-form-label">
                                    <FaUser className="icon" /> Nom
                                </label>
                                <input type="text" id="nom" className="contact-form-input" placeholder="Entrez votre nom" />
                            </div>
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="email" className="contact-form-label">
                                <FaEnvelope className="icon" /> Email
                            </label>
                            <input type="email" id="email" className="contact-form-input" placeholder="Entrez votre email" />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="entreprise" className="contact-form-label">
                                <FaBuilding className="icon" /> Entreprise
                            </label>
                            <input type="text" id="entreprise" className="contact-form-input" placeholder="Nom de votre entreprise" />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="terrains" className="contact-form-label">
                                <FaMapMarkerAlt className="icon" /> Nombre de terrains
                            </label>
                            <select id="terrains" className="contact-form-select">
                                <option value="1-2">1-2 terrains</option>
                                <option value="3-5">3-5 terrains</option>
                                <option value="6+">6+ terrains</option>
                            </select>
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="message" className="contact-form-label">
                                <FaPaperPlane className="icon" /> Message (optionnel)
                            </label>
                            <textarea id="message" className="contact-form-textarea" placeholder="Partagez-nous vos besoins spécifiques..." rows="4" />
                        </div>
                        <button type="submit" className="contact-form-button">
                            <FaPaperPlane className="button-icon" /> Envoyer
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;