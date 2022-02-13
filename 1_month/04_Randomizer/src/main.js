const {getNodeValue, setDisabled, setTextContent, addListener, alertCall} = require('./utils')

window.onload = function () {
    init();
}

function reset(state) {
    state.randoms = [];
    state.randomLength = 5;
    state.randomNumber = 0;
    state.rangeMin = 0;
    state.rangeMax = 5;

    setTextContent('generated', 'Not generated yet');
    setDisabled('min', false);
    setDisabled('max', false);
    setDisabled('generate', false);
}

function generate(state) {

    if (state.randoms.length === 0) {
        let rangeMin = getNodeValue('min');
        let rangeMax = getNodeValue('max');
        if (isMinMaxValid(rangeMin, rangeMax)) {
            state.rangeMin = Number.parseInt(rangeMin);
            state.rangeMax = Number.parseInt(rangeMax);
        } else {
            alertCall('range must be logical, seriously');
            reset(state);
        }
        state.randomLength = state.rangeMax - state.rangeMin;
        setDisabled('min', true);
        setDisabled('max', true);
    }

    if (state.randoms.length === state.randomLength) {
        setDisabled('generate', true);
    } else {
        state.randomNumber = Math.round(Math.random() * (state.rangeMax - state.rangeMin));

        if (state.randoms.includes(state.randomNumber)) {

            generate(state);
        } else {

            state.randoms.push(state.randomNumber);
            setTextContent('generated', state.randomNumber.toString());
        }

    }
}

function isMinMaxValid(min, max) {
    min = Number.parseInt(min);
    max = Number.parseInt(max);

    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0 || max <= min) {
        return false;
    }
    return true;
}

function init() {
    const state = {
        randoms: [],
        randomLength: 5,
        randomNumber: 0,
        rangeMin: 0,
        rangeMax: 5
    }

    addListener('generate', 'click', generate.bind(null, state));
    addListener('reset', 'click', reset.bind(null, state));
}

module.exports = {reset, isMinMaxValid, init, generate}
