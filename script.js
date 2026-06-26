// =============================================================
// script.js — comportement du site (n'a normalement pas besoin
// d'être modifié ; pour le contenu, voir data.js)
// =============================================================

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupCountdown();
  renderNews();
});

/* ---------- Menu mobile ---------- */
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Compte à rebours jusqu'à l'arrivée ---------- */
function setupCountdown() {
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const captionEl = document.querySelector(".countdown-caption");
  if (!daysEl || typeof ARRIVAL_DATE === "undefined") return;

  const target = new Date(ARRIVAL_DATE).getTime();

  function tick() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = "0";
      hoursEl.textContent = "0";
      minsEl.textContent = "0";
      if (captionEl) captionEl.textContent = "Bienvenue à Trois-Rivières !";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
  }

  tick();
  const timer = setInterval(tick, 1000 * 30); // mise à jour toutes les 30s, suffisant
}

/* ---------- Rendu des actualités / promotions ---------- */
function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid || typeof actualites === "undefined") return;

  if (!actualites.length) {
    grid.innerHTML = `<p style="color:rgba(250,246,239,0.7)">Aucune actualité pour le moment. Ajoutez-en dans data.js.</p>`;
    return;
  }

  grid.innerHTML = actualites
    .map(
      (item) => `
      <article class="news-card">
        <span class="news-cat">${escapeHTML(item.categorie || "Info")}</span>
        <h3>${escapeHTML(item.titre || "")}</h3>
        <p>${escapeHTML(item.texte || "")}</p>
        ${item.validite ? `<div class="news-valid">${escapeHTML(item.validite)}</div>` : ""}
      </article>
    `
    )
    .join("");
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
