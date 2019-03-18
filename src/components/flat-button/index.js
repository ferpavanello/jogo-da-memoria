const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id} {
        background-color: ${active ? "#f25a70" : "#eae6da"};
        color: ${active ? "#fff" : "#fffcee"};
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        height: 176px;
        text-transform: uppercase;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = $component => {
    const $componentActive = document.querySelector(".flat-button.-active");

    if ($componentActive) $componentActive.classList.remove("-active");

    $component.classList.add("-active");
  };

  module.render = (content = "", active = false) => {
    module._id++;
    module._style(active);

    return `<button class="flat-button-${
      module._id
    }" onClick="flatButton.handleClick(this)">${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
