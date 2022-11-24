import "./css/reset.css";
import "./css/style.css";
import Ship from "./classes/ship.js";
import Gameboard from "./classes/gameboard.js";
import Human from "./classes/human.js";
import Computer from "./classes/computer.js";

window.addEventListener("load", () => {
    createClasses();
    gameloop();
});