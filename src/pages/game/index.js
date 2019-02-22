const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard(
  "img/icon-collabcode.png",
  "Gueio mascote da CollabCode"
);
const $memoryCardFrontJs = createMemoryCard(
  "img/icon-js.png",
  "Ícone de um livro de Javascript",
  "-front"
);
const $memoryCardFrontBug = createMemoryCard(
  "img/icon-bug.png",
  "Ícone de um Bug",
  "-front"
);
const $memoryCardFrontPhone = createMemoryCard(
  "img/icon-celular.png",
  "Ícone de um Celular",
  "-front"
);
const $memoryCardFrontSettings = createMemoryCard(
  "img/icon-settings.png",
  "Ícone de um livro de Javascript",
  "-front"
);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontSettings);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontSettings);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
