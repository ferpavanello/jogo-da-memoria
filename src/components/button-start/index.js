const buttonStart = (function() {
  const module = {};

  module.style = function() {
    const $style = document.createElement("style");

    $style.textContent = `
      .button-start {
      }
    `;
  };

  module.create = () => {
    module.style();

    return `
      <button class="button-start">
        <span>Start</span>
      </button>
    `;
  };

  return {
    create: module.create
  };
})();
