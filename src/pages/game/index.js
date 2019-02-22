const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Gueio mascote da CollabCode"
});
const $memoryCardFrontJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro de Javascript",
  className: "-front"
});
const $memoryCardFrontBug = createMemoryCard({
  src: "img/icon-bug.png",
  alt: "Ícone de um Bug",
  className: "-front"
});
const $memoryCardFrontPhone = createMemoryCard({
  src: "img/icon-celular.png",
  alt: "Ícone de um Celular",
  className: "-front"
});
const $memoryCardFrontSettings = createMemoryCard({
  src: "img/icon-settings.png",
  alt: "Ícone de um livro de Javascript",
  className: "-front"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFrontPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
