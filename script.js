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
