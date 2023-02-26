const inputEl = document.querySelector('input');
const divBoxEl = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreateEl.addEventListener('click', handlerGetAmount );
btnDestroyEl.addEventListener('click', handlerCleanAmount );

function handlerGetAmount (){
createBoxes(inputEl.value)
}

function handlerCleanAmount (){
  divBoxEl.innerHTML = ''
}

function createBoxes(amount) {
  let size = 30;
  let newSize = 0;
  for (let i = 0; i <= amount; i += 1) {
    let box = document.createElement('div');
    newSize = size + i * 10;
    box.style = `width: ${newSize}px; height: ${newSize}px;
    background-color: ${getRandomHexColor()}`;
    boxes.append(box);
  }
}



