let gridSize = 16;



function createGrid(size) {
    let etchContainer = document.querySelector(".etchContainer");
    let cellSize = Math.floor(etchContainer.offsetWidth / size);

    for (i=0; i < size**2; i++) {
        let cell = document.createElement("div");
        cell.classList.add("etchCell");
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        //cell.addEventListener("mouseenter", fillCell);
        cell.addEventListener("touchmove", fillCell);
        etchContainer.appendChild(cell);
    }


}

function fillCell(event) {
    event.target.style.backgroundColor = "black";
    event.preventDefault();
}





function setup() {
    createGrid(128);
}

window.onload = setup;