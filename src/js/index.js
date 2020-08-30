import "../scss/main.scss";

/* save & load */
const save = document.querySelector(".save--js");
const textarea = document.querySelector(".textarea--js");
const load = document.querySelector(".load--js");

save.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.setItem("entry", textarea.value);
});
load.addEventListener("click", (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem("entry");
});

/* counter */
const input = document.querySelector(".textarea--js"),
  charCount = document.querySelector(".charCount--js");

const onKeyDown = function () {
  charCount.textContent = input.value.length;
};

input.addEventListener("keyup", onKeyDown);
