function countCharacters (string) {
    if (typeof string !== "string"){
        return undefined;
    }
    const cleanString = string.replace(/[^a-zа-я0-9]+/g, '');
    if (cleanString.length === 0){
        return undefined;
    }
    const result = {};
    const cleanArray = cleanString.split('');

    for (let i = 0; i < cleanArray.length; i++) {
        if (result[cleanArray[i]]){
            result[cleanArray[i]] += 1;
        } else {
            result[cleanArray[i]] = 1;
        }
    }

    return result;
}

countCharacters('sparrow')

module.exports = countCharacters;