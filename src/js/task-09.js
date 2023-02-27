const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const colorBodyEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnEl.addEventListener("click", () => {

  const randomHexColor = getRandomHexColor();
  
  bodyEl.style.backgroundColor = randomHexColor;

  colorBodyEl.textContent = randomHexColor;
});
