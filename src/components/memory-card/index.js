const createMemoryCard = (src, alt, nameClass) => `
  <article class="memory-card ${nameClass}">
    <img
      src="${src}"
      alt="${alt}"
      class="icon"
      onclick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("Ae");
