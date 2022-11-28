export default function createGameboard() {
    const yourShips = document.querySelector(".your-ships");
    const firingArea = document.querySelector(".firing-area");
    for (let i = 0; i < 10; i++) {
        const yourRow = document.createElement("div");
        const firingRow = document.createElement("div");
        yourRow.classList.add("row");
        yourRow.setAttribute("data-value", `${i}`);
        firingRow.classList.add("row");
        firingRow.setAttribute("data-value", `${i}`);
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
    const parentRow = currentSquare.parentNode;
    if (!dragging.classList.contains("vertical")) {
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
            else {
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
        try {
            const shipBoard = document.querySelector(".your-ships");
            const currentRowIndex = parseInt(parentRow.getAttribute("data-value"));
            if (length === 2) {
                const previousRow = shipBoard.querySelector(`[data-value="${currentRowIndex - 1}"]`);
                const previousSquare = previousRow.querySelector(`[data-key="${index}"]`);
                squares = [previousSquare, currentSquare];
                placeShips(squares, dragging);
            }
            else if (length === 3) {
                const previousRow = shipBoard.querySelector(`[data-value="${currentRowIndex - 1}"]`);
                const nextRow = shipBoard.querySelector(`[data-value="${currentRowIndex + 1}"]`);
                const previousSquare = previousRow.querySelector(`[data-key="${index}"]`);
                const nextSquare = nextRow.querySelector(`[data-key="${index}"]`);
                squares = [previousSquare, currentSquare, nextSquare];
                placeShips(squares, dragging);
            }
            else if (length === 4) {
                const secondPreviousRow = shipBoard.querySelector(`[data-value="${currentRowIndex - 2}"]`);
                const previousRow = shipBoard.querySelector(`[data-value="${currentRowIndex - 1}"]`);
                const nextRow = shipBoard.querySelector(`[data-value="${currentRowIndex + 1}"]`);
                const secondPreviousSquare = secondPreviousRow.querySelector(`[data-key="${index}"]`);
                const previousSquare = previousRow.querySelector(`[data-key="${index}"]`);
                const nextSquare = nextRow.querySelector(`[data-key="${index}"]`);
                squares = [secondPreviousSquare, previousSquare, currentSquare, nextSquare];
                placeShips(squares, dragging);
            }
            else {
                const secondPreviousRow = shipBoard.querySelector(`[data-value="${currentRowIndex - 2}"]`);
                const previousRow = shipBoard.querySelector(`[data-value="${currentRowIndex - 1}"]`);
                const nextRow = shipBoard.querySelector(`[data-value="${currentRowIndex + 1}"]`);
                const secondNextRow = shipBoard.querySelector(`[data-value="${currentRowIndex + 2}"]`);
                const secondPreviousSquare = secondPreviousRow.querySelector(`[data-key="${index}"]`);
                const previousSquare = previousRow.querySelector(`[data-key="${index}"]`);
                const nextSquare = nextRow.querySelector(`[data-key="${index}"]`);
                const secondNextSquare = secondNextRow.querySelector(`[data-key="${index}"]`);
                squares = [secondPreviousSquare, previousSquare, currentSquare, nextSquare, secondNextSquare];
                placeShips(squares, dragging);
            }
        }
        catch (e) {
            if (e instanceof TypeError) {
                return;
            }
        }
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