function palette() {
  const colorPalette = document.querySelector('#color-palette');
  const colorArray = ['black', 'red', 'blue', 'green'];
  for (let i = 0; i < colorArray.length; i += 1) {
    const paletteDiv = document.createElement('div');
    paletteDiv.classList = 'color';
    paletteDiv.style.background = colorArray[i];
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
}

const button = document.querySelector('#button-random-color');
button.addEventListener('click', addRamdomColor);
