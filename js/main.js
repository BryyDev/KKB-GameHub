// Catálogo usado para montar os cards da página.
const games = [
  // Para criar um card, copie um objeto e altere estes dados.
  { id: "dbz", title: "DBZ TK 3", category: "acao", cover: "assets/cover-dbz.png", alt: "Capa de Dragon Ball Z Budokai Tenkaichi 3", url: "" },
  { id: "pes", title: "PES 6", category: "esporte", cover: "assets/cover-pes.png", alt: "Capa de PES 6 Pro Evolution Soccer", url: "https://pes6.optijuegos.net/" },
  { id: "gta", title: "GTA 5", category: "acao", cover: "assets/cover-gta.png", alt: "Capa de Grand Theft Auto V", url: "" },
  { id: "cs", title: "CS", category: "fps", cover: "assets/cover-cs.png", alt: "Capa de Counter-Strike", url: "" },
  { id: "bo2", title: "BLACK OPS 2", category: "fps", cover: "assets/cover-bo2.png", alt: "Capa de Call of Duty Black Ops II", url: "" },
  { id: "street", title: "Fifa Street", category: "esporte", cover: "assets/cover-fifa-street.png", alt: "Capa do fifa street", url:"https://fifastreet2.fun/"}
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const elements = {
  page: $(".page"),
  covers: $("#covers"),
  categoryMenu: $("#category-menu"),
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
let categoryMenuOpen = false;
let loopWidth = 0;
let favoriteIds = new Set(JSON.parse(localStorage.getItem("kkb-favorites") || "[]"));

// Aplica todos os filtros atuais antes de desenhar os cards.
function getVisibleGames() {
  const normalizedQuery = query.trim().toLowerCase();

  return games.filter((game) => {
    const matchesQuery = !normalizedQuery || game.title.toLowerCase().includes(normalizedQuery);
    const matchesCategory = !categoryFilter || game.category === categoryFilter;
    const matchesFavorites = page !== "favoritos" || favoriteIds.has(game.id);
    return matchesQuery && matchesCategory && matchesFavorites;
  });
}

function render() {
  const visibleGames = getVisibleGames();
  elements.categoryMenu.hidden = !categoryMenuOpen;
  elements.covers.classList.toggle("is-category-view", page === "categorias");
  elements.covers.replaceChildren();
  elements.empty.hidden = visibleGames.length > 0;

  const shouldLoop = page !== "favoritos" && page !== "categorias" && visibleGames.length > 1;
  const gamesToRender = shouldLoop
    ? [...visibleGames, ...visibleGames, ...visibleGames]
    : visibleGames;

  gamesToRender.forEach((game) => {
    const card = document.createElement("article");

    card.className = "card";
    card.dataset.id = game.id;
    card.tabIndex = 0;
    card.innerHTML = `
      <figure class="card__art">
        <img src="${game.cover}" alt="${game.alt}" />
      </figure>
      <h2 class="card__title">${game.title}</h2>
      <div class="card__actions">
        <small class="card__badge">SELECIONADO</small>
        <button class="card__favorite" type="button" aria-label="${favoriteIds.has(game.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}" aria-pressed="${favoriteIds.has(game.id)}">
          ${favoriteIds.has(game.id) ? "★ Favoritado" : "☆ Favoritar"}
        </button>
      </div>
    `;
    card.addEventListener("click", () => openGame(game));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openGame(game);
      }
    });
    card.querySelector(".card__favorite").addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(game.id);
    });
    elements.covers.appendChild(card);
  });

  if (shouldLoop) {
    loopWidth = visibleGames.length * (elements.covers.firstElementChild.offsetWidth + 10);
    elements.covers.scrollLeft = loopWidth;
  } else {
    loopWidth = 0;
  }
}

function toggleFavorite(gameId) {
  if (favoriteIds.has(gameId)) {
    favoriteIds.delete(gameId);
  } else {
    favoriteIds.add(gameId);
  }

  localStorage.setItem("kkb-favorites", JSON.stringify([...favoriteIds]));
  render();
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
    if (link.dataset.page === "categorias") {
      link.setAttribute("aria-expanded", String(name === "categorias" && categoryMenuOpen));
    }
  });
}

// Navegação principal e filtros de categoria compartilham o mesmo estado.
$$(".nav__link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    if (link.dataset.page === "categorias" && page === "categorias") {
      categoryMenuOpen = !categoryMenuOpen;
    } else {
      page = link.dataset.page;
      categoryMenuOpen = page === "categorias";
    }
    categoryFilter = page === "categorias" ? categoryFilter : null;

    if (page === "inicio") {
      query = "";
      elements.search.value = "";
      categoryFilter = null;
    }

    setActiveNav(page);
    render();
    if (page === "explorar") {
      elements.search.focus();
    }
  });
});

$$("[data-category]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    categoryFilter = link.dataset.category || null;
    page = "categorias";
    categoryMenuOpen = false;
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

elements.covers.addEventListener("wheel", (event) => {
  if (elements.covers.scrollWidth <= elements.covers.clientWidth) {
    return;
  }

  event.preventDefault();
  elements.covers.scrollLeft += event.deltaY || event.deltaX;

  if (loopWidth > 0) {
    if (elements.covers.scrollLeft <= 0) {
      elements.covers.scrollLeft += loopWidth;
    } else if (elements.covers.scrollLeft >= loopWidth * 2) {
      elements.covers.scrollLeft -= loopWidth;
    }
  }
}, { passive: false });

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
