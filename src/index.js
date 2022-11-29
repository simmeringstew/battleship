import "./css/reset.css";
import "./css/style.css";
import Gameboard from "./classes/gameboard.js";
import Computer from "./classes/computer.js";
import createGameboard from "./createGameboard.js";
import createPlayerShips from "./createPlayerShips.js";

const gameInfo = document.querySelector("H1");

export let alreadyPlacedCoordinates = [];
export const gameboard = new Gameboard();
const computer = new Computer();

window.onload = () => {
    createGameboard();
    createPlayerShips();
    console.log(gameboard.computerShipLocations);
}

const ships = document.querySelectorAll(".unplayed-ship");
ships.forEach(ship => {
    ship.addEventListener("dblclick", () => {
        if (ship.classList.contains("rotated")) {
            ship.classList.remove("rotated");
            ship.classList.remove("vertical");
        }
        else {
            ship.classList.add("rotated");
            ship.classList.add("vertical");
        }
    });
});

const draggables = document.querySelectorAll("[draggable='true']");
draggables.forEach(item => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });
});

export function enableFiring() {
    gameInfo.textContent = "Click a Square in the Right Box to Fire";
    const firingArea = document.querySelector(".firing-area");
    const firingSquares = firingArea.querySelectorAll(".firing-square");
    firingSquares.forEach(square => {
        square.classList.add("clickable");
        square.addEventListener("click", () => {
            const row = parseInt(square.parentNode.getAttribute("data-value"));
            const column = parseInt(square.getAttribute("data-key"));
            square.classList.remove("clickable");
            gameLoop(row, column, square);
        },{once:true});
    });
}

function gameLoop(row, column, sqaure) {
    console.log(row);
    console.log(column);
}