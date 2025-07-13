
import React, { useState, useRef, useEffect } from "react";
import { Check, Smartphone, Palette, Layout, Image, Zap, Type, X } from "lucide-react";

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
      gradient: "linear-gradient(135deg,rgb(7, 76, 6),rgb(6, 12, 9),rgb(13, 125, 7))"
    },
    green: { 
      primary: "#10b981", 
      secondary: "#047857", 
      accent: "#d1fae5",
      text: "#065f46",
      gradient: "linear-gradient(135deg,rgb(8, 129, 6),rgb(11, 15, 13),rgb(17, 9, 69))"
    },
    purple: { 
      primary: "#8b5cf6", 
      secondary: "#6d28d9", 
      accent: "#ede9fe",
      text: "#5b21b6",
      gradient: "linear-gradient(135deg,rgb(6, 85, 17),rgb(1, 1, 2),rgb(8, 101, 8)217, 99))"
    }
  };

  const fonts = {
    modern: { name: "Moderne", family: "'Inter', sans-serif" },
    classic: { name: "Classique", family: "'Georgia', serif" },
    elegant: { name: "Élégant", family: "'Playfair Display', serif" }
  };

  const customizationOptions = [
    {
      name: "Basique",
      price: 0,
      features: [
        "Logo personnalisé",
        "Couleurs adaptées", 
        "Nom de domaine",
        "Design responsive"
      ],
      icon: <Palette size={20} style={{ color: "#3b82f6" }} />,
      description: "Idéal pour les complexes sportifs qui débutent leur transition numérique. Personnalisez les éléments essentiels pour une expérience numérique à votre image."
    },
    {
      name: "Avancé",
      price: 199,
      features: [
        "Typographie personnalisée", 
        "Icônes sur mesure", 
        "Marque exclusive",
        "Animations personnalisées",
        "Assistance prioritaire"
      ],
      icon: <Type size={20} style={{ color: "#8b5cf6" }} />,
      popular: true,
      description: "Pour les complexes qui souhaitent se démarquer avec une identité visuelle distinctive et cohérente. Notre option la plus demandée par les clubs sportifs."
    },
    {
      name: "Premium",
      price: 499,
      features: [
        "Application marque blanche", 
        "Intégration complète", 
        "Design sur-mesure",
        "Tableau de bord personnalisé",
        "Analyses avancées",
        "Accompagnement dédié"
      ],
      icon: <Image size={20} style={{ color: "#10b981" }} />,
      description: "Une solution complète et exclusive pour les complexes sportifs haut de gamme. Offrez à vos clients une expérience numérique premium reflétant l'excellence de vos infrastructures."
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
    backgroundColor: isActive ? `${colors[selectedColor].primary}20` : "transparent",
    color: isActive ? colors[selectedColor].text : "#64748b",
    border: isActive ? `1px solid ${colors[selectedColor].primary}` : "1px solid #e2e8f0",
    transform: isActive ? "translateY(-2px)" : "none",
    boxShadow: isActive ? `0 4px 6px ${colors[selectedColor].primary}30` : "none"
  });

  // Animation d'entrée pour le modal
  const modalAnimation = {
    opacity: modalOpen ? 1 : 0,
    visibility: modalOpen ? "visible" : "hidden",
    transition: "opacity 0.3s ease, visibility 0.3s ease"
  };

  const modalContentAnimation = {
    transform: modalOpen ? "translateY(0)" : "translateY(-20px)",
    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  };

  return (
    <section style={{
      position: "relative",
      backgroundColor: "#f8fafc",
      padding: "3rem 1rem",
      overflow: "hidden",
      marginTop: "2.5rem",
    }}>
      {/* Fond décoratif avec animation subtile */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: "radial-gradient(circle at 50% 50%, #000000, transparent 80%)",
        backgroundSize: "120% 120%",
        backgroundPosition: "center",
        filter: "blur(40px)",
        animation: "pulse 15s infinite alternate",
        pointerEvents: "none"
      }}></div>

      <style>
        {`
        @keyframes pulse {
          0% { background-size: 100% 100%; }
          100% { background-size: 140% 140%; }
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
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
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
        [role="button"] {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        
        /* Effet au survol pour les cartes */
        .option-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }
        `}
      </style>

      <div style={{
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        {/* En-tête avec animation d'entrée */}
        <div style={{ 
          textAlign: "center", 
          marginBottom: "3rem", 
          animation: "fadeIn 0.8s ease-out" 
        }}>
         <span style={{
  boxShadow: "0 4px 15px rgba(11, 13, 12, 0.2)",
  display: "inline-flex",
  alignItems: "center",
  padding: "0.5rem 1rem",
  backgroundColor: "rgba(6, 8, 7, 0.2)",
  borderRadius: "100px",
  color: "rgb(2, 48, 2)",
  fontWeight: 500,
  fontSize: "0.875rem",
  marginBottom: "1rem"
}}>
  <Zap style={{ 
    width: "1rem", 
    height: "1rem", 
    marginRight: "0.5rem",
    animation: "float 2s ease-in-out infinite"
  }} />
  PERSONNALISATION
</span>

          <h2 style={{
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: "1rem",
            lineHeight: 1.2,
            animation: "slideUp 0.8s ease-out"
          }}>
            <span style={{
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              animation: "shine 8s linear infinite",
              display: "inline-block"
              
            }}>
              Une application à votre image
            </span>
            <div style={{
              display: "block",
              width: "clamp(150px, 30vw, 200px)",
              height: "4px",
              background: colors[selectedColor].gradient,
              margin: "1rem auto",
              borderRadius: "2px"
            }}></div>
          </h2>
          <p style={{
            color: "#64748b",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.6,
            animation: "slideUp 1s ease-out"
          }}>
            Transformez l'expérience utilisateur pour qu'elle reflète parfaitement l'identité de votre complexe sportif.
          </p>
        </div>

        {/* Contenu principal */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(350px, 100%), 1fr))",
          gap: "2rem",
          marginBottom: "4rem",
          animation: "fadeIn 1.2s ease-out"
        }}>
          {/* Options de personnalisation */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}>
            <div style={{ padding: "1.5rem" }}>
              <div style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "1.5rem",
                overflowX: "auto",
                paddingBottom: "0.5rem",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none"
                }
              }}>
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
                    {tab === 'colors' ? 'Couleurs' : tab === 'fonts' ? 'Typographie' : 'Marque'}
                  </button>
                ))}
              </div>

              {activeTab === 'colors' && (
                <div style={{ animation: "fadeIn 0.5s ease-out" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1e293b",
                    marginBottom: "1.5rem"
                  }}>Palette de couleurs</h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                    gap: "1rem"
                  }}>
                    {Object.entries(colors).map(([name, color]) => (
                      <div 
                        key={name}
                        onClick={() => setSelectedColor(name)}
                        style={{
                          padding: "1rem",
                          borderRadius: "1rem",
                          backgroundColor: color.accent,
                          border: `2px solid ${selectedColor === name ? color.primary : "transparent"}`,
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: selectedColor === name ? "translateY(-4px)" : "none",
                          boxShadow: selectedColor === name 
                            ? `0 10px 15px -3px ${color.primary}30, 0 4px 6px -2px ${color.primary}20` 
                            : "none"
                        }}
                      >
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
                            boxShadow: `0 2px 5px ${color.primary}30`
                          }}></div>
                          <div style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "0.5rem",
                            backgroundColor: color.secondary,
                            boxShadow: `0 2px 5px ${color.primary}30`
                          }}></div>
                        </div>
                        <p style={{
                          fontWeight: 500,
                          color: "#1e293b",
                          textTransform: "capitalize"
                        }}>{name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'fonts' && (
                <div style={{ animation: "fadeIn 0.5s ease-out" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1e293b",
                    marginBottom: "1.5rem"
                  }}>Typographie</h3>
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
                          borderRadius: "0.75rem",
                          border: `1px solid ${selectedFont === key ? colors[selectedColor].primary : "#e2e8f0"}`,
                          backgroundColor: selectedFont === key ? `${colors[selectedColor].primary}10` : "white",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          transform: selectedFont === key ? "translateY(-2px)" : "none",
                          boxShadow: selectedFont === key ? `0 4px 6px ${colors[selectedColor].primary}20` : "none",
                          fontFamily: font.family
                        }}
                      >
                        <p style={{
                          fontWeight: 600,
                          color: "#1e293b",
                          marginBottom: "0.25rem"
                        }}>{font.name}</p>
                        <p style={{
                          color: "#64748b",
                          fontStyle: "italic"
                        }}>Aa Bb Cc Dd Ee Ff Gg Hh Ii</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'branding' && (
                <div style={{ animation: "fadeIn 0.5s ease-out" }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 600,
                    color: "#1e293b",
                    marginBottom: "1.5rem"
                  }}>Éléments de marque</h3>
                  
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem"
                  }}>
                    <div style={{
                      padding: "1rem",
                      borderRadius: "0.75rem",
                      border: `1px solid ${colors[selectedColor].accent}`,
                      backgroundColor: "white"
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
                          color: "#1e293b"
                        }}>Logo</h4>
                        
                        <button 
                          onClick={() => setShowLogo(!showLogo)}
                          style={{
                            backgroundColor: showLogo ? colors[selectedColor].primary : "#f1f5f9",
                            border: "none",
                            width: "36px",
                            height: "20px",
                            borderRadius: "10px",
                            position: "relative",
                            cursor: "pointer",
                            transition: "background-color 0.2s ease"
                          }}
                        >
                          <span style={{
                            position: "absolute",
                            top: "2px",
                            left: showLogo ? "18px" : "2px",
                            width: "16px",
                            height: "16px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            transition: "left 0.2s ease"
                          }}></span>
                        </button>
                      </div>
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginBottom: "0.5rem"
                      }}>
                        Afficher votre logo sur les interfaces de l'application
                      </p>
                    </div>
                    
                    <div style={{
                      padding: "1rem",
                      borderRadius: "0.75rem",
                      border: `1px solid ${colors[selectedColor].accent}`,
                      backgroundColor: "white",
                      opacity: brandingLevel >= 1 ? 1 : 0.6,
                      cursor: brandingLevel >= 1 ? "default" : "not-allowed"
                    }}>
                      <h4 style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#1e293b",
                        marginBottom: "0.5rem"
                      }}>Icônes personnalisées</h4>
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginBottom: "0.5rem"
                      }}>
                        {brandingLevel >= 1 
                          ? "Créez des icônes sur mesure pour votre application" 
                          : "Disponible avec l'offre Avancée ou Premium"}
                      </p>
                    </div>
                    
                    <div style={{
                      padding: "1rem",
                      borderRadius: "0.75rem",
                      border: `1px solid ${colors[selectedColor].accent}`,
                      backgroundColor: "white",
                      opacity: brandingLevel >= 2 ? 1 : 0.6,
                      cursor: brandingLevel >= 2 ? "default" : "not-allowed"
                    }}>
                      <h4 style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#1e293b",
                        marginBottom: "0.5rem"
                      }}>Application sur-mesure</h4>
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        marginBottom: "0.5rem"
                      }}>
                        {brandingLevel >= 2
                          ? "Personnalisez chaque aspect de votre application" 
                          : "Disponible uniquement avec l'offre Premium"}
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
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}>
            <div style={{ padding: "1.5rem" }}>
              <h3 style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#1e293b",
                marginBottom: "1.5rem"
              }}>
                <Smartphone style={{ width: "1.25rem", height: "1.25rem", marginRight: "0.75rem" }} />
                Aperçu en direct
              </h3>
              
              <div style={{
                padding: "1.5rem",
                borderRadius: "1rem",
                backgroundColor: colors[selectedColor].accent,
                border: `2px solid ${colors[selectedColor].primary}`,
                fontFamily: fonts[selectedFont].family,
                transition: "all 0.5s ease",
                boxShadow: `0 10px 15px -3px ${colors[selectedColor].primary}15, 0 4px 6px -2px ${colors[selectedColor].primary}10`,
              }}>
                <div style={{
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                  animation: "scaleIn 0.5s ease-out"
                }}>
                  <div style={{
                    padding: "1rem",
                    borderBottom: `1px solid ${colors[selectedColor].accent}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <div style={{ 
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem" 
                    }}>
                      {showLogo && (
                        <div style={{
                          width: "1.5rem",
                          height: "1.5rem",
                          borderRadius: "0.25rem",
                          background: colors[selectedColor].gradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          color: "white",
                          fontWeight: "bold"
                        }}>
                          {fonts[selectedFont].name[0]}
                        </div>
                      )}
                      <h4 style={{
                        fontWeight: 600,
                        color: colors[selectedColor].primary
                      }}>Votre Complexe</h4>
                    </div>
                    <Smartphone style={{ 
                      width: "1.25rem", 
                      height: "1.25rem", 
                      color: colors[selectedColor].primary 
                    }} />
                  </div>
                  
                  <div style={{ padding: "1.25rem" }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: "0.25rem",
                      marginBottom: "1.5rem"
                    }}>
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "0.5rem",
                            borderRadius: "0.5rem",
                            backgroundColor: i === 3 ? colors[selectedColor].primary : "#f1f5f9",
                            color: i === 3 ? "white" : "#64748b",
                            fontWeight: i === 3 ? 500 : 400,
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                            boxShadow: i === 3 ? `0 2px 4px ${colors[selectedColor].primary}30` : "none"
                          }}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginBottom: "1.5rem"
                    }}>
                      {[
                        { time: "10:00 - 11:30", available: "5/10" },
                        { time: "14:00 - 15:30", available: "8/10", highlighted: true },
                        { time: "16:00 - 17:30", available: "3/10" },
                      ].map((slot, i) => (
                        <div 
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                            borderRadius: "0.75rem",
                            backgroundColor: slot.highlighted ? colors[selectedColor].primary : "#f8fafc",
                            color: slot.highlighted ? "white" : "#334155",
                            transition: "all 0.3s ease",
                            transform: slot.highlighted ? "translateY(-2px)" : "none",
                            boxShadow: slot.highlighted ? `0 4px 6px ${colors[selectedColor].primary}30` : "none",
                            cursor: "pointer"
                          }}
                        >
                          <span style={{ fontWeight: slot.highlighted ? 500 : 400 }}>{slot.time}</span>
                          <span>{slot.available} places</span>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "0.75rem",
                        background: colors[selectedColor].gradient,
                        color: "white",
                        fontWeight: 500,
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: `0 4px 6px ${colors[selectedColor].primary}30`,
                        transform: "translateZ(0)" // Pour activer les accélérations GPU
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = `0 6px 8px ${colors[selectedColor].primary}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = `0 4px 6px ${colors[selectedColor].primary}30`;
                      }}
                    >
                      Réserver un créneau
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Options de personnalisation */}
        <div style={{ padding: "0 1rem", animation: "fadeIn 1.5s ease-out" }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: "2.5rem",
            lineHeight: 1.2,
            textAlign: "center"
          }}>
            <span style={{
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              color: colors[selectedColor].primary, // Ajout d'une couleur de fallback
              animation: "shine 8s linear infinite",
              display: "inline-block"
            }}>
              Nos offres de personnalisation
            </span>
            <div style={{
              display: "block",
              width: "clamp(200px, 50vw, 400px)",
              height: "4px",
              background: colors[selectedColor].gradient,
              margin: "1rem auto",
              borderRadius: "2px"
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
                  border: `1px solid ${brandingLevel === index ? colors[selectedColor].primary : "#e2e8f0"}`,
                  boxShadow: brandingLevel === index 
                    ? `0 15px 30px ${colors[selectedColor].primary}20` 
                    : "0 4px 6px rgba(0, 0, 0, 0.6)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  transform: brandingLevel === index ? "translateY(-8px)" : "none"
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
                  opacity: brandingLevel === index ? 1 : 0.4,
                  transition: "opacity 0.3s ease"
                }}></div>
                
                {/* Badge Populaire */}
                {option.popular && (
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: "green",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    borderRadius: "1rem",
                    boxShadow: "0 4px 15px rgba(11, 13, 12, 0.6)",
                    zIndex: 1
                  }}>
                    POPULAIRE
                  </div>
                )}
                
                <div style={{ padding: "2rem 1.5rem" }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    marginBottom: "1.5rem"
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
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0.75rem",
                        backgroundColor: `${colors[selectedColor].primary}10`,
                        color: colors[selectedColor].primary
                      }}>
                        {option.icon}
                      </div>
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "#1e293b"
                      }}>{option.name}</h4>
                    </div>
                    
                    <div style={{
                      backgroundColor: brandingLevel === index ? colors[selectedColor].primary : "#f1f5f9",
                      color: brandingLevel === index ? "white" : "#1e293b",
                      padding: "0.5rem 1rem",
                      borderRadius: "1rem",
                      fontSize: "1rem",
                      fontWeight: 600,
                      display: "inline-block",
                      alignSelf: "flex-start"
                    }}>
                      {option.price === 0 ? "Inclus" : `${option.price}€`}
                    </div>
                  </div>
                  
                  <p style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6
                  }}>
                    {option.description}
                  </p>
                  
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "1.5rem 0"
                  }}>
                    {option.features.map((feature, i) => (
                      <li 
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          marginBottom: "0.875rem",
                          color: "#475569"
                        }}
                      >
                        <Check style={{ 
                          flexShrink: 0,
                          width: "1rem",
                          height: "1rem",
                          color: brandingLevel === index ? colors[selectedColor].primary : "#94a3b8",
                          marginTop: "0.25rem"
                        }} />
                        <span>{feature}</span>
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
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: brandingLevel === index 
                        ? `0 4px 6px ${colors[selectedColor].primary}40` 
                        : "none"
                    }}
                    onMouseEnter={(e) => {
                      if (brandingLevel !== index) {
                        e.currentTarget.style.backgroundColor = "#e2e8f0";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (brandingLevel !== index) {
                        e.currentTarget.style.backgroundColor = "#f1f5f9";
                      }
                    }}
                  >
                    {brandingLevel === index ? "Option sélectionnée" : "Choisir cette option"}
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        ...modalAnimation
      }}>
        <div 
          ref={modalRef}
          style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            maxWidth: "560px",
            width: "90%",
            maxHeight: "90vh",
            overflow: "auto",
            padding: "0",
            boxShadow: "0 5px 10px -12px rgba(0, 0, 0, 0.6)",
            position: "relative",
            ...modalContentAnimation
          }}
        >
          {selectedOption && (
            <>
              {/* En-tête du modal */}
              <div style={{
                padding: "1.5rem",
                borderBottom: "1px solid #e2e8f0",
                position: "relative",
                background: colors[selectedColor].gradient,
                borderTopLeftRadius: "1.5rem",
                borderTopRightRadius: "1.5rem",
                color: "white"
              }}>
                <button 
                  onClick={() => setModalOpen(false)} 
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <X size={18} color="white" />
                </button>
                
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
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}>
                    {selectedOption.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: "0.25rem"
                    }}>
                      {selectedOption.name}
                    </h3>
                    <p style={{ 
                      fontSize: "1rem",
                      opacity: 0.9 
                    }}>
                      {selectedOption.price === 0 ? "Inclus" : `${selectedOption.price}€`}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Corps du modal */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#1e293b",
                    marginBottom: "0.75rem"
                  }}>
                    Description
                  </h4>
                  <p style={{
                    color: "#475569",
                    lineHeight: 1.6,
                    fontSize: "0.95rem"
                  }}>
                    {selectedOption.description}
                  </p>
                </div>
                
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#1e293b",
                    marginBottom: "0.75rem"
                  }}>
                    Fonctionnalités incluses
                  </h4>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {selectedOption.features.map((feature, i) => (
                      <li 
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.75rem",
                          padding: "0.75rem",
                          backgroundColor: "#f8fafc",
                          borderRadius: "0.5rem",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <Check style={{ 
                          flexShrink: 0,
                          width: "1rem",
                          height: "1rem",
                          color: colors[selectedColor].primary
                        }} />
                        <span style={{ color: "#334155" }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between",
                  marginTop: "2rem" 
                }}>
                  <button 
                    onClick={() => setModalOpen(false)}
                    style={{
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "#f1f5f9",
                      color: "#334155",
                      border: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s ease"
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
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.75rem",
                      background: colors[selectedColor].gradient,
                      color: "white",
                      border: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: `0 4px 6px ${colors[selectedColor].primary}30`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 6px 8px ${colors[selectedColor].primary}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 4px 6px ${colors[selectedColor].primary}30`;
                    }}
                  >
                    Confirmer cette option
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