import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../style/statistics.css";

export default function Statistics() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");

  useEffect(() => {
    setMounted(true);
  }, []);

  const monthlyData = [
    { name: "Jan", revenue: 4000, reservations: 240, occupancy: 65 },
    { name: "Fév", revenue: 3000, reservations: 198, occupancy: 59 },
    { name: "Mar", revenue: 5000, reservations: 280, occupancy: 80 },
    { name: "Avr", revenue: 7800, reservations: 308, occupancy: 88 },
    { name: "Mai", revenue: 8900, reservations: 350, occupancy: 92 },
    { name: "Juin", revenue: 9000, reservations: 380, occupancy: 95 },
  ];

  const weeklyData = [
    { name: "Lun", revenue: 1200, reservations: 42, occupancy: 60 },
    { name: "Mar", revenue: 1400, reservations: 48, occupancy: 65 },
    { name: "Mer", revenue: 2000, reservations: 65, occupancy: 85 },
    { name: "Jeu", revenue: 1800, reservations: 58, occupancy: 75 },
    { name: "Ven", revenue: 2400, reservations: 72, occupancy: 90 },
    { name: "Sam", revenue: 2800, reservations: 85, occupancy: 98 },
    { name: "Dim", revenue: 2200, reservations: 70, occupancy: 88 },
  ];

  const stats = [
    { title: "Augmentation des revenus", value: "+35%", description: "En moyenne après 3 mois d'utilisation" },
    { title: "Réservations mensuelles", value: "300+", description: "Pour un complexe de 5 terrains" },
    { title: "Taux d'occupation", value: "85%", description: "Contre 60% avant l'utilisation de FootspaceReserve" },
    { title: "Temps économisé", value: "15h/sem", description: "Sur la gestion administrative des réservations" },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section className="statistics-section">
      <div className="containert">
        <div className="headert">
          <div className="badgetss">Résultats</div>
          <h2>Optimisez vos performances</h2>
          <p>Suivez et améliorez vos indicateurs clés grâce à nos tableaux de bord analytiques.</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-header">
                <h3>{stat.title}</h3>
                <p>{stat.description}</p>
              </div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="chart-container">
          <div className="tabs-header">
            <h3>L'evolution des performances de votre entreprise avec <span>FootSpace-Solutions</span></h3>
            <div className="tabs-list">
              <button 
                onClick={() => setActiveTab("weekly")} 
                className={activeTab === "weekly" ? "active" : ""}
              >
                Hebdomadaire
              </button>
              <button 
                onClick={() => setActiveTab("monthly")} 
                className={activeTab === "monthly" ? "active" : ""}
              >
                Mensuelle
              </button>
            </div>
          </div>

          <div className="chart-scroll-container">
            <div className="chart-card">
              {activeTab === "monthly" && (
                <ResponsiveContainer width="100%" height={450}>
                  <BarChart 
                    data={monthlyData} 
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    barSize={32}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280' }}
                    />
                    <YAxis 
                      yAxisId="left" 
                      orientation="left" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280' }}
                    />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280' }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(8, 99, 16, 0.05)' }}
                      contentStyle={{
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
                      }}
                    />
                    <Bar 
                      yAxisId="left" 
                      dataKey="revenue" 
                      name="Revenus (€)" 
                      fill="#086310"
                      radius={[6, 6, 0, 0]}
                    />
                    <Bar 
                      yAxisId="right" 
                      dataKey="occupancy" 
                      name="Taux d'occupation (%)" 
                      fill="#4b5563"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
              {activeTab === "weekly" && (
                <ResponsiveContainer width="100%" height={450}>
                  <BarChart 
                    data={weeklyData} 
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                    barSize={32}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280' }}
                    />
                    <YAxis 
                      yAxisId="left" 
                      orientation="left" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280' }}
                    />
                    <YAxis 
                      yAxisId="right" 
                      orientation="right" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280' }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(8, 99, 16, 0.05)' }}
                      contentStyle={{
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
                      }}
                    />
                    <Bar 
                      yAxisId="left" 
                      dataKey="revenue" 
                      name="Revenus (€)" 
                      fill="#086310"
                      radius={[6, 6, 0, 0]}
                    />
                    <Bar 
                      yAxisId="right" 
                      dataKey="occupancy" 
                      name="Taux d'occupation (%)" 
                      fill="#4b5563"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}