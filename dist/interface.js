const myTv = {
    turnOn() {
        throw new Error("Function not implemented.");
    },
    turnOff() {
        throw new Error("Function not implemented.");
    }
};
function tryTrunOn(tv) {
    tv.turnOn();
}
tryTrunOn(myTv);
function createBoard() {
    const cells = [];
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            cells.push({ row, col });
        }
    }
    return cells;
}
const board = createBoard();
board[0].piece = {
    move(from, to) {
        return true;
    }
};
//# sourceMappingURL=interface.js.map