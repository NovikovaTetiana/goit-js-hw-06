// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

const inputEl = document.querySelector("#validation-input");
const dataLengthEl = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", () => {
  const valueDataLength = Number(inputEl.value.trim().length);

  if (valueDataLength <= dataLengthEl) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});
