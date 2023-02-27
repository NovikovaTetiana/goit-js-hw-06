// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

const inputEl = document.querySelector("#validation-input");
const dataLengthEl = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", () => {
  const valueDataLength = inputEl.value.trim().length;

  inputEl.classList.remove("valid", "invalid");

  if (valueDataLength === Number(dataLengthEl)) {
    return inputEl.classList.add("valid");
  }
  return inputEl.classList.add("invalid");
});
