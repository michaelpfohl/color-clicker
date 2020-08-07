'use strict';

const circles = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const buildCircles = () => {
  let domString = '';
  for (let i = 0; i < 648; i++){
    circles.push({background: 'none', clicked: false});
    domString += `<div class="circle ${[i]}" id="circle-${[i]}"></div>`
  }
  printToDom('#container', domString);
}

const resetButtonEvent = () => {
  document.querySelector('#reset').addEventListener('click', init)
}

const circleClickEvent = () => {
  for (let i = 0; i < circles.length; i++){
  document.querySelector(`#circle-${[i]}`).addEventListener('click', changeBackground)
  }
}

const changeBackground = (e) => {
  let target = e.target.id;
  for (let i = 0; i < circles.length; i++){
    if (target === `circle-${[i]}` && circles[i].clicked === false){
      circles[i].background = `#${randomColor()}`;
      document.querySelector(`#circle-${[i]}`).style.background = circles[i].background;
      circles[i].clicked = true;
    } else if (target === `circle-${[i]}` && circles[i].clicked === true){
      circles[i].background = 'none';
      document.querySelector(`#circle-${[i]}`).style.background = circles[i].background;
      circles[i].clicked = false;
    }
  }
}

const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const init = () => {
  buildCircles();
  circleClickEvent();
  resetButtonEvent();
}

init();