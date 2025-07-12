import React, { useState, useRef, useEffect } from "react";
import { Check, Smartphone, Palette, Layout, Image, Zap, Type, X, ChevronRight, Star, Award, Shield } from "lucide-react";

const Personnalisation = () => {
  // États principaux
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedFont, setSelectedFont] = useState("modern");
  const [showLogo, setShowLogo] = useState(true);
  const [activeTab, setActiveTab] = useState("colors");
  const [brandingLevel, setBrandingLevel] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // État pour le modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const modalRef = useRef(null);

  // Effet pour fermer le modal avec Escape et clicks extérieurs
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  // Configuration design
  const colors = {
    blue: { 
      primary: "#3b82f6", 
      secondary: "#1d4ed8", 
      accent: "#dbeafe",
      text: "#1e40af",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      light: "#eff6ff"
    },
    emerald: { 
      primary: "#10b981", 
      secondary: "#047857", 
      accent: "#d1fae5",
      text: "#065f46",
      gradient: "linear-gradient(135deg, #10b981, #047857)",
      light: "#ecfdf5"
    },
    violet: { 
      primary: "#8b5cf6", 
      secondary: "#6d28d9", 
      accent: "#ede9fe",
      text: "#5b21b6",
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      light: "#f5f3ff"
    },
    amber: {
      primary: "#f59e0b",
      secondary: "#d97706",
      accent: "#fef3c7",
      text: "#92400e",
      gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
      light: "#fffbeb"
    }
  };

  const fonts = {
    modern: { 
      name: "Moderne", 
      family: "'Inter', sans-serif",
      description: "Propre et contemporain, idéal pour une interface utilisateur intuitive"
    },
    classic: { 
      name: "Classique", 
      family: "'Georgia', serif",
      description: "Élégant et traditionnel, parfait pour un style intemporel"
    },
    elegant: { 
      name: "Élégant", 
      family: "'Playfair Display', serif",
      description: "Sophistiqué et raffiné, pour une expérience haut de gamme"
    },
    rounded: {
      name: "Arrondi",
      family: "'Nunito', sans-serif",
      description: "Amical et accessible, pour une approche conviviale"
    }
  };

  const customizationOptions = [
    {
      name: "Essentiel",
      price: 0,
      features: [
        "Logo personnalisé",
        "Palette de couleurs adaptée", 
        "Nom de domaine personnalisé",
        "Design responsive optimisé",
        "Support technique de base"
      ],
      icon: <Palette size={24} />,
      description: "Solution idéale pour les complexes sportifs débutant leur transition numérique. Offre les éléments essentiels pour une présence en ligne professionnelle.",
      badge: null
    },
    {
      name: "Premium",
      price: 299,
      features: [
        "Typographie exclusive", 
        "Icônes sur mesure", 
        "Identité visuelle complète",
        "Animations personnalisées",
        "Support prioritaire 24/7",
        "Intégration des réseaux sociaux"
      ],
      icon: <Award size={24} />,
      popular: true,
      description: "Pour les complexes souhaitant se démarquer avec une identité visuelle distinctive et cohérente. Notre solution la plus plébiscitée par les professionnels.",
      badge: "CHOIX PRÉFÉRÉ"
    },
    {
      name: "Excellence",
      price: 599,
      features: [
        "Application marque blanche", 
        "Design entièrement sur-mesure", 
        "Tableau de bord analytique",
        "Système de réservation avancé",
        "Accompagnement personnalisé",
        "Formation de l'équipe",
        "Certification de sécurité"
      ],
      icon: <Star size={24} />,
      description: "Solution complète et exclusive pour les complexes haut de gamme. Offrez une expérience numérique premium reflétant l'excellence de votre établissement.",
      badge: "HAUT DE GAMME"
    }
  ];

  // Gestion du choix d'une option avec ouverture du modal
  const handleOptionSelect = (index) => {
    setSelectedOption(customizationOptions[index]);
    setBrandingLevel(index);
    setModalOpen(true);
  };

  // Confirmer le choix dans le modal
  const confirmChoice = () => {
    // Ici vous pourriez ajouter une logique pour traiter la sélection
    setModalOpen(false);
  };

  // Styles dynamiques
  const getActiveTabStyle = (isActive) => ({
    backgroundColor: isActive ? `${colors[selectedColor].primary}15` : "transparent",
    color: isActive ? colors[selectedColor].text : "#64748b",
    border: isActive ? `1px solid ${colors[selectedColor].primary}` : "1px solid rgba(0,0,0,0.1)",
    transform: isActive ? "translateY(-2px)" : "none",
    boxShadow: isActive ? `0 4px 15px ${colors[selectedColor].primary}20` : "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
  });

  // Animation d'entrée pour le modal
  const modalAnimation = {
    opacity: modalOpen ? 1 : 0,
    visibility: modalOpen ? "visible" : "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease"
  };

  const modalContentAnimation = {
    transform: modalOpen ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease"
  };

  return (
    <section 
      className="personalization-section" 
      style={{
        position: "relative",
        backgroundColor: "#f8fafc",
        padding: "3rem 1rem",
        overflow: "hidden",
        marginTop: "90px", // J'ai ajouté "px" qui manquait
        isolation: "isolate"
      }}
    >
      {/* Fond décoratif avec animation subtile */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.05,
        backgroundSize: "120% 120%",
        backgroundPosition: "center",
        filter: "blur(60px)",
        animation: "pulse 15s infinite alternate",
        pointerEvents: "none",
        zIndex: 0
      }}></div>

      <style>
        {`
        @keyframes pulse {
          0% { background-size: 100% 100%; opacity: 0.03; }
          50% { background-size: 140% 140%; opacity: 0.06; }
          100% { background-size: 100% 100%; opacity: 0.03; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scaleIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes cardHover {
          0% { transform: translateY(0); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
          100% { transform: translateY(-5px); box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15); }
        }
        
        /* Amélioration de l'accessibilité pour focus */
        button:focus, 
        [role="button"]:focus {
          outline: 2px solid ${colors[selectedColor].primary};
          outline-offset: 2px;
        }
        
        /* Animation pour scroll élégant */
        html {
          scroll-behavior: smooth;
        }
        
        /* Transitions globales */
        button, 
        [role="button"],
        .transition-all {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* Effet au survol pour les cartes */
        .option-card:hover {
          animation: cardHover 0.3s forwards;
        }

        /* Style personnalisé pour la scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: ${colors[selectedColor].primary};
          border-radius: 10px;
        }
      
        /* Media Queries pour la responsivité */
        @media (min-width: 640px) {
          .personalization-section {
            padding: 4rem 1.5rem;
          }
        }
        
        @media (min-width: 768px) {
          .personalization-section {
            padding: 5rem 2rem;
          }
        }
        
        @media (min-width: 1024px) {
          .personalization-section {
            padding: 6rem 2.5rem;
          }
        }
        
        /* Ajustements pour les petits écrans */
        @media (max-width: 639px) {
          .tab-buttons {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 12px;
            -webkit-overflow-scrolling: touch;
          }
          
          .color-options {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          
          .preview-container {
            min-height: 500px;
          }
          
          .option-card {
            min-width: 280px;
          }
        }
        
        /* Optimisation pour les tablettes */
        @media (min-width: 640px) and (max-width: 1023px) {
          .main-grid {
            grid-template-columns: 1fr !important;
          }
          
          .preview-container {
            min-height: 600px;
          }
        }
        `}
      </style>

      <div style={{
        position: "relative",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 1rem",
        zIndex: 1
      }}>
        {/* En-tête avec animation d'entrée */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: "3rem",
          animation: "fadeIn 0.8s ease-out" 
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 1.25rem",
            backgroundColor: `${colors[selectedColor].primary}15`,
            borderRadius: "100px",
            color: colors[selectedColor].text,
            fontWeight: 600,
            fontSize: "0.875rem",
            marginBottom: "1.5rem",
            border: `1px solid ${colors[selectedColor].primary}30`,
            boxShadow: `0 4px 15px ${colors[selectedColor].primary}10`
          }}>
            <Zap style={{ 
              width: "1rem", 
              height: "1rem", 
              marginRight: "0.5rem",
              animation: "float 3s ease-in-out infinite"
            }} />
            PERSONNALISATION AVANCÉE
          </div>

          <h2 style={{
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "1.5rem",
            lineHeight: 1.2,
            animation: "slideUp 0.8s ease-out"
          }}>
            <span style={{
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              animation: "shine 3s linear infinite",
              display: "inline-block",
              fontWeight: 600,
              fontSize: "inherit"
            }}>
              Créez une expérience unique
            </span>
            <div style={{
              display: "block",
              width: "clamp(180px, 40vw, 280px)",
              height: "5px",
              background: colors[selectedColor].gradient,
              margin: "1.25rem auto",
              borderRadius: "3px",
              opacity: 0.8
            }}></div>
          </h2>
          <p style={{
            color: "#64748b",
            fontSize: "clamp(0.9375rem, 2.5vw, 1.125rem)",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.7,
            animation: "slideUp 1s ease-out"
          }}>
            Transformez l'expérience numérique de votre complexe sportif avec une interface sur-mesure qui reflète parfaitement votre identité et vos valeurs.
          </p>
        </div>

        {/* Contenu principal */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          marginBottom: "4rem",
          animation: "fadeIn 1.2s ease-out"
        }} className="main-grid">
          {/* Options de personnalisation */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0,0,0,0.05)",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            position: "relative",
            zIndex: 1
          }}>
            <div style={{ 
              padding: "1.5rem",
              position: "relative",
              zIndex: 1
            }}>
              <div style={{
              display: "flex",
              flexWrap: "wrap", // Permet le retour à la ligne sur petits écrans
              gap: "0.5rem",
              marginBottom: "1.5rem",
              paddingBottom: "0.75rem"
              }} className="tab-buttons">
                {['colors', 'fonts', 'branding'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.75rem 1.25rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      ...getActiveTabStyle(activeTab === tab)
                    }}
                  >
                    {tab === 'colors' && <Palette style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />}
                    {tab === 'fonts' && <Type style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />}
                    {tab === 'branding' && <Image style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />}
                    {tab === 'colors' ? 'Couleurs' : tab === 'fonts' ? 'Typographie' : 'Identité'}
                  </button>
                ))}
              </div>

              {activeTab === 'colors' && (
                <div style={{ animation: "fadeIn 0.5s ease-out" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    <Palette size={20} style={{ color: colors[selectedColor].primary }} />
                    Palette de couleurs
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "1rem"
                  }} className="color-options">
                    {Object.entries(colors).map(([name, color]) => (
                      <div 
                        key={name}
                        onClick={() => setSelectedColor(name)}
                        style={{
                          padding: "1rem",
                          borderRadius: "1rem",
                          backgroundColor: color.light,
                          border: `2px solid ${selectedColor === name ? color.primary : "transparent"}`,
                          cursor: "pointer",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: selectedColor === name ? "translateY(-4px)" : "none",
                          boxShadow: selectedColor === name 
                            ? `0 10px 20px -5px ${color.primary}20` 
                            : "0 5px 15px -5px rgba(0,0,0,0.05)",
                          position: "relative",
                          overflow: "hidden"
                        }}
                      >
                        {selectedColor === name && (
                          <div style={{
                            position: "absolute",
                            top: "0.5rem",
                            right: "0.5rem",
                            width: "1.25rem",
                            height: "1.25rem",
                            borderRadius: "50%",
                            backgroundColor: color.primary,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white"
                          }}>
                            <Check size={12} />
                          </div>
                        )}
                        <div style={{
                          display: "flex",
                          gap: "0.5rem",
                          marginBottom: "0.75rem"
                        }}>
                          <div style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "0.5rem",
                            background: color.gradient,
                            boxShadow: `0 4px 8px ${color.primary}30`
                          }}></div>
                          <div style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "0.5rem",
                            backgroundColor: color.secondary,
                            boxShadow: `0 4px 8px ${color.primary}30`
                          }}></div>
                        </div>
                        <p style={{
                          fontWeight: 600,
                          color: "#0f172a",
                          textTransform: "capitalize",
                          fontSize: "1rem"
                        }}>{name}</p>
                        <p style={{
                          fontSize: "0.75rem",
                          color: "#64748b",
                          marginTop: "0.25rem"
                        }}>
                          {name === 'blue' ? 'Professionnel' : 
                           name === 'emerald' ? 'Naturel' : 
                           name === 'violet' ? 'Créatif' : 'Énergique'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'fonts' && (
                <div style={{ animation: "fadeIn 0.5s ease-out" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    <Type size={20} style={{ color: colors[selectedColor].primary }} />
                    Typographie
                  </h3>
                  <div style={{
                    display: "grid",
                    gap: "0.75rem"
                  }}>
                    {Object.entries(fonts).map(([key, font]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedFont(key)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "1rem",
                          borderRadius: "0.875rem",
                          border: `1px solid ${selectedFont === key ? colors[selectedColor].primary : "rgba(0,0,0,0.1)"}`,
                          backgroundColor: selectedFont === key ? `${colors[selectedColor].primary}08` : "white",
                          cursor: "pointer",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: selectedFont === key ? "translateY(-4px)" : "none",
                          boxShadow: selectedFont === key ? `0 8px 15px ${colors[selectedColor].primary}15` : "0 5px 15px -5px rgba(0,0,0,0.05)",
                          fontFamily: font.family,
                          position: "relative",
                          overflow: "hidden"
                        }}
                      >
                        {selectedFont === key && (
                          <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "3px",
                            background: colors[selectedColor].gradient
                          }}></div>
                        )}
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.5rem"
                        }}>
                          <p style={{
                            fontWeight: 700,
                            color: "#0f172a",
                            fontSize: "1rem"
                          }}>{font.name}</p>
                          {selectedFont === key && (
                            <div style={{
                              padding: "0.25rem 0.5rem",
                              backgroundColor: `${colors[selectedColor].primary}15`,
                              color: colors[selectedColor].primary,
                              borderRadius: "100px",
                              fontSize: "0.6875rem",
                              fontWeight: 600
                            }}>
                              Sélectionné
                            </div>
                          )}
                        </div>
                        <p style={{
                          color: "#64748b",
                          fontStyle: "italic",
                          marginBottom: "0.5rem",
                          fontSize: "0.9375rem"
                        }}>Aa Bb Cc Dd Ee Ff Gg Hh Ii</p>
                        <p style={{
                          color: "#94a3b8",
                          fontSize: "0.75rem",
                          lineHeight: 1.5
                        }}>{font.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'branding' && (
                <div style={{ animation: "fadeIn 0.5s ease-out" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    <Image size={20} style={{ color: colors[selectedColor].primary }} />
                    Identité visuelle
                  </h3>
                  
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                  }}>
                    <div style={{
                      padding: "1rem",
                      borderRadius: "0.875rem",
                      border: `1px solid ${colors[selectedColor].accent}`,
                      backgroundColor: "white",
                      transition: "all 0.3s ease",
                      boxShadow: "0 5px 15px -5px rgba(0,0,0,0.05)"
                    }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.75rem"
                      }}>
                        <h4 style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#0f172a",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem"
                        }}>
                          <Layout size={16} />
                          Logo & Identité
                        </h4>
                        
                        <button 
                          onClick={() => setShowLogo(!showLogo)}
                          style={{
                            backgroundColor: showLogo ? colors[selectedColor].primary : "#f1f5f9",
                            border: "none",
                            width: "40px",
                            height: "22px",
                            borderRadius: "11px",
                            position: "relative",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease"
                          }}
                        >
                          <span style={{
                            position: "absolute",
                            top: "1px",
                            left: showLogo ? "calc(100% - 21px)" : "1px",
                            width: "20px",
                            height: "20px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                          }}></span>
                        </button>
                      </div>
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginBottom: "0.5rem",
                        lineHeight: 1.6
                      }}>
                        Intégrez votre logo et vos éléments de marque pour une expérience cohérente avec votre identité.
                      </p>
                    </div>
                    
                    <div style={{
                      padding: "1rem",
                      borderRadius: "0.875rem",
                      border: `1px solid ${colors[selectedColor].accent}`,
                      backgroundColor: "white",
                      opacity: brandingLevel >= 1 ? 1 : 0.7,
                      cursor: brandingLevel >= 1 ? "default" : "not-allowed",
                      transition: "all 0.3s ease",
                      boxShadow: "0 5px 15px -5px rgba(0,0,0,0.05)",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      {brandingLevel < 1 && (
                        <div style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "rgba(255,255,255,0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 1
                        }}>
                          <div style={{
                            backgroundColor: colors[selectedColor].primary,
                            color: "white",
                            padding: "0.375rem 0.75rem",
                            borderRadius: "0.5rem",
                            fontSize: "0.75rem",
                            fontWeight: 600
                          }}>
                            Disponible avec l'offre Premium
                          </div>
                        </div>
                      )}
                      <h4 style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#0f172a",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.75rem"
                      }}>
                        <Shield size={16} />
                        Icônes personnalisées
                      </h4>
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginBottom: "0.5rem",
                        lineHeight: 1.6
                      }}>
                        Créez des icônes sur mesure qui reflètent parfaitement l'univers de votre complexe sportif.
                      </p>
                    </div>
                    
                    <div style={{
                      padding: "1rem",
                      borderRadius: "0.875rem",
                      border: `1px solid ${colors[selectedColor].accent}`,
                      backgroundColor: "white",
                      opacity: brandingLevel >= 2 ? 1 : 0.7,
                      cursor: brandingLevel >= 2 ? "default" : "not-allowed",
                      transition: "all 0.3s ease",
                      boxShadow: "0 5px 15px -5px rgba(0,0,0,0.05)",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      {brandingLevel < 2 && (
                        <div style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "rgba(255,255,255,0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          zIndex: 1
                        }}>
                          <div style={{
                            backgroundColor: colors[selectedColor].primary,
                            color: "white",
                            padding: "0.375rem 0.75rem",
                            borderRadius: "0.5rem",
                            fontSize: "0.75rem",
                            fontWeight: 600
                          }}>
                            Disponible avec l'offre Excellence
                          </div>
                        </div>
                      )}
                      <h4 style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#0f172a",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.75rem"
                      }}>
                        <Star size={16} />
                        Application sur-mesure
                      </h4>
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginBottom: "0.5rem",
                        lineHeight: 1.6
                      }}>
                        Une solution entièrement personnalisée, conçue spécifiquement pour répondre à vos besoins uniques.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Aperçu */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(0,0,0,0.05)",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "500px"
          }} className="preview-container">
            <div style={{ 
              padding: "1.5rem",
              flex: 1,
              display: "flex",
              flexDirection: "column"
            }}>
              <h3 style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "1.25rem",
                gap: "0.5rem"
              }}>
                <Smartphone style={{ width: "1.25rem", height: "1.25rem" }} />
                Aperçu en direct
              </h3>
              
              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
                borderRadius: "1rem",
                backgroundColor: colors[selectedColor].light,
                border: `2px solid ${colors[selectedColor].primary}50`,
                fontFamily: fonts[selectedFont].family,
                transition: "all 0.5s ease",
                boxShadow: `0 10px 20px -5px ${colors[selectedColor].primary}20`,
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: colors[selectedColor].gradient
                }}></div>

                <div style={{
                  backgroundColor: "white",
                  borderRadius: "0.875rem",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                  animation: "scaleIn 0.5s ease-out",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div style={{
                    padding: "1rem",
                    borderBottom: `1px solid ${colors[selectedColor].accent}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    backdropFilter: "blur(5px)"
                  }}>
                    <div style={{ 
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem" 
                    }}>
                      {showLogo && (
                        <div style={{
                          width: "1.75rem",
                          height: "1.75rem",
                          borderRadius: "0.5rem",
                          background: colors[selectedColor].gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.875rem",
                          color: "white",
                          fontWeight: "bold",
                          flexShrink: 0
                        }}>
                          {fonts[selectedFont].name[0]}
                        </div>
                      )}
                      <div>
                        <h4 style={{
                          fontWeight: 700,
                          color: colors[selectedColor].text,
                          fontSize: "1rem"
                        }}>Votre Complexe</h4>
                        <p style={{
                          fontSize: "0.6875rem",
                          color: "#64748b",
                          marginTop: "0.125rem"
                        }}>Réservations en ligne</p>
                      </div>
                    </div>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}>
                      <span style={{
                        fontSize: "0.6875rem",
                        color: colors[selectedColor].text,
                        fontWeight: 500
                      }}>12:45</span>
                      <Smartphone style={{ 
                        width: "1rem", 
                        height: "1rem", 
                        color: colors[selectedColor].primary 
                      }} />
                    </div>
                  </div>
                  
                  <div style={{ 
                    padding: "1rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: "0.375rem",
                      marginBottom: "1.5rem"
                    }}>
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "0.375rem",
                            borderRadius: "0.5rem",
                            backgroundColor: i === 3 ? colors[selectedColor].primary : "#f8fafc",
                            color: i === 3 ? "white" : "#64748b",
                            fontWeight: i === 3 ? 600 : 500,
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                            boxShadow: i === 3 ? `0 4px 8px ${colors[selectedColor].primary}30` : "none"
                          }}
                        >
                          <span style={{ 
                            fontSize: "0.75rem",
                            marginBottom: "0.125rem"
                          }}>{day}</span>
                          <span style={{ 
                            fontSize: "0.8125rem",
                            fontWeight: i === 3 ? 700 : 600,
                            color: i === 3 ? "white" : i === 4 ? colors[selectedColor].primary : "#64748b"
                          }}>{i === 3 ? "15" : 10+i}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      marginBottom: "1.5rem"
                    }}>
                      <h5 style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#0f172a",
                        marginBottom: "0.375rem"
                      }}>Crénaux disponibles</h5>
                      
                      {[
                        { time: "10:00 - 11:30", activity: "Tennis", available: "5/10", highlighted: false },
                        { time: "14:00 - 15:30", activity: "Piscine", available: "8/10", highlighted: true },
                        { time: "16:00 - 17:30", activity: "Squash", available: "3/10", highlighted: false },
                      ].map((slot, i) => (
                        <div 
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0.75rem 1rem",
                            borderRadius: "0.75rem",
                            backgroundColor: slot.highlighted ? colors[selectedColor].primary : "#f8fafc",
                            color: slot.highlighted ? "white" : "#334155",
                            transition: "all 0.3s ease",
                            transform: slot.highlighted ? "translateY(-2px)" : "none",
                            boxShadow: slot.highlighted ? `0 6px 12px ${colors[selectedColor].primary}30` : "0 2px 5px rgba(0,0,0,0.03)",
                            cursor: "pointer",
                            border: `1px solid ${slot.highlighted ? colors[selectedColor].secondary : "#e2e8f0"}`
                          }}
                        >
                          <div>
                            <div style={{ 
                              fontWeight: slot.highlighted ? 600 : 500,
                              fontSize: "0.875rem"
                            }}>{slot.time}</div>
                            <div style={{ 
                              fontSize: "0.75rem",
                              color: slot.highlighted ? "rgba(255,255,255,0.9)" : "#64748b"
                            }}>{slot.activity}</div>
                          </div>
                          <div style={{
                            backgroundColor: slot.highlighted ? "rgba(255,255,255,0.2)" : "#e2e8f0",
                            color: slot.highlighted ? "white" : colors[selectedColor].text,
                            padding: "0.25rem 0.5rem",
                            borderRadius: "100px",
                            fontSize: "0.75rem",
                            fontWeight: 600
                          }}>
                            {slot.available} places
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      style={{
                        width: "100%",
                        padding: "0.875rem",
                        borderRadius: "0.75rem",
                        background: colors[selectedColor].gradient,
                        color: "white",
                        fontWeight: 600,
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: `0 4px 10px ${colors[selectedColor].primary}40`,
                        fontSize: "0.9375rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 6px 15px ${colors[selectedColor].primary}50`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 4px 10px ${colors[selectedColor].primary}40`;
                      }}
                    >
                      Réserver un créneau
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Options de personnalisation */}
        <div style={{ 
          padding: "0 1rem", 
          animation: "fadeIn 1.5s ease-out",
          position: "relative",
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "2.5rem",
            lineHeight: 1.2,
            textAlign: "center"
          }}>
            <span style={{
              backgroundImage: colors[selectedColor].gradient,
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              animation: "shine 4s linear infinite",
              display: "inline-block",
              padding: "0 0.5rem",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
              lineHeight: 1.2
            }}>
              Nos offres de personnalisation
            </span>
            <div style={{
              display: "block",
              width: "clamp(200px, 50vw, 350px)",
              height: "5px",
              background: colors[selectedColor].gradient,
              margin: "1.25rem auto",
              borderRadius: "3px",
              opacity: 0.8
            }}></div>
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "2rem",
            position: "relative"
          }}>
            {customizationOptions.map((option, index) => (
              <div 
                key={index}
                className="option-card"
                onClick={() => handleOptionSelect(index)}
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  borderRadius: "1.25rem",
                  border: `1px solid ${brandingLevel === index ? colors[selectedColor].primary : "rgba(0,0,0,0.05)"}`,
                  boxShadow: brandingLevel === index 
                    ? `0 15px 30px ${colors[selectedColor].primary}15` 
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: brandingLevel === index ? "translateY(-5px)" : "none"
                }}
              >
                {/* Barre en haut de la carte */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "4px",
                  background: colors[selectedColor].gradient,
                  opacity: brandingLevel === index ? 1 : 0.6,
                  transition: "opacity 0.3s ease"
                }}></div>
                
                {/* Badge */}
                {option.badge && (
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: colors[selectedColor].primary,
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    borderRadius: "0.75rem",
                    boxShadow: `0 4px 10px ${colors[selectedColor].primary}30`,
                    zIndex: 1,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {option.badge}
                  </div>
                )}
                
                <div style={{ padding: "2rem 1.5rem" }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    marginBottom: "1.25rem"
                  }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "0.75rem"
                    }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "0.75rem",
                        backgroundColor: `${colors[selectedColor].primary}15`,
                        color: colors[selectedColor].primary
                      }}>
                        {React.cloneElement(option.icon, { size: 24 })}
                      </div>
                      <div>
                        <h4 style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#0f172a",
                          lineHeight: 1.2
                        }}>{option.name}</h4>
                        <div style={{
                          backgroundColor: brandingLevel === index ? colors[selectedColor].primary : "#f1f5f9",
                          color: brandingLevel === index ? "white" : "#1e293b",
                          padding: "0.375rem 1rem",
                          borderRadius: "0.75rem",
                          fontSize: "1rem",
                          fontWeight: 700,
                          display: "inline-block",
                          marginTop: "0.375rem"
                        }}>
                          {option.price === 0 ? "Inclus" : `${option.price}€`}
                        </div>
                      </div>
                    </div>
                    
                    <p style={{
                      color: "#64748b",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6
                    }}>
                      {option.description}
                    </p>
                  </div>
                  
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "1.5rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem"
                  }}>
                    {option.features.map((feature, i) => (
                      <li 
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          color: "#475569",
                          position: "relative",
                          paddingLeft: "1.5rem"
                        }}
                      >
                        <div style={{
                          position: "absolute",
                          left: 0,
                          top: "0.125rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "1.125rem",
                          height: "1.125rem",
                          borderRadius: "50%",
                          backgroundColor: `${colors[selectedColor].primary}20`,
                          color: colors[selectedColor].primary
                        }}>
                          <Check size={12} />
                        </div>
                        <span style={{ 
                          fontSize: "0.875rem",
                          lineHeight: 1.5
                        }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    style={{
                      width: "100%",
                      padding: "0.875rem",
                      borderRadius: "0.75rem",
                      background: brandingLevel === index 
                        ? colors[selectedColor].gradient 
                        : "#f1f5f9",
                      color: brandingLevel === index ? "white" : "#334155",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: brandingLevel === index 
                        ? `0 4px 10px ${colors[selectedColor].primary}40` 
                        : "none",
                      fontSize: "0.9375rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem"
                    }}
                    onMouseEnter={(e) => {
                      if (brandingLevel !== index) {
                        e.currentTarget.style.backgroundColor = "#e2e8f0";
                      } else {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 6px 15px ${colors[selectedColor].primary}50`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (brandingLevel !== index) {
                        e.currentTarget.style.backgroundColor = "#f1f5f9";
                      } else {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 4px 10px ${colors[selectedColor].primary}40`;
                      }
                    }}
                  >
                    {brandingLevel === index ? (
                      <>
                        <Check size={16} /> Option sélectionnée
                      </>
                    ) : (
                      "Choisir cette option"
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de détail d'option */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: "1rem",
        ...modalAnimation
      }}>
        <div 
          ref={modalRef}
          style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            maxWidth: "600px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            padding: "0",
            boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
            position: "relative",
            ...modalContentAnimation
          }}
        >
          {selectedOption && (
            <>
              {/* En-tête du modal */}
              <div style={{
                padding: "1.5rem 1.5rem 1rem 1.5rem",
                position: "relative",
                background: colors[selectedColor].gradient,
                color: "white",
                textAlign: "center"
              }}>
                <button 
                  onClick={() => setModalOpen(false)} 
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.transform = "rotate(90deg)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.transform = "rotate(0deg)";
                  }}
                >
                  <X size={18} color="white" />
                </button>
                
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem" 
                }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "0.875rem",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    color: "white"
                  }}>
                    {React.cloneElement(selectedOption.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      marginBottom: "0.25rem"
                    }}>
                      {selectedOption.name}
                    </h3>
                    <p style={{ 
                      fontSize: "1.125rem",
                      opacity: 0.9,
                      fontWeight: 600
                    }}>
                      {selectedOption.price === 0 ? "Inclus dans votre abonnement" : `${selectedOption.price}€ / mise en place`}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Corps du modal */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    Description
                  </h4>
                  <p style={{
                    color: "#475569",
                    lineHeight: 1.7,
                    fontSize: "0.9375rem"
                  }}>
                    {selectedOption.description}
                  </p>
                </div>
                
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#0f172a",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}>
                    Fonctionnalités incluses
                  </h4>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
                  }}>
                    {selectedOption.features.map((feature, i) => (
                      <li 
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.875rem",
                          backgroundColor: "#f8fafc",
                          borderRadius: "0.5rem",
                          transition: "all 0.2s ease",
                          borderLeft: `3px solid ${colors[selectedColor].primary}`
                        }}
                      >
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "1.25rem",
                          height: "1.25rem",
                          borderRadius: "50%",
                          backgroundColor: `${colors[selectedColor].primary}20`,
                          color: colors[selectedColor].primary,
                          flexShrink: 0
                        }}>
                          <Check size={12} />
                        </div>
                        <span style={{ 
                          color: "#334155",
                          fontSize: "0.875rem",
                          fontWeight: 500
                        }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  marginTop: "2rem" 
                }}>
                  <button 
                    onClick={() => setModalOpen(false)}
                    style={{
                      padding: "0.875rem 1.25rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "#f1f5f9",
                      color: "#334155",
                      border: "none",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      flex: 1
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e2e8f0";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f1f5f9";
                    }}
                  >
                    Annuler
                  </button>
                  
                  <button 
                    onClick={confirmChoice}
                    style={{
                      padding: "0.875rem 1.25rem",
                      borderRadius: "0.75rem",
                      background: colors[selectedColor].gradient,
                      color: "white",
                      border: "none",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: `0 4px 10px ${colors[selectedColor].primary}40`,
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 6px 15px ${colors[selectedColor].primary}50`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 4px 10px ${colors[selectedColor].primary}40`;
                    }}
                  >
                    Confirmer
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Personnalisation;