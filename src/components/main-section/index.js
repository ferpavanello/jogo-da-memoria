const mainSection = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .main-section {
        position: relative;
      }
      
      .main-div {
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 50%;
        margin-top: -30px;
      }

      .main-icon {
        width: 170px;
        height: 175px;
        padding-bottom: 30px;
        transform: translateX(-50%);
        background-color: #fff;
        box-shadow: 0 0 0 25px rgb(255, 255, 255);
        border-radius: 48%;
      }

      .main-title {
        color: #f25a70;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        transform: translateX(-50%);
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = content => {
    module._style();

    return `
      <section class="main-section">
        <div class="main-div">
          <img src="img/icon-collabcode.png" class="main-icon"></img>
          <span class="main-title">Welcome!</span>
        </div>
      </section>
    `;
  };

  return {
    render: module.render
  };
})();
