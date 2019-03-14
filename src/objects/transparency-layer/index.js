const transparencyLayer = (function() {
  const module = {};

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .transparency-layer {
        background-color: rgba(58, 64, 66, 0.5);
        position: absolute;
        top: 0;
        height: 100vh;
        width: 100vw;

        transition: opacity 300ms 200ms linear;
      }
      
      .transparency-layer.-disable {
        opacity: 0;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <div class="transparency-layer"></div>
    `;
  };

  return {
    render: module.render
  };
})();
