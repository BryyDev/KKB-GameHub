# Catálogo de jogos

Atualizado em 23/10/2026. O catálogo reúne 27 cards, preservando os IDs e favoritos dos seis jogos anteriores.

As verificações conferiram páginas, destinos dos links e imagens. Não comprovam que uma partida completa funciona, nem a compatibilidade de cada jogo com todos os dispositivos.

| Jogo | Categoria | Endereço | Observação |
| --- | --- | --- | --- |
| DBZ TK 3 | acao | Aguardando link | Em breve |
| PES 6 | esporte | [Projeto](https://pes6.optijuegos.net/) | Página do projeto encontrada |
| GTA 5 | acao | [Projeto](https://fiveplay.lol/) | Endereço direto informado pelo colaborador |
| CS 1.6 / Half-Life | fps | [Projeto](https://x8bitrain.github.io/webXash/) | WebXash: use seus arquivos de Half-Life ou Counter-Strike. |
| Black Ops 2 | fps | [Projeto](https://vibeslops.luckeysystems.com/) | Indisponível: O projeto está fora do ar. |
| Fifa Street | esporte | [Projeto](https://fifastreet2.fun/) | Página do projeto encontrada |
| Moon Zombies | fps | [Projeto](https://vel.gg/bsz/moon) | Página do projeto encontrada |
| GTA Vice City | acao | [Projeto](https://joncodeofficial.github.io/gta-vice-city-wasm/) | Requer seus arquivos de GTA Vice City. |
| Quake III Arena | fps | [Projeto](https://q3.pieter.com/) | Página do projeto encontrada |
| Black Ops Zombies | fps | [Projeto](https://vel.gg/bsz) | Página do projeto encontrada |
| Half-Life | fps | [Projeto](https://pixelsuft.github.io/hl/) | Requer seus arquivos de Half-Life. |
| Skate 3 — Fan Game | esporte | [Projeto](https://skate.aaddpp.lol/) | Fan game: requer uma cópia própria convertida de Skate 3. |
| Halo CE | fps | [Projeto](https://mitchellhynes.com/halo) | Combat Lab: requer sua imagem de disco de Halo CE. |
| Diablo | rpg | [Projeto](https://johnimril.github.io/diablo_web/) | Demo disponível. O jogo completo requer seu DIABDAT.MPQ. |
| Modern Warfare 2 | fps | [Projeto](https://ovz-game-production.up.railway.app/) | Indisponível: O projeto Open Victor Zulu está fora do ar. |
| Kino der Toten | fps | [Projeto](https://vel.gg/bsz/kino) | Página do projeto encontrada |
| Urban Terror | fps | [Projeto](https://ut.pieter.com/) | Página do projeto encontrada |
| The Simpsons: Hit & Run | acao | [Projeto](https://shar-wasm.cjoseph.workers.dev/?skipmovie) | Página do projeto encontrada |
| Quake 1 | fps | [Projeto](https://q1.pieter.com/) | Página do projeto encontrada |
| Skate × Rust | esporte | [Projeto](https://global-terror.net/) | Indisponível: O jogo não está disponível no site de origem. |
| Halo CE Mobile | fps | [Projeto](https://hcemobile.com/) | Requer sua imagem de disco de Halo CE para Xbox. |
| BO3 Cheese Cube | fps | [Projeto](https://cheese-cube.pages.dev/) | Indisponível: O jogo não está mais disponível neste endereço. |
| Return to Castle Wolfenstein | fps | [Projeto](https://rtcw.pieter.com/) | Página do projeto encontrada |
| CS Surf — Surfd | fps | [Projeto](https://surfd.net/) | Página do projeto encontrada |
| Quake II | fps | [Projeto](https://q2.pieter.com/) | Página do projeto encontrada |
| Hedgewars | estrategia | [Projeto](https://webwars.link/) | Indisponível: O endereço de WebWars está temporariamente indisponível. |
| WASM Arcade | arcade | [Projeto](https://wasmarcade.com/) | Coleção com GTA, Minecraft e outros jogos de navegador. |

## Endereços corrigidos

- Vice City: o endereço completo foi confirmado no [README do projeto](https://github.com/joncodeofficial/gta-vice-city-wasm).
- Black Ops Zombies: a rota antiga `/bo1z` não está disponível; a página atual está em [vel.gg/bsz](https://vel.gg/bsz). Os links de Moon e Kino usam as rotas publicadas pelo seletor de mapas desse projeto. As antigas páginas `moon-zombies.pages.dev` e `kino-der-toten.pages.dev` redirecionam para outro domínio.
- GTA 5: o card usa o endereço direto [fiveplay.lol](https://fiveplay.lol/), informado pelo colaborador para substituir o link incompleto do Web Archive.
- O endereço `ut.pieter.com` identifica o jogo como [Urban Terror](https://ut.pieter.com/), por isso o card usa esse nome.
- A entrada Half-Life / CS 1.6 foi associada ao card existente de Counter-Strike para manter os favoritos e evitar duplicação. O port de Half-Life da Pixelsuft tem um card próprio.

## Links indisponíveis

Modern Warfare 2 / Open Victor Zulu e Black Ops 2 informam que saíram do ar. Cheese Cube redireciona para outro site, Skate × Rust abre uma loja e WebWars apresenta falha no certificado do endereço fornecido. Esses cinco cards mantêm as capas e os endereços no catálogo, mas o botão de jogar fica desativado.

Para reativar um jogo, confirme que o campo `url` abre o projeto correto e remova o campo `unavailable` em `js/main.js`. Os requisitos em `note` aparecem no verso do card.

As fontes das novas imagens estão em [assets/CREDITS.md](../assets/CREDITS.md).
