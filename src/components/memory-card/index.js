const createMemoryCard = (add, image) => {
  return `
    <article class="memory-card ${add}">
      <img
        src="${image}"
        alt="Ícone"
        class="icon -active"
        onclick="handleClick()"
      />
    </article>
  `;
};

function handleClick() {
  console.log("Ae");
}
