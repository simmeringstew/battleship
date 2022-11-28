// classes to be used by the game

export default class Ship {
    constructor(length, squares, status) {
        this.length = length;
        this.squares = squares;
        this.health = length;
        this.status = status;
    }
    hit() {
        return this.health--;
    }
    isSunk() {
        if (this.health === 0) {
            this.status = true;
        }
    }
}