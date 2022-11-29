export default class Gameboard {
    constructor(playerShipLocations = [], computerShipLocations = [], playedTiles = new Set()) {
        this.playerShipLocations = playerShipLocations;
        this.computerShipLocations = computerShipLocations;
        this.playedTiles = playedTiles;
    }
    updatePlayerShipLocations(ship) {
        this.playerShipLocations.push(ship);
        console.log(this.playerShipLocations);
    }
    updateComputerShipLocations(ship) {
        
    }
    updatePlayedTiles() {
        return this.playedTiles;
    }
    recieveAttack() {
        return this.shipLocations;
    }
}