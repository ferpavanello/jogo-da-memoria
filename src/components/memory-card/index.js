const createMemoryCard = ({ className, src, alt }) => `
  <article class="memory-card ${className}">
    <img
      src="${src}"
      alt="${alt}"
      class="icon"
      onclick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("Ae");
