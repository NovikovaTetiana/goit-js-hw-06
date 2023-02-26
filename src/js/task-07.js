
const inputEl = document.querySelector("input");
const textEl = document.querySelector("span");

inputEl.addEventListener("input", () => {
  const fontsize = Number(inputEl.value);

  textEl.style.fontSize = fontsize + "px";
});
