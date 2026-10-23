// Catálogo dos jogos. Os IDs existentes são preservados para manter os favoritos salvos.
// cover e alt identificam a imagem; url abre o projeto; note informa requisitos para jogar.
// unavailable guarda o motivo de um link estar desativado, sem remover o jogo do catálogo.
const games = [
  { id: "dbz", title: "DBZ TK 3", category: "acao",
    cover: "assets/cover-dbz.png", alt: "Capa de Dragon Ball Z Budokai Tenkaichi 3", url: "" },
  { id: "pes", title: "PES 6", category: "esporte",
    cover: "assets/cover-pes.png", alt: "Capa de Pro Evolution Soccer 6", url: "https://pes6.optijuegos.net/" },
  { id: "gta", title: "GTA 5", category: "acao",
    cover: "assets/cover-gta.png", alt: "Capa de Grand Theft Auto V", url: "https://wasmarcade.com/gta-5" },
  { id: "cs", title: "CS 1.6 / Half-Life", category: "fps",
    cover: "assets/cover-cs-16.jpg", alt: "Capa de Counter-Strike 1.6", url: "https://x8bitrain.github.io/webXash/",
    note: "WebXash: use seus arquivos de Half-Life ou Counter-Strike." },
  { id: "bo2", title: "Black Ops 2", category: "fps",
    cover: "assets/cover-bo2.png", alt: "Capa de Call of Duty: Black Ops II", url: "https://vibeslops.luckeysystems.com/",
    unavailable: "O projeto está fora do ar." },
  { id: "street", title: "Fifa Street", category: "esporte",
    cover: "assets/cover-fifa-street.png", alt: "Capa de Fifa Street", url: "https://fifastreet2.fun/" },
  { id: "moon", title: "Moon Zombies", category: "fps",
    cover: "assets/cover-moon.webp", alt: "Arte do mapa Moon de Black Ops Zombies", coverFit: "contain", url: "https://vel.gg/bsz/moon" },
  { id: "vice-city", title: "GTA Vice City", category: "acao",
    cover: "assets/cover-gta-vice-city.png", alt: "Capa de Grand Theft Auto: Vice City", url: "https://joncodeofficial.github.io/gta-vice-city-wasm/",
    note: "Requer seus arquivos de GTA Vice City." },
  { id: "quake-3", title: "Quake III Arena", category: "fps",
    cover: "assets/cover-quake-3.jpg", alt: "Capa de Quake III Arena", url: "https://q3.pieter.com/" },
  { id: "bo1-zombies", title: "Black Ops Zombies", category: "fps",
    cover: "assets/cover-bo1.jpg", alt: "Arte de Call of Duty: Black Ops", url: "https://vel.gg/bsz" },
  { id: "half-life", title: "Half-Life", category: "fps",
    cover: "assets/cover-half-life.jpg", alt: "Capa de Half-Life", url: "https://pixelsuft.github.io/hl/",
    note: "Requer seus arquivos de Half-Life." },
  { id: "skate-3", title: "Skate 3 — Fan Game", category: "esporte",
    cover: "assets/cover-skate-3.jpg", alt: "Capa de Skate 3, referência do fan game", url: "https://skate.aaddpp.lol/",
    note: "Fan game: requer uma cópia própria convertida de Skate 3." },
  { id: "halo-ce", title: "Halo CE", category: "fps",
    cover: "assets/cover-halo-ce.jpg", alt: "Capa de Halo: Combat Evolved", url: "https://mitchellhynes.com/halo",
    note: "Combat Lab: requer sua imagem de disco de Halo CE." },
  { id: "diablo", title: "Diablo", category: "rpg",
    cover: "assets/cover-diablo.png", alt: "Capa do primeiro Diablo", url: "https://johnimril.github.io/diablo_web/",
    note: "Demo disponível. O jogo completo requer seu DIABDAT.MPQ." },
  { id: "mw2", title: "Modern Warfare 2", category: "fps",
    cover: "assets/cover-mw2.jpg", alt: "Arte de Call of Duty: Modern Warfare 2", url: "https://ovz-game-production.up.railway.app/",
    unavailable: "O projeto Open Victor Zulu está fora do ar." },
  { id: "kino", title: "Kino der Toten", category: "fps",
    cover: "assets/cover-kino.webp", alt: "Arte do mapa Kino der Toten de Black Ops Zombies", coverFit: "contain", url: "https://vel.gg/bsz/kino" },
  { id: "urban-terror", title: "Urban Terror", category: "fps",
    cover: "assets/cover-urban-terror.jpg", alt: "Arte de Urban Terror no navegador", coverFit: "contain", url: "https://ut.pieter.com/" },
  { id: "simpsons", title: "The Simpsons: Hit & Run", category: "acao",
    cover: "assets/cover-simpsons.png", alt: "Capa de The Simpsons: Hit & Run", url: "https://shar-wasm.cjoseph.workers.dev/?skipmovie" },
  { id: "quake-1", title: "Quake 1", category: "fps",
    cover: "assets/cover-quake-1.jpg", alt: "Capa de Quake", url: "https://q1.pieter.com/" },
  { id: "skate-rust", title: "Skate × Rust", category: "esporte",
    cover: "assets/cover-mw2.jpg", alt: "Arte de Modern Warfare 2, referência do mapa Rust", url: "https://global-terror.net/",
    unavailable: "O jogo não está disponível no site de origem." },
  { id: "halo-ce-mobile", title: "Halo CE Mobile", category: "fps",
    cover: "assets/cover-halo-ce.jpg", alt: "Capa de Halo: Combat Evolved, referência da versão mobile", url: "https://hcemobile.com/",
    note: "Requer sua imagem de disco de Halo CE para Xbox." },
  { id: "cheese-cube", title: "BO3 Cheese Cube", category: "fps",
    cover: "assets/cover-bo3.jpg", alt: "Arte de Call of Duty: Black Ops III", url: "https://cheese-cube.pages.dev/",
    unavailable: "O jogo não está mais disponível neste endereço." },
  { id: "wolfenstein", title: "Return to Castle Wolfenstein", category: "fps",
    cover: "assets/cover-wolfenstein.jpg", alt: "Capa de Return to Castle Wolfenstein", url: "https://rtcw.pieter.com/" },
  { id: "cs-surf", title: "CS Surf — Surfd", category: "fps",
    cover: "assets/cover-surf.png", alt: "Arte de Surfd com rampas de surf", coverFit: "contain", url: "https://surfd.net/" },
  { id: "quake-2", title: "Quake II", category: "fps",
    cover: "assets/cover-quake-2.jpg", alt: "Capa de Quake II", url: "https://q2.pieter.com/" },
  { id: "hedgewars", title: "Hedgewars", category: "estrategia",
    cover: "assets/cover-hedgewars.png", alt: "Captura de tela do jogo Hedgewars", coverFit: "contain", url: "https://webwars.link/",
    unavailable: "O endereço de WebWars está temporariamente indisponível." },
  { id: "wasm-arcade", title: "WASM Arcade", category: "arcade",
    cover: "assets/cover-wasm-arcade.png", alt: "Arte do portal WASM Arcade", coverFit: "contain", url: "https://wasmarcade.com/",
    note: "Coleção com GTA, Minecraft e outros jogos de navegador.", playLabel: "Explorar jogos" },
];

