function createMemoryCard() {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
    <img
      src="img/icon-collabcode.png"
      alt="Gueio mascote da CollabCode"
      class="icon"
    />
  `;

  $memoryCard.classList.add("memory-card");
  $memoryCard.onclick = () => {
    console.log("Gueio");
  };
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconJs = `
  <img
    src="img/icon-js.png"
    alt="Ícone de um livro da linguagem JavaScript"
    class="icon -active"
  />
`;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $memoryCardFront.onclick = () => {
    console.log("JS");
  };
  $wrapCards.insertBefore($memoryCardFront, null);

  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconJs);
}
