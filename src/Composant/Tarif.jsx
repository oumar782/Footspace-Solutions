import React, { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

  :root {
    --green-900: #023d12;
    --green-700: #056f25;
    --green-500: #0c9c30;
    --green-300: #4ade80;
    --green-100: #d1fae5;
    --green-50:  #f0fdf4;
    --ink: #0d1117;
    --ink-soft: #374151;
    --ink-muted: #6b7280;
    --surface: #ffffff;
    --surface-2: #f9fafb;
    --border: rgba(0,0,0,0.08);
    --red: #ef4444;
    --red-bg: rgba(239,68,68,0.08);
    --grad: linear-gradient(135deg, var(--green-700), var(--green-500));
    --shadow-card: 0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06);
    --shadow-pop: 0 4px 6px rgba(5,111,37,0.08), 0 24px 48px rgba(5,111,37,0.16);
    --shadow-xl: 0 25px 60px rgba(0,0,0,0.18);
    --radius: 24px;
    --radius-sm: 14px;
    --radius-pill: 999px;
    --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
    --bounce: 0.4s cubic-bezier(0.34,1.2,0.64,1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ps-wrap {
    font-family: 'DM Sans', sans-serif;
    background: #f4f6f0;
    min-height: 100vh;
    padding: 96px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  /* Decorative blobs */
  .ps-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
  }
  .ps-blob-1 {
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(5,111,37,0.12), transparent 70%);
    top: -120px; left: -160px;
  }
  .ps-blob-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(12,156,48,0.08), transparent 70%);
    bottom: 0; right: -100px;
  }

  .ps-inner { max-width: 1160px; margin: 0 auto; position: relative; z-index: 1; }

  /* ── Header ── */
  .ps-head { text-align: center; margin-bottom: 64px; }
  .ps-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--surface); border: 1.5px solid var(--green-100);
    color: var(--green-700); font-family: 'Syne', sans-serif;
    font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    padding: 6px 18px; border-radius: var(--radius-pill);
    margin-bottom: 24px; box-shadow: 0 2px 8px rgba(5,111,37,0.08);
  }
  .ps-eyebrow::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--green-500);
  }
  .ps-head h2 {
    font-family: 'Syne', sans-serif; font-size: clamp(36px, 5vw, 54px);
    font-weight: 800; line-height: 1.1; color: var(--ink);
    margin-bottom: 20px;
  }
  .ps-head h2 em {
    font-style: normal;
    background: var(--grad);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .ps-head p { font-size: 17px; color: var(--ink-muted); max-width: 520px; margin: 0 auto; line-height: 1.7; }

  /* ── Toggle ── */
  .ps-toggle-wrap { display: flex; justify-content: center; margin-bottom: 56px; }
  .ps-toggle {
    display: flex; align-items: center; gap: 14px;
    background: var(--surface); border: 1.5px solid var(--border);
    border-radius: var(--radius-pill); padding: 8px 20px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .ps-toggle-label {
    font-size: 14px; font-weight: 500; color: var(--ink-muted);
    transition: color var(--transition);
  }
  .ps-toggle-label.is-active { color: var(--green-700); font-weight: 700; }
  .ps-save-pill {
    background: var(--red-bg); color: var(--red);
    font-size: 11px; font-weight: 800; letter-spacing: 0.5px;
    padding: 3px 10px; border-radius: var(--radius-pill);
  }

  /* Custom switch */
  .ps-switch { position: relative; display: inline-block; width: 52px; height: 28px; }
  .ps-switch input { opacity: 0; width: 0; height: 0; }
  .ps-slider {
    position: absolute; inset: 0;
    background: #e5e7eb; border-radius: var(--radius-pill);
    cursor: pointer; transition: background var(--transition);
  }
  .ps-slider::before {
    content: ''; position: absolute;
    width: 22px; height: 22px; left: 3px; top: 3px;
    background: var(--surface); border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: transform var(--bounce);
  }
  .ps-switch input:checked ~ .ps-slider { background: var(--grad); }
  .ps-switch input:checked ~ .ps-slider::before { transform: translateX(24px); }

  /* ── Grid ── */
  .ps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    align-items: start;
  }

  /* ── Card ── */
  .ps-card {
    background: var(--surface);
    border-radius: var(--radius);
    padding: 36px 32px 32px;
    border: 1.5px solid var(--border);
    box-shadow: var(--shadow-card);
    position: relative;
    transition: transform var(--bounce), box-shadow var(--transition), border-color var(--transition);
    display: flex; flex-direction: column;
  }
  .ps-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(5,111,37,0.18);
  }
  .ps-card.is-popular {
    border-color: var(--green-500);
    box-shadow: var(--shadow-pop);
    background: linear-gradient(160deg, #fff 0%, var(--green-50) 100%);
    transform: translateY(-4px);
  }
  .ps-card.is-popular:hover { transform: translateY(-14px); }

  .ps-popular-badge {
    position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
    background: var(--grad); color: #fff;
    font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
    padding: 6px 22px; border-radius: var(--radius-pill);
    white-space: nowrap; box-shadow: 0 4px 14px rgba(5,111,37,0.3);
  }

  .ps-spin-ring {
    display: inline-block; width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.4); border-top-color: #fff;
    border-radius: 50%; animation: spin 0.8s linear infinite;
  }

  .ps-plan-name {
    font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800;
    color: var(--ink); margin-bottom: 8px;
  }
  .ps-plan-desc { font-size: 13.5px; color: var(--ink-muted); line-height: 1.6; margin-bottom: 28px; }

  .ps-divider { height: 1px; background: var(--border); margin-bottom: 24px; }

  .ps-price-row { display: flex; align-items: flex-end; gap: 4px; margin-bottom: 6px; }
  .ps-currency { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: var(--ink-soft); line-height: 1; margin-bottom: 6px; }
  .ps-price-num {
    font-family: 'Syne', sans-serif; font-size: 52px; font-weight: 800;
    color: var(--ink); line-height: 1;
  }
  .is-popular .ps-price-num { color: var(--green-700); }
  .ps-price-per { font-size: 14px; color: var(--ink-muted); margin-bottom: 8px; }
  .ps-annual-note {
    display: inline-block;
    font-size: 12px; color: var(--red); font-weight: 600;
    background: var(--red-bg); padding: 4px 12px; border-radius: var(--radius-pill);
    margin-bottom: 24px;
  }

  /* Features */
  .ps-features { list-style: none; margin: 24px 0 32px; flex: 1; }
  .ps-features li {
    display: flex; align-items: center; gap: 12px;
    padding: 10px 0; font-size: 14px; color: var(--ink-soft);
    border-bottom: 1px solid var(--border);
  }
  .ps-features li:last-child { border-bottom: none; }
  .ps-feat-icon {
    width: 22px; height: 22px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px;
  }
  .ps-feat-icon.ok { background: var(--green-100); color: var(--green-700); }
  .ps-feat-icon.no { background: var(--red-bg); color: var(--red); }
  .ps-feat-limit { color: var(--ink-muted); }

  /* CTA */
  .ps-cta {
    width: 100%; padding: 15px 24px;
    border-radius: var(--radius-pill); border: none;
    cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: transform var(--bounce), box-shadow var(--transition), background var(--transition);
    letter-spacing: 0.3px;
  }
  .ps-cta.primary {
    background: var(--grad); color: #fff;
    box-shadow: 0 4px 18px rgba(5,111,37,0.25);
  }
  .ps-cta.primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(5,111,37,0.35); }
  .ps-cta.outline {
    background: transparent; color: var(--ink);
    border: 2px solid var(--border);
  }
  .ps-cta.outline:hover { background: var(--ink); color: #fff; border-color: var(--ink); transform: translateY(-2px); }

  /* ── Toast ── */
  .ps-toast-wrap {
    position: fixed; top: 24px; right: 24px; z-index: 9999;
    display: flex; flex-direction: column; gap: 10px;
  }
  .ps-toast {
    min-width: 280px; max-width: 360px;
    background: var(--surface); border-radius: var(--radius-sm);
    padding: 14px 18px; font-size: 14px;
    display: flex; align-items: center; gap: 12px;
    box-shadow: var(--shadow-xl);
    border-left: 4px solid var(--green-500);
    animation: toastIn 0.3s var(--bounce);
  }
  .ps-toast.error { border-color: var(--red); }
  .ps-toast.info  { border-color: #3b82f6; }
  .ps-toast-icon { font-size: 18px; }
  @keyframes toastIn { from { opacity:0; transform: translateX(24px); } to { opacity:1; transform: none; } }

  /* ── Modal ── */
  .ps-overlay {
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(13,17,23,0.7); backdrop-filter: blur(6px);
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .ps-modal {
    background: var(--surface); border-radius: var(--radius);
    width: 100%; max-width: 780px; max-height: 92vh;
    overflow-y: auto; box-shadow: var(--shadow-xl);
    animation: slideUp 0.35s var(--bounce);
    display: flex; flex-direction: column;
  }
  @keyframes slideUp { from { opacity:0; transform: translateY(32px) scale(0.97); } to { opacity:1; transform: none; } }

  .ps-modal-head {
    display: flex; align-items: flex-start; justify-content: space-between;
    padding: 32px 36px 24px;
    border-bottom: 1px solid var(--border);
    position: sticky; top: 0; background: var(--surface); z-index: 2;
    border-radius: var(--radius) var(--radius) 0 0;
  }
  .ps-modal-eyebrow {
    font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase;
    color: var(--green-700); display: block; margin-bottom: 10px;
  }
  .ps-modal-title {
    font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800;
    color: var(--ink); margin-bottom: 8px; line-height: 1.2;
  }
  .ps-modal-title span {
    background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .ps-modal-sub { font-size: 14px; color: var(--ink-muted); }
  .ps-modal-sub strong { color: var(--green-700); }

  .ps-close-btn {
    width: 38px; height: 38px; border-radius: 50%; border: 1.5px solid var(--border);
    background: var(--surface-2); cursor: pointer; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; color: var(--ink-muted);
    transition: background var(--transition), color var(--transition), transform var(--transition);
  }
  .ps-close-btn:hover { background: var(--red-bg); color: var(--red); transform: rotate(90deg); }

  /* Form */
  .ps-form { padding: 28px 36px 36px; }
  .ps-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
  .ps-form-grid.one-col { grid-template-columns: 1fr; }
  .ps-field { display: flex; flex-direction: column; gap: 7px; }
  .ps-field label {
    font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px;
    color: var(--ink-soft); display: flex; align-items: center; gap: 6px;
  }
  .ps-field label span { color: var(--green-600); font-size: 14px; }
  .ps-input {
    padding: 13px 16px; border: 1.5px solid var(--border);
    border-radius: var(--radius-sm); font-size: 14px; color: var(--ink);
    font-family: 'DM Sans', sans-serif; background: var(--surface);
    transition: border-color var(--transition), box-shadow var(--transition);
    appearance: none; width: 100%;
  }
  .ps-input:focus { outline: none; border-color: var(--green-500); box-shadow: 0 0 0 3px rgba(5,111,37,0.1); }
  .ps-input[readonly] { background: var(--surface-2); color: var(--ink-muted); cursor: default; }
  .ps-input-hint { font-size: 11px; color: var(--ink-muted); margin-top: 2px; }

  /* Select arrow */
  .ps-select-wrap { position: relative; }
  .ps-select-wrap::after {
    content: '▾'; position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
    color: var(--green-700); pointer-events: none; font-size: 14px;
  }
  .ps-select-wrap .ps-input { padding-right: 38px; cursor: pointer; }

  /* Summary */
  .ps-summary {
    background: var(--surface-2); border: 1.5px solid var(--border);
    border-radius: var(--radius); padding: 24px; margin: 28px 0;
  }
  .ps-summary-title {
    font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 800;
    color: var(--ink); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
  }
  .ps-summary-title::before {
    content: ''; flex: 1; height: 1px; background: var(--border);
  }
  .ps-summary-title::after {
    content: ''; flex: 1; height: 1px; background: var(--border);
  }
  .ps-summary-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 10px 0; font-size: 14px; color: var(--ink-soft);
    border-bottom: 1px dashed var(--border);
  }
  .ps-summary-row:last-of-type { border-bottom: none; }
  .ps-summary-val { font-weight: 700; color: var(--ink); }
  .ps-summary-total {
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 0 0; margin-top: 12px; border-top: 2px solid var(--border);
    font-family: 'Syne', sans-serif; font-weight: 800; font-size: 16px;
  }
  .ps-total-price { font-size: 28px; color: var(--green-700); }
  .ps-status-pill {
    margin-top: 14px; display: inline-flex; align-items: center; gap: 6px;
    background: var(--green-100); color: var(--green-700);
    font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: var(--radius-pill);
  }
  .ps-status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green-500); animation: pulse 1.5s infinite; }
  @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }

  /* Submit */
  .ps-submit {
    width: 100%; padding: 17px 28px; border: none; border-radius: var(--radius-pill);
    background: var(--grad); color: #fff;
    font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 0.3px;
    cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
    box-shadow: 0 4px 18px rgba(5,111,37,0.28);
    transition: transform var(--bounce), box-shadow var(--transition), opacity var(--transition);
  }
  .ps-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(5,111,37,0.38); }
  .ps-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  @keyframes spin { to { transform: rotate(360deg); } }

  .ps-legal { text-align: center; font-size: 11.5px; color: var(--ink-muted); margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--border); line-height: 1.6; }

  /* Scrollbar */
  .ps-modal::-webkit-scrollbar { width: 5px; }
  .ps-modal::-webkit-scrollbar-track { background: var(--surface-2); }
  .ps-modal::-webkit-scrollbar-thumb { background: var(--green-300); border-radius: 10px; }

  /* Responsive */
  @media (max-width: 900px) {
    .ps-grid { grid-template-columns: 1fr; max-width: 460px; margin: 0 auto; }
    .ps-card.is-popular { transform: none; }
  }
  @media (max-width: 640px) {
    .ps-form-grid { grid-template-columns: 1fr; }
    .ps-modal-head { padding: 24px; flex-direction: column; gap: 14px; }
    .ps-form { padding: 20px 24px 28px; }
    .ps-modal-title { font-size: 22px; }
    .ps-total-price { font-size: 22px; }
  }
