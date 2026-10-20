// Catálogo usado para montar os cards da página.
const games = [
  // Para criar um card, copie um objeto e altere estes dados.
  { id: "dbz", title: "DBZ TK 3", category: "acao", cover: "assets/cover-dbz.png", alt: "Capa de Dragon Ball Z Budokai Tenkaichi 3", url: "" },
  { id: "pes", title: "PES 6", category: "esporte", cover: "assets/cover-pes.png", alt: "Capa de PES 6 Pro Evolution Soccer", url: "" },
  { id: "gta", title: "GTA 5", category: "acao", cover: "assets/cover-gta.png", alt: "Capa de Grand Theft Auto V", url: "" },
  { id: "cs", title: "CS", category: "fps", cover: "assets/cover-cs.png", alt: "Capa de Counter-Strike", url: "" },
  { id: "bo2", title: "BLACK OPS 2", category: "fps", cover: "assets/cover-bo2.png", alt: "Capa de Call of Duty Black Ops II", url: "" },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const elements = {
  page: $(".page"),
  covers: $("#covers"),
  search: $("#search"),
  empty: $("#empty"),
  status: $("#status"),
  themeToggle: $("#theme-toggle"),
  loginBtn: $("#login-btn"),
  loginModal: $("#login-modal"),
  loginForm: $("#login-form"),
  loginCancel: $("#login-cancel"),
  newsletter: $("#newsletter"),
  newsletterMsg: $("#newsletter-msg"),
};

let selectedId = "gta";
let query = "";
let categoryFilter = null;
let page = "inicio";

// Aplica todos os filtros atuais antes de desenhar os cards.
function getVisibleGames() {
  const normalizedQuery = query.trim().toLowerCase();

  return games.filter((game) => {
    const matchesQuery = !normalizedQuery || game.title.toLowerCase().includes(normalizedQuery);
    const matchesCategory = !categoryFilter || game.category === categoryFilter;
    const matchesFavorites = page !== "favoritos" || game.id === selectedId;
    return matchesQuery && matchesCategory && matchesFavorites;
  });
}

function render() {
  const visibleGames = getVisibleGames();
  elements.covers.replaceChildren();
  elements.empty.hidden = visibleGames.length > 0;

  visibleGames.forEach((game) => {
    const isFeatured = game.id === selectedId;
    const card = document.createElement("button");

    card.type = "button";
    card.className = `card${isFeatured ? " is-featured" : ""}`;
    card.dataset.id = game.id;
    card.setAttribute("aria-pressed", String(isFeatured));
    card.innerHTML = `
      <figure class="card__art">
        <img src="${game.cover}" alt="${game.alt}" />
      </figure>
      <h2 class="card__title">${game.title}</h2>
      <small class="card__badge">SELECIONADO</small>
    `;
    card.addEventListener("click", () => openGame(game));
    elements.covers.appendChild(card);
  });
}

function openGame(game) {
  selectedId = game.id;

  if (!game.url) {
    elements.status.hidden = false;
    elements.status.textContent = `Adicione o link do jogo "${game.title}" no campo url.`;
    render();
    return;
  }

  // A classe anima a página antes da troca de endereço.
  elements.page.classList.add("is-leaving");
  window.setTimeout(() => {
    window.location.href = game.url;
  }, 350);
}

function setActiveNav(name) {
  $$(".nav__link").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.page === name);
  });
}

// Navegação principal e filtros de categoria compartilham o mesmo estado.
$$(".nav__link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    page = link.dataset.page;
    categoryFilter = page === "categorias" ? categoryFilter : null;

    if (page === "inicio") {
      query = "";
      elements.search.value = "";
      categoryFilter = null;
    }

    setActiveNav(page);
    render();
  });
});

$$("[data-category]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    categoryFilter = link.dataset.category;
    page = "categorias";
    setActiveNav(page);
    render();
  });
});

elements.search.addEventListener("input", () => {
  query = elements.search.value;
  page = "explorar";
  setActiveNav(page);
  render();
});

elements.themeToggle.addEventListener("click", () => {
  const isLight = elements.page.dataset.theme === "light";
  elements.page.dataset.theme = isLight ? "dark" : "light";
});

elements.loginBtn.addEventListener("click", () => elements.loginModal.showModal());
elements.loginCancel.addEventListener("click", () => elements.loginModal.close());

elements.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(elements.loginForm).get("email");
  const userName = String(email).split("@")[0];
  elements.loginBtn.lastChild.textContent = ` ${userName}`;
  elements.loginModal.close();
});

elements.newsletter.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(elements.newsletter).get("email");
  elements.newsletterMsg.hidden = false;
  elements.newsletterMsg.textContent = `Pronto. Novidades vão para ${email}.`;
  elements.newsletter.reset();
});

render();
