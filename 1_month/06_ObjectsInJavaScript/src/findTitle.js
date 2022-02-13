
function findTitle (array, titleStr) {

    if (!Array.isArray(array) || typeof titleStr !== 'string' || array.length === 0){
        return undefined;
    }

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object'){
            if (array[i].hasOwnProperty('title')){
                if (array[i].title.toLowerCase().includes(titleStr.toLowerCase())){
                    result.push(array[i]);
                }
            }
        }
    }
    return result;
}


module.exports = findTitle;