const $ = (selector) => document.querySelector(selector); // Cria o atalho $ para buscar o primeiro elemento HTML que corresponde a um seletor.
const $$ = (selector) => document.querySelectorAll(selector); // Cria o atalho $$ para buscar todos os elementos HTML que correspondem a um seletor.
const elements = { // Agrupa as referências dos elementos da página para reutilizá-las no código.
  page: $(".page"), // Busca e guarda o contêiner principal da página usando seu seletor CSS.
  covers: $("#covers"), // Busca e guarda a faixa onde os cards serão inseridos usando seu seletor CSS.
  categoryMenu: $("#category-menu"), // Busca e guarda o menu de categorias usando seu seletor CSS.
  search: $("#search"), // Busca e guarda o campo de busca usando seu seletor CSS.
  empty: $("#empty"), // Busca e guarda a mensagem exibida quando não há jogos usando seu seletor CSS.
  status: $("#status"), // Busca e guarda a mensagem de estado acima dos jogos usando seu seletor CSS.
  themeToggle: $("#theme-toggle"), // Busca e guarda o botão que alterna o tema usando seu seletor CSS.
  loginBtn: $("#login-btn"), // Busca e guarda o botão Entrar no cabeçalho usando seu seletor CSS.
  loginModal: $("#login-modal"), // Busca e guarda a janela de login usando seu seletor CSS.
  loginForm: $("#login-form"), // Busca e guarda o formulário de login usando seu seletor CSS.
  loginCancel: $("#login-cancel"), // Busca e guarda o botão Cancelar do login usando seu seletor CSS.
  newsletter: $("#newsletter"), // Busca e guarda o formulário de novidades usando seu seletor CSS.
  newsletterMsg: $("#newsletter-msg"), // Busca e guarda a mensagem de confirmação da newsletter usando seu seletor CSS.
}; // Encerra o objeto que guarda as referências dos elementos.

let selectedId = "gta"; // Guarda o jogo que fica no eixo central e começa destacando o GTA.
let query = ""; // Inicia o texto de busca vazio, sem restringir os jogos pelo nome.
let categoryFilter = null; // Inicia sem filtro de categoria; null representa a ausência de uma categoria escolhida.
let page = "inicio"; // Guarda a seção atual da navegação, começando pelo início.
let categoryMenuOpen = false; // Começa com o menu de categorias fechado.
let loopWidth = 0; // Guarda a largura de um conjunto de jogos para controlar a rolagem circular.
let carouselTargetIndex = null; // Guarda o destino de uma troca de jogo que ainda está em andamento.
let carouselFrame = 0; // Guarda o quadro agendado para atualizar o destaque central.
let carouselSettleTimer = 0; // Guarda a pausa que antecede o encaixe no centro.
let carouselPointerDown = false; // Evita encaixar a faixa no meio de um gesto de toque.
let carouselResizeFrame = 0; // Agrupa os recálculos feitos durante uma mudança de tamanho da janela.
let favoriteIds = new Set(JSON.parse(localStorage.getItem("kkb-favorites") || "[]")); // Lê os favoritos salvos no navegador, converte o JSON em uma lista e cria um Set para guardar IDs sem repetição; usa uma lista vazia quando não há dados.

