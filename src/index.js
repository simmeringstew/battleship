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

async function gameLoop(row, column, square) {
    console.log(gameboard.playerShipLocations);
    const playerShot = [row, column];
    const isHit = gameboard.recievePlayerAttack(playerShot);
    if (isHit) {
        gameInfo.textContent = "You Hit!";
        square.setAttribute("id", "hit");
    }
    else {
        gameInfo.textContent = "You Missed";
        square.setAttribute("id", "miss");
    }
    await sleep(2000);
    gameInfo.textContent = "Computer's Turn";
    await sleep(2000);
    const computerShot = computer.makeShot();
    const isGood = gameboard.revieveComputerAttack(computerShot);
    if (isGood) {
        gameInfo.textContent = "Computer Hits!";
        changePlayerSquare(computerShot, isGood);
    }
    else {
        gameInfo.textContent = "Computer Missed!";
        changePlayerSquare(computerShot, isGood);
    }
    await sleep(2000);
    gameInfo.textContent = "Click a Square in the Right Box to Fire";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changePlayerSquare(coordinates, hit) {
    const playerShipArea = document.querySelector(".your-ships");
    const row = playerShipArea.querySelector(`[data-value="${coordinates[0]}"]`);
    const square = row.querySelector(`[data-key="${coordinates[1]}"]`);
    if (hit) {
        square.setAttribute("id", "hit");
    }
    else {
        square.setAttribute("id", "miss");
    }
}