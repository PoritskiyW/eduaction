
//HW Task 1
function getSumAndQuantityOfEven () {

    let result = {
        sum: 0,
        quantity: 0,
    };

    let max = 100;

    for (let i = 0; i < max; i++) {
        if (i % 2 === 0) {
            result.sum = + i;
            result.quantity += 1;
        }
    }

    return result;
}

//HW Task 2
function isPrime (number) {

    let prime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }

    return prime;
}

//HW Task 3
//Selection
function getRootSelection (number) {

    let previousDiff = 0;

    for (let i = 0; i < number; i++) {
        if (i * i < number) {
            previousDiff = number - i * i;
        } else if (i * i === number) {
            return i;
        } else {
            if ((number - i * i) > previousDiff) {
                return  i - 1;
            } else {
                return i;
            }
        }
    }
}

//Binary search
function getRootBinary (number) {

    let bottom = 0;
    let top = number;

    while (top - bottom >= 1) {

        if (top - bottom === 1){
            return top;
        }

        let mid = ((top - bottom) / 2) + bottom;
        let flooredMid = mid - (mid % 1);

        if (flooredMid * flooredMid === number || (number - flooredMid * flooredMid < 1 && number - flooredMid * flooredMid > 0)) {
            return flooredMid;
        } else if (flooredMid * flooredMid > number) {
            top = flooredMid;
        } else if (flooredMid * flooredMid < number) {
            bottom = flooredMid;
        }
    }
}

//HW Task 4
function getFactorial (number) {

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    return result;
}

//HW Task 5
function getSumOfNumber (number) {

    let numberArray = number.toString().split("");
    let result = 0;

    for (let i = 0; i < numberArray.length; i++) {
        result += Number.parseInt(numberArray[i]);
    }

    return result;
}

//HW Task 6
function reverseNumber (number) {

    let numberArray = number.toString().split("");
    let result = [];

    for (let i = numberArray.length - 1; i >= 0; i--) {
        result.push(numberArray[i]);
    }

    result = result.join("");

    return Number.parseInt(result);
}



exports.getSumAndQuantityOfEven = getSumAndQuantityOfEven;
exports.isPrime = isPrime;
exports.getRootSelection = getRootSelection;
exports.getRootBinary = getRootBinary;
exports.getFactorial = getFactorial;
exports.getSumOfNumber = getSumOfNumber;
exports.reverseNumber = reverseNumber;



