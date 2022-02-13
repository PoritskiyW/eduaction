
function allBlack() {

    let result = ``;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            result = result + '*';

            result = result + '  ';
        }

        result = result + '\n';
    }

    return result;
}

function blackBorder() {

    let result = ``;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (i === 0 || i === 6){
                result = result + '*';
            } else {
                if (j === 0 || j === 6) {
                    result = result + '*';
                } else {
                    result = result + ' ';
                }
            }

            result = result + '  ';
        }

        result = result + '\n';
    }

    return result;
}

function triangle1() {

    let result = ``;
    let index = 6;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (i === 0){
                result = result + '*';
            } else {
                if (j === 0 || j === index) {
                    result = result + '*';
                } else {
                    result = result + ' ';
                }
            }

            result = result + '  ';
        }

        result = result + '\n';
        index = index - 1;
    }

    return result;
}

function triangle2() {

    let result = ``;
    let index = 0;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (i === 6){
                result = result + '*';
            } else {
                if (j === 0 || j === index) {
                    result = result + '*';
                } else {
                    result = result + ' ';
                }
            }

            result = result + '  ';
        }

        result = result + '\n';
        index = index + 1;
    }

    return result;
}

function triangle3() {

    let result = ``;
    let index = 6;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (i === 6){
                result = result + '*';
            } else {
                if (j === 6 || j === index) {
                    result = result + '*';
                } else {
                    result = result + ' ';
                }
            }

            result = result + '  ';
        }

        result = result + '\n';
        index = index - 1;
    }

    return result;
}

function triangle4() {

    let result = ``;
    let index = 0;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (i === 0){
                result = result + '*';
            } else {
                if (j === 6 || j === index) {
                    result = result + '*';
                } else {
                    result = result + ' ';
                }
            }

            result = result + '  ';
        }

        result = result + '\n';
        index = index + 1;
    }

    return result;
}

function cross () {

    let result = ``;
    let left = 0;
    let right = 6;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (j ===  left + i || j === right - i) {

                result = result + '*'
            } else {
                result = result + ' '
            }


            result = result + '  ';
        }

        result = result + '\n';
    }

    return result;

}

function littleTriangle1 () {

    let result = ``;
    let left = 0;
    let right = 6;

    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (i === 0) {

                result = result + '*';
            } else {

                if ((j === left + i || j === right - i) && left + i <= right - i) {

                    result = result + '*';
                } else {
                    result = result + ' ';
                }
            }
            result = result + '  ';
        }

        result = result + '\n';
    }

    return result;

}


function littleTriangle2 () {

    let result = ``;
    let left = 0;
    let right = 6;
a
    for (let i = 0; i < 7; i++) {

        for (let j = 0; j < 7; j++) {

            if (i === 6) {

                result = result + '*';
            } else {

                if ((j === left + i || j === right - i) && left + i >= right - i) {

                    result = result + '*';
                } else {
                    result = result + ' ';
                }
            }
            result = result + '  ';
        }

        result = result + '\n';
    }

    return result;

}


