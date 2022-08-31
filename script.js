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

function btnRandomColor() {
  const colorPalette = document.querySelector('#color-palette');
  const buttonColor = document.createElement('button');
  buttonColor.id = 'button-random-color';
  buttonColor.innerText = 'Cores aleatórias';
  colorPalette.appendChild(buttonColor);
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
