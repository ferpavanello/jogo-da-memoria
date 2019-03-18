(function() {
  const $root = document.querySelector("#root");

  const $logInButton = flatButton.render("Log in");
  const $signUpButton = flatButton.render("Sign up", true);

  $root.insertAdjacentHTML("beforeend", $logInButton);
  $root.insertAdjacentHTML("beforeend", $signUpButton);
})();
