const title = document.createElement("h1");
document.body.appendChild(title);
title.textContent="Project Etch-a-Sketch"
const main = document.createElement("main");
document.body.appendChild(main);
const grid = document.createElement("div");
main.appendChild(grid);
document.querySelector("div").className = "grid";
const cell = document.createElement("div");
grid.appendChild(cell);
cell.className = "cell";
const button = document.createElement("button");
main.appendChild(button);
button.className = "button"; 
const buttonText = document.createElement("div");
button.appendChild(buttonText);
buttonText.className = "buttonText";
buttonText.textContent = "Grid Size";
const resetButton = document.createElement("button");
main.appendChild(resetButton);
resetButton.className = "resetButton"; 
const resetButtonText = document.createElement("div");
resetButton.appendChild(resetButtonText);
resetButtonText.className = "resetButtonText";
resetButtonText.textContent = "Reset";


button.addEventListener('click',()=>{
  const promptValue = prompt("Grid size.");
  function createGrid(cols){
    let rows = cols;
  if(promptValue>0 && promptValue<=100){
    grid.removeChild(cell);
    for (let i = 0; i<rows; i++){
        for (let j = 0; j<cols; j++){
        const cell = document.createElement("div");
        grid.appendChild(cell);
        cell.className = "cell";
        cell.addEventListener('mouseover', () => {
          cell.style.backgroundColor = "grey";
        }); 
        if (promptValue>0 && promptValue<=100){
          const numCol = promptValue;
          grid.style.gridTemplateColumns = `repeat(${numCol}, 1fr)`;
        }

        }
    }    
    
  }else{
    alert("Invalid Grid. You must enter a number between 1 and 100.");
  }
}
createGrid(promptValue);
})

resetButton.addEventListener('click',()=>{
    window.location.reload();
});
