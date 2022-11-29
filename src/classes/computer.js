import { randomIntArray, arraysAreEqual } from "../helperFunctions.js";
import { gameboard, alreadyPlacedCoordinates } from "../index.js";
import Ship from "./ship.js";

export default class Computer {
    constructor() {
        this.ships = this.createShips();
    }
    // check full ships if it selects one that has already been used just redo the whole ship
    createShips() {
        // two long ships
        for (let i = 0; i < 4; i++) {
            while (true) {
                const isVertical = randomIntArray([0, 1]);
                if (isVertical === 0) {
                    const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    const squareOne = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                    const squareTwo = squareOne + 1;
                    const shipCoordinates = [[row, squareOne], [row, squareTwo]];
                    const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    }
                }
                else {
                    const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8]);
                    const nextRow = row + 1;
                    const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    const shipCoordinates = [[row, column], [nextRow, column]];
                    const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    }
                }
            }
        }
        // three long ships
        for (let i = 0; i < 3; i++) {
            while (true) {
                const isVertical = randomIntArray([0, 1]);
                if (isVertical === 0) {
                    const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    const squareOne = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7]);
                    const squareTwo = squareOne + 1, squareThree = squareOne + 2;
                    const shipCoordinates = [[row, squareOne], [row, squareTwo], [row, squareThree]];
                    const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    }
                }
                else {
                    const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7]);
                    const secondRow = row + 1, thirdRow = row + 2;
                    const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    const shipCoordinates = [[row, column], [secondRow, column], [thirdRow, column]];
                    const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    } 
                }
            }
        }
        // four long ships
        for (let i = 0; i < 2; i++) {
            while (true) {
                const isVertical = randomIntArray([0, 1]);
                if (isVertical === 0) {
                    const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    const squareOne = randomIntArray([0, 1, 2, 3, 4, 5, 6]);
                    const squareTwo = squareOne + 1, squareThree = squareOne + 2, squareFour = squareOne + 3;
                    const shipCoordinates = [[row, squareOne], [row, squareTwo], [row, squareThree], [row, squareFour]];
                    const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    } 
                }
                else {
                    const row = randomIntArray([0, 1, 2, 3, 4, 5, 6]);
                    const secondRow = row + 1, thirdRow = row + 2, fourthRow = row + 3;
                    const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                    const shipCoordinates = [[row, column], [secondRow, column], [thirdRow, column], [fourthRow, column]];
                    const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    } 
                }
            }
        }
        // five long ship
        while (true) {
            const isVertical = randomIntArray([0, 1]);
            if (isVertical === 0) {
                const row = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const squareOne = randomIntArray([0, 1, 2, 3, 4, 5]);
                const squareTwo = squareOne + 1, squareThree = squareOne + 2, squareFour = squareOne + 3, squareFive = squareOne + 4;
                const shipCoordinates = [[row, squareOne], [row, squareTwo], [row, squareThree], [row, squareFour], [row, squareFive]];
                const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    }
            }
            else {
                const row = randomIntArray([0, 1, 2, 3, 4, 5]);
                const secondRow = row + 1, thirdRow = row + 2, fourthRow = row + 3, fifthRow = row + 4;
                const column = randomIntArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
                const shipCoordinates = [[row, column], [secondRow, column], [thirdRow, column], [fourthRow, column], [fifthRow, column]];
                const valid = checkIfValid(shipCoordinates);
                    if (valid) {
                        passRandomShipToObjects(shipCoordinates);
                        break;
                    }
            }
        }
    }
}

function passRandomShipToObjects(shipCoordinates) {
    const ship = new Ship(shipCoordinates.length);
    ship.addCoordinates(shipCoordinates);
    gameboard.updateComputerShipLocations(ship);
}

function checkIfValid(shipCoordinates) {
    let validCheck = 0;
    for (let i = 0; i < alreadyPlacedCoordinates.length; i++) {
        for (let j = 0; j < shipCoordinates.length; j++) {
            if (arraysAreEqual(alreadyPlacedCoordinates[i], shipCoordinates[j])) {
                validCheck++;
            }
        }
    }
    if (validCheck === 0) {
        for (let i = 0; i < shipCoordinates.length; i++) {
            alreadyPlacedCoordinates.push(shipCoordinates[i]);
        }
        return true;
    }
    else {
        return false;
    }
}