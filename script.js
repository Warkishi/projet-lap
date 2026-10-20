const banners = [
  {
    name: "Étoile du Ciel",
    rateUp: ["Astra Vael", "Raven Sol"],
    featured: "Astra Vael",
    pool: [
      { name: "Astra Vael", rarity: "SSR", label: "Étoile du Ciel", meta: "Origine : Éclipse du Septième Ciel", skill: "Vœu des Étoiles", desc: "Héroïne de la lignée céleste. Elle lit les promesses cachées dans les étoiles et réécrit les destins brisés.", atq: 97, def: 80, rea: 94 },
      { name: "Raven Sol", rarity: "SSR", label: "Ombre de la Lune", meta: "Origine : Palais de la Brume", skill: "Coupure Lunatique", desc: "Ancienne assassin du ciel noir. Chaque coup de son sabre porte une promesse de mort et de renaissance.", atq: 95, def: 76, rea: 91 },
      { name: "Kael Nox", rarity: "SR", label: "Cavalier du Vide", meta: "Origine : Hall des Ruines", skill: "Rupture du Silence", desc: "Seul guerrier à avoir traversé la faille sans perdre sa voix.", atq: 84, def: 72, rea: 80 },
      { name: "Serina Vale", rarity: "SR", label: "Éclat du Jardin", meta: "Origine : Forêt de Murmures", skill: "Éveil du Printemps", desc: "Grâce à ses fleurs de mémoire, elle rend la vie aux territoires morts.", atq: 81, def: 76, rea: 83 },
      { name: "Mira Fenn", rarity: "R", label: "Écorce du Voyage", meta: "Origine : Vallée des Bijoux", skill: "Vent de Fuite", desc: "Une voyageuse dont le bagage est plus lourd que son cœur.", atq: 65, def: 68, rea: 70 },
      { name: "Ilya Thorn", rarity: "R", label: "Couronne du Néant", meta: "Origine : Désert des Cendres", skill: "Lame de Brume", desc: "Garde du feu éteint. Elle garde semé son nom dans les cendres.", atq: 67, def: 64, rea: 66 },
      { name: "Neris Quill", rarity: "R", label: "Scribe du Chaos", meta: "Origine : Bibliothèque Noire", skill: "Feuille Impérissable", desc: "Le destin, selon elle, n’est qu’un récit mal écrit.", atq: 62, def: 70, rea: 73 },
      { name: "Lunette", rarity: "C", label: "Lilith des Miroirs", meta: "Origine : Rue des Miroirs", skill: "Frisson de Cristal", desc: "Un reflet qui a appris à haïr son propre visage.", atq: 48, def: 58, rea: 54 },
      { name: "Cian Frost", rarity: "C", label: "Gardien du Givre", meta: "Origine : Puits de Neige", skill: "Lance de Silence", desc: "Il garde un glacier entier dans son souffle.", atq: 52, def: 60, rea: 50 },
      { name: "Yuno Reed", rarity: "C", label: "Murmure du Rivage", meta: "Origine : Port de Sélene", skill: "Onde Céleste", desc: "Un pirate du sommeil qui fait danser les vagues.", atq: 51, def: 57, rea: 58 }
    ]
  },
  {
    name: "La Lune Brisée",
    rateUp: ["Selene Vey", "Aric Noct"],
    featured: "Selene Vey",
    pool: [
      { name: "Selene Vey", rarity: "SSR", label: "Lune Brisée", meta: "Origine : Palais du Ciel Fatigué", skill: "Sceau d’Argent", desc: "Elle porte la lune comme une blessure et la rend lumière à ceux qui ont perdu leur voie.", atq: 96, def: 81, rea: 92 },
      { name: "Aric Noct", rarity: "SSR", label: "Gardien des Ténèbres", meta: "Origine : Tour des Rêves", skill: "Veille Nocturne", desc: "Sa plume garde la nuit prisonnière entre deux pages.", atq: 92, def: 84, rea: 90 },
      { name: "Aster Vale", rarity: "SR", label: "Cœur de la Mer", meta: "Origine : Port Kaldr", skill: "Murmure des Vagues", desc: "La mer parle en son nom, et elle lui répond avec des tempêtes.", atq: 83, def: 75, rea: 78 },
      { name: "Elowen Frost", rarity: "SR", label: "Sœur des Neiges", meta: "Origine : Lande Gelée", skill: "Aube de Givre", desc: "Elle confond la tristesse et la pureté.", atq: 80, def: 79, rea: 82 },
      { name: "Dorian Ash", rarity: "R", label: "Crieur de Cendre", meta: "Origine : Vallée des Ruines", skill: "Flamme Stérile", desc: "Il n’a plus de maison, seulement un feu qui ne veut pas mourir.", atq: 63, def: 66, rea: 69 },
      { name: "Saera Flint", rarity: "R", label: "Éclat de Pierre", meta: "Origine : Souterrains du Nord", skill: "Lance de Pierre", desc: "Sa main sait parler au roc comme aux humains.", atq: 66, def: 62, rea: 71 },
      { name: "Vesper Morn", rarity: "R", label: "Rêveur des Mots", meta: "Origine : Bibliothèque Vierge", skill: "Pensée Éteinte", desc: "Il esquisse l’avenir dans des pages qui ne sont jamais lues.", atq: 60, def: 74, rea: 68 },
      { name: "Nyra Bloom", rarity: "C", label: "Fleur de Fer", meta: "Origine : Jardin du Silence", skill: "Pétale Claude", desc: "La rose qui mord. La fleur qui ne pardonne pas.", atq: 49, def: 60, rea: 52 },
      { name: "Milo Gray", rarity: "C", label: "Aigle de Plomb", meta: "Origine : Sommets Brisés", skill: "Vif de l’Air", desc: "Le ciel le connaît mieux que ses pairs.", atq: 55, def: 56, rea: 50 },
      { name: "Talia Voss", rarity: "C", label: "Belle de Sable", meta: "Origine : Sables du Rêve", skill: "Vent Saisonnier", desc: "Elle chasse le temps à coups de sandales blanches.", atq: 50, def: 58, rea: 55 }
    ]
  }
];

