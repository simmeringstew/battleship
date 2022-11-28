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
            yourSquare.classList.add("player-square");
            yourSquare.setAttribute("data-key", `${j}`);
            yourSquare.addEventListener("dragover", (e) => {
                e.preventDefault();
            });
            yourSquare.addEventListener("drop", (e) => {
                e.preventDefault();
                getShipData(yourSquare);
            });
            firingSquare.classList.add("firing-square");
            firingSquare.setAttribute("data-key", `${j}`);
            yourRow.appendChild(yourSquare);
            firingRow.appendChild(firingSquare);
        }
        yourShips.appendChild(yourRow);
        firingArea.appendChild(firingRow);
    }
}

function getShipData(currentSquare) {
    let squares = [];
    const dragging = document.querySelector(".dragging");
    const length = parseInt(dragging.getAttribute("data-length"));
    const index = parseInt(currentSquare.getAttribute("data-key"));
    if (!dragging.classList.contains("vertical")) {
        const parentRow = currentSquare.parentNode;
        try {
            if (length === 2) {
                const neighbor = parentRow.querySelector(`[data-key="${index - 1}"]`);
                squares = [neighbor, currentSquare];
                placeShips(squares, dragging);
            }
            else if (length === 3) {
                const previousNeighbor = parentRow.querySelector(`[data-key="${index - 1}"]`);
                const nextNeighbor = parentRow.querySelector(`[data-key="${index + 1}"]`);
                squares = [previousNeighbor, currentSquare, nextNeighbor];
                placeShips(squares, dragging);
            }
            else if (length === 4) {
                const secondPreviousNeighbor = parentRow.querySelector(`[data-key="${index - 2}"]`);
                const previousNeighbor = parentRow.querySelector(`[data-key="${index - 1}"]`);
                const nextNeighbor = parentRow.querySelector(`[data-key="${index + 1}"]`);
                squares = [secondPreviousNeighbor, previousNeighbor, currentSquare, nextNeighbor];
                placeShips(squares, dragging);
            }
            else if (length === 5) {
                const secondPreviousNeighbor = parentRow.querySelector(`[data-key="${index - 2}"]`);
                const previousNeighbor = parentRow.querySelector(`[data-key="${index - 1}"]`);
                const nextNeighbor = parentRow.querySelector(`[data-key="${index + 1}"]`);
                const secondNextNeighbor = parentRow.querySelector(`[data-key="${index + 2}"]`);
                squares = [secondPreviousNeighbor, previousNeighbor, currentSquare, nextNeighbor, secondNextNeighbor];
                placeShips(squares, dragging);
            }
        }
        catch (e) {
            if (e instanceof TypeError) {
                return;
            }
        }
    }
    else {

    }
}

function placeShips(squares, dragging) {
    let notValid = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains("played-ship")) {
            notValid++;
        }
    }
    if (notValid === 0) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].classList.add("ship-piece");
            squares[i].classList.add("played-ship");
            dragging.remove();
        }
    }
    else {
        return;
    }
}