// Aplica todos os filtros atuais antes de desenhar os cards.
function getVisibleGames() { // Declara a função que devolve apenas os jogos aprovados pelos filtros atuais.
  const normalizedQuery = query.trim().toLowerCase(); // Remove espaços nas pontas da busca e converte o texto para minúsculas.

  return games.filter((game) => { // Percorre o catálogo e monta uma nova lista apenas com os jogos que passarem pelo teste abaixo.
    const matchesQuery = !normalizedQuery || game.title.toLowerCase().includes(normalizedQuery); // Aceita o jogo se a busca estiver vazia ou se seu título contiver o texto procurado, sem diferenciar maiúsculas.
    const matchesCategory = !categoryFilter || game.category === categoryFilter; // Aceita o jogo se não houver filtro de categoria ou se a categoria dele for a escolhida.
    const matchesFavorites = page !== "favoritos" || favoriteIds.has(game.id); // Fora da seção Favoritos, aceita qualquer jogo; nela, exige que o ID esteja no conjunto de favoritos.
    return matchesQuery && matchesCategory && matchesFavorites; // Mantém o jogo na lista somente se os três testes forem verdadeiros.
  }); // Encerra a função de retorno e a chamada que recebeu essa função.
} // Encerra o bloco de código aberto anteriormente.

function render() { // Recria os cards preservando o jogo selecionado e seu alinhamento central.
  resetCarouselMotion(); // Cancela movimentos da lista anterior antes de trocar seus elementos.
  const visibleGames = getVisibleGames(); // Obtém os jogos que devem aparecer com a busca, a categoria e a seção atuais.
  elements.categoryMenu.hidden = !categoryMenuOpen; // Oculta o menu quando ele está fechado e o mostra quando está aberto.
  elements.covers.classList.toggle("is-category-view", page === "categorias"); // Mantém a identificação da seção atual.
  elements.covers.classList.toggle("has-center-focus", visibleGames.length > 0); // Ativa o eixo central quando existem jogos para mostrar.
  elements.covers.hidden = visibleGames.length === 0; // Evita deixar uma faixa vazia entre a mensagem e os controles.
  elements.covers.replaceChildren(); // Remove os cards antigos antes de montar a nova lista.
  elements.empty.hidden = visibleGames.length > 0; // Esconde a mensagem de lista vazia quando há pelo menos um jogo para mostrar.

  const shouldLoop = page !== "favoritos" && page !== "categorias" && visibleGames.length > 1; // Ativa a repetição dos cards fora de Favoritos e Categorias, desde que existam pelo menos dois jogos visíveis.
  const gamesToRender = shouldLoop // Começa a escolher a lista que será desenhada, verificando se a rolagem circular está ativa.
    ? [...visibleGames, ...visibleGames, ...visibleGames] // Quando há rolagem circular, junta três cópias da lista para permitir reposicionar a rolagem entre elas.
    : visibleGames; // Quando não há rolagem circular, usa somente a lista original dos jogos visíveis.

  gamesToRender.forEach((game) => { // Executa o bloco seguinte uma vez para cada jogo da lista que será exibida.
    const card = document.createElement("article"); // Cria um elemento article na memória para representar um card.
    const playable = Boolean(game.url) && !game.unavailable; // Desativa links retirados do ar ou ainda não cadastrados.
    const gameNote = game.unavailable || game.note || (game.url ? "" : "O link deste jogo será adicionado em breve.");

    card.className = "card"; // Define a classe card para aplicar os estilos do cartão.
    card.dataset.id = game.id; // Grava o ID do jogo no atributo data-id do card.
    card.dataset.title = game.title; // Guarda o título usado na descrição acessível das duas faces.
    card.tabIndex = 0; // Permite alcançar o card pela navegação com a tecla Tab.
    // Inicia uma string com o HTML interno do card; ${...} insere valores do jogo e do estado dos favoritos.
    card.innerHTML = `
      <div class="card__inner"> <!-- Agrupa a frente e o verso que giram juntos. -->
        <div class="card__front" aria-hidden="false"> <!-- Mantém a capa e os controles originais na frente. -->
          <figure class="card__art${game.coverFit === "contain" ? " card__art--contain" : ""}"> <!-- Preserva também artes horizontais sem cortar seus títulos. -->
            <img src="${game.cover}" alt="${game.alt}" loading="lazy" decoding="async" /> <!-- Carrega as capas conforme elas se aproximam da área visível. -->
          </figure> <!-- Fecha a área da capa. -->
          <h2 class="card__title">${game.title}</h2> <!-- Exibe o título do jogo em um cabeçalho h2. -->
          <div class="card__actions"> <!-- Agrupa o selo e o botão de favoritos do card. -->
            <small class="card__badge">SELECIONADO</small> <!-- Identifica o jogo em destaque; o novo CSS mostra este selo somente no card central. -->
            <button class="card__favorite" type="button" aria-label="${favoriteIds.has(game.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}" aria-pressed="${favoriteIds.has(game.id)}"> <!-- Cria o botão de favoritos e informa seu nome e estado às tecnologias assistivas. -->
              ${favoriteIds.has(game.id) ? "★ Favoritado" : "☆ Favoritar"} <!-- Escolhe o texto e a estrela do botão conforme o jogo já seja favorito ou não. -->
            </button> <!-- Fecha o botão de favoritos. -->
          </div> <!-- Fecha a área de ações do card. -->
        </div> <!-- Fecha a face da capa. -->
        <div class="card__back" aria-hidden="true" inert> <!-- Cria o verso inicialmente escondido e fora da navegação por teclado. -->
          <img class="card__back-logo" src="assets/logo-footer.png" alt="KKB Hub" /> <!-- Usa a marca existente como detalhe do verso. -->
          <h3 class="card__back-title">${game.title}</h3> <!-- Identifica o jogo que acabou de virar. -->
          ${gameNote ? `<p class="card__note">${gameNote}</p>` : ""} <!-- Explica os requisitos ou a indisponibilidade do jogo. -->
          <button class="card__play" type="button"${playable ? "" : " disabled"}>${playable ? game.playLabel || "Jogar" : game.unavailable ? "Indisponível" : "Em breve"}</button> <!-- Abre somente endereços disponíveis. -->
          <small class="card__back-hint">Clique novamente para voltar</small> <!-- Orienta como revelar a capa de novo. -->
        </div> <!-- Fecha o verso do card. -->
      </div> <!-- Fecha o suporte da rotação. -->
    `; // Insere as duas faces dentro da mesma moldura.
    setCardFlipped(card, false); // Começa com a capa visível e somente seus controles disponíveis.
    const activateCard = () => { // Compartilha a mesma ação entre clique, Enter e espaço.
      if (!card.classList.contains("is-active") || Math.abs(elements.covers.scrollLeft - getCardTarget(card)) > 2) { // Exige que o card esteja realmente encaixado no centro para virar.
        centerCard(card); // Um clique no lateral apenas o traz para o meio.
        return; // Aguarda um novo clique antes de virar o jogo selecionado.
      } // Fecha a seleção de um card lateral.
      setCardFlipped(card, !card.classList.contains("is-flipped")); // Um clique no centro vira o card; outro clique mostra a capa novamente.
    }; // Fecha a ação do card.
    card.addEventListener("click", activateCard); // Centraliza o card lateral ou abre o jogo central.
    card.addEventListener("focus", () => { // Acompanha também a navegação com a tecla Tab.
      if (carouselPointerDown) return; // Deixa o clique escolher o card sem antecipar uma abertura durante o foco do mouse.
      if (!card.classList.contains("is-active") && carouselTargetIndex !== [...elements.covers.children].indexOf(card)) centerCard(card); // Centraliza o foco sem repetir um movimento já solicitado pelas setas.
    }); // Fecha o acompanhamento do foco.
    card.addEventListener("keydown", (event) => { // Passa a ouvir teclas pressionadas enquanto o card está em foco.
      if (event.key === "Escape" && card.classList.contains("is-flipped")) { // Oferece uma forma rápida de voltar à capa pelo teclado.
        event.preventDefault(); // Mantém o Escape dedicado à face aberta deste card.
        setCardFlipped(card, false); // Revela novamente a capa.
        card.focus({ preventScroll: true }); // Mantém o foco no mesmo jogo sem deslocar o carrossel.
        return; // Encerra o tratamento dessa tecla.
      } // Fecha o retorno pelo Escape.
      if (event.target !== card) return; // Mantém o botão de favoritos responsável por suas próprias teclas.
      if (event.key === "Enter" || event.key === " ") { // Verifica se a tecla pressionada foi Enter ou a barra de espaço.
        event.preventDefault(); // Impede a ação padrão do navegador para este evento, como enviar um formulário ou rolar a página.
        activateCard(); // Usa a mesma seleção ou abertura disponível pelo clique.
      } // Encerra o bloco de código aberto anteriormente.
    }); // Encerra a função de retorno e a chamada que recebeu essa função.
    card.querySelector(".card__favorite").addEventListener("click", (event) => { // Busca o botão de favoritos deste card e define o que fazer quando ele for clicado.
      event.stopPropagation(); // Impede que o clique no botão também seja tratado como um clique no card.
      toggleFavorite(game.id); // Adiciona ou remove o ID deste jogo dos favoritos.
    }); // Encerra a função de retorno e a chamada que recebeu essa função.
    card.querySelector(".card__play").addEventListener("click", (event) => { // Abre o jogo pelo botão do verso.
      event.stopPropagation(); // Impede que o botão também dispare a virada do card.
      openGame(game); // Reutiliza a função original de abertura do jogo.
    }); // Fecha a ação do botão Jogar.
    elements.covers.appendChild(card); // Insere o card pronto na faixa de jogos da página.
  }); // Encerra a função de retorno e a chamada que recebeu essa função.

  loopWidth = shouldLoop ? visibleGames.length * getCardStep() : 0; // Ativa as cópias circulares somente nas seções que permitem repetição.
  syncCarouselLayout(); // Centraliza o jogo selecionado e recalcula as margens internas da faixa.
} // Encerra o bloco de código aberto anteriormente.

