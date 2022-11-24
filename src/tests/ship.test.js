import Ship from "../classes/ship.js";

test("Is initialized", () => {
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]];
    const ship = new Ship(6, coordinates, false);
    expect(ship.length).toBe(6);
    expect(ship.coordinates).toEqual(coordinates);
    expect(ship.health).toBe(6);
    expect(ship.status).toBe(false);
});

test("Getting hit lowers health", () => {
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]];
    const ship = new Ship(6, coordinates, false);
    const spy = jest.spyOn(ship, "hit").mockImplementation(() => {
        expect(ship.health).toBe(5);
        spy.mockRestore();
    });
});

test("Ship sinks when health hits 0", () => {
    const coordinates = [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5]];
    const ship = new Ship(6, coordinates, false);
    const spy = jest.spyOn(ship, "isSunk").mockImplementation(() => {
        ship.health - 6;
        expect(ship.status).toBe(true);
        spy.mockRestore();
    });
});