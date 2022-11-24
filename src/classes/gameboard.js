export default class Gameboard {
    constructor(shipLocations = [], playedTiles = new Set(), amountShips = 0) {
        this.shipLocations = shipLocations;
        this.playedTiles = playedTiles;
        this.amountShips = amountShips;
    }
    getShipLocations() {
        return this.shipLocations;
    }
    updatePlayedTiles() {
        return this.playedTiles;
    }
    getAmountShips() {
        return this.amountShips;
    }
    recieveAttack() {
        return this.shipLocations;
    }
}