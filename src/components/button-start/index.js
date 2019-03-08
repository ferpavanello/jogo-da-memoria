const buttonStart = (function() {
  const module = {};

  module.style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .button-start {
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        background-color: #37cc68;
        height: 35px;
        width: 75px;
        border: none;
        border-radius: 20px;
        margin-bottom: 10px;
        font-family: "Comfortaa", sans-serif;
      }

      .button-start > .begin {
        color: #fff;
        font-size: 17px;
        font-weight: bold;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.create = () => {
    module.style();

    return `
      <button class="button-start">
        <span class="begin">Start</span>
      </button>
    `;
  };

  return {
    create: module.create
  };
})();
