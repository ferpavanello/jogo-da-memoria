const gameButton = (function() {
  const module = {};

  module._style = function() {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .game-button {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2ed573;
        box-sizing: border-box;
        border: 3px solid #fffcee;
        color: #fffcee;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.05em;
        font-family: "Comfortaa", sans-serif;
        cursor: pointer;
        box-shadow: 0px 4px 8px #3a4042;
      }

      .game-button.-start {
        visibility: hidden;
        opacity: 0;
        transition: all 300ms linear;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = () => {
    $gameButton = document.querySelector(".game-button");
    $lockingLayer = document.querySelector(".locking-layer");

    $gameButton.classList.add("-start");
    $lockingLayer.classList.add("-start");
    console.log($gameButton);
  };

  module.render = () => {
    module._style();

    return `
      <button class="game-button" onclick=gameButton.handleClick()>Start</button>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
