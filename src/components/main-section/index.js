const mainSection = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .main-icon {
        width: 170px;
        height: 175px
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `
      <img src="img/icon-collabcode.png" class="main-icon"></img>
    `;
  };

  return {
    render: module.render
  };
})();
