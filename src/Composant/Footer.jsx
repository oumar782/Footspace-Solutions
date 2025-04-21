import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="company-info">
            <h3 className="company-title">
              <span className="gradient-text">Footspace</span>
              <span> Solutions</span>
            </h3>
            <p className="company-description">
              Nous proposons des solutions innovantes pour la gestion des activités sportives et des installations.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Liens rapides</h4>
            <ul className="footer-links">
              {['Accueil', 'Fonctionnalités', 'Calendrier', 'Témoignages', 'Tarifs', 'Blog'].map((item) => (
                <li key={item} className="footer-link-item">
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="footer-heading">Légal</h4>
            <ul className="footer-links">
              {['Conditions générales', 'Politique de confidentialité', 'Mentions légales', 'Cookies'].map((item) => (
                <li key={item} className="footer-link-item">
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span className="contact-text">123 Avenue des Sports, 75000 Paris, France</span>
              </li>
              <li className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span className="contact-text">+33 1 23 45 67 89</span>
              </li>
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span className="contact-text">contact@footspace-solutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Footspace-Solutions. Tous droits réservés.
            </p>
            <div className="legal-links">
              <a href="#" className="legal-link">
                Conditions générales
              </a>
              <a href="#" className="legal-link">
                Politique de confidentialité
              </a>
              <a href="#" className="legal-link">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;