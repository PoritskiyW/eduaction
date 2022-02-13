function getSum(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== "string" || str1.length === 0 || str2.length === 0) {
        return undefined;
    }

    const symbols1 = str1.split('').map(Number).reverse();
    const symbols2 = str2.split('').map(Number).reverse();
    let biggerArr;
    let smallerArr;

    if (symbols1.length > symbols2.length){
        biggerArr = symbols1;
        smallerArr = symbols2;
    } else {
        biggerArr = symbols2;
        smallerArr = symbols1;
    }

    let result = [];
    for (let i = 0; i < biggerArr.length; i++) {

        if (smallerArr[i]){
            const sum = smallerArr[i] + biggerArr[i];
            if (sum > 9){
                if (result[i]){
                    result[i] += sum - 10;
                    result.push(1);
                } else {
                    result.push(sum - 10);
                    result.push(1);
                }
            } else {
                result = pushCheck(result, sum, i);
            }
        } else {
            result = pushCheck(result, biggerArr[i], i);
        }
    }

    return String(result.reverse().join(''));
}

function pushCheck (result, sum, i) {
    if (result[i]){
        result[i] += sum;
        if (result[i] > 9){
            result[i] = 0;
            result.push(1);
        }
    } else {
        result.push(sum);
    }
    return result;
}

module.exports = getSum;