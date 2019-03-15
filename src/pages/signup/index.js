(function() {
  const $root = document.querySelector("#root");

  const $flatButtonLogIn = flatButton.render("Log in");
  const $flatButtonSignUp = flatButton.render("Sign up");

  $root.insertAdjacentHTML("beforeend", $flatButtonLogIn);
  $root.insertAdjacentHTML("beforeend", $flatButtonSignUp);
})();
