const banners = [
  {
    name: "Étoile du Ciel",
    pool: [
      { name: "Astra Vael", rarity: "SSR", title: "Étoile du Ciel", origin: "Éclipse du Septième Ciel", weapon: "Arc lunaire", element: "Lumière", skill: "Vœu des Étoiles", description: "Héroïne de la lignée céleste. Elle lit les promesses cachées dans les étoiles et réécrit les destins brisés.", story: "Astra a été sauvée par une comète mourante. Depuis, elle porte en elle la mémoire des étoiles.", atq: 97, def: 80, rea: 94, palette: ["#362b70","#7d74ff","#f4d56d","#f7f3ff"], hair: "#f4d56d", eye: "#9bf0ff" },
      { name: "Raven Sol", rarity: "SSR", title: "Ombre de la Lune", origin: "Palais de la Brume", weapon: "Sabre noir", element: "Lune", skill: "Coupure Lunatique", description: "Ancienne assassin du ciel noir. Chaque coup de son sabre porte une promesse de mort et de renaissance.", story: "Raven Sol a traversé le Palais de la Brume pour retrouver la lune qu’il a perdue.", atq: 95, def: 76, rea: 91, palette: ["#1b1e3b","#3e4e8c","#7a7eff","#f5f7ff"], hair: "#6d7ae9", eye: "#c7d4ff" },
      { name: "Kael Nox", rarity: "SR", title: "Cavalier du Vide", origin: "Hall des Ruines", weapon: "Lance gravée", element: "Vide", skill: "Rupture du Silence", description: "Seul guerrier à avoir traversé la faille sans perdre sa voix.", story: "Kael Nox a appris à écouter le silence entre les mondes.", atq: 84, def: 72, rea: 80, palette: ["#171a2f","#6d4ce8","#9b82ff","#eef2ff"], hair: "#9b82ff", eye: "#9be4ff" },
      { name: "Serina Vale", rarity: "SR", title: "Éclat du Jardin", origin: "Forêt de Murmures", weapon: "Sceptre floral", element: "Nature", skill: "Éveil du Printemps", description: "Grâce à ses fleurs de mémoire, elle rend la vie aux territoires morts.", story: "Serina a appris à parler avec les racines et les fleurs perdues.", atq: 81, def: 76, rea: 83, palette: ["#102b2b","#2b8a78","#8ff0b5","#edfef1"], hair: "#8ff0b5", eye: "#d7fff2" },
      { name: "Mira Fenn", rarity: "R", title: "Écorce du Voyage", origin: "Vallée des Bijoux", weapon: "Bâton de voyage", element: "Vent", skill: "Vent de Fuite", description: "Une voyageuse dont le bagage est plus lourd que son cœur.", story: "Mira a traversé mille chemins pour retrouver la route qui lui est promise.", atq: 65, def: 68, rea: 70, palette: ["#232335","#5b7bb8","#d5e9ff","#f6f7ff"], hair: "#d5e9ff", eye: "#9ce6ff" },
      { name: "Ilya Thorn", rarity: "R", title: "Couronne du Néant", origin: "Désert des Cendres", weapon: "Lame de brume", element: "Feu", skill: "Lame de Brume", description: "Garde du feu éteint. Elle garde semé son nom dans les cendres.", story: "Ilya ne se souvient plus de la ville qu’elle a sauvée.", atq: 67, def: 64, rea: 66, palette: ["#2a1d1f","#8a3a52","#ff8ca3","#fff0f5"], hair: "#ff8ca3", eye: "#ffd5e1" },
      { name: "Neris Quill", rarity: "R", title: "Scribe du Chaos", origin: "Bibliothèque Noire", weapon: "Plume brillante", element: "Esprit", skill: "Feuille Impérissable", description: "Le destin, selon elle, n’est qu’un récit mal écrit.", story: "Neris a détruit un manuscrit interdit. Depuis, les mots qu’elle écrit portent des mondes entiers.", atq: 62, def: 70, rea: 73, palette: ["#1a1d2d","#414d74","#96b0ff","#edf3ff"], hair: "#96b0ff", eye: "#dfeaff" },
      { name: "Lunette", rarity: "C", title: "Lilith des Miroirs", origin: "Rue des Miroirs", weapon: "Poignard cristal", element: "Cristal", skill: "Frisson de Cristal", description: "Un reflet qui a appris à haïr son propre visage.", story: "Lunette a vu trop de visages dans trop de miroirs.", atq: 48, def: 58, rea: 54, palette: ["#20152d","#4d3d63","#d0b3ff","#fff8ff"], hair: "#d0b3ff", eye: "#f5eeff" },
      { name: "Cian Frost", rarity: "C", title: "Gardien du Givre", origin: "Puits de Neige", weapon: "Lance de glace", element: "Glace", skill: "Lance de Silence", description: "Il garde un glacier entier dans son souffle.", story: "Cian Frost a juré de geler le monde quand il entend des promesses brisées.", atq: 52, def: 60, rea: 50, palette: ["#151d2a","#3d6e91","#87d9ff","#edf9ff"], hair: "#87d9ff", eye: "#d8f3ff" },
      { name: "Yuno Reed", rarity: "C", title: "Murmure du Rivage", origin: "Port de Sélene", weapon: "Fouet marin", element: "Eau", skill: "Onde Céleste", description: "Un pirate du sommeil qui fait danser les vagues.", story: "Yuno Reed sait que la mer garde les souvenirs oubliés.", atq: 51, def: 57, rea: 58, palette: ["#192431","#346286","#7ed2ff","#eafaff"], hair: "#7ed2ff", eye: "#dff6ff" }
    ]
  },
  {
    name: "La Lune Brisée",
    pool: [
      { name: "Selene Vey", rarity: "SSR", title: "Lune Brisée", origin: "Palais du Ciel Fatigué", weapon: "Sceptre argenté", element: "Lune", skill: "Sceau d’Argent", description: "Elle porte la lune comme une blessure et la rend lumière à ceux qui ont perdu leur voie.", story: "Selene a été touchée par la lune en plein cœur. Depuis, elle diffuse une lumière qui rend les souvenirs visibles.", atq: 96, def: 81, rea: 92, palette: ["#24233d","#5d4db8","#f4d879","#f5f4ff"], hair: "#f4d879", eye: "#dff8ff" },
      { name: "Aric Noct", rarity: "SSR", title: "Gardien des Ténèbres", origin: "Tour des Rêves", weapon: "Plume du néant", element: "Obscur", skill: "Veille Nocturne", description: "Sa plume garde la nuit prisonnière entre deux pages.", story: "Aric a été choisi pour veiller sur les rêves du royaume et les protéger des âmes égarées.", atq: 92, def: 84, rea: 90, palette: ["#171821","#312d45","#7b70ff","#f7f7ff"], hair: "#7b70ff", eye: "#d8d3ff" },
      { name: "Aster Vale", rarity: "SR", title: "Cœur de la Mer", origin: "Port Kaldr", weapon: "Harpe marine", element: "Eau", skill: "Murmure des Vagues", description: "La mer parle en son nom, et elle lui répond avec des tempêtes.", story: "Aster a passé des saisons au fond des océans pour découvrir le cœur des marins perdus.", atq: 83, def: 75, rea: 78, palette: ["#132b3d","#2d7ecf","#86d9ff","#edfaff"], hair: "#86d9ff", eye: "#d9f5ff" },
      { name: "Elowen Frost", rarity: "SR", title: "Sœur des Neiges", origin: "Lande Gelée", weapon: "Bâton de glace", element: "Glace", skill: "Aube de Givre", description: "Elle confond la tristesse et la pureté.", story: "Elowen pense que chaque larme congelée devient une étoile.", atq: 80, def: 79, rea: 82, palette: ["#122533","#5489c7","#c9edff","#f6fcff"], hair: "#c9edff", eye: "#e4f7ff" },
      { name: "Dorian Ash", rarity: "R", title: "Crieur de Cendre", origin: "Vallée des Ruines", weapon: "Marteau du feu", element: "Feu", skill: "Flamme Stérile", description: "Il n’a plus de maison, seulement un feu qui ne veut pas mourir.", story: "Dorian est l’un des derniers à connaître les vraies origines des cendres.", atq: 63, def: 66, rea: 69, palette: ["#251915","#8d5647","#ffaf79","#fff3ec"], hair: "#ffaf79", eye: "#ffe0c6" },
      { name: "Saera Flint", rarity: "R", title: "Éclat de Pierre", origin: "Souterrains du Nord", weapon: "Massue de pierre", element: "Terre", skill: "Lance de Pierre", description: "Sa main sait parler au roc comme aux humains.", story: "Saera peut entendre la terre respirer. C’est pourquoi elle refuse d’entrer dans des villes qui oublient leurs racines.", atq: 66, def: 62, rea: 71, palette: ["#1a2022","#4a6e6e","#a5d5d5","#f6ffff"], hair: "#a5d5d5", eye: "#dffcff" },
      { name: "Vesper Morn", rarity: "R", title: "Rêveur des Mots", origin: "Bibliothèque Vierge", weapon: "Livre de rêves", element: "Esprit", skill: "Pensée Éteinte", description: "Il esquisse l’avenir dans des pages qui ne sont jamais lues.", story: "Vesper écrit pour des êtres qui ne vivent plus.", atq: 60, def: 74, rea: 68, palette: ["#1a1e33","#4a4f8f","#d1c3ff","#f8f5ff"], hair: "#d1c3ff", eye: "#edf0ff" },
      { name: "Nyra Bloom", rarity: "C", title: "Fleur de Fer", origin: "Jardin du Silence", weapon: "Faux de métal", element: "Nature", skill: "Pétale Claude", description: "La rose qui mord. La fleur qui ne pardonne pas.", story: "Nyra a grandi dans un jardin sans lumière.", atq: 49, def: 60, rea: 52, palette: ["#1c2118","#567b4a","#a0f29e","#f1fff0"], hair: "#a0f29e", eye: "#e0ffe4" },
      { name: "Milo Gray", rarity: "C", title: "Aigle de Plomb", origin: "Sommets Brisés", weapon: "Arc de vigilance", element: "Vent", skill: "Vif de l’Air", description: "Le ciel le connaît mieux que ses pairs.", story: "Milo a été élevé dans les cieux et ne sait plus si la terre est réelle.", atq: 55, def: 56, rea: 50, palette: ["#1b1d24","#55697d","#c4d8eb","#f4f9ff"], hair: "#c4d8eb", eye: "#edf8ff" },
      { name: "Talia Voss", rarity: "C", title: "Belle de Sable", origin: "Sables du Rêve", weapon: "Lance du matin", element: "Terre", skill: "Vent Saisonnier", description: "Elle chasse le temps à coups de sandales blanches.", story: "Talia traverse les déserts de son propre rêve pour trouver le chemin qui la ramène à sa maison.", atq: 50, def: 58, rea: 55, palette: ["#2a211a","#a86b3a","#f7dca0","#fff8ef"], hair: "#f7dca0", eye: "#fff3d6" }
    ]
  }
];

