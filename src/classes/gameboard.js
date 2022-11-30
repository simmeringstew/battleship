import { arraysAreEqual } from "../helperFunctions.js";

export default class Gameboard {
    constructor(playerShipLocations = [], computerShipLocations = [], playedTiles = new Set(), numberOfPlayerShips = 10, numberOfComputerShips = 10) {
        this.playerShipLocations = playerShipLocations;
        this.computerShipLocations = computerShipLocations;
        this.playedTiles = playedTiles;
        this.numberOfPlayerShips = numberOfPlayerShips;
        this.numberOfComputerShips = numberOfComputerShips;
    }
    updatePlayerShipLocations(ship) {
        this.playerShipLocations.push(ship);
    }
    updateComputerShipLocations(ship) {
        this.computerShipLocations.push(ship);
    }
    updatePlayedTiles() {
        return this.playedTiles;
    }
    updateNumberOfPlayerShips() {
        return this.numberOfPlayerShips;
    }
    updateNumberOfComputerShips() {
        return this.numberOfComputerShips;
    }
    recievePlayerAttack(coordinates) {
        for (let i = 0; i < this.computerShipLocations.length; i++) {
            for (let j = 0; j < this.computerShipLocations[i].coordinates.length; j++) {
                for (let k = 0; k < this.computerShipLocations[i].coordinates[j].length; k++) {
                    // hit
                    if (arraysAreEqual(coordinates, this.computerShipLocations[i].coordinates[j][k])) {
                        this.computerShipLocations[i].hit();
                        this.computerShipLocations[i].isSunk();
                        return true;
                    }
                    // miss
                    else {
                        continue;
                    }
                }
            }
        }
        return false;
    }
    revieveComputerAttack(coordinates) {

    }
}