`;

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Idéal pour les petites structures avec 1 à 2 terrains",
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      { label: "Jusqu'à 2 terrains", ok: true },
      { label: "Réservations en ligne", ok: true },
      { label: "Paiements intégrés", ok: true },
      { label: "Tableau de bord basique", ok: true },
      { label: "Support par email", ok: true },
      { label: "Personnalisation limitée", ok: false },
      { label: "Pas d'application mobile", ok: false },
      { label: "Statistiques basiques", ok: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Pour les complexes sportifs avec plusieurs terrains",
    monthlyPrice: 179,
    annualPrice: 149,
    popular: true,
    features: [
      { label: "Jusqu'à 5 terrains", ok: true },
      { label: "Réservations en ligne", ok: true },
      { label: "Paiements intégrés", ok: true },
      { label: "Tableau de bord avancé", ok: true },
      { label: "Statistiques détaillées", ok: true },
      { label: "Application mobile", ok: true },
      { label: "Personnalisation avancée", ok: true },
      { label: "Support prioritaire", ok: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Solution complète pour les grands complexes sportifs",
    monthlyPrice: 349,
    annualPrice: 299,
    features: [
      { label: "Terrains illimités", ok: true },
      { label: "Réservations en ligne", ok: true },
      { label: "Paiements intégrés", ok: true },
      { label: "Tableau de bord premium", ok: true },
      { label: "Statistiques avancées", ok: true },
      { label: "App mobile personnalisée", ok: true },
      { label: "API dédiée", ok: true },
      { label: "Support 24/7 + Gestionnaire dédié", ok: true },
    ],
  },
];

const PAYMENT_MODES = [
  { value: "Carte", label: "Carte Bancaire" },
  { value: "Especes", label: "Espèces" },
  { value: "Mobile Money", label: "Mobile Money" },
  { value: "Virement", label: "Virement Bancaire" },
];

let _toastId = 0;

// Configuration API
const API_BASE_URL = "https://backend-foot-omega.vercel.app/api/souscription";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    mode_paiement: "Carte",
    date_debut: "",
    date_fin: "",
  });

  const addToast = (msg, type = "success") => {
    const id = ++_toastId;
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  };

  const today = new Date().toISOString().split("T")[0];
  const maxDate = (() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return d.toISOString().split("T")[0];
  })();

  const handleInput = (field, value) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (field === "date_debut" && value) {
      const d = new Date(value);
      d.setFullYear(d.getFullYear() + 1);
      setFormData((p) => ({ ...p, date_debut: value, date_fin: d.toISOString().split("T")[0] }));
    }
  };

  const resetForm = () =>
    setFormData({ nom: "", prenom: "", email: "", telephone: "", mode_paiement: "Carte", date_debut: "", date_fin: "" });

  const openModal = (plan) => {
    setSelectedPlan({
      ...plan,
      billingType: isAnnual ? "annual" : "monthly",
      price: isAnnual ? plan.annualPrice : plan.monthlyPrice,
      annualTotal: plan.annualPrice * 12,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  const validate = () => {
    const { nom, prenom, email, telephone, date_debut, date_fin } = formData;
    if (!nom || !prenom || !email || !telephone) {
      addToast("Veuillez remplir tous les champs obligatoires", "error");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addToast("Adresse email invalide", "error");
      return false;
    }
    if (!/^[0-9+\-\s]{10,}$/.test(telephone)) {
      addToast("Numéro de téléphone invalide", "error");
      return false;
    }
    if (!date_debut || !date_fin) {
      addToast("Veuillez sélectionner une date de début", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);

    // Préparer les données pour l'API
    const payload = {
      nom: formData.nom,
      prenom: formData.prenom,
      email: formData.email,
      telephone: formData.telephone,
      plan: selectedPlan.id,
      type_facturation: selectedPlan.billingType === "annual" ? "annuel" : "mensuel",
      prix_paye: selectedPlan.price,
      mode_paiement: formData.mode_paiement,
      date_debut: formData.date_debut,
      date_fin: formData.date_fin,
      statut: "en_attente"
    };

    try {
      const response = await fetch(`${API_BASE_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        addToast(`Souscription ${selectedPlan.name} confirmée ! 🎉`, "success");
        setTimeout(() => closeModal(), 2000);
      } else {
        addToast(data.message || "Erreur lors de la souscription", "error");
      }
    } catch (error) {
      console.error("Erreur API:", error);
      addToast("Erreur de connexion au serveur", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fmt = (d) => new Date(d).toLocaleDateString("fr-FR");

  return (
    <>
      <style>{styles}</style>

      {/* Toasts */}
      <div className="ps-toast-wrap">
        {toasts.map((t) => (
          <div key={t.id} className={`ps-toast ${t.type}`}>
            <span className="ps-toast-icon">
              {t.type === "success" ? "✓" : t.type === "error" ? "✕" : "i"}
            </span>
            <span>{t.msg}</span>
          </div>
        ))}
      </div>

      <section className="ps-wrap">
        <div className="ps-blob ps-blob-1" />
        <div className="ps-blob ps-blob-2" />

        <div className="ps-inner">
          {/* Header */}
          <div className="ps-head">
            <div className="ps-eyebrow">Tarifs</div>
            <h2>Des forfaits <em>adaptés</em><br />à vos besoins</h2>
            <p>Choisissez la formule qui correspond à la taille de votre structure et évoluez à votre rythme.</p>
          </div>

          {/* Toggle */}
          <div className="ps-toggle-wrap">
            <div className="ps-toggle">
              <span className={`ps-toggle-label ${!isAnnual ? "is-active" : ""}`}>Mensuel</span>
              <label className="ps-switch">
                <input
                  type="checkbox"
                  checked={isAnnual}
                  onChange={(e) => {
                    setIsAnnual(e.target.checked);
                    addToast(`Tarifs ${e.target.checked ? "annuels" : "mensuels"} affichés`, "info");
                  }}
                />
                <span className="ps-slider" />
              </label>
              <span className={`ps-toggle-label ${isAnnual ? "is-active" : ""}`}>
                Annuel <span className="ps-save-pill">−20%</span>
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="ps-grid">
            {PLANS.map((plan) => {
              const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
              return (
                <div key={plan.id} className={`ps-card ${plan.popular ? "is-popular" : ""}`}>
                  {plan.popular && <div className="ps-popular-badge">Populaire</div>}
                  <div className="ps-plan-name">{plan.name}</div>
                  <div className="ps-plan-desc">{plan.description}</div>
                  <div className="ps-divider" />
                  <div className="ps-price-row">
                    <span className="ps-currency">€</span>
                    <span className="ps-price-num">{price}</span>
                    <span className="ps-price-per">/mois</span>
                  </div>
                  {isAnnual && (
                    <span className="ps-annual-note">Facturé {plan.annualPrice * 12}€/an</span>
                  )}
                  <ul className="ps-features">
                    {plan.features.map((f, i) => (
                      <li key={i}>
                        <span className={`ps-feat-icon ${f.ok ? "ok" : "no"}`}>
                          {f.ok ? "✓" : "✕"}
                        </span>
                        <span className={f.ok ? "" : "ps-feat-limit"}>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`ps-cta ${plan.popular ? "primary" : "outline"}`}
                    onClick={() => openModal(plan)}
                  >
                    {plan.popular ? "Souscrire maintenant" : "Choisir cette offre"} →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedPlan && (
        <div className="ps-overlay" onClick={closeModal}>
          <div className="ps-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ps-modal-head">
              <div>
                <span className="ps-modal-eyebrow">Souscription</span>
                <h2 className="ps-modal-title">
                  Formulaire de <span>souscription</span>
                </h2>
                <p className="ps-modal-sub">
                  Offre <strong>{selectedPlan.name}</strong> —{" "}
                  {selectedPlan.billingType === "annual" ? "Annuel" : "Mensuel"} •{" "}
                  <strong>{selectedPlan.price}€/mois</strong>
                </p>
              </div>
              <button className="ps-close-btn" onClick={closeModal} type="button" aria-label="Fermer">✕</button>
            </div>

            <form className="ps-form" onSubmit={handleSubmit} noValidate>
              <div className="ps-form-grid">
                <div className="ps-field">
                  <label>Nom *</label>
                  <input className="ps-input" type="text" value={formData.nom}
                    onChange={(e) => handleInput("nom", e.target.value)}
                    placeholder="Votre nom" required />
                </div>
                <div className="ps-field">
                  <label>Prénom *</label>
                  <input className="ps-input" type="text" value={formData.prenom}
                    onChange={(e) => handleInput("prenom", e.target.value)}
                    placeholder="Votre prénom" required />
                </div>
              </div>

              <div className="ps-form-grid">
                <div className="ps-field">
                  <label>Email *</label>
                  <input className="ps-input" type="email" value={formData.email}
                    onChange={(e) => handleInput("email", e.target.value)}
                    placeholder="exemple@email.com" required />
                </div>
                <div className="ps-field">
                  <label>Téléphone *</label>
                  <input className="ps-input" type="tel" value={formData.telephone}
                    onChange={(e) => handleInput("telephone", e.target.value)}
                    placeholder="06 12 34 56 78" required />
                </div>
              </div>

              <div className="ps-form-grid">
                <div className="ps-field">
                  <label>Mode de paiement *</label>
                  <div className="ps-select-wrap">
                    <select className="ps-input" value={formData.mode_paiement}
                      onChange={(e) => handleInput("mode_paiement", e.target.value)}>
                      {PAYMENT_MODES.map((m) => (
                        <option key={m.value} value={m.value}>{m.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="ps-field">
                  <label>Date de début *</label>
                  <input className="ps-input" type="date" value={formData.date_debut}
                    onChange={(e) => handleInput("date_debut", e.target.value)}
                    min={today} max={maxDate} required />
                </div>
              </div>

              <div className="ps-form-grid one-col">
                <div className="ps-field">
                  <label>Date de fin</label>
                  <input className="ps-input" type="date" value={formData.date_fin} readOnly />
                  <span className="ps-input-hint">Calculée automatiquement (durée : 1 an)</span>
                </div>
              </div>

              {/* Summary */}
              <div className="ps-summary">
                <div className="ps-summary-title">Récapitulatif</div>
                <div className="ps-summary-row">
                  <span>Formule {selectedPlan.name}</span>
                  <span className="ps-summary-val">{selectedPlan.price}€ / mois</span>
                </div>
                {selectedPlan.billingType === "annual" && (
                  <div className="ps-summary-row">
                    <span>Total annuel</span>
                    <span className="ps-summary-val">{selectedPlan.annualTotal}€</span>
                  </div>
                )}
                {formData.date_debut && formData.date_fin && (
                  <div className="ps-summary-row">
                    <span>Période</span>
                    <span className="ps-summary-val">{fmt(formData.date_debut)} → {fmt(formData.date_fin)}</span>
                  </div>
                )}
                <div className="ps-summary-total">
                  <span>Total à payer</span>
                  <span className="ps-total-price">
                    {selectedPlan.billingType === "annual"
                      ? selectedPlan.annualTotal
                      : selectedPlan.price}€
                  </span>
                </div>
                <div className="ps-status-pill">
                  <span className="ps-status-dot" />
                  En attente de validation
                </div>
              </div>

              <button className="ps-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="ps-spin-ring" /> Traitement en cours…
                  </>
                ) : (
                  <>Confirmer ma souscription</>
                )}
              </button>

              <p className="ps-legal">
                En soumettant ce formulaire, vous acceptez nos{" "}
                <strong>conditions générales</strong> et notre{" "}
                <strong>politique de confidentialité</strong>.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}