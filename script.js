const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

function dark() {
  body.classList.add("dark");
  body.classList.remove("light", "catppuccin");
  buttons.forEach((button) => {
    button.classList.add("dark", "dark-border");
    button.classList.remove(
      "light",
      "light-border",
      "catppuccin",
      "catppuccin-border"
    );
  });
}

function light() {
  body.classList.add("light");
  body.classList.remove("dark", "catppuccin");
  buttons.forEach((button) => {
    button.classList.add("light", "light-border");
    button.classList.remove(
      "dark",
      "dark-border",
      "catppuccin",
      "catppuccin-border"
    );
  });
}

function catppuccin() {
  body.classList.add("catppuccin");
  body.classList.remove("dark", "light");
  buttons.forEach((button) => {
    button.classList.add("catppuccin", "catppuccin-border");
    button.classList.remove("dark", "dark-border", "light", "light-border");
  });
}
