const grid = document.querySelector('#grid');

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'rgb(153,153,153)';
        })
        grid.appendChild(div); 
    }
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

const slider = document.querySelector('#slider')
const gridVal = document.querySelector('.value');
slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    gridVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});

const selectColor = document.querySelector('#color');
selectColor.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    let pixel = grid.children;
    let selectedColor = document.getElementById('color').value;
    for (let i = 0; i < val*val; i++) {
        pixel[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = selectedColor;
        })
    }
});

const monoButton = document.querySelector('#mono');
monoButton.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let pixel = grid.children;
    for (let i = 0; i < val*val; i++) {
        pixel[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        })
    }
});

const rgbButton = document.querySelector('#rgb');
rgbButton.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let pixel = grid.children;
    for (let i = 0; i < val*val; i++) {
        pixel[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let pixel = grid.children;
    for (let i = 0; i < val*val; i++) {
        pixel[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'white';
        })
    }
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let pixel = grid.children;
    for (let i = 0; i < val*val; i++) {
        pixel[i].style.backgroundColor = 'white';
    }
});

createGrid();

let mode = '';

function setCurrentMode(newMode) {
    removeButtonToggle(newMode);
    mode = newMode;
}

monoButton.onclick = () => setCurrentMode('mono');
rgbButton.onclick = () => setCurrentMode('rgb');
eraserButton.onclick = () => setCurrentMode('eraser');

const btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    btn[i].classList.toggle('btn-on');
  });
}

function removeButtonToggle(newMode) {
   if (newMode === 'mono') {
    rgbButton.classList.remove('btn-on');
    eraserButton.classList.remove('btn-on');
   } else if (newMode === 'rgb') {
    monoButton.classList.remove('btn-on');
    eraserButton.classList.remove('btn-on');
   } else if (newMode === 'eraser') {
    monoButton.classList.remove('btn-on');
    rgbButton.classList.remove('btn-on');
   }
};