export default class Gameboard {
    constructor(playerShipLocations = [], computerShipLocations = [], playedTiles = new Set()) {
        this.playerShipLocations = playerShipLocations;
        this.computerShipLocations = computerShipLocations;
        this.playedTiles = playedTiles;
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
    recieveAttack() {
        return this.shipLocations;
    }
}