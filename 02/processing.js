const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').split('\r\n');
const testData = fs.readFileSync('./testData.txt', 'utf8').split('\r\n');

processInput(input);
processInput(testData);

function processInput(input) {
    for (let game in input) {
        input[game] = input[game].substring(input[game].indexOf(":") + 2);
        const arr = input[game].split("; ");
        input[game] = arr;
        // console.log(input[str]);
        for (let example in input[game]) {
            input[game][example] = input[game][example].split(", ");
            // console.log(input[str][example]);
            for (let datum in input[game][example]) {
                input[game][example][datum] = [parseInt(input[game][example][datum]), input[game][example][datum].substring(input[game][example][datum].indexOf(" ") + 1)];
                // console.log(input[game][example][datum]);
            }
        }
    }
}

function isGamePossible(gameStats, maximums) {
    // console.log(gameStats);
    for(const round in gameStats) {
        // console.log(gameStats[round]);
        for(const datum in gameStats[round]) {
            // console.log(gameStats[round][datum]);
            if(gameStats[round][datum][0] > maximums[gameStats[round][datum][1]]) {
                return false;
            }
        }
    }
    return true;
}

const maximums = {
    red: 12,
    green: 13,
    blue: 14
}

function sumImpossibleGames(gameArray, maximums) {
    let sum = 0;
    for(const game in input) {
        const isPoss = isGamePossible(input[game], maximums)
        console.log(isPoss);
        if(isPoss) {
            const gameNo = parseInt(game) + 1;
            sum += gameNo;
            console.log(gameNo);
        }
    }
    console.log(sum);
}

// solution to first problem
// sumImpossibleGames(input, maximums);

function minOfEachToPlay(gameArray) {
    const colorMaxTracker = {
        red: 0,
        blue: 0,
        green: 0
    }
    for(const round of gameArray){
        console.log(round);
        for(const datum of round){
            if(datum[0] > colorMaxTracker[datum[1]]) {
                colorMaxTracker[datum[1]] = datum[0];
            }
        }
    }
    return colorMaxTracker;
}

function getGamePower(colorMaxTracker) {
    return colorMaxTracker.red * colorMaxTracker.blue * colorMaxTracker.green;
}

function getPowerSum(input) {
    let sum = 0;
    for(const game of input) {
        const colorMaxTracker = minOfEachToPlay(game);
        sum += getGamePower(colorMaxTracker);
    }
    return sum;
}

// solution to second problem
// console.log(getPowerSum(input));