const state = {
  gems: 1200,
  pity: 0,
  selectedBanner: 0,
  inventory: {},
};

const rarityStyle = {
  C: { bg: "rgba(255,255,255,0.12)", text: "#edf4ff" },
  R: { bg: "rgba(106,223,255,0.16)", text: "#6adfff" },
  SR: { bg: "rgba(154,122,255,0.2)", text: "#bca9ff" },
  SSR: { bg: "rgba(249,215,121,0.18)", text: "#f9d779" }
};

const gemCountEl = document.getElementById("gemCount");
const pityCountEl = document.getElementById("pityCount");
const nextPityEl = document.getElementById("nextPity");
const srRateEl = document.getElementById("srRate");
const bannerTabsEl = document.getElementById("bannerTabs");
const featureNameEl = document.getElementById("featureName");
const featureRarityEl = document.getElementById("featureRarity");
const featureDescEl = document.getElementById("featureDesc");
const statAtqEl = document.getElementById("statAtq");
const statDefEl = document.getElementById("statDef");
const statReaEl = document.getElementById("statRea");

const resultCardEl = document.getElementById("resultCard");
const resultRarityEl = document.getElementById("resultRarity");
const resultNameEl = document.getElementById("resultName");
const resultMetaEl = document.getElementById("resultMeta");
const resultSkillEl = document.getElementById("resultSkill");
const inventoryListEl = document.getElementById("inventoryList");

function getCurrentBanner() {
  return banners[state.selectedBanner];
}

function updateBannerTabs() {
  bannerTabsEl.innerHTML = banners.map((banner, idx) => `
    <button class="mini-tab ${idx === state.selectedBanner ? "active" : ""}" data-index="${idx}">
      ${banner.name}
    </button>
  `).join("");

  bannerTabsEl.querySelectorAll(".mini-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedBanner = Number(btn.dataset.index);
      refreshBannerDisplay();
    });
  });
}

function refreshBannerDisplay() {
  const banner = getCurrentBanner();
  const featured = banner.pool.find(c => c.name === banner.featured) || banner.pool[0];

  featureNameEl.textContent = featured.name;
  featureRarityEl.textContent = featured.rarity;
  featureDescEl.textContent = featured.desc;
  statAtqEl.textContent = featured.atq;
  statDefEl.textContent = featured.def;
  statReaEl.textContent = featured.rea;

  updateResultCard(featured);
  srRateEl.textContent = "14%";
  updateHUD();
}

function updateHUD() {
  gemCountEl.textContent = state.gems;
  pityCountEl.textContent = state.pity;
  nextPityEl.textContent = Math.max(0, 80 - state.pity);
}

