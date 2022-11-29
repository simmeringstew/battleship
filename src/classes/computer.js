import { randomIntArray } from "../helperFunctions.js";
import { gameboard } from "../index.js";
import Ship from "./ship.js";

export default class Computer {
    constructor() {
        this.ships = this.createShips();
    }
    // check full ships if it selects one that has already been used just redo the whole ship
    createShips() {
        let globalRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let globalColumn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // two long ships
        for (let i = 0; i < 4; i++) {
            const isVertical = randomIntArray([0, 1]);
            if (isVertical === 0) {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const squareOne = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                const squareTwo = squareOne + 1;
                const shipCoordinates = [[row, squareOne], [row, squareTwo]];
                passRandomShipToObjects(shipCoordinates);
            }
            else {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                const nextRow = row + 1;
                const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const shipCoordinates = [[row, column], [nextRow, column]];
                passRandomShipToObjects(shipCoordinates);
            }
        }
        // three long ships
        for (let i = 0; i < 3; i++) {
            const isVertical = randomIntArray([0, 1]);
            if (isVertical === 0) {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const squareOne = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7]);
                const squareTwo = squareOne + 1, squareThree = squareOne + 2;
                const shipCoordinates = [[row, squareOne], [row, squareTwo], [row, squareThree]];
                passRandomShipToObjects(shipCoordinates);
            }
            else {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7]);
                const secondRow = row + 1, thirdRow = row + 2;
                const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const shipCoordinates = [[row, column], [secondRow, column], [thirdRow, column]];
                passRandomShipToObjects(shipCoordinates); 
            }
        }
        // four long ships
        for (let i = 0; i < 2; i++) {
            const isVertical = randomIntArray([0, 1]);
            if (isVertical === 0) {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const squareOne = randomIntArray([0, 1, 2, 3, 4, 5, 6]);
                const squareTwo = squareOne + 1, squareThree = squareOne + 2, squareFour = squareOne + 3;
                const shipCoordinates = [[row, squareOne], [row, squareTwo], [row, squareThree], [row, squareFour]];
                passRandomShipToObjects(shipCoordinates);
            }
            else {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6]);
                const secondRow = row + 1, thirdRow = row + 2, fourthRow = row + 3;
                const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const shipCoordinates = [[row, column], [secondRow, column], [thirdRow, column], [fourthRow, column]];
                passRandomShipToObjects(shipCoordinates);
            }
        }
        // five long ship
        const isVertical = randomIntArray([0, 1]);
        if (isVertical === 0) {
            const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const squareOne = randomIntArray([0, 1, 2, 3, 4, 5]);
            const squareTwo = squareOne + 1, squareThree = squareOne + 2, squareFour = squareOne + 3, squareFive = squareOne + 4;
            const shipCoordinates = [[row, squareOne], [row, squareTwo], [row, squareThree], [row, squareFour], [row, squareFive]];
            passRandomShipToObjects(shipCoordinates);
        }
        else {
            const row = randomIntArray([0, 1, 2, 3, 4, 5]);
            const secondRow = row + 1, thirdRow = row + 2, fourthRow = row + 3, fifthRow = row + 4;
            const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            const shipCoordinates = [[row, column], [secondRow, column], [thirdRow, column], [fourthRow, column], [fifthRow, column]];
            passRandomShipToObjects(shipCoordinates);
        }
    }
}

function passRandomShipToObjects(shipCoordinates) {
    const ship = new Ship(shipCoordinates.length);
    ship.addCoordinates(shipCoordinates);
    gameboard.updateComputerShipLocations(ship);
}