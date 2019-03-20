const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo-wrapper {
        text-align: center;
        transform: translateY(-25%);
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$childrens) => {
    module._style();

    return `
      <div class="logo-wrapper">
        ${$childrens.join("")}
      </div>
    `;
  };

  return {
    render: module.render
  };
})();