function getRandomFromPool() {
  const banner = getCurrentBanner();
  const isRateUpWeighted = Math.random() < 0.35;

  if (isRateUpWeighted) {
    const featured = banner.rateUp[Math.floor(Math.random() * banner.rateUp.length)];
    const match = banner.pool.find(item => item.name === featured);
    if (match) return match;
  }

  const roll = Math.random() * 100;
  if (roll < 4) return pickRarity("SSR");
  if (roll < 18) return pickRarity("SR");
  if (roll < 48) return pickRarity("R");
  return pickRarity("C");
}

function pickRarity(rarity){
  const banner = getCurrentBanner();
  const matches = banner.pool.filter(item => item.rarity === rarity);
  return matches[Math.floor(Math.random() * matches.length)] || banner.pool[0];
}

function rollSingle() {
  const banner = getCurrentBanner();

  if (state.gems < 100) {
    alert("Tu n’as pas assez de gemmes pour tirer.");
    return;
  }

  state.gems -= 100;

  let result;
  if (state.pity >= 79) {
    result = banner.pool.find(item => item.rarity === "SSR") || pickRarity("SSR");
  } else {
    result = getRandomFromPool();
  }

  if (result.rarity === "SSR") {
    state.pity = 0;
  } else {
    state.pity += 1;
  }

  addToInventory(result);
  updateResultCard(result);
  spawnParticles();
  updateHUD();
}

function rollTen() {
  const banner = getCurrentBanner();

  if (state.gems < 900) {
    alert("Tu n’as pas assez de gemmes pour tirer 10x.");
    return;
  }

  state.gems -= 900;

  const results = [];
  for (let i = 0; i < 10; i++) {
    let r;
    if (state.pity >= 79 && i === 9) {
      r = banner.pool.find(item => item.rarity === "SSR") || pickRarity("SSR");
      state.pity = 0;
    } else {
      r = getRandomFromPool();
      if (r.rarity === "SSR") state.pity = 0;
      else state.pity += 1;
    }
    results.push(r);
    addToInventory(r);
  }

  const final = results[results.length - 1];
  updateResultCard(final);
  spawnParticles();
  updateHUD();
}

function updateResultCard(hero) {
  resultRarityEl.textContent = hero.rarity;
  resultRarityEl.style.background = rarityStyle[hero.rarity].bg;
  resultRarityEl.style.color = rarityStyle[hero.rarity].text;
  resultRarityEl.style.border = "1px solid rgba(255,255,255,0.08)";

  resultNameEl.textContent = hero.name;
  resultMetaEl.textContent = hero.meta;
  resultSkillEl.textContent = hero.skill;

  resultCardEl.classList.remove("visible");
  void resultCardEl.offsetWidth;
  resultCardEl.classList.add("visible");
}

function addToInventory(hero) {
  if (!state.inventory[hero.name]) {
    state.inventory[hero.name] = { ...hero, count: 1 };
  } else {
    state.inventory[hero.name].count += 1;
  }

  renderInventory();
}

function renderInventory() {
  const entries = Object.values(state.inventory).sort((a, b) => {
    const order = { SSR: 4, SR: 3, R: 2, C: 1 };
    return order[b.rarity] - order[a.rarity] || a.name.localeCompare(b.name);
  });

  if (!entries.length) {
    inventoryListEl.innerHTML = `
      <div class="item">
        <div class="hero">
          <div class="avatar">✦</div>
          <div class="hero-text">
            <div class="hero-name">Aucun héros obtenu</div>
            <div class="hero-rarity">Le voyage commence ici.</div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  inventoryListEl.innerHTML = entries.map(item => `
    <div class="item">
      <div class="hero">
        <div class="avatar">${item.name.charAt(0)}</div>
        <div class="hero-text">
          <div class="hero-name">${item.name}</div>
          <div class="hero-rarity">${item.rarity} · ${item.label}</div>
        </div>
      </div>
      <div class="count">x${item.count}</div>
    </div>
  `).join("");
}

function spawnParticles() {
  const panel = document.getElementById("resultPanel");
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    p.className = "floating";
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 65 + 15}%`;
    p.style.background = i % 2 === 0 ? "rgba(249,215,121,0.9)" : "rgba(154,122,255,0.9)";
    p.style.animationDelay = `${(i / 14) * 0.6}s`;
    panel.appendChild(p);
    setTimeout(() => p.remove(), 1800);
  }
}

document.getElementById("singlePull").addEventListener("click", rollSingle);
document.getElementById("multiPull").addEventListener("click", rollTen);

updateBannerTabs();
renderInventory();
updateHUD();
refreshBannerDisplay();
