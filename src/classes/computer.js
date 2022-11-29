import { randomIntArray } from "../helperFunctions.js";
import Ship from "./ship.js";

export default class Computer {
    constructor() {
        this.ships = this.createShips();
    }
    // check full ships if it selects one that has already been used just redo the whole ship
    createShips() {
        const globalRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const globalColumn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // two long ships
        for (let i = 0; i < 4; i++) {
            const isVertical = randomIntArray([0, 1]);
            if (isVertical === 0 || isVertical === 1) {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const squareOne = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                const squareTwo = squareOne + 1;
                const shipCoordinates = [[row, squareOne], [row, squareTwo]];
                console.log(shipCoordinates);
            }
            else {
                // vertical
            }
        }
    }
}