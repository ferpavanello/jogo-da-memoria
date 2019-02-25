const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Gueio mascote da CollabCode"
});
const $memoryCardJs = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro de Javascript",
  className: "-front"
});
const $memoryCardBug = createMemoryCard({
  src: "img/icon-bug.png",
  alt: "Ícone de um Bug",
  className: "-front"
});
const $memoryCardPhone = createMemoryCard({
  src: "img/icon-celular.png",
  alt: "Ícone de um Celular",
  className: "-front"
});
const $memoryCardSettings = createMemoryCard({
  src: "img/icon-settings.png",
  alt: "Ícone de configurações",
  className: "-front"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
