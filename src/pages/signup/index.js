(function() {
  const $root = document.querySelector("#root");

  const $logInButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign up", true);

  const $mainSection = mainSection.render();

  $root.insertAdjacentHTML("beforeend", $logInButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
  $root.insertAdjacentHTML("beforeend", $mainSection);
})();
