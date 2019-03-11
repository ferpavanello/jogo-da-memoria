const lockingLayer = (function() {
  const module = {};

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .locking-layer {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.4;
      }

      .locking-layer.-start {
        visibility: hidden;
        opacity: 0;
        transition: all 600ms linear;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    $layer = document.createElement("div");
    $layer.classList.add("locking-layer");

    return $layer;
  };

  return {
    render: module.render
  };
})();