function toggleFavorite(gameId) { // Declara a função que alterna o estado de favorito do jogo identificado por gameId.
  if (favoriteIds.has(gameId)) { // Verifica se o jogo já está no conjunto de favoritos.
    favoriteIds.delete(gameId); // Remove o jogo do conjunto de favoritos.
  } else { // Fecha o bloco anterior e executa a alternativa quando a condição não for atendida.
    favoriteIds.add(gameId); // Adiciona o jogo ao conjunto de favoritos.
  } // Encerra o bloco de código aberto anteriormente.

  localStorage.setItem("kkb-favorites", JSON.stringify([...favoriteIds])); // Transforma os IDs favoritos em uma lista, converte-a em JSON e salva no navegador para futuras visitas.
  render(); // Atualiza a lista de cards na tela usando o estado atual da página.
} // Encerra o bloco de código aberto anteriormente.

function openGame(game) { // Declara a função que abre o endereço cadastrado para um jogo.
  selectedId = game.id; // Atualiza o identificador selecionado com o ID do jogo clicado.

  if (!game.url || game.unavailable) { // Evita abrir links ausentes ou que já não oferecem o jogo.
    elements.status.hidden = false; // Torna visível a área de mensagens acima dos cards.
    elements.status.textContent = game.unavailable || `O link de ${game.title} será adicionado em breve.`;
    render(); // Atualiza a lista de cards na tela usando o estado atual da página.
    return; // Encerra esta execução da função imediatamente.
  } // Encerra o bloco de código aberto anteriormente.

  // A classe anima a página antes da troca de endereço.
  elements.page.classList.add("is-leaving"); // Adiciona a classe que aciona a animação de saída definida no CSS.
  window.setTimeout(() => { // Agenda a execução do bloco seguinte após o intervalo indicado no fechamento da chamada.
    window.location.href = game.url; // Navega para o endereço do jogo na mesma aba.
  }, 350); // Encerra a função agendada e define a espera de 350 milissegundos para acompanhar a animação.
} // Encerra o bloco de código aberto anteriormente.

