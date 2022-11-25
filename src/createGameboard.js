export default function createGameboard() {
    const yourShips = document.querySelector(".your-ships");
    const firingArea = document.querySelector(".firing-area");
    for (let i = 0; i < 10; i++) {
        const yourRow = document.createElement("div");
        const firingRow = document.createElement("div");
        yourRow.classList.add("row");
        yourRow.setAttribute("data-key", `${i}`);
        firingRow.classList.add("row");
        firingRow.setAttribute("data-key", `${i}`);
        for (let j = 0; j < 10; j++) {
            const yourSquare = document.createElement("div");
            const firingSquare = document.createElement("div");
            yourSquare.classList.add("square");
            yourSquare.setAttribute("data-key", `${j}`);
            firingSquare.classList.add("square");
            firingSquare.setAttribute("data-key", `${j}`);
            yourRow.appendChild(yourSquare);
            firingRow.appendChild(firingSquare);
        }
        yourShips.appendChild(yourRow);
        firingArea.appendChild(firingRow);
    }
}