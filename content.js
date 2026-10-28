/* =========================================================
   CONTENU DU PORTFOLIO — c'est le seul fichier à modifier
   pour mettre le site à jour (nouveau poste, projet, etc.).
   Chaque texte existe en français (fr) et en anglais (en).
   Icônes disponibles : code, migrate, plug, chart, type, wrench,
   home, plane, school, database, terminal, globe, users, shield
   ========================================================= */

window.PORTFOLIO = {

  /* ---- Réglages généraux ---- */
  settings: {
    email: "khadirmalika1997@gmail.com",
    phone: "+213 658 45 54 69",          // mettre "" pour masquer le numéro
    linkedin: "https://www.linkedin.com/in/malika-b3657b212",
    github: "",                            // ex. "https://github.com/votre-nom" — "" pour masquer
    cvFile: "",                            // ex. "cv-malika-khadir.pdf" (fichier placé à côté de index.html) — "" pour masquer
    photo: "",                             // ex. "photo.jpg" (fichier placé à côté de index.html) — "" = initiales
    available: true                        // false pour retirer le badge "Disponible"
  },

  /* ---- Chiffres clés ---- */
  stats: [
    { value: 3,  suffix: "+", fr: "ans d'expérience Odoo",   en: "years of Odoo experience" },
    { value: 5,  suffix: "",  fr: "versions maîtrisées",      en: "versions mastered" },
    { value: 4,  suffix: "",  fr: "entreprises & clients",    en: "companies & clients" },
    { value: 6,  suffix: "",  fr: "modules présentés",        en: "featured modules" }
  ],

  /* ---- Ce que je fais ---- */
  services: [
    { icon: "code",
      title: { fr: "Développement de modules", en: "Module development" },
      text:  { fr: "Modules Odoo sur mesure en Python et XML : modèles, vues, champs calculés, actions automatisées et tâches planifiées.",
               en: "Custom Odoo modules in Python and XML: models, views, computed fields, automated actions and scheduled jobs." } },
    { icon: "migrate",
      title: { fr: "Migration de versions", en: "Version migration" },
      text:  { fr: "Migration et adaptation de modules d'Odoo 15 à 19, en préservant les données et les fonctionnalités métier.",
               en: "Migrating and adapting modules from Odoo 15 to 19 while preserving data and business features." } },
    { icon: "plug",
      title: { fr: "Intégration d'API", en: "API integration" },
      text:  { fr: "Connexion d'Odoo aux API fournisseurs : import produits, synchronisation des prix et du stock, contrôles de doublons.",
               en: "Connecting Odoo to supplier APIs: product import, price and stock sync, duplicate checks." } },
    { icon: "chart",
      title: { fr: "Rapports & tableaux de bord", en: "Reports & dashboards" },
      text:  { fr: "Rapports QWeb, actions d'impression et tableaux de bord KPI pour piloter ventes, stock, achats et finance.",
               en: "QWeb reports, print actions and KPI dashboards to steer sales, inventory, purchasing and finance." } }
  ],

  /* ---- Versions Odoo ---- */
  versions: [
    { v: "15", fr: "Migration",  en: "Migration" },
    { v: "16", fr: "Dév. · API", en: "Dev · API" },
    { v: "17", fr: "Migration",  en: "Migration" },
    { v: "18", fr: "Réparation", en: "Repair app" },
    { v: "19", fr: "Certifiée",  en: "Certified", highlight: true }
  ],

  /* ---- Expérience (la plus récente en premier) ---- */
  experience: [
    {
      current: true,
      period: { fr: "Sept. 2025 — aujourd'hui", en: "Sep 2025 — present" },
      type:   { fr: "Temps plein", en: "Full-time" },
      role:   { fr: "Développeuse Odoo", en: "Odoo Developer" },
      org: "SoftG Europe",
      points: {
        fr: ["Développement et maintenance de modules personnalisés sous Odoo 16.",
             "Personnalisation du site web et des modules standards selon les besoins métiers.",
             "Intégration d'API fournisseurs et synchronisation des données produits."],
        en: ["Develop and maintain custom modules for Odoo 16.",
             "Customize the website and standard Odoo modules to meet business requirements.",
             "Integrate supplier APIs and synchronize product data."]
      },
      tags: ["Odoo 16", "Website", "REST API", "Cron"]
    },
    {
      current: true,
      period: { fr: "Nov. 2023 — aujourd'hui", en: "Nov 2023 — present" },
      type:   { fr: "Freelance", en: "Freelance" },
      role:   { fr: "Développeuse Odoo", en: "Odoo Developer" },
      org: "RAG Solutions · Alger",
      points: {
        fr: ["Migration technique de modules entre versions d'Odoo.",
             "Création de modules sur mesure et de fonctionnalités spécifiques aux clients.",
             "Correction de bugs, amélioration des performances et de la maintenabilité."],
        en: ["Migrate technical modules between Odoo versions.",
             "Build custom modules and client-specific features.",
             "Fix bugs and improve performance and maintainability."]
      },
      tags: ["Migration", "Python", "XML", "Debug"]
    },
    {
      period: { fr: "Mai 2024 — mai 2025", en: "May 2024 — May 2025" },
      type:   { fr: "Freelance", en: "Freelance" },
      role:   { fr: "Consultante fonctionnelle", en: "Functional Consultant" },
      org: "D&D Consulting · Blida",
      points: {
        fr: ["Migration et adaptation de modules pour Odoo 15, 16 et 17.",
             "Personnalisation des flux Ventes et Stock.",
             "Développement de rapports QWeb et configuration des actions d'impression."],
        en: ["Migrate and adapt modules for Odoo 15, 16 and 17.",
             "Customize Sales and Inventory workflows.",
             "Build QWeb reports and configure print actions."]
      },
      tags: ["Ventes", "Stock", "QWeb"]
    },
    {
      period: { fr: "Avr. 2023 — mai 2023", en: "Apr 2023 — May 2023" },
      type:   { fr: "Stage", en: "Internship" },
      role:   { fr: "Développeuse Odoo stagiaire", en: "Odoo Developer Intern" },
      org: "SmartOdoo · Tizi Ouzou",
      points: {
        fr: ["Contribution à un module de gestion scolaire.",
             "Analyse des besoins, tests et débogage, documentation technique et formation des utilisateurs."],
        en: ["Contributed to a school management module.",
             "Requirements analysis, testing and debugging, technical documentation and user training."]
      },
      tags: ["Gestion scolaire", "Tests", "Documentation"]
    }
  ],

  /* ---- Projets (featured: true = grande carte mise en avant) ---- */
  projects: [
    {
      featured: true,
      icon: "plug",
      version: "Odoo 16",
      title: { fr: "Intégration API fournisseur", en: "Supplier API Integration" },
      text: {
        fr: "Connexion d'Odoo au catalogue d'un fournisseur pour automatiser l'import et la mise à jour des produits sur le site e-commerce.",
        en: "Connecting Odoo to a supplier catalogue to automate product import and updates on the e-commerce website."
      },
      features: {
        fr: ["Import automatique des produits", "Contrôle des doublons EAN / SKU", "Synchronisation des prix et du stock", "Règles de publication sur le site web"],
        en: ["Automatic product import", "Duplicate EAN / SKU checks", "Price and stock synchronization", "Website publication rules"]
      },
      tags: ["Python", "REST API", "Cron", "Website"],
      link: ""
    },
    {
      icon: "type",
      version: "Odoo 16 · 17 · 19",
      title: { fr: "Live Font Studio", en: "Live Font Studio" },
      text: {
        fr: "Personnalisation de la typographie du backend et du site web avec Google Fonts.",
        en: "Customize backend and website typography with Google Fonts."
      },
      features: {
        fr: ["Application immédiate", "Réinitialisation en un clic", "Compatible 3 versions"],
        en: ["Instant preview", "One-click reset", "Works on 3 versions"]
      },
      tags: ["JavaScript", "Assets"],
      link: ""
    },
    {
      icon: "chart",
      version: "Odoo 16",
      title: { fr: "Tableau de bord KPI", en: "KPI Dashboard" },
      text: {
        fr: "Indicateurs de pilotage pour les ventes, le stock, les achats et la finance.",
        en: "Management indicators for sales, inventory, purchasing and finance."
      },
      features: {
        fr: ["Analyses ABC et BCG", "Quantité économique (EOQ)", "4 domaines métier"],
        en: ["ABC and BCG analysis", "Economic order quantity (EOQ)", "4 business areas"]
      },
      tags: ["Python", "OWL"],
      link: ""
    },
    {
      icon: "wrench",
      version: "Odoo 18",
      title: { fr: "Gestion des réparations", en: "Repair Management" },
      text: {
        fr: "Application complète de suivi des réparations, du dépôt jusqu'au paiement.",
        en: "Full repair tracking app, from drop-off to payment."
      },
      features: {
        fr: ["Portail client et QR codes", "Paiements et tableau de bord", "Arabe (RTL) et étiquettes"],
        en: ["Customer portal and QR codes", "Payments and dashboard", "Arabic RTL and labels"]
      },
      tags: ["Portal", "QWeb", "RTL"],
      link: ""
    },
    {
      icon: "home",
      version: { fr: "Module personnel", en: "Personal module" },
      title: { fr: "Gestion immobilière", en: "Real Estate Management" },
      text: {
        fr: "Gestion des biens, des offres et du cycle de vente immobilier.",
        en: "Managing properties, offers and the real estate sales cycle."
      },
      features: {
        fr: ["États de vente automatisés", "Champs calculés", "Relations entre modèles"],
        en: ["Automated sale states", "Computed fields", "Model relations"]
      },
      tags: ["ORM", "XML"],
      link: ""
    },
    {
      icon: "plane",
      version: { fr: "Module personnel", en: "Personal module" },
      title: { fr: "Contact Travel", en: "Contact Travel" },
      text: {
        fr: "Extension des contacts pour suivre les voyages de chaque client.",
        en: "Extends contacts to track each customer's trips."
      },
      features: {
        fr: ["Historique des voyages", "Niveau de récompense automatique", "Héritage de res.partner"],
        en: ["Trip history", "Automatic reward level", "res.partner inheritance"]
      },
      tags: ["Héritage", "Python"],
      link: ""
    }
  ],

  /* ---- Compétences (key: true = mise en avant) ---- */
  skills: [
    { icon: "code", title: { fr: "Odoo", en: "Odoo" }, items: [
      { fr: "Développement de modules", en: "Module development", key: true },
      { fr: "Migration", en: "Migration", key: true },
      { fr: "Personnalisation", en: "Customization", key: true },
      { fr: "Rapports QWeb", en: "QWeb reports" },
      { fr: "Vues XML", en: "XML views" },
      { fr: "Actions automatisées", en: "Automated actions" },
      { fr: "Tâches planifiées", en: "Scheduled jobs" },
      { fr: "Site web", en: "Website" },
      { fr: "Débogage & optimisation", en: "Debugging & optimization" } ] },
    { icon: "terminal", title: { fr: "Langages & web", en: "Languages & web" }, items: [
      { fr: "Python", key: true }, { fr: "Flask" }, { fr: "XML" }, { fr: "SQL" },
      { fr: "JavaScript" }, { fr: "HTML" }, { fr: "CSS" }, { fr: "PHP" } ] },
    { icon: "database", title: { fr: "Bases de données", en: "Databases" }, items: [
      { fr: "PostgreSQL", key: true }, { fr: "MySQL" }, { fr: "Oracle" }, { fr: "SQL Server" } ] },
    { icon: "shield", title: { fr: "Outils & systèmes", en: "Tools & systems" }, items: [
      { fr: "Git" }, { fr: "GitHub" }, { fr: "GitLab" }, { fr: "Linux / Ubuntu" }, { fr: "Windows" }, { fr: "Microsoft Office" } ] },
    { icon: "globe", title: { fr: "Langues", en: "Languages" }, items: [
      { fr: "Français", en: "French", key: true }, { fr: "Anglais", en: "English", key: true }, { fr: "Arabe", en: "Arabic" }, { fr: "Kabyle", en: "Kabyle" } ] },
    { icon: "users", title: { fr: "Savoir-être", en: "Soft skills" }, items: [
      { fr: "Rigueur", en: "Rigor" }, { fr: "Autonomie", en: "Autonomy" }, { fr: "Esprit d'équipe", en: "Teamwork" },
      { fr: "Analyse & synthèse", en: "Analysis & synthesis" }, { fr: "Curiosité", en: "Curiosity" } ] }
  ],

  /* ---- Certification ---- */
  certification: {
    title: "Odoo 19 Functional Certification",
    issuer: "Odoo S.A.",
    date: { fr: "Avril 2026", en: "April 2026" },
    score: 72.5,
    text: { fr: "Certification officielle couvrant la configuration fonctionnelle des applications Odoo 19.",
            en: "Official certification covering the functional configuration of Odoo 19 applications." }
  },

  /* ---- Formation ---- */
  education: [
    { years: "2019 — 2021",
      title: { fr: "Master Systèmes informatiques", en: "Master's in Information Systems" },
      school: "Université Mouloud Mammeri, Tizi Ouzou",
      text: { fr: "Mémoire : déploiement optimal d'un réseau de capteurs sans fil (MATLAB, C, LaTeX).",
              en: "Thesis: optimal deployment of wireless sensor networks (MATLAB, C, LaTeX)." } },
    { years: "2016 — 2019",
      title: { fr: "Licence Informatique", en: "Bachelor's in Computer Science" },
      school: "Université Mouloud Mammeri, Tizi Ouzou",
      text: { fr: "Projet : site vitrine pour un cabinet d'architecture en Belgique.",
              en: "Project: website for an architecture firm in Belgium." } },
    { years: "2015 — 2016",
      title: { fr: "Baccalauréat Mathématiques", en: "Baccalaureate in Mathematics" },
      school: "Tizi Ouzou",
      text: { fr: "Mention Bien.", en: "With honours." } }
  ]
};