const state = {
  gems: 1200,
  pity: 0,
  selectedBanner: 0,
  inventory: [],
  summonHistory: [],
  freeTokens: 1
};

const rarityStyle = {
  C: { color: "#c7d2ff", text: "★" },
  R: { color: "#7ec9ff", text: "★★" },
  SR: { color: "#b7a1ff", text: "★★★" },
  SSR: { color: "#ffd66b", text: "★★★★" }
};

function rarityToStars(rarity) {
  return rarityStyle[rarity]?.text || "★";
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(values) {
  return values[Math.floor(Math.random() * values.length)];
}

function mixColor(hex, amount) {
  const value = hex.replace("#", "");
  const num = parseInt(value, 16);

  const r = Math.min(255, Math.max(0, ((num >> 16) & 255) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 255) + amount));
  const b = Math.min(255, Math.max(0, (num & 255) + amount));

  return "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("");
}

function generateUniqueName(rarity) {
  const first = {
    C: ["Ari", "Nell", "Mira", "Ciel", "Rin", "Sora", "Lina", "Toma", "Iris", "Vey"],
    R: ["Sel", "Iris", "Dora", "Noa", "Sae", "Lio", "Aven", "Taryn", "Nyra", "Milo"],
    SR: ["Astra", "Kael", "Elowen", "Raven", "Serin", "Aster", "Celyn", "Nyx", "Vesper", "Orion"],
    SSR: ["Astrae", "Velor", "Lunaris", "Aurel", "Nerith", "Abyss", "Celest", "Solen", "Veyra", "Elyon"]
  };
  const last = ["Vale", "Solis", "Noct", "Vane", "Thorne", "Iris", "Aion", "Quill", "Drift", "Vex"];
  return `${randomChoice(first[rarity])} ${randomChoice(last)}`;
}

