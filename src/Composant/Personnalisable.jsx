import React, { useState } from "react";
import { Check, Smartphone, Palette, Layout, Image, Zap, Type } from "lucide-react";

const Personnalisable = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedFont, setSelectedFont] = useState("modern");
  const [showLogo, setShowLogo] = useState(true);
  const [activeTab, setActiveTab] = useState("colors");
  const [brandingLevel, setBrandingLevel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Configuration design
  const colors = {
    blue: { 
      primary: "#3b82f6", 
      secondary: "#1d4ed8", 
      accent: "#dbeafe",
      text: "#1e40af"
    },
    green: { 
      primary: "#10b981", 
      secondary: "#047857", 
      accent: "#d1fae5",
      text: "#065f46"
    },
    purple: { 
      primary: "#8b5cf6", 
      secondary: "#6d28d9", 
      accent: "#ede9fe",
      text: "#5b21b6"
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
      features: ["Logo personnalisé", "Couleurs adaptées", "Nom de domaine"],
      icon: <Palette size={20} style={{ color: "#3b82f6" }} />
    },
    {
      name: "Avancé",
      price: 199,
      features: ["Typographie personnalisée", "Icônes sur mesure", "Marque exclusive"],
      icon: <Type size={20} style={{ color: "#8b5cf6" }} />,
      popular: true
    },
    {
      name: "Premium",
      price: 499,
      features: ["Application marque blanche", "Intégration complète", "Design sur-mesure"],
      icon: <Image size={20} style={{ color: "#10b981" }} />
    }
  ];

  // Styles dynamiques
  const getActiveTabStyle = (isActive) => ({
    backgroundColor: isActive ? `${colors[selectedColor].primary}20` : "transparent",
    color: isActive ? colors[selectedColor].text : "#64748b",
    border: isActive ? `1px solid ${colors[selectedColor].primary}` : "1px solid #e2e8f0",
    transform: isActive ? "translateY(-2px)" : "none",
    boxShadow: isActive ? `0 4px 6px ${colors[selectedColor].primary}30` : "none"
  });

  return (
    <section style={{
      position: "relative",
      backgroundColor: "#f8fafc",
      padding: "3rem 1rem",
      overflow: "hidden"
    }}>
      {/* Fond décoratif */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.05,
        backgroundImage: "radial-gradient(ellipse at center, #000000, transparent)",
        pointerEvents: "none"
      }}></div>

      <div style={{
        position: "relative",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        {/* En-tête */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            background: "linear-gradient(to right, rgb(3, 116, 26), rgb(11, 36, 178))",
            color: "white",
            fontSize: "0.875rem",
            fontWeight: 500,
            padding: "0.5rem 1.5rem",
            borderRadius: "2rem",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 6px rgba(5, 150, 105, 0.2)"
          }}>
            <Zap style={{ width: "1rem", height: "1rem", marginRight: "-1.2rem",marginTop: "-135px" }} />
            PERSONNALISATION
          </span>
          <h2 style={{
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: "1rem",
            lineHeight: 1.2
          }}>
            <span style={{
              background: "linear-gradient(to right, rgb(16, 185, 98), rgb(13, 8, 144))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Une application à votre image
            </span>
            <div style={{
              display: "block",
              width: "clamp(150px, 30vw, 200px)",
              height: "4px",
              background: "linear-gradient(90deg, #04ee52, #021037)",
              margin: "1rem auto",
              borderRadius: "2px"
            }}></div>
          </h2>
          <p style={{
            color: "#64748b",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Transformez l'expérience utilisateur pour qu'elle reflète parfaitement l'identité de votre complexe sportif.
          </p>
        </div>

        {/* Contenu principal */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
          marginBottom: "3rem"
        }}>
          {/* Options de personnalisation */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            overflow: "hidden"
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
                      padding: "0.75rem 1.25rem",
                      borderRadius: "0.75rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
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
                <div>
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
                          transition: "all 0.2s ease",
                          transform: selectedColor === name ? "translateY(-2px)" : "none",
                          boxShadow: selectedColor === name ? `0 4px 6px ${color.primary}30` : "none"
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
                            backgroundColor: color.primary
                          }}></div>
                          <div style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "0.5rem",
                            backgroundColor: color.secondary
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
                <div>
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
                          transition: "all 0.2s ease",
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
                        }}>Aa Bb Cc Dd Ee</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Aperçu */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "1.5rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            overflow: "hidden"
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
                padding: "1rem",
                borderRadius: "1rem",
                backgroundColor: colors[selectedColor].accent,
                border: `2px solid ${colors[selectedColor].primary}`,
                fontFamily: fonts[selectedFont].family,
                transition: "all 0.3s ease"
              }}>
                <div style={{
                  backgroundColor: "white",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
                }}>
                  <div style={{
                    padding: "1rem",
                    borderBottom: `1px solid ${colors[selectedColor].accent}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <h4 style={{
                      fontWeight: 600,
                      color: colors[selectedColor].primary
                    }}>Votre Complexe</h4>
                    <Smartphone style={{ 
                      width: "1.25rem", 
                      height: "1.25rem", 
                      color: colors[selectedColor].primary 
                    }} />
                  </div>
                  
                  <div style={{ padding: "1rem" }}>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(7, 1fr)",
                      gap: "0.25rem",
                      marginBottom: "1rem"
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
                            fontWeight: i === 3 ? 500 : 400
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
                      marginBottom: "1rem"
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
                            padding: "0.75rem",
                            borderRadius: "0.5rem",
                            backgroundColor: slot.highlighted ? colors[selectedColor].primary : "#f8fafc",
                            color: slot.highlighted ? "white" : "#334155"
                          }}
                        >
                          <span>{slot.time}</span>
                          <span>{slot.available} places</span>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        borderRadius: "0.5rem",
                        backgroundColor: colors[selectedColor].primary,
                        color: "white",
                        fontWeight: 500,
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.2s ease"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors[selectedColor].secondary}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors[selectedColor].primary}
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
        <div style={{ padding: "0 1rem" }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: "2rem",
            lineHeight: 1.2,
            textAlign: "center"
          }}>
            <span style={{
              background: "linear-gradient(to right, rgb(16, 185, 98), rgb(13, 8, 144))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Nos offres de personnalisation
            </span>
            <div style={{
              display: "block",
              width: "clamp(200px, 50vw, 400px)",
              height: "4px",
              background: "linear-gradient(90deg, #04ee52, #021037)",
              margin: "1rem auto",
              borderRadius: "2px"
            }}></div>
          </h2>
          
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "1.5rem",
              position: "relative"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {customizationOptions.map((option, index) => (
              <div 
                key={index}
                onClick={() => setBrandingLevel(index)}
                style={{
                  position: "relative",
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  border: `1px solid ${brandingLevel === index ? colors[selectedColor].primary : "#e2e8f0"}`,
                  boxShadow: brandingLevel === index ? `0 10px 25px ${colors[selectedColor].primary}20` : "0 4px 6px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  transform: brandingLevel === index ? "translateY(-5px)" : "none"
                }}
              >
                {isHovered && (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: "linear-gradient(90deg, #3b82f6, #10b981)",
                    transition: "opacity 0.3s ease"
                  }}></div>
                )}
                {option.popular && (
                  <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: colors[selectedColor].primary,
                    color: "white",
                    padding: "0.25rem 1rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    borderBottomLeftRadius: "0.5rem"
                  }}>
                    POPULAIRE
                  </div>
                )}
                
                <div style={{ padding: "1.5rem" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      {option.icon}
                      <h4 style={{
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "#1e293b"
                      }}>{option.name}</h4>
                    </div>
                    <div style={{
                      backgroundColor: brandingLevel === index ? colors[selectedColor].primary : "#f1f5f9",
                      color: brandingLevel === index ? "white" : "#1e293b",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "1rem",
                      fontSize: "0.875rem",
                      fontWeight: 600
                    }}>
                      {option.price === 0 ? "Inclus" : `${option.price}€`}
                    </div>
                  </div>
                  
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "1rem 0"
                  }}>
                    {option.features.map((feature, i) => (
                      <li 
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.5rem",
                          marginBottom: "0.75rem",
                          color: "#475569"
                        }}
                      >
                        <Check style={{ 
                          flexShrink: 0,
                          width: "1rem",
                          height: "1rem",
                          color: brandingLevel === index ? colors[selectedColor].primary : "#94a3b8",
                          marginTop: "0.125rem"
                        }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      backgroundColor: brandingLevel === index ? colors[selectedColor].primary : "#f1f5f9",
                      color: brandingLevel === index ? "white" : "#334155",
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
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
                    {brandingLevel === index ? "Sélectionné" : "Choisir cette option"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personnalisable;