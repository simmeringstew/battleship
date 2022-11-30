// classes to be used by the game

export default class Ship {
    constructor(length, squares = undefined, coordinates = [], status = false) {
        this.length = length;
        this.squares = squares;
        this.coordinates = coordinates;
        this.health = length;
        this.status = status;
    }
    addCoordinates(shipData) {
        if (this.squares !== undefined) {
            let shipCoordinates = [];
            for (let i = 0; i < shipData.length; i++) {
                const row = parseInt(shipData[i].parentNode.getAttribute("data-value"));
                const col = parseInt(shipData[i].getAttribute("data-key"));
                const rowCol = [row, col];
                shipCoordinates.push(rowCol);
        }
        this.coordinates.push(shipCoordinates);
        }
        else {
            this.coordinates.push(shipData);
        }
    }
    hit() {
        this.health--;
    }
    isSunk() {
        if (this.health === 0) {
            this.status = true;
            return true;
        }
        else {
            return false;
        }
    }
}