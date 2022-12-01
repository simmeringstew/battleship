import Ship from "../classes/ship.js";

test("Is initialized", () => {
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]];
    const ship = new Ship(5, undefined, coordinates, false);
    expect(ship.length).toBe(5);
    expect(ship.squares).toBe(undefined);
    expect(ship.coordinates).toEqual(coordinates);
    expect(ship.health).toBe(5);
    expect(ship.status).toBe(false);
});

test("Computer is creating a ship", () => {
    const ship = new Ship(3, undefined, [], false);
    const shipData = [[0, 1], [0, 2], [0, 3]];
    ship.addCoordinates(shipData);
    expect(ship.coordinates).toStrictEqual([[[0, 1], [0, 2], [0, 3]]]);
});

test("Player is creating a ship", () => {
    const squares = "Figure this out";
    const ship = new Ship(3, squares, [], false);
    ship.addCoordinates(ship.squares);
    expect(ship.coordinates).toBe([[[0, 1], [0, 2], [0, 3]]]);
});

test("Getting hit lowers health", () => {
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]];
    const ship = new Ship(5, undefined, coordinates, false);
    ship.hit();
    expect(ship.health).toBe(4);
});

test("Ship sinks when health hits 0", () => {
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]];
    const ship = new Ship(5, undefined, coordinates, false);
    ship.health = ship.health - 5;
    const result = ship.isSunk();
    expect(result).toBe(true);
});