function generateTitle(rarity) {
  const titles = {
    C: ["Murmure du soir", "Reflet du vent", "Lueur fragile", "Voix du sable"],
    R: ["Écorce du voyage", "Lueur de pierre", "Miroir perdu", "Garde de l’aube"],
    SR: ["Cavalier du Vide", "Éclat du jardin", "Sœur des neiges", "Cœur de la mer"],
    SSR: ["Étoile du Ciel", "Ombre de la Lune", "Lune Brisée", "Gardien des Ténèbres"]
  };
  return randomChoice(titles[rarity]);
}

function buildPortraitSvg(character, seed = 0) {
  const a = ((seed * 13) % 17) - 8;
  const b = ((seed * 19) % 23) - 11;
  const c = ((seed * 7) % 29) - 14;

  const bg1 = mixColor(character.palette[0], a * 2);
  const bg2 = mixColor(character.palette[1], b * 2);
  const accent = mixColor(character.palette[2], c * 2);
  const shadow = mixColor(character.palette[3], c * 2);
  const hair = mixColor(character.hair, a * 2);
  const eye = mixColor(character.eye, c * 2);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${bg1}" />
          <stop offset="100%" stop-color="${bg2}" />
        </linearGradient>
      </defs>
      <rect width="420" height="420" fill="url(#g)" />
      <circle cx="315" cy="90" r="80" fill="${accent}" opacity="0.14" />
      <circle cx="120" cy="120" r="65" fill="${shadow}" opacity="0.18" />

      <ellipse cx="210" cy="150" rx="72" ry="60" fill="${hair}" opacity="0.9" />
      <circle cx="184" cy="156" r="10" fill="${eye}" />
      <circle cx="236" cy="156" r="10" fill="${eye}" />
      <path d="M182 192 Q210 212 238 192" stroke="${eye}" stroke-width="5" fill="none" stroke-linecap="round" />

      <path d="M160 210 L130 330 L290 330 L260 210 Z" fill="${shadow}" opacity="0.95" />
      <path d="M140 210 L110 160 L170 180 Z" fill="${hair}" opacity="0.9" />
      <path d="M280 210 L310 160 L250 180 Z" fill="${hair}" opacity="0.9" />

      <path d="M145 332 L180 262 L240 262 L275 332 Z" fill="${accent}" opacity="0.9" />
      <path d="M180 262 L160 332 L130 332 Z" fill="${shadow}" opacity="0.7" />
      <path d="M240 262 L260 332 L290 332 Z" fill="${shadow}" opacity="0.7" />

      <circle cx="315" cy="92" r="5" fill="${hair}" opacity="0.8" />
      <circle cx="100" cy="130" r="5" fill="${hair}" opacity="0.7" />
    </svg>
  `;

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function createUniqueEntity(baseCharacter) {
  const rarityStats = {
    C: { minATQ: 42, maxATQ: 62, minDEF: 45, maxDEF: 68, minREA: 42, maxREA: 62 },
    R: { minATQ: 60, maxATQ: 80, minDEF: 58, maxDEF: 78, minREA: 58, maxREA: 82 },
    SR: { minATQ: 78, maxATQ: 92, minDEF: 68, maxDEF: 86, minREA: 72, maxREA: 90 },
    SSR: { minATQ: 90, maxATQ: 110, minDEF: 75, maxDEF: 95, minREA: 84, maxREA: 110 }
  };

  const stats = rarityStats[baseCharacter.rarity];
  const seed = Math.random() * 1000;

  const variantPalette = baseCharacter.palette.map((color, index) => {
    const shift = ((seed * (index + 1)) % 18) - 9;
    return mixColor(color, shift);
  });

  const entity = {
    id: `drop-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`,
    name: generateUniqueName(baseCharacter.rarity),
    rarity: baseCharacter.rarity,
    title: generateTitle(baseCharacter.rarity),
    origin: baseCharacter.origin,
    weapon: randomChoice([
      "Arc lunaire", "Sabre noir", "Lance gravée", "Sceptre floral",
      "Bâton de voyage", "Plume brillante", "Poignard cristal",
      "Harpe marine", "Livre de rêves", "Marteau du feu"
    ]),
    element: randomChoice([
      "Lumière", "Lune", "Vide", "Nature", "Vent", "Feu", "Eau", "Glace", "Terre", "Esprit"
    ]),
    skill: randomChoice([
      "Vœu des Étoiles",
      "Coupure Lunatique",
      "Rupture du Silence",
      "Éveil du Printemps",
      "Vent de Fuite",
      "Lame de Brume",
      "Feuille Impérissable",
      "Frisson de Cristal",
      "Lance de Silence",
      "Onde Céleste"
    ]),
    description: `${generateTitle(baseCharacter.rarity)} — un être né du hasard et scellé par les étoiles.`,
    story: `${generateUniqueName(baseCharacter.rarity)} a été forgé dans le souffle des étoiles. Son existence n’est pas un simple tirage, mais une promesse de destin.`,
    atq: rand(stats.minATQ, stats.maxATQ),
    def: rand(stats.minDEF, stats.maxDEF),
    rea: rand(stats.minREA, stats.maxREA),
    palette: variantPalette,
    hair: mixColor(baseCharacter.hair, ((seed * 7) % 18) - 9),
    eye: mixColor(baseCharacter.eye, ((seed * 11) % 16) - 8),
    image: buildPortraitSvg({
      ...baseCharacter,
      palette: variantPalette,
      hair: mixColor(baseCharacter.hair, ((seed * 7) % 18) - 9),
      eye: mixColor(baseCharacter.eye, ((seed * 11) % 16) - 8)
    }, seed)
  };

  return entity;
}

function getCurrentBanner() {
  return banners[state.selectedBanner];
}

function pickRarity(rarity) {
  const banner = getCurrentBanner();
  const matches = banner.pool.filter(item => item.rarity === rarity);
  return matches[Math.floor(Math.random() * matches.length)] || banner.pool[0];
}

function getRandomFromPool() {
  const roll = Math.random() * 100;
  if (roll < 4) return pickRarity("SSR");
  if (roll < 18) return pickRarity("SR");
  if (roll < 48) return pickRarity("R");
  return pickRarity("C");
}

function updateHUD() {
  const gemCountEl = document.getElementById("gemCount");
  const pityCountEl = document.getElementById("pityCount");
  const starterBadge = document.getElementById("starterBadge");
  const singlePullBtn = document.getElementById("singlePull");

  gemCountEl.textContent = state.gems;
  pityCountEl.textContent = state.pity;
  starterBadge.textContent = `${state.inventory.length} COMPAGNONS`;

  if (state.freeTokens > 0) {
    singlePullBtn.textContent = "Jeton gratuit";
  } else {
    singlePullBtn.textContent = "Tirer 1x · 100 gemmes";
  }
}

function showStarterOffer() {
  const offerModal = document.getElementById("offerModal");
  if (offerModal) offerModal.classList.add("show");
}

function hideStarterOffer() {
  const offerModal = document.getElementById("offerModal");
  if (offerModal) offerModal.classList.remove("show");
}

function acquireUniqueCharacter(baseCharacter) {
  const entity = createUniqueEntity(baseCharacter);
  state.inventory.push(entity);
  state.summonHistory.unshift(entity);

  renderSummonHistory();
  renderInventory();
  updateResultCard(entity);
  updateHUD();
}

function rollSingle() {
  if (state.freeTokens > 0) {
    state.freeTokens -= 1;
    const result = getRandomFromPool();
    acquireUniqueCharacter(result);
    spawnParticles();
    updateHUD();
    return;
  }

  if (state.gems < 100) {
    alert("Tu n’as pas assez de gemmes pour tirer.");
    return;
  }

  state.gems -= 100;

  const banner = getCurrentBanner();
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

  acquireUniqueCharacter(result);
  spawnParticles();
  updateHUD();
}

function rollTen() {
  if (state.gems < 900) {
    alert("Tu n’as pas assez de gemmes pour tirer 10x.");
    return;
  }

  state.gems -= 900;

  const banner = getCurrentBanner();

  for (let i = 0; i < 10; i++) {
    let result;

    if (state.pity >= 79 && i === 9) {
      result = banner.pool.find(item => item.rarity === "SSR") || pickRarity("SSR");
      state.pity = 0;
    } else {
      result = getRandomFromPool();
      if (result.rarity === "SSR") {
        state.pity = 0;
      } else {
        state.pity += 1;
      }
    }

    acquireUniqueCharacter(result);
  }

  spawnParticles();
  updateHUD();
}

function updateResultCard(character) {
  const resultCard = document.getElementById("resultCard");
  if (!resultCard) return;

  const resultRarityEl = document.getElementById("resultRarity");
  const resultNameEl = document.getElementById("resultName");
  const resultMetaEl = document.getElementById("resultMeta");
  const resultSkillEl = document.getElementById("resultSkill");

  resultRarityEl.textContent = rarityToStars(character.rarity);
  resultRarityEl.style.color = rarityStyle[character.rarity].color;

  resultNameEl.textContent = character.name;
  resultMetaEl.textContent = `${character.title} · ${character.origin}`;
  resultSkillEl.textContent = character.skill;

  resultCard.classList.remove("visible");
  void resultCard.offsetWidth;
  resultCard.classList.add("visible");
}

function renderSummonHistory() {
  const summonGridEl = document.getElementById("summonGrid");
  const recent = state.summonHistory.slice(0, 8);

  summonGridEl.innerHTML = recent.map(character => `
    <div class="summon-card" data-id="${character.id}">
      <img src="${character.image}" alt="${character.name}" />
      <div class="card-body">
        <div class="card-row">
          <div class="card-name">${character.name}</div>
          <div class="card-stars" style="color:${rarityStyle[character.rarity].color};">${rarityToStars(character.rarity)}</div>
        </div>
        <div class="card-title">${character.title}</div>
      </div>
    </div>
  `).join("");

  summonGridEl.querySelectorAll(".summon-card").forEach(card => {
    card.addEventListener("click", () => {
      const found = state.summonHistory.find(item => item.id === card.dataset.id);
      if (found) openCharacterModal(found);
    });
  });
}

function renderInventory() {
  const inventoryListEl = document.getElementById("inventoryList");
  const entries = state.inventory.slice(0, 12);

  if (!entries.length) {
    inventoryListEl.innerHTML = `
      <div class="inventory-item">
        <div class="hero-box">
          <div class="thumb">
            <img src="${buildPortraitSvg({
              palette: ["#1a1d2d","#3d4e8b","#ffb3d9","#f9f5ff"],
              hair:"#ffb3d9",
              eye:"#dfe6ff"
            }, 0)}" alt="Aucun personnage" />
          </div>
          <div class="hero-text">
            <div class="hero-name">Aucun personnage</div>
            <div class="hero-rarity">Le voyage commence ici.</div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  inventoryListEl.innerHTML = entries.map(item => `
    <div class="inventory-item">
      <div class="hero-box">
        <div class="thumb">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="hero-text">
          <div class="hero-name">${item.name}</div>
          <div class="hero-rarity">${rarityToStars(item.rarity)} · ${item.title}</div>
        </div>
      </div>
      <div class="count-tag">x1</div>
    </div>
  `).join("");
}

