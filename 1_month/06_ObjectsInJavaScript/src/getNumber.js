
function getNumber (array) {
    if (!Array.isArray(array) || array.length < 3) {
        return undefined;
    }

    let evens = [];
    let odds = [];
    for (let i = 0; i <array.length; i++) {
        if (Number.isInteger(array[i])){
            if (array[i] % 2 === 0){
                evens.push(array[i]);
            } else {
                odds.push(array[i]);
            }

            if(evens.length > 1 && odds.length > 0){
                return odds[0];
            } else if (odds.length > 1 && evens.length > 0){
                return evens[0];
            }
        }
    }
    return undefined;
}

module.exports = getNumber;