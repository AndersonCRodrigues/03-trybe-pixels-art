const vetor = ['black', 'red', 'blue', 'green'];

function loadColor() {
  if (localStorage.colorPalette) {
    const paletteDiv = document.querySelectorAll('.color');
    const recoverColor = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 0; i < paletteDiv.length; i += 1) {
      paletteDiv[i].style.background = recoverColor[i];
    }
  }
}

function updateColor() {
  const paletteDiv = document.querySelectorAll('.color');
  for (let i = 0; i < paletteDiv.length; i += 1) {
    vetor[i] = paletteDiv[i].style.background;
    localStorage.setItem('colorPalette', JSON.stringify(vetor));
  } loadColor();
}

function loadPixelColor() {
  if (localStorage.pixelBoard) {
    const pixels = document.querySelectorAll('.pixel');
    const recoverPixelColor = JSON.parse(localStorage.getItem('pixelBoard'));
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.background = recoverPixelColor[i];
    }
  }
}

function updatePixelColor() {
  const pixels = document.querySelectorAll('.pixel');
  const pixelColor = Array(25);
  for (let i = 0; i < pixels.length; i += 1) {
    pixelColor[i] = pixels[i].style.background;
    localStorage.setItem('pixelBoard', JSON.stringify(pixelColor));
  } loadPixelColor();
}

function palette() {
  const colorPalette = document.querySelector('#color-palette');
  for (let i = 0; i < vetor.length; i += 1) {
    const paletteDiv = document.createElement('div');
    paletteDiv.classList = 'color';
    paletteDiv.style.background = vetor[i];
    colorPalette.appendChild(paletteDiv);
  }
}

palette();

function cleanBtn() {
  const paletteColors = document.querySelector('#clean');
  const btn = document.createElement('button');
  btn.id = 'clear-board';
  btn.innerText = 'Limpar';
  paletteColors.appendChild(btn);
  btn.style.marginLeft = '50px';
}

function btnRandomColor() {
  const colorPalette = document.querySelector('#color-palette');
  const buttonColor = document.createElement('button');
  buttonColor.id = 'button-random-color';
  buttonColor.innerText = 'Cores aleatórias';
  colorPalette.appendChild(buttonColor);
  cleanBtn();
}
function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

btnRandomColor();

function addRamdomColor() {
  const paletteDiv = document.querySelectorAll('.color');
  for (let i = 0; i < paletteDiv.length; i += 1) {
    if (i === 0) paletteDiv[0].style.background = 'back';
    else { paletteDiv[i].style.background = randomColor(); }
  }
  updateColor();
}

const button = document.querySelector('#button-random-color');
button.addEventListener('click', addRamdomColor);

window.addEventListener('load', loadColor);
window.addEventListener('load', loadPixelColor);

function pixelBoardSquare() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
pixelBoardSquare();

document.querySelectorAll('.color')[0].classList.add('selected');

function addSelected(event) {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const SelectColor = document.querySelectorAll('.color');
for (let i = 0; i < SelectColor.length; i += 1) {
  SelectColor[i].addEventListener('click', addSelected);
}

function paintPixel(event) {
  const origin = event;
  const color = document.querySelector('.selected');
  origin.target.style.background = color.style.background;
  updatePixelColor();
}

const pixel = document.querySelectorAll('.pixel');
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', paintPixel);
}

function cleanBoard() {
  const pixelSqr = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelSqr.length; i += 1) {
    pixel[i].style.background = 'white';
  }
}

const clearBoardBtn = document.querySelector('#clear-board');
clearBoardBtn.addEventListener('click', cleanBoard);
