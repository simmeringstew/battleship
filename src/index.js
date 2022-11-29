import "./css/reset.css";
import "./css/style.css";
import Ship from "./classes/ship.js";
import Gameboard from "./classes/gameboard.js";
import Computer from "./classes/computer.js";
import createGameboard from "./createGameboard.js";
import createPlayerShips from "./createPlayerShips.js";

const gameInfo = document.querySelector("H1");

export let alreadyPlacedCoordinates = [];
export const gameboard = new Gameboard();

window.onload = () => {
    createGameboard();
    createPlayerShips();
    const computer = new Computer();
}

const ships = document.querySelectorAll(".unplayed-ship");
ships.forEach((ship) => {
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
draggables.forEach((item) => {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });
});

export function gameLoop() {
    console.log("Game Started");
}