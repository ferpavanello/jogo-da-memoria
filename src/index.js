const $root = document.querySelector("#root");
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

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);

for (i = 1; i < 20; i++) {
  const $memoryCard = document.createElement("article");

  $memoryCard.classList.add("memory-card");
  $root.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}
