'use strict';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buildCircles = () => {
  let domString = '';
  for (let i = 0; i < 25; i++){
    domString += `<div class="circle ${[i]}" id="circle-${[i]}"></div>`
  }
  printToDom('#container', domString);
}

const resetButtonEvent = () => {
  document.querySelector('#reset').addEventListener('click',    resetColors)
}

const circleClickEvent = () => {
  for (let i = 0; i < 25; i++){
  document.querySelector(`#circle-${[i]}`).addEventListener('click', changeColor)
  }
}

const changeColor = (e) => {
  let target = e.target.id;
  document.querySelector(`#${target}`).classList.toggle('blue');
}

const resetColors = () => {
  init();
}

const init = () => {
  buildCircles();
  circleClickEvent();
  resetButtonEvent();
}

init();