function setActiveNav(name) { // Declara a função que destaca a seção atual no menu de navegação.
  $$(".nav__link").forEach((link) => { // Busca todos os itens da navegação e executa o bloco para cada um deles.
    link.classList.toggle("is-active", link.dataset.page === name); // Aplica a classe de item ativo somente ao link cuja seção corresponde ao nome recebido.
    if (link.dataset.page === "categorias") { // Identifica o botão de categorias para atualizar seu estado de acessibilidade.
      link.setAttribute("aria-expanded", String(name === "categorias" && categoryMenuOpen)); // Informa às tecnologias assistivas se o menu de categorias está realmente aberto.
    } // Encerra o bloco de código aberto anteriormente.
  }); // Encerra a função de retorno e a chamada que recebeu essa função.
} // Encerra o bloco de código aberto anteriormente.

// Navegação principal e filtros de categoria compartilham o mesmo estado.
$$(".nav__link").forEach((link) => { // Busca todos os itens da navegação e executa o bloco para cada um deles.
  link.addEventListener("click", (event) => { // Define a ação que será executada quando este link ou botão de navegação for clicado.
    event.preventDefault(); // Impede a ação padrão do navegador para este evento, como enviar um formulário ou rolar a página.
    if (link.dataset.page === "categorias" && page === "categorias") { // Verifica se o usuário clicou em Categorias enquanto já estava nessa seção.
      categoryMenuOpen = !categoryMenuOpen; // Inverte o estado do menu: abre se estiver fechado e fecha se estiver aberto.
    } else { // Fecha o bloco anterior e executa a alternativa quando a condição não for atendida.
      page = link.dataset.page; // Atualiza a seção atual com o valor do atributo data-page do item clicado.
      categoryMenuOpen = page === "categorias"; // Abre o menu somente ao entrar na seção Categorias.
    } // Encerra o bloco de código aberto anteriormente.
    categoryFilter = page === "categorias" ? categoryFilter : null; // Mantém a categoria escolhida em Categorias e remove esse filtro nas outras seções.

    if (page === "inicio") { // Executa a limpeza dos filtros quando o usuário volta ao início.
      query = ""; // Limpa o texto de busca guardado no estado do JavaScript.
      elements.search.value = ""; // Limpa também o texto visível no campo de busca.
      categoryFilter = null; // Remove qualquer categoria selecionada.
    } // Encerra o bloco de código aberto anteriormente.

    setActiveNav(page); // Atualiza o destaque do menu e o estado acessível do botão de categorias.
    render(); // Atualiza a lista de cards na tela usando o estado atual da página.
    if (page === "explorar") { // Verifica se a seção escolhida é Explorar.
      elements.search.focus(); // Coloca o foco no campo de busca para permitir digitar imediatamente.
    } // Encerra o bloco de código aberto anteriormente.
  }); // Encerra a função de retorno e a chamada que recebeu essa função.
}); // Encerra a função de retorno e a chamada que recebeu essa função.

$$("[data-category]").forEach((link) => { // Busca os links que possuem data-category, tanto no menu quanto no rodapé, e percorre todos.
  link.addEventListener("click", (event) => { // Define a ação que será executada quando este link ou botão de navegação for clicado.
    event.preventDefault(); // Impede a ação padrão do navegador para este evento, como enviar um formulário ou rolar a página.
    categoryFilter = link.dataset.category || null; // Lê a categoria do link; se o valor estiver vazio, usa null para mostrar todas.
    page = "categorias"; // Muda o estado da navegação para a seção Categorias.
    categoryMenuOpen = false; // Fecha o menu após a escolha de uma categoria.
    setActiveNav(page); // Atualiza o destaque do menu e o estado acessível do botão de categorias.
    render(); // Atualiza a lista de cards na tela usando o estado atual da página.
  }); // Encerra a função de retorno e a chamada que recebeu essa função.
}); // Encerra a função de retorno e a chamada que recebeu essa função.

elements.search.addEventListener("input", () => { // Define o que acontece sempre que o usuário altera o texto da busca.
  query = elements.search.value; // Copia o texto atual do campo para o filtro de busca.
  page = "explorar"; // Define Explorar como a seção atual durante a busca.
  setActiveNav(page); // Atualiza o destaque do menu e o estado acessível do botão de categorias.
  render(); // Atualiza a lista de cards na tela usando o estado atual da página.
}); // Encerra a função de retorno e a chamada que recebeu essa função.

function getCardStep() { // Calcula o passo usando a largura real de um card e o intervalo do CSS.
  const firstCard = elements.covers.firstElementChild; // Obtém uma referência de tamanho sem usar a escala visual.
  if (!firstCard) return 0; // Não calcula um passo quando não existem jogos.
  return firstCard.offsetWidth + (parseFloat(getComputedStyle(elements.covers).columnGap) || 0); // Inclui o espaço entre os cards.
} // Fecha o cálculo do passo.

