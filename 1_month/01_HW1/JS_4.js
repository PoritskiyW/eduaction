//HW Task 1
function getDayName (dayNumber) {

    switch (dayNumber){
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
    }
}

//HW Task 2
function getStringView (number) {

    let result = [];
    let num = number.toString();

    //Cut leading zeros
    num = num.replace(/^0+/, '');

    let ln = num.length;

    if (ln > 12) {
        return "Number is too big";
    } else  if (number === 0) {
        return "zero";
    }

    let counter = 0;
    let processed = false;

    while (counter < 4 && !processed) {

        //cut 3 symbols right side
        let left = num.length - counter * 3 - 3;
        let right = num.length - counter * 3;

        if (left < 0 && right > 0) {
            processed = true;
            left = 0;
        }
        if (left < 0 && right <= 0) break;

        let numPart = num.slice(left, right);

        if (counter > 0) {
            result = getScales(result, counter);
        }

        result = getDigits(result, numPart);

        counter++;
    }

    let resultStr = result.reverse().join(' ');
    return resultStr.replaceAll(' - ', '-');

}

//Support for getStringView
function getDigits (result, number) {

    let digits = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let digit = Number.parseInt(number.slice(number.length - 2, number.length));

    if (digit < digits.length || digit % 10 === 0) {
        result.push(digits[digit]);
    } else {

        let digit = Number.parseInt(number.slice(number.length - 1, number.length));
        let tie = Number.parseInt(number.slice(number.length - 2, number.length - 1));

        result.push(digits[digit]);
        result.push('-')
        result = getTies(result, tie);
    }

    if (number.length === 3) {

        let hundreds = Number.parseInt(number[0]);
        result.push('hundred');
        result.push(digits[hundreds]);
    }


    return result;
}

function getTies (result, number) {

    let ties = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if (number === 0) {
        return result;
    } else {
        result.push(ties[number]);
    }

    return result;
}

function getScales (result, number) {

    let scales = ['', 'thousand', 'million', 'billion'];

    result.push(scales[number]);

    return result;
}

//HW Task 3
function getNumberView (stringNumber) {

    let digits = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let ties = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let scales = {'thousand': 1000, 'million': 1000000, 'billion': 1000000000};

    stringNumber = stringNumber.replaceAll('-', ' ');
    let arr = stringNumber.split(' ');
    let result = 0;
    let partResult = 0;

    for (let i = 0; i < arr.length; i++) {

        if (digits.includes(arr[i])){
            partResult += digits.indexOf(arr[i]);
        } else if (arr[i] === 'hundred') {
            partResult = partResult * 100;
        } else if (ties.includes(arr[i])) {
            partResult += ties.indexOf(arr[i]) * 10;
        } else if (scales.hasOwnProperty(arr[i])) {

            partResult = partResult * scales[arr[i]];

            result += partResult;
            partResult = 0;
        }
    }

    if (partResult !== 0) {
        result += partResult;
    }

    return result;
}


//HW Task 4
function getCartesianDistance (x1, x2, y1, y2) {

    return Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
}



exports.getDayName = getDayName;
exports.getStringView = getStringView;
exports.getNumberView = getNumberView;
exports.getCartesianDistance = getCartesianDistance;

