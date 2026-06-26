/* =========================================================================
   DONNÉES MODIFIABLES — "Cap sur Trois-Rivières"
   -------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour mettre le site à jour.
   Pas besoin de toucher à index.html, styles.css ou script.js.

   1) Pour changer la date d'arrivée : modifiez ARRIVAL_DATE.
   2) Pour ajouter / retirer une actualité ou promo : modifiez le tableau
      `actualites` ci-dessous, en copiant le modèle d'un objet existant.
   ========================================================================= */

// Date et heure d'arrivée prévue (format AAAA-MM-JJTHH:MM:SS)
// Heure locale de Trois-Rivières (heure de l'Est).
const ARRIVAL_DATE = "2026-07-04T12:00:00";

/* Chaque actualité est un objet avec :
   - categorie : "Promo", "École", "Emploi", "Démarche", "Communauté", etc.
   - titre     : titre court
   - texte     : 1-2 phrases
   - validite  : ex. "Jusqu'au 12 juillet 2026" (texte libre)
*/
const actualites = [
  {
    categorie: "Promo",
    titre: "Circulaire Maxi de la semaine",
    texte: "Nouvelle circulaire chaque jeudi : comparez les rabais sur les produits de base avant de faire l'épicerie.",
    validite: "Mise à jour chaque jeudi"
  },
  {
    categorie: "Promo",
    titre: "Circulaire Super C de la semaine",
    texte: "Les deux circulaires (Maxi et Super C) changent le même jour : utile pour comparer rapidement.",
    validite: "Mise à jour chaque jeudi"
  },
  {
    categorie: "Démarche",
    titre: "Rendez-vous SAAQ : délai à prévoir",
    texte: "Les délais de rendez-vous pour l'examen théorique peuvent être longs à Trois-Rivières : ouvrir un dossier dès le premier mois.",
    validite: "À vérifier sur saaq.gouv.qc.ca"
  },
  {
    categorie: "École",
    titre: "Période d'inscription scolaire",
    texte: "Contacter le Centre de services scolaire du Chemin-du-Roy pour confirmer les places en classe d'accueil pour la rentrée.",
    validite: "À faire dès l'arrivée"
  },
  {
    categorie: "Emploi",
    titre: "Séances d'information Services Québec",
    texte: "Des séances collectives d'accueil pour nouveaux arrivants sont offertes régulièrement : demander le calendrier en s'inscrivant.",
    validite: "Sur rendez-vous"
  },
  {
    categorie: "Communauté",
    titre: "Session « Premières démarches » au SANA",
    texte: "Le SANA Trois-Rivières propose des séances d'information collectives sur les démarches d'installation (RAMQ, NAS, logement).",
    validite: "Contacter le 819 375-2196"
  }
];