function getCardTarget(card) { // Calcula a rolagem que coloca este card no eixo central da faixa.
  return card.offsetLeft + card.offsetWidth / 2 - elements.covers.clientWidth / 2; // Alinha o centro do card ao centro da área visível.
} // Fecha o cálculo da posição central.

function getNearestCardIndex() { // Identifica qual card está mais próximo do centro da tela.
  const center = elements.covers.scrollLeft + elements.covers.clientWidth / 2; // Localiza o eixo central dentro do conteúdo rolável.
  let nearestIndex = -1; // Começa sem um card selecionado.
  let nearestDistance = Infinity; // Permite que a primeira distância encontrada seja a menor.
  [...elements.covers.children].forEach((card, index) => { // Mede cada card atualmente desenhado.
    const distance = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center); // Mede a distância entre os dois centros.
    if (distance < nearestDistance) { nearestDistance = distance; nearestIndex = index; } // Guarda o card mais próximo.
  }); // Fecha a busca pelo centro.
  return nearestIndex; // Devolve o índice encontrado, ou -1 se a lista estiver vazia.
} // Fecha a identificação do card central.

function updateCenteredCard() { // Aplica o destaque somente ao card mais próximo do eixo central.
  const cards = [...elements.covers.children]; // Obtém os cards atuais da faixa.
  const nearestIndex = getNearestCardIndex(); // Encontra um único jogo para destacar.
  if (nearestIndex < 0) return; // Ignora uma lista vazia.
  cards.forEach((card, index) => { // Mantém todos os laterais no mesmo estado normal.
    const active = index === nearestIndex; // Seleciona apenas o card que está no meio.
    card.classList.toggle("is-active", active); // Ativa o tamanho maior e o brilho somente nesse card.
    if (active) card.setAttribute("aria-current", "true"); else card.removeAttribute("aria-current"); // Informa a seleção atual sem marcar os vizinhos.
    if (!active && card.classList.contains("is-flipped")) setCardFlipped(card, false); // Volta à capa quando um card deixa o centro.
  }); // Fecha a atualização do destaque.
  selectedId = cards[nearestIndex].dataset.id; // Preserva a seleção lógica do jogo central.
} // Fecha o destaque exclusivo do centro.

function setCardFlipped(card, flipped) { // Alterna entre a capa e o verso de um card.
  card.classList.toggle("is-flipped", flipped); // Liga ou desliga a rotação das duas faces.
  const front = card.querySelector(".card__front"); // Obtém a face da capa e dos favoritos.
  const back = card.querySelector(".card__back"); // Obtém o verso com a marca e o botão Jogar.
  front.inert = flipped; back.inert = !flipped; // Mantém somente a face visível disponível ao teclado e ao mouse.
  front.setAttribute("aria-hidden", String(flipped)); // Esconde a frente das tecnologias assistivas quando ela está de costas.
  back.setAttribute("aria-hidden", String(!flipped)); // Expõe o verso somente enquanto ele estiver visível.
  card.setAttribute("aria-label", `${card.dataset.title}. ${flipped ? "Verso do card. Clique ou pressione Enter para voltar." : "Clique ou pressione Enter para virar o card central."}`); // Descreve a interação de acordo com a face atual.
} // Fecha a troca de face.


function resetCarouselMotion() { // Cancela movimentos antigos antes de recriar ou redimensionar a faixa.
  clearTimeout(carouselSettleTimer); // Cancela o encaixe agendado para a lista anterior.
  cancelAnimationFrame(carouselFrame); carouselFrame = 0; // Cancela a atualização visual que ficou pendente.
  carouselTargetIndex = null; // Libera o destino da navegação anterior.
  elements.covers.scrollTo({ left: elements.covers.scrollLeft, behavior: "instant" }); // Interrompe uma rolagem suave que ainda esteja em andamento.
} // Fecha a limpeza do movimento anterior.

function centerCard(card, animate = true) { // Move um card específico até o eixo central.
  if (!card) return; // Não tenta centralizar uma referência ausente.
  elements.covers.querySelectorAll(".card.is-flipped").forEach(other => { if (other !== card) setCardFlipped(other, false); }); // Fecha o verso antes de mover esse jogo para a lateral.
  clearTimeout(carouselSettleTimer); // Evita que um encaixe antigo dispute com o novo destino.
  const target = getCardTarget(card); // Calcula a posição exata de centralização.
  carouselTargetIndex = [...elements.covers.children].indexOf(card); // Guarda o destino para aceitar várias setas em sequência.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; // Respeita a preferência por menos movimento.
  elements.covers.scrollTo({ left: target, behavior: animate && !reduceMotion ? "smooth" : "instant" }); // Centraliza com animação ou imediatamente, conforme o contexto.
  updateCenteredCard(); // Atualiza o destaque também nos movimentos instantâneos.
  if (Math.abs(elements.covers.scrollLeft - target) <= 1) carouselTargetIndex = null; // Libera imediatamente um destino que já foi alcançado.
} // Fecha a centralização de um card.

