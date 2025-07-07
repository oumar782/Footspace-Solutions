import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/Image/footsolutions.png';
import "../style/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = () => {
    const willOpen = !isMobileMenuOpen;
    setIsMobileMenuOpen(willOpen);
    document.body.style.overflow = willOpen ? "hidden" : "";
  };

  const navItems = [
    { path: "/accueil", label: "Accueil" },
    { path: "/fonctionnalites", label: "Fonctionnalités" },
    { path: "/statistics", label: "Statistiques" },
    { path: "/tarifs", label: "Tarifs" },
    { path: "/personnalisation", label: "Personnalisation" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/accueil" className="logo-link" onClick={closeMobileMenu}>
            <img 
              src={logo} 
              alt="Logo FootSpace Solutions" 
              className="logo-image"
              width="40"
              height="40"
              loading="eager"
            />
            <span className="logo-text">FootSpace-Solutions</span>
          </Link>
        </div>

        <nav className="desktop-navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Menu mobile"
        >
          {isMobileMenuOpen ? (
            <X className="menu-icon" size={24} />
          ) : (
            <Menu className="menu-icon" size={24} />
          )}
        </button>

        <div 
          className={`mobile-navigation-overlay ${isMobileMenuOpen ? "open" : ""}`}
          onClick={closeMobileMenu}
        >
          <nav 
            className="mobile-navigation"
            onClick={(e) => e.stopPropagation()}
          >
            
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="mobile-nav-item">
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;