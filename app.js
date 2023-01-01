const container = document.querySelector(".container");
const containerInput = document.querySelector(".container-input");
const span = document.querySelector("span");
const input = document.querySelector("input");

container.addEventListener("click", () => {
  if (containerInput.classList.contains("container-active")) {
    input.removeAttribute("placeholder", "Search...");
    containerInput.classList.remove("container-active");
    input.classList.remove("input-active");
    input.setAttribute("disabled", "disabled");
    input.textContent = "";
    input.blur();
  } else {
    containerInput.classList.add("container-active");
    input.classList.add("input-active");
    input.setAttribute("placeholder", "Search...");
    input.removeAttribute("disabled");
    input.focus();
  }
});