function syncCarouselLayout() { // Mantém o mesmo eixo central em qualquer largura de tela.
  const cards = [...elements.covers.children]; // Obtém os cards já montados.
  if (!cards.length) return; // Aguarda uma lista com jogos para medir o layout.
  const inset = Math.max(0, (elements.covers.clientWidth - cards[0].offsetWidth) / 2); // Calcula o espaço necessário para centralizar até o primeiro e o último card.
  elements.covers.style.setProperty("--carousel-inset", `${inset}px`); // Atualiza as margens internas usadas pelo CSS.
  const visibleGames = getVisibleGames(); // Obtém a sequência lógica dos jogos, sem as cópias de rolagem.
  const selectedIndex = Math.max(0, visibleGames.findIndex(game => game.id === selectedId)); // Mantém a seleção quando ela ainda existe no filtro atual.
  const copyOffset = loopWidth > 0 ? visibleGames.length : 0; // Prefere a cópia do meio quando existe rolagem circular.
  if (loopWidth > 0) loopWidth = visibleGames.length * getCardStep(); // Atualiza a largura do ciclo após uma mudança no tamanho dos cards.
  centerCard(cards[copyOffset + selectedIndex], false); // Coloca o jogo selecionado no centro exato, sem uma animação de reposicionamento.
} // Fecha o ajuste do layout.

function settleCarousel() { // Encaixa a faixa quando a rolagem termina.
  if (carouselPointerDown) return; // Espera o usuário terminar o gesto de arrastar.
  const cards = [...elements.covers.children]; // Obtém a lista atual para evitar referências de uma renderização anterior.
  let index = getNearestCardIndex(); // Busca o card que terminou mais próximo do eixo.
  if (index < 0) return; // Não tenta encaixar uma lista vazia.
  carouselTargetIndex = null; // Libera o destino de uma animação que já terminou.
  if (loopWidth > 0) { // Mantém a seleção nas cópias centrais da sequência circular.
    const count = getVisibleGames().length; // Conta os jogos reais deste ciclo.
    const normalizedIndex = count + index % count; // Encontra a cópia central do mesmo jogo.
    if (normalizedIndex !== index) { // Reposiciona somente quando o card ficou em uma cópia externa.
      elements.covers.scrollTo({ left: elements.covers.scrollLeft + (normalizedIndex - index) * getCardStep(), behavior: "instant" }); // Troca de cópia sem mudar a imagem percebida.
      index = normalizedIndex; // Passa a usar o card equivalente da cópia central.
    } // Fecha a troca de cópia.
  } // Fecha o ajuste da rolagem circular.
  if (Math.abs(elements.covers.scrollLeft - getCardTarget(cards[index])) > 1) centerCard(cards[index]); // Completa o movimento até o centro exato.
  else updateCenteredCard(); // Atualiza o destaque quando o card já está encaixado.
} // Fecha o encaixe final.

function scheduleCarouselSnap() { // Agenda o encaixe após o último movimento do usuário.
  clearTimeout(carouselSettleTimer); // Evita acumular vários encaixes durante a mesma rolagem.
  carouselSettleTimer = window.setTimeout(settleCarousel, 160); // Aguarda uma pausa curta antes de centralizar.
} // Fecha o agendamento do encaixe.

function moveCarousel(direction, isRepeatedKey = false) { // Passa para o jogo anterior ou seguinte mantendo o centro fixo.
  const cards = [...elements.covers.children]; // Obtém os cards atuais da faixa.
  if (!cards.length) return; // Não navega quando os filtros deixam a lista vazia.
  let index = carouselTargetIndex ?? getNearestCardIndex(); // Continua a partir do último destino, mesmo com várias teclas rápidas.
  if (loopWidth > 0) { // Mantém espaço para navegar indefinidamente nos dois sentidos.
    const count = getVisibleGames().length; // Obtém o tamanho da sequência sem cópias.
    const normalizedIndex = count + index % count; // Prefere a cópia central do destino atual.
    if (normalizedIndex !== index) { // Troca de cópia quando necessário antes do próximo passo.
      elements.covers.scrollTo({ left: elements.covers.scrollLeft + (normalizedIndex - index) * getCardStep(), behavior: "instant" }); // Mantém a mesma posição visual ao trocar de cópia.
      index = normalizedIndex; // Continua a navegação pelo índice equivalente.
    } // Fecha a normalização do destino.
  } // Fecha o preparo do ciclo.
  const target = cards[Math.max(0, Math.min(cards.length - 1, index + direction))]; // Escolhe o próximo jogo sem ultrapassar os limites de uma lista sem loop.
  const moveFocus = elements.covers.contains(document.activeElement); // Verifica se o usuário está navegando pelo teclado dentro dos cards.
  centerCard(target, !isRepeatedKey); // Centraliza o próximo jogo e mantém a resposta rápida ao segurar a tecla.
  if (moveFocus) target.focus({ preventScroll: true }); // Faz o foco acompanhar a seleção sem provocar uma segunda rolagem nativa.
} // Fecha a troca de jogo.

