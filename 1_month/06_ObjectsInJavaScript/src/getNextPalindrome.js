function getNextPalindrome(number) {
    if (!Number.isInteger(number)) {
        return undefined;
    }
    if (number <= 10) {
        return 11;
    }

    let result = getPalindrome(number);
    while (true){
        if (number < result){
            return result;
        }
        result = getPalindrome(number, true);
    }
}

function getPalindrome (number, upscale = false){
    let result;
    let stringView = number.toString();
    if (stringView.length % 2 === 0) {
        const middle = stringView.length / 2;
        const left = stringView.slice(0, middle);
        const right = stringView.slice(middle);

        if (upscale){
            let upscaleStr = Number.parseInt(left.split('').map(Number).join('')) + 1;
            upscaleStr = Number.parseInt(upscaleStr.toString() + right.split('').map(Number).join(''));
            result = getPalindrome(upscaleStr);
            return result
        }
        result = Number.parseInt(left + left.split('').reverse().join(''));
        return result;

    } else {
        const middle = Math.ceil(stringView.length / 2);
        const left = stringView.slice(0, middle - 1);
        const noReverse = stringView.slice(middle - 1, middle);
        const right = stringView.slice(middle);

        if (upscale){
            let upscaleStr = Number.parseInt((left + noReverse).split('').map(Number).join('')) + 1;
            upscaleStr = Number.parseInt(upscaleStr.toString() + right.split('').map(Number).join(''));
            result = getPalindrome(upscaleStr);
            return result
        }
        result = Number.parseInt(left + noReverse + left.split('').reverse().join(''));
        return result;
    }

}


module.exports = getNextPalindrome;