# KKB Hub — Game Labs

Este projeto é um hub de jogos feito com HTML, CSS e JavaScript puro. Os cards são gerados automaticamente a partir de uma lista de jogos no arquivo `js/main.js`.

## Acesse o site

Você pode acessar o KKB Hub diretamente pelo GitHub Pages:

**[Abrir o KKB Hub](https://bryydev.github.io/KKB-GameHub/)**

Não é necessário baixar o projeto para navegar pelos jogos. O README serve como um guia para quem quiser sugerir alterações, colaborar com o projeto ou ajudar a manter a página atualizada.

## Criadores e ideia do projeto

O KKB Hub foi criado por:

- [Kevin](https://github.com/kevinoliveiraz)
- [Kaique](https://github.com/kaiquecyber)
- [Bryant](https://github.com/BryyDev)

Os três são sócios da ideia de preservar e reunir jogos antigos que podem ser executados pela web, facilitando o acesso a títulos clássicos em um único hub.

## Projeto aberto a colaboradores

Este é um projeto livre e aberto para colaboradores. Você pode ajudar adicionando jogos, corrigindo informações, melhorando o visual, corrigindo problemas ou enviando sugestões.

### Como solicitar uma alteração na página

Para pedir a inclusão de um jogo ou qualquer outra mudança:

1. Faça um fork deste repositório.
2. Edite os arquivos seguindo as instruções deste guia.
3. Teste a alteração no navegador.
4. Envie um **pull request** para o repositório principal.
5. Descreva claramente o que foi alterado e, no caso de um jogo, informe o nome, a categoria, a imagem e o link usado.

Depois da análise, a alteração poderá ser adicionada à página oficial. Se você não souber fazer a alteração diretamente, também pode abrir uma issue com a sua sugestão ou solicitação.

Gostaríamos muito de receber feedbacks sobre a página, os jogos disponíveis e novas ideias para o projeto. Toda contribuição é bem-vinda.

## Estrutura do projeto

```text
game-labs/
├── index.html           # Estrutura semântica da página
├── README.md            # Este tutorial
├── assets/              # Imagens, logos e ícones
│   ├── cover-bo2.png
│   ├── cover-cs.png
│   ├── cover-dbz.png
│   ├── cover-gta.png
│   ├── cover-pes.png
│   └── ...
├── css/
│   └── styles.css       # Layout, cores, cards, efeitos e responsividade
└── js/
    └── main.js          # Jogos, filtros e interações
```

## Como editar e testar o projeto

Para fazer alterações, clone o repositório ou trabalhe em um fork. Depois, abra o arquivo `index.html` no navegador para conferir o resultado.

Para uma experiência melhor durante o desenvolvimento, use o **Live Server** no VS Code:

1. Instale a extensão **Live Server**.
2. Clique com o botão direito em `index.html`.
3. Escolha **Open with Live Server**.
4. O navegador abrirá o endereço local do projeto.

## Como adicionar um novo jogo

Os cards não são escritos manualmente no `index.html`. Eles são criados pelo JavaScript usando a lista `games` no início de `js/main.js`.

### 1. Adicione a imagem

Coloque a capa dentro da pasta `assets/`.

Exemplo:

```text
assets/cover-minecraft.png
```

Prefira:

- Formato `PNG` ou `JPG`.
- Nomes sem espaços e sem acentos.
- Imagens com boa resolução.
- Um nome que identifique claramente o jogo.

### 2. Adicione o jogo em `js/main.js`

Inclua um novo objeto dentro da constante `games`:

```js
{
  id: "minecraft",
  title: "Minecraft",
  category: "acao",
  cover: "assets/cover-minecraft.png",
  alt: "Capa do jogo Minecraft",
  url: "https://exemplo.com/minecraft",
},
```

O objeto deve ser separado do próximo por uma vírgula.

### Campos obrigatórios

| Campo | Descrição |
| --- | --- |
| `id` | Identificador único do jogo. Use letras, números e hífens. |
| `title` | Nome exibido no card. |
| `category` | Categoria usada no filtro. |
| `cover` | Caminho da imagem dentro de `assets`. |
| `alt` | Descrição acessível da imagem. |
| `url` | Endereço aberto quando o card for clicado. |

### Exemplo completo

```js
const games = [
  {
    id: "dbz",
    title: "DBZ TK 3",
    category: "acao",
    cover: "assets/cover-dbz.png",
    alt: "Capa de Dragon Ball Z Budokai Tenkaichi 3",
    url: "https://exemplo.com/dbz",
  },
  {
    id: "minecraft",
    title: "Minecraft",
    category: "acao",
    cover: "assets/cover-minecraft.png",
    alt: "Capa do jogo Minecraft",
    url: "https://exemplo.com/minecraft",
  },
];
```

Depois de salvar, atualize o navegador. O novo card aparecerá automaticamente.

## Como colocar o link do jogo

O link é definido no campo `url`:

```js
url: "https://meusite.com/jogos/minecraft",
```

Ao clicar no card:

1. O jogo é selecionado.
2. A página recebe uma transição suave de saída.
3. Depois de aproximadamente `350ms`, o navegador acessa o valor de `url`.

### Link para um arquivo local

Se o jogo estiver dentro do próprio projeto, use um caminho relativo:

```js
url: "jogos/minecraft/index.html",
```

Estrutura esperada:

```text
game-labs/
├── jogos/
│   └── minecraft/
│       └── index.html
```

### Card sem link

Enquanto o jogo ainda não tiver uma página, deixe o campo vazio:

```js
url: "",
```

Ao clicar, o site exibirá uma mensagem pedindo para adicionar o link.

## Como criar categorias

Uma categoria é formada por duas partes:

1. O valor `category` no jogo, em `js/main.js`.
2. O link com `data-category` no `index.html`.

### 1. Defina a categoria no jogo

```js
{
  id: "mario-kart",
  title: "Mario Kart",
  category: "corrida",
  cover: "assets/cover-mario-kart.png",
  alt: "Capa do jogo Mario Kart",
  url: "jogos/mario-kart/index.html",
},
```

### 2. Adicione o filtro no `index.html`

No menu de categorias do rodapé, adicione:

```html
<a href="#categorias" data-category="corrida">Corrida</a>
```

O valor deve ser exatamente igual nos dois arquivos:

```js
category: "corrida"
```

```html
data-category="corrida"
```

Maiúsculas, acentos e espaços diferentes podem fazer o filtro não funcionar.

## Categorias existentes

As categorias usadas atualmente são:

```text
acao
esporte
fps
corrida
```

Você pode criar qualquer outra, por exemplo:

```text
rpg
aventura
terror
plataforma
estrategia
```

## Como editar um jogo existente

Encontre o objeto do jogo em `js/main.js` e altere os campos necessários:

```js
{
  id: "gta",
  title: "GTA V",
  category: "acao",
  cover: "assets/cover-gta-nova.png",
  alt: "Capa atualizada de Grand Theft Auto V",
  url: "jogos/gta/index.html",
},
```

Não altere o `id` sem necessidade. O `id` é usado para identificar o card selecionado e o jogo exibido na seção de favoritos.

## Como excluir um jogo

Remova o objeto inteiro da lista `games`:

```js
{
  id: "minecraft",
  title: "Minecraft",
  category: "acao",
  cover: "assets/cover-minecraft.png",
  alt: "Capa do jogo Minecraft",
  url: "jogos/minecraft/index.html",
},
```

Depois, salve e atualize o navegador.

## Como alterar o visual dos cards

Os estilos dos cards estão em `css/styles.css`, dentro da hierarquia:

```css
main.page {
  & > .hero {
    & .covers {
      & .card {
        /* estilos do card */
      }
    }
  }
}
```

### Alterar tamanho dos cards

Procure:

```css
& .card {
  flex: 0 0 270px;
  height: 414px;
}
```

Exemplo:

```css
& .card {
  flex: 0 0 300px;
  height: 450px;
}
```

O card selecionado possui um tamanho diferente:

```css
&.is-featured {
  flex-basis: 304px;
  height: 466px;
}
```

### Alterar a borda e o brilho

```css
border: 2px solid var(--accent);
box-shadow: 0 0 28px 1px var(--glow);
```

As cores principais ficam nas variáveis do início de `main.page`:

```css
main.page {
  --accent: #28e9af;
  --accent-soft: #4cf8c3;
  --glow: rgb(21 247 174 / 68%);
}
```

Altere essas variáveis para atualizar o visual sem precisar editar cada componente.

### Alterar a animação do card

O movimento ao passar o mouse está neste trecho:

```css
&:hover {
  transform: translateY(-6px);
}
```

Para aumentar o movimento:

```css
&:hover {
  transform: translateY(-12px) scale(1.02);
}
```

O tempo da transição fica na regra principal do card:

```css
transition: transform 0.2s ease, flex-basis 0.2s ease, height 0.2s ease;
```

Exemplo mais lento:

```css
transition: transform 0.4s ease, flex-basis 0.4s ease, height 0.4s ease;
```

## Como alterar a transição entre páginas

A transição de saída usa a classe `.is-leaving` em `main.page`:

```css
main.page {
  transition: opacity 0.35s ease, transform 0.35s ease;

  &.is-leaving {
    opacity: 0;
    transform: translateY(-12px);
  }
}
```

No JavaScript, a classe é aplicada antes da troca de endereço:

```js
elements.page.classList.add("is-leaving");

window.setTimeout(() => {
  window.location.href = game.url;
}, 350);
```

Se alterar `0.35s` no CSS, altere também `350` no JavaScript para manter os tempos iguais.

## Como alterar o fundo da área principal

O fundo da área de jogos fica nos pseudo-elementos de `.hero`:

```css
&::before {
  background:
    radial-gradient(...),
    linear-gradient(...);
}

&::after {
  background: repeating-linear-gradient(...);
}
```

Você pode:

- Trocar as cores dos gradientes.
- Aumentar ou diminuir a intensidade usando `rgb(... / porcentagem)`.
- Alterar a direção do `linear-gradient`.
- Remover uma camada se não quiser aquele efeito.

## Como alterar o tema claro e escuro

As cores padrão ficam em `main.page`. O tema claro é ativado quando o elemento recebe `data-theme="light"`:

```css
main.page {
  &[data-theme="light"] {
    --bg: #e8f4f6;
    --text: #05212a;
  }
}
```

O botão de tema está no `index.html`:

```html
<button class="theme" type="button" id="theme-toggle">
```

O JavaScript alterna entre os valores `light` e `dark`:

```js
const isLight = elements.page.dataset.theme === "light";
elements.page.dataset.theme = isLight ? "dark" : "light";
```

## Como alterar textos e navegação

Os textos do cabeçalho e rodapé estão em `index.html`. Você pode editar os nomes diretamente:

```html
<a href="#categorias" data-category="fps">FPS</a>
```

Se o link for uma categoria, mantenha o atributo `data-category`. Esse atributo é usado pelo JavaScript para ativar o filtro.

Para adicionar uma nova opção à navegação principal, use `data-page`:

```html
<a href="#novidade" data-page="novidade">
  Novidades
</a>
```

Nesse caso, também será necessário adicionar a lógica correspondente no `main.js`, porque as páginas atuais são `inicio`, `explorar`, `categorias` e `favoritos`.

## Como funciona a busca

A busca fica no `index.html`:

```html
<input id="search" type="search" placeholder="Buscar jogos" />
```

No JavaScript, o texto digitado é comparado com o título:

```js
const matchesQuery =
  !normalizedQuery || game.title.toLowerCase().includes(normalizedQuery);
```

Atualmente, a busca procura apenas pelo nome do jogo. Para procurar também por categoria, altere a lógica em `getVisibleGames()`:

```js
const searchableText = `${game.title} ${game.category}`.toLowerCase();
const matchesQuery =
  !normalizedQuery || searchableText.includes(normalizedQuery);
```

## Como funciona a seleção e os favoritos

O jogo selecionado é controlado por:

```js
let selectedId = "gta";
```

Para escolher outro jogo inicialmente destacado, troque `gta` pelo `id` correspondente:

```js
let selectedId = "dbz";
```

A página de favoritos atualmente mostra o jogo selecionado. Isso é uma implementação simples, não uma lista permanente de favoritos. Para criar favoritos reais, seria necessário armazenar vários `id`s, por exemplo usando `localStorage`.

## Como corrigir problemas comuns

### A imagem não aparece

Confira:

1. Se o arquivo realmente está dentro de `assets/`.
2. Se o nome está escrito exatamente igual.
3. Se a extensão está correta (`.png`, `.jpg` etc.).
4. Se o caminho começa com `assets/`.

Exemplo correto:

```js
cover: "assets/cover-minecraft.png",
```

### O card não aparece

Confira:

- Se o objeto está dentro do array `games`.
- Se há uma vírgula entre os objetos.
- Se todas as chaves usam aspas corretamente.
- Se o JavaScript não possui erro de sintaxe.

No terminal, dentro da pasta do projeto, execute:

```powershell
node --check .\js\main.js
```

### O clique não abre o jogo

Confira o campo `url`:

```js
url: "https://exemplo.com/jogo",
```

Se ele estiver vazio, o sistema não navega e mostra uma mensagem.

### A categoria não filtra

Compare estes dois valores:

```js
category: "terror"
```

```html
data-category="terror"
```

Eles precisam ser idênticos, inclusive em maiúsculas e acentos.

### O estilo não aparece

Verifique se o seletor está dentro de `main.page`. Este projeto usa CSS nesting:

```css
main.page {
  & > .hero {
    & .covers {
      & .card {
        /* novo estilo */
      }
    }
  }
}
```

Evite criar seletores soltos fora de `main.page`.

### O navegador não entende nesting CSS

Use uma versão atualizada do Chrome, Edge, Firefox ou Safari. Se o projeto precisar funcionar em navegadores antigos, será necessário usar um compilador como Sass ou PostCSS para transformar nesting em CSS tradicional.

## Validação antes de publicar

Antes de considerar uma alteração pronta:

1. Abra o site no navegador.
2. Teste a busca.
3. Teste cada categoria.
4. Clique no card e confira o link.
5. Teste o botão de tema.
6. Abra e feche o login.
7. Teste o formulário da newsletter.
8. Redimensione a janela para verificar o celular.
9. Abra o console do navegador e procure erros.
10. Execute a validação do JavaScript:

```powershell
node --check .\js\main.js
```

Também é possível verificar problemas de formatação no Git:

```powershell
git diff --check
```

## Fluxo recomendado para adicionar um jogo

Use esta sequência:

1. Escolha e salve a imagem em `assets/`.
2. Copie um objeto existente no array `games`.
3. Troque `id`, `title`, `category`, `cover`, `alt` e `url`.
4. Salve `js/main.js`.
5. Atualize o navegador.
6. Teste a busca.
7. Teste o filtro da categoria.
8. Clique no novo card.
9. Corrija qualquer erro exibido no console.

## Checklist de um novo jogo

- [ ] A imagem existe na pasta `assets`.
- [ ] O `id` é único.
- [ ] O título está correto.
- [ ] A categoria existe ou foi criada no rodapé.
- [ ] O caminho de `cover` está correto.
- [ ] O texto `alt` descreve a capa.
- [ ] O campo `url` aponta para o jogo.
- [ ] O card aparece no navegador.
- [ ] A busca encontra o jogo.
- [ ] O filtro da categoria funciona.
- [ ] O clique abre o endereço correto.
- [ ] Não há erros no console.
