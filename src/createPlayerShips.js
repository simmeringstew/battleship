export default function createPlayerShips() {
    const two = document.querySelectorAll(".two");
    const three = document.querySelectorAll(".three");
    const four = document.querySelectorAll(".four");
    const six = document.querySelector(".six");
    two.forEach((ship) => {
        for (let i = 0; i < 2; i++) {
            const sqaure = document.createElement("div");
            sqaure.classList.add("square");
            sqaure.classList.add("ship-piece");
            ship.appendChild(sqaure);
        }
    });
    three.forEach((ship) => {
        for (let i = 0; i < 3; i++) {
            const sqaure = document.createElement("div");
            sqaure.classList.add("square");
            sqaure.classList.add("ship-piece");
            ship.appendChild(sqaure);
        }
    });
    four.forEach((ship) => {
        for (let i = 0; i < 4; i++) {
            const sqaure = document.createElement("div");
            sqaure.classList.add("square");
            sqaure.classList.add("ship-piece");
            ship.appendChild(sqaure);
        }
    });
    for (let i = 0; i < 6; i++) {
        const sqaure = document.createElement("div");
        sqaure.classList.add("square");
        sqaure.classList.add("ship-piece");
        six.appendChild(sqaure);
    }
}