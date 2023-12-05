function processText(inputString) {
    const numberArr = [0,1,2,3,4,5,6,7,8,9];

    firstLettersArr = ["z", "o", "t", "f", "s", "e", "n"];
    const numbers = {
        firstNumber: undefined,
        lastNumber: undefined
    }
    const inputStringArr = Array.from(inputString);
    for (let i = 0; i < inputStringArr.length; i++) {
        if (numberArr.includes(parseInt(inputStringArr[i]))) {
            manageNumbers(numbers, inputStringArr[i]);
        } else if (
            firstLettersArr.includes(inputStringArr[i])
        ) {
            switch (inputStringArr[i]) {
                case "z":
                    inputString.substring(i, i+4)==="zero" ? manageNumbers(numbers, 0) : null;
                break;
                case "o":
                    inputString.substring(i, i+3)==="one" ? manageNumbers(numbers, 1) : null;
                break;
                case "t":
                    inputString.substring(i, i+3)==="two" ? manageNumbers(numbers, 2) : inputString.substring(i, i+5)==="three" ? manageNumbers(numbers, 3) : null;
                break;
                case "f":
                    inputString.substring(i, i+4)==="four" ? manageNumbers(numbers, 4) : inputString.substring(i, i+4)==="five" ? manageNumbers(numbers, 5) : null;
                break;
                case "s":
                    inputString.substring(i, i+3)==="six" ? manageNumbers(numbers, 6) : inputString.substring(i, i+5)==="seven" ? manageNumbers(numbers, 7) : null;
                break;
                case "e":
                    inputString.substring(i, i+5)==="eight" ? manageNumbers(numbers, 8) : null;
                break;
                case "n":
                    inputString.substring(i, i+4)==="nine" ? manageNumbers(numbers, 9) : null;
                break;
            }
        }
    }
    return ""+parseInt(numbers.firstNumber) + parseInt(numbers.lastNumber);
}

function manageNumbers(numbers, newVal) {
    if(!numbers.firstNumber){
        numbers.firstNumber = newVal;
    }
    numbers.lastNumber = newVal;
}

function iterateOverCalibrationDoc(calibrationDoc) {
    let sum = 0;
    for(let line of calibrationDoc) {
        sum += parseInt(processText(line));
    }
    console.log(sum);
}

const fs = require("fs");

const calibrationDoc = fs.readFileSync("./input.txt", "utf8").split("\n");

iterateOverCalibrationDoc(calibrationDoc);