function openCharacterModal(character) {
  const modal = document.getElementById("characterModal");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalRarity = document.getElementById("modalRarity");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalAtq = document.getElementById("modalAtq");
  const modalDef = document.getElementById("modalDef");
  const modalRea = document.getElementById("modalRea");
  const modalOrigin = document.getElementById("modalOrigin");
  const modalWeapon = document.getElementById("modalWeapon");
  const modalElement = document.getElementById("modalElement");
  const modalSkill = document.getElementById("modalSkill");
  const modalStory = document.getElementById("modalStory");

  modalImage.src = character.image;
  modalName.textContent = character.name;
  modalRarity.textContent = rarityToStars(character.rarity);
  modalRarity.style.color = rarityStyle[character.rarity].color;

  modalTitle.textContent = character.title;
  modalDescription.textContent = character.description;
  modalAtq.textContent = character.atq;
  modalDef.textContent = character.def;
  modalRea.textContent = character.rea;
  modalOrigin.textContent = character.origin;
  modalWeapon.textContent = character.weapon;
  modalElement.textContent = character.element;
  modalSkill.textContent = character.skill;
  modalStory.textContent = character.story;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeCharacterModal() {
  const modal = document.getElementById("characterModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function spawnParticles() {
  const panel = document.querySelector(".left-panel");
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("span");
    p.className = "floating";
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 65 + 15}%`;
    p.style.background = i % 2 === 0 ? "rgba(249,215,121,0.9)" : "rgba(154,122,255,0.9)";
    p.style.animationDelay = `${(i / 16) * 0.6}s`;
    panel.appendChild(p);
    setTimeout(() => p.remove(), 1800);
  }
}

document.getElementById("singlePull").addEventListener("click", rollSingle);
document.getElementById("multiPull").addEventListener("click", rollTen);
document.getElementById("closeModal").addEventListener("click", closeCharacterModal);
document.getElementById("modalBackdrop").addEventListener("click", closeCharacterModal);
document.getElementById("claimFreeToken").addEventListener("click", () => {
  hideStarterOffer();
});

updateHUD();
renderInventory();
renderSummonHistory();
showStarterOffer();
