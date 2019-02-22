const createMemoryCard = () => {
  return `
  <article class="memory-card">
    <img
      src="img/icon-collabcode.png"
      alt="Gueio mascote da CollabCode"
      class="icon"
      onclick="handleClick()"
    />
  </article>
  `;
};

const createMemoryCardFront = () => {
  return `
    <article class="memory-card -front">
      <img
        src="img/icon-js.png"
        alt="Ícone de um livro da linguagem JavaScript"
        class="icon -active"
        onclick="handleClick()"
      />
    </article>
  `;
};

function handleClick() {
  console.log("Ae");
}
