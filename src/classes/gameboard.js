export default class Gameboard {
    constructor(playerShipLocations = [], computerShipLocations = [], playedTiles = new Set(), amountShips = 0) {
        this.playerShipLocations = playerShipLocations;
        this.computerShipLocations = computerShipLocations;
        this.playedTiles = playedTiles;
        this.amountShips = amountShips;
    }
    updatePlayerShipLocations(ship) {
        let shipCoordinates = [];
        for (let i = 0; i < ship.length; i++) {
            const row = parseInt(ship[i].parentNode.getAttribute("data-value"));
            const col = parseInt(ship[i].getAttribute("data-key"));
            const rowCol = [row, col];
            shipCoordinates.push(rowCol);
        }
        this.playerShipLocations.push(shipCoordinates);
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