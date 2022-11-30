import { arraysAreEqual } from "../helperFunctions.js";

export default class Gameboard {
    constructor(playerShipLocations = [], computerShipLocations = [], numberOfPlayerShips = 10, numberOfComputerShips = 10) {
        this.playerShipLocations = playerShipLocations;
        this.computerShipLocations = computerShipLocations;
        this.numberOfPlayerShips = numberOfPlayerShips;
        this.numberOfComputerShips = numberOfComputerShips;
    }
    updatePlayerShipLocations(ship) {
        this.playerShipLocations.push(ship);
    }
    updateComputerShipLocations(ship) {
        this.computerShipLocations.push(ship);
    }
    updateNumberOfPlayerShips() {
        let totalShips = 0;
        for (let i = 0; i < this.playerShipLocations.length; i++) {
            if (!this.playerShipLocations[i].status) {
                totalShips++;
            }
        }
        this.numberOfPlayerShips = totalShips;
    }
    updateNumberOfComputerShips() {
        let totalShips = 0;
        for (let i = 0; i < this.computerShipLocations.length; i++) {
            if (!this.computerShipLocations[i].status) {
                totalShips++;
            }
        }
        this.numberOfComputerShips = totalShips;
    }
    recievePlayerAttack(coordinates) {
        for (let i = 0; i < this.computerShipLocations.length; i++) {
            for (let j = 0; j < this.computerShipLocations[i].coordinates.length; j++) {
                for (let k = 0; k < this.computerShipLocations[i].coordinates[j].length; k++) {
                    // hit
                    if (arraysAreEqual(coordinates, this.computerShipLocations[i].coordinates[j][k])) {
                        this.computerShipLocations[i].hit();
                        const sunkThisTurn = this.computerShipLocations[i].isSunk();
                        return [true, sunkThisTurn];
                    }
                    // miss
                    else {
                        continue;
                    }
                }
            }
        }
        return [false, false];
    }
    revieveComputerAttack(coordinates) {
        for (let i = 0; i < this.playerShipLocations.length; i++) {
            for (let j = 0; j < this.playerShipLocations[i].coordinates.length; j++) {
                for (let k = 0; k < this.playerShipLocations[i].coordinates[j].length; k++) {
                    // hit
                    if (arraysAreEqual(coordinates, this.playerShipLocations[i].coordinates[j][k])) {
                        this.playerShipLocations[i].hit();
                        const sunkThisTurn = this.playerShipLocations[i].isSunk();
                        return [true, sunkThisTurn];
                    }
                    // miss
                    else {
                        continue;
                    }
                }
            }
        }
        return [false, false];
    }
}