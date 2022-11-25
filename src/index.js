import "./css/reset.css";
import "./css/style.css";
import Ship from "./classes/ship.js";
import Gameboard from "./classes/gameboard.js";
import Human from "./classes/human.js";
import Computer from "./classes/computer.js";
import createGameboard from "./createGameboard.js";
import createPlayerShips from "./createPlayerShips.js";

window.onload = () => {
    createGameboard();
    createPlayerShips();
}

const ships = document.querySelectorAll(".unplayed-ship");
ships.forEach((ship) => {
    ship.addEventListener("dblclick", () => {
        if (ship.classList.contains("rotated")) {
            ship.classList.remove("rotated");
        }
        else {
            ship.classList.add("rotated");
        }
    });
});