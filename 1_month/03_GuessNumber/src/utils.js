function inputValueSetter(id, value) {
    const input = document.getElementById(id);
    if (input) {
        input.value = value;
        return true;
    }
    return false;
}

function setHTMLValue(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML = value;
        return true;
    }
    return false;
}

function inputValueGetter(id) {
    const input = document.getElementById(id);
    if (input){
        return input.value;
    }
    return '';
}

function attemptsPlus(state){
    state.elapsed++;
}

function alertCall(text) {
    alert(text);
}

function refresh(state) {
    //text adjustments + game refresh
    document.getElementById('min-span').textContent = state.rangeMin.toString();
    document.getElementById('max-span').textContent = state.rangeMax.toString();
    document.getElementById('dynamic-text').innerHTML = `You have ${state.attempts} attempts to guess it. <br>
Input you're number below and click GENERATE button or adjust rules of a game for yourself`;
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    document.getElementById('attempts').value = '';
}

function addListener (id, eventType, callback){
    const node = document.getElementById(id);
    if (node){
        node.addEventListener(eventType, callback);
    }
}

// window.inputValueSetter = inputValueSetter;
// window.setHTMLValue = setHTMLValue;
// window.inputValueGetter = inputValueGetter;
// window.attemptsPlus = attemptsPlus;
// window.alertCall = alertCall;

module.exports = {inputValueSetter, setHTMLValue, inputValueGetter, attemptsPlus, alertCall, refresh, addListener};