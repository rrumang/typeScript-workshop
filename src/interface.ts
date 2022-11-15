// 인터페이스는 행위를 기술
interface TV {
    turnOn();
    turnOff();
}

const myTv : TV = {
    turnOn() {
        throw new Error("Function not implemented.");
    },
    turnOff() {
        throw new Error("Function not implemented.");
    }
}

function tryTrunOn(tv: TV) {
    tv.turnOn();
}

tryTrunOn(myTv);

// 타입스크립트에서 인터페이스를 많이 쓰는 예제
interface Cell {
    row: number;
    col: number;
    piece?: Piece; // ?를 붙이면 있을수도 있고 없을수도 있는 옵셔널한 값으로 만들어준다.
}

interface Piece {
    move(from: Cell, to: Cell) : boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            /*cells.push({
                row: row,
                col: col
            })*/
            // 변수명이 같을경우엔 이렇게 바꿔주면 간단하게 쓸수 있다.
            cells.push({row, col});
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from:Cell, to:Cell) {
        return true;    
    }
}

// 인터페이스를 사용함으로써 코드를 견고히 할 수 있다.
// 변수명을 지정함으로써 어떠한 기능을하는지 가늠할수 있고, 강제되기에 실수를 줄인다.
// 자바스크립트로 변환할 경우 인터페이스는 사라지기 때문에 인터페이스의 갯수에 대한 부담은 가질 필요가 없다.
