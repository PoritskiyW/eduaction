const {alertCall, attemptsPlus, inputValueGetter, inputValueSetter, setHTMLValue, refresh, addListener} = require('./utils');

function generate(state) {
    let guess = Number.parseInt(inputValueGetter('guess'), 10);
    //Guess validation
    if (!Number.isInteger(guess)) {
        alertCall('You\'re guess must be a integer');
        inputValueSetter('guess', '');
    } else if (guess < state.rangeMin || guess > state.rangeMax) {
        alertCall('You\'re out of range!');
        inputValueSetter('guess', '');
    } else {
        if (state.elapsed === 0) {
            if (guess === state.randomNumber) {
                setHTMLValue('dynamic-text', `Congratulations! You won this game in only ${state.elapsed}
 attempts.<br>Now, You can start over by clicking on EXIT button`);
                inputValueSetter('guess', '');
            } else {
                attemptsPlus(state);
                state.previousGuess = guess;
                inputValueSetter('guess', '');
            }
        } else if (state.elapsed < state.attempts) {
            if (guess === state.randomNumber) {
                setHTMLValue('dynamic-text', `Congratulations! You won this game in only ${state.elapsed}
 attempts.<br>Now, You can start over by clicking on EXIT button`);
                state.previousGuess = guess;
                inputValueSetter('guess', '');
            } else if (state.randomNumber - guess < state.randomNumber - state.previousGuess) {
                setHTMLValue('dynamic-text', `You are getting closer to our number. <br>
Think carefully, you have only ${state.attempts - state.elapsed} attempts to guess`);
                state.previousGuess = guess;
                inputValueSetter('guess', '');
            } else if (state.randomNumber - guess > state.randomNumber - state.previousGuess) {
                setHTMLValue('dynamic-text', `You are getting further from our number. <br>
Think carefully, you have only ${state.attempts - state.elapsed} attempts to guess`);
                state.previousGuess = guess;
                inputValueSetter('guess', '');
            }
        } else {
            setHTMLValue('dynamic-text', `You have lost a game.<br>
Now, You can start over by clicking on EXIT button`);
            inputValueSetter('guess', '');
        }
        attemptsPlus(state);
    }
}

function exit(state) {
    //Set setting to default and refresh
    state.attempts = 5;
    state.elapsed = 0;
    state.rangeMin = 0;
    state.rangeMax = 100;

    refresh(state);
}

document.addEventListener('DOMContentLoaded', function(){
    init();
})

function getRandomNumber(state) { //return, no tests
    state.randomNumber = Math.round(Math.random() * (state.rangeMax - state.rangeMin + 1)) + 1;
}

function settingsValidation (inputMin, inputMax, inputAttempt){
    if (!Number.isInteger(inputMin) || !Number.isInteger(inputMax) || !Number.isInteger(inputAttempt)) {
        alertCall('Range minimum, maximum and attempts quantity must be a integer');
        return false;
    } else if (inputMin < 0 || inputMin > 200) {
        alertCall('You can adjust minimum in 0-200 range');
        return false;
    } else if (inputMax < 0 || inputMax > 200) {
        alertCall('You can adjust maximum in 0-200 range');
        return false;
    } else if (inputAttempt < 1 || inputAttempt > 15) {
        alertCall('You can adjust attempts quantity in 1-15 range');
        return false;
    }
    return true;
}

function saveSettings(state) {
    let inputMin = Number.parseInt(inputValueGetter('min'), 10);
    let inputMax = Number.parseInt(inputValueGetter('max'), 10);
    let inputAttempt = Number.parseInt(inputValueGetter('attempts'), 10);

    //Settings validation
    if (settingsValidation(inputMin, inputMax, inputAttempt)) {
        state.rangeMin = inputMin;
        state.rangeMax = inputMax;
        state.attempts = inputAttempt;
        refresh(state);
    }
}

function init() {
    const state = {
        randomNumber: 0,
        attempts: 5,
        elapsed: 0,
        rangeMin: 0,
        rangeMax: 100,
        previousGuess: 0
    };

    refresh(state);
    getRandomNumber(state);
    addListener('exit', 'click', exit.bind(null, state));
    addListener('generate', 'click', generate.bind(null, state));
    addListener('save', 'click', saveSettings.bind(null, state));
}


module.exports = {generate, exit, saveSettings, settingsValidation, init};