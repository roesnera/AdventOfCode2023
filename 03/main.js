const fs = require("fs");

const testData = fs.readFileSync("./test.txt", "utf8").split("\r\n");

console.log(testData);

function getAdjacents(x, y, data) {
  const adjacents = [];
  console.log(x,y);
  let noUp = false, noDown = false, noLeft = false, noRight = false;

  const adjFns = {
    up: () => {
      if (!noUp) {
        adjacents.push(data[x - 1][y]);
      }
    },
    down: () => {
      if (!noDown) {
        adjacents.push(data[x + 1][y]);
      }
    },
    left: () => {
      if (!noLeft) {
        adjacents.push(data[x][y - 1]);
      }
    },
    right: () => {
      if (!noRight) {
        adjacents.push(data[x][y + 1]);
      }
    },
    upLeft: () => {
      if (!noUp && !noLeft) {
        adjacents.push(data[x - 1][y - 1]);
      }
    },
    upRight: () => {
      if (!noUp && !noRight) {
        adjacents.push(data[x - 1][y + 1]);
      }
    },
    downLeft: () => {
      if (!noDown && !noLeft) {
        adjacents.push(data[x + 1][y - 1]);
      }
    },
    downRight: () => {
      if (!noDown && !noRight) {
        adjacents.push(data[x + 1][y + 1]);
      }
    },
  };
  if (x === 0) {
    console.log("no up");
    noUp = true;
  }
  if (x === data.length - 1) {
    console.log("no down");
    noDown = true;
  }
  if (y === data[0].length - 1) {
    console.log("no right");
    noRight = true;
  }
  if (y === 0) {
    console.log("no left");
    noLeft = true;
  }
//   console.log(adjFns);
  for (const fn of Object.values(adjFns)){
    fn();
  }
  return adjacents;
}

function iterOverInput(input) {
    // console.log(input);
  for (let x in input) {
    // console.log(input[x]);
    for (let y in input[x]) {
        // console.log(input[x][y])
        const adjacents = getAdjacents(parseInt(x), parseInt(y), input);
        console.log(adjacents);
        const adjacentNumbers = grabNumbers(adjacents);
    }
  }
}

class NumberBlock {
    constructor(number, row, column, span){
        this.number = number;
        this.row = row;
        this.column = column;
        this.span = span;
        this.isCounted = false;
        this.includedCoords = [];
        calculateIncluded();
    }
    calculateIncluded() {
        for (let i = 0; i < this.span; i++) {
            this.includedCoords.push([this.row, this.column + i]);
        }
    }
}

class AllNumberContainer {
    constructor() {
        this.allNumbers = [];
        this.includedNumbers = [];
    }
    addNumberBlock(numberBlock) {
        this.allNumbers.push(numberBlock);
    }
    checkIncludedNumbers() {
        for(const numberBlock of this.allNumbers) {
        }
    }
}



iterOverInput(testData);
