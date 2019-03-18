const flatButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button {
        background-color: #eae6da;
        color: #fffcee;
        font-size: 24px;
        font-weight: bold;
        width: 186px;
        height: 176px;
        text-transform: uppercase;
      }

      .flat-button.-selected {
        background-color: #f25a70;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = $component => {
    $componentSelected = document.querySelector(".flat-button.-selected");

    if ($componentSelected) $componentSelected.classList.remove("-selected");

    $component.classList.add("-selected");
  };

  module.render = content => {
    module._style();

    return `<button class="flat-button" onClick="flatButton.handleClick(this)">${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