document.addEventListener("keydown", (event) => { // Mantém o controle do carrossel pelas setas horizontais.
  if (event.defaultPrevented || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return; // Trata apenas as setas ainda disponíveis.
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return; // Preserva os atalhos e a seleção de texto.
  if (event.target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return; // Mantém o uso normal das setas nos campos de edição.
  if (elements.loginModal.open || categoryMenuOpen) return; // Não move os jogos enquanto outro painel estiver em uso.
  if (!elements.covers.firstElementChild || elements.covers.scrollWidth <= elements.covers.clientWidth) return; // Não interfere em uma faixa sem rolagem.
  event.preventDefault(); // Evita que a rolagem nativa dispute com o encaixe central.
  moveCarousel(event.key === "ArrowRight" ? 1 : -1, event.repeat); // Move exatamente um jogo para o lado escolhido.
}); // Fecha a navegação pelas setas.

elements.covers.addEventListener("scroll", () => { // Acompanha movimentos de teclado, mouse e toque.
  if (!carouselFrame) carouselFrame = requestAnimationFrame(() => { carouselFrame = 0; updateCenteredCard(); }); // Atualiza a profundidade no máximo uma vez por quadro.
  scheduleCarouselSnap(); // Encaixa o card mais próximo quando o movimento termina.
}, { passive: true }); // Não bloqueia os gestos nativos de rolagem.

elements.covers.addEventListener("wheel", (event) => { // Mantém a roda do mouse como controle horizontal.
  if (event.ctrlKey || elements.covers.scrollWidth <= elements.covers.clientWidth) return; // Preserva o gesto de zoom e não intercepta listas que já cabem na tela.
  event.preventDefault(); // Evita rolar a página verticalmente ao explorar os jogos.
  carouselTargetIndex = null; // Permite ao mouse interromper um destino anterior do teclado.
  elements.covers.scrollBy({ left: event.deltaY || event.deltaX, behavior: "instant" }); // Move a faixa de acordo com o gesto do mouse ou do touchpad.
  scheduleCarouselSnap(); // Encaixa o jogo no eixo central após o gesto.
}, { passive: false }); // Permite bloquear a rolagem vertical padrão neste controle.

elements.covers.addEventListener("pointerdown", () => { carouselPointerDown = true; clearTimeout(carouselSettleTimer); }); // Aguarda o fim de um gesto antes de encaixar os cards.
function finishCarouselPointer(event) { // Finaliza gestos mesmo se o ponteiro sair da faixa.
  if (event.type === "pointercancel" && event.pointerType === "touch") return; // Aguarda o touchend quando o navegador assume uma rolagem nativa por toque.
  if (!carouselPointerDown) return; // Ignora eventos iniciados em outras partes da página.
  carouselPointerDown = false; // Libera o encaixe depois do toque ou clique.
  scheduleCarouselSnap(); // Agenda a centralização após o fim do gesto.
} // Fecha a finalização do gesto.
window.addEventListener("pointerup", finishCarouselPointer); // Detecta quando o usuário solta o ponteiro.
window.addEventListener("pointercancel", finishCarouselPointer); // Recupera o encaixe se o navegador cancelar o gesto.
window.addEventListener("touchend", finishCarouselPointer, { passive: true }); // Finaliza o gesto de toque mesmo depois de uma rolagem nativa.
window.addEventListener("touchcancel", finishCarouselPointer, { passive: true }); // Libera o encaixe se o sistema interromper o toque.
window.addEventListener("resize", () => { // Recalcula o eixo quando a janela ou a orientação muda.
  cancelAnimationFrame(carouselResizeFrame); // Evita recalcular várias vezes dentro do mesmo quadro.
  carouselResizeFrame = requestAnimationFrame(() => { resetCarouselMotion(); syncCarouselLayout(); }); // Reposiciona o jogo selecionado no novo centro.
}); // Fecha o ajuste de tamanho.


elements.themeToggle.addEventListener("click", () => { // Define a ação do clique no botão que alterna o tema.
  const isLight = elements.page.dataset.theme === "light"; // Verifica se o atributo data-theme da página indica o tema claro.
  elements.page.dataset.theme = isLight ? "dark" : "light"; // Troca o atributo data-theme entre dark e light, acionando as regras de cor do CSS.
}); // Encerra a função de retorno e a chamada que recebeu essa função.

elements.loginBtn.addEventListener("click", () => elements.loginModal.showModal()); // Abre a janela modal de login ao clicar no botão Entrar.
elements.loginCancel.addEventListener("click", () => elements.loginModal.close()); // Fecha a janela de login quando o usuário clica em Cancelar.

elements.loginForm.addEventListener("submit", (event) => { // Define a ação executada ao enviar o formulário de login.
  event.preventDefault(); // Impede a ação padrão do navegador para este evento, como enviar um formulário ou rolar a página.
  const email = new FormData(elements.loginForm).get("email"); // Lê o valor do campo chamado email dentro do formulário de login.
  const userName = String(email).split("@")[0]; // Converte o e-mail em texto e usa a parte antes de @ como nome; este exemplo não autentica em um servidor.
  elements.loginBtn.lastChild.textContent = ` ${userName}`; // Substitui o último nó de texto do botão Entrar pelo nome obtido do e-mail.
  elements.loginModal.close(); // Fecha a janela de login após atualizar o texto do botão.
}); // Encerra a função de retorno e a chamada que recebeu essa função.

elements.newsletter.addEventListener("submit", (event) => { // Define a ação executada ao enviar o formulário de novidades.
  event.preventDefault(); // Impede a ação padrão do navegador para este evento, como enviar um formulário ou rolar a página.
  const email = new FormData(elements.newsletter).get("email"); // Lê o e-mail digitado no formulário da newsletter.
  elements.newsletterMsg.hidden = false; // Torna visível a mensagem de confirmação abaixo do formulário.
  elements.newsletterMsg.textContent = `Pronto. Novidades vão para ${email}.`; // Mostra uma confirmação com o e-mail informado; este código apenas exibe a mensagem, sem enviar ou cadastrar em um servidor.
  elements.newsletter.reset(); // Limpa os campos da newsletter, restaurando seus valores iniciais.
}); // Encerra a função de retorno e a chamada que recebeu essa função.

render(); // Atualiza a lista de cards na tela usando o estado atual da página.
