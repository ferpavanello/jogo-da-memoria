(function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();

  const $pointBar = pointBar.create();
  const $memoryCardJs = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Ícone de um livro de Javascript"
  });
  const $memoryCardBug = createMemoryCard({
    src: "img/icon-bug.png",
    alt: "Ícone de um Bug"
  });
  const $memoryCardPhone = createMemoryCard({
    src: "img/icon-celular.png",
    alt: "Ícone de um Celular"
  });
  const $memoryCardSettings = createMemoryCard({
    src: "img/icon-settings.png",
    alt: "Ícone de configurações"
  });
  const $gameButton = gameButton.render();

  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardSettings);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardBug);

  $root.insertAdjacentHTML("afterbegin", $pointBar);
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
  $root.insertAdjacentHTML("beforeend", $gameButton);
})();
