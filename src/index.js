const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $iconCollab = `
  <img
    src="img/icon-collabcode.png"
    alt="Gueio mascote da CollabCode"
    class="icon"
  />
`;

const $iconJs = `
  <img
    src="img/icon-js.png"
    alt="Ícone de um livro da linguagem JavaScript"
    class="icon -active"
  />
`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);
