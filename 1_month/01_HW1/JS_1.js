
//HW Task 1
function isEven (a, b) {
    if ((a % 2) === 0) {
        return a * b;
    } else {
        return a + b;
    }
}

//HW Task 2
function getQuarter (x, y) {
    if(x > 0 && y > 0){
        return "1";
    } else if (x < 0 && y > 0) {
        return "2";
    } else if (x < 0 && y < 0) {
        return "3";
    } else if ( x > 0 && y < 0) {
        return "4";
    } else if (x === 0 && y > 0) {
        return "1 & 2";
    } else if (x === 0 && y < 0) {
        return "3 & 4"
    } else if (y === 0 && x > 0) {
        return "1 & 4";
    } else if (y === 0 && x < 0) {
        return "3 & 2"
    } else {
        return "coordinate start";
    }
}

//HW Task 3
function sumPositive (a, b, c) {

    let result = 0;

    if(a > 0) {
        result += a;
    }
    if(b > 0) {
        result += b;
    }
    if (c > 0) {
        result += c;
    }

    return result;
}


//HW Task 4
function countExpression (a, b, c) {

    let sum = a + b + c;
    let multiply = a * b * c;

    if (sum >= multiply) {
        return sum + 3;
    } else {
        return multiply + 3;
    }
}

//HW Task 5
function getMark (rating) {

    //get rid of negative ratings
    if (rating < 0) {
        return "rating must be equal or higher than 0";
    }

    if (rating <= 19) {
        return "F";
    } else if (rating <= 39 && rating > 19) {
        return "E";
    } else if (rating <= 59 && rating > 39) {
        return "D";
    } else if (rating <= 74 && rating > 59) {
        return "C";
    } else if (rating <= 89 && rating > 74) {
        return "B";
    } else if (rating <= 100 && rating > 89) {
        return "A";
    }
}



exports.isEven = isEven;
exports.getQuarter = getQuarter;
exports.sumPositive = sumPositive;
exports.countExpression = countExpression;
exports.getMark = getMark;







