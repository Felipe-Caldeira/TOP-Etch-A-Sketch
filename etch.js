let gridSize = 16;

function createGrid(size) {
    let etchContainer = document.querySelector(".etchContainer");
    let cellSize = etchContainer.offsetWidth / size;
    etchContainer.style.gridTemplateColumns = `repeat(${size}, ${cellSize}px)`

    for (i=0; i < size**2; i++) {
        let cell = document.createElement("div");
        cell.classList.add("etchCell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener("mouseenter", fillCell);
        cell.setAttribute("darkness", "250");
        cell.backgroundColor = `rgb(250, 250, 250)`;
        etchContainer.appendChild(cell);
    }

}

function fillCell(event) {
    let cellDarkness = event.target.getAttribute("darkness") - 0;
    if (cellDarkness > 0) {
        cellDarkness -= 250;
        event.target.setAttribute("darkness", cellDarkness + "");
        event.target.style.backgroundColor = `rgb(${cellDarkness}, ${cellDarkness}, ${cellDarkness})`;
    }
}

function resetGrid() {
    let oldGrid = document.querySelector(".etchContainer");
    let newClone = oldGrid.cloneNode(false);
    document.querySelector("body").replaceChild(newClone, oldGrid);
    
    let newResolution = prompt("Input new resolution:");
    createGrid(newResolution);
}



function setup() {
    createGrid(16);
}

window.onload = setup;