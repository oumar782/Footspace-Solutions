import React from "react";
import "../style/footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp,FaTiktok} from "react-icons/fa"; // Import des icônes

export default function Footer() {
  return (
    <footer className="footer">
      <div className="containero">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Footspace Solutions</h3>
            <p>
              La solution complète pour la gestion et la réservation de vos terrains de football.
            </p>
            <div className="social-links">
              <a href="https://web.facebook.com/profile.php?id=61573704854372" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/footspacesolutions/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://www.tiktok.com/@footspace.solutio?_t=ZM-8ujnK0kEDTD&_r=1" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTiktok />
              </a>
              <a href="tel:+2120721976288" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp/>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Produit</h3>
            <ul className="footer-links">
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#pricing">Tarifs</a></li>
              <li><a href="#">Témoignages</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Ressources</h3>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Centre d'aide</a></li>
              <li><a href="#">Partenaires</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>
                <i className="icon-map-pin"></i>
                <p>Rue de Bethune, Casablanca, Maroc</p>
              </li>
              <li>
                <i className="icon-phone"></i>
                <p>+212 0721976288 / 0688112830</p>
              </li>
              <li>
                <i className="icon-mail"></i>
                <p>contact@footspacesolutions.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Footspace Solutions. Tous droits réservés.</p>
          <div className="footer-legal-links">
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}