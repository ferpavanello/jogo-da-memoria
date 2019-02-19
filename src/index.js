const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardActive = document.createElement("article");
const $icon = `
  <img
    src="img/icon-collabcode.png"
    alt="Gueio mascote da CollabCode"
    class="icon"
  />
`;
const $iconJs = `
  <img
    src="img/icon-js.png"
    alt="JS Selected"
    class="icon -active"
  />
`;

$memoryCard.classList.add("memory-card");

$memoryCardActive.classList.add("memory-card");
$memoryCardActive.classList.add("-active");

$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCardActive, null);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);

$memoryCardActive.insertAdjacentHTML("afterbegin", "<div class='ball'></div>");
$memoryCardActive.insertAdjacentHTML("afterbegin", $iconJs);
