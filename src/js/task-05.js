const inputEl = document.querySelector('#name-input');

const nameInputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handlerInputChange)

function handlerInputChange(event) {

nameInputEl.textContent = event.target.value.trim();

if(nameInputEl.textContent.length === 0){
  nameInputEl.textContent = 'Anonymous' 
}
}