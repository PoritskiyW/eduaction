//removeIf(production)
const math = require('mathjs');
const { addListener, addValue, cleanValue, getNodeValue, setNodeValue, backspace, evaluate } = require('./utils');
//endRemoveIf(production)

function getResult() {
    let value = getNodeValue('input');

    if (value) {
        setNodeValue('result', value);
        value = value.replaceAll('lg', 'log10');
        value = value.replaceAll('ln', 'log');
        value = value.replaceAll(/\|([-+*/^a-z0-9]*)\|/g, 'abs($1)')
        console.log(value)
        setNodeValue('input', evaluate(value));
    }
}

function addListenerList () {
    //main buttons area
    addListener('button-0', 'click', addValue.bind(null, 'input', '0'));
    addListener('button-1', 'click', addValue.bind(null, 'input', '1'));
    addListener('button-2', 'click', addValue.bind(null, 'input', '2'));
    addListener('button-3', 'click', addValue.bind(null, 'input', '3'));
    addListener('button-4', 'click', addValue.bind(null, 'input', '4'));
    addListener('button-5', 'click', addValue.bind(null, 'input', '5'));
    addListener('button-6', 'click', addValue.bind(null, 'input', '6'));
    addListener('button-7', 'click', addValue.bind(null, 'input', '7'));
    addListener('button-8', 'click', addValue.bind(null, 'input', '8'));
    addListener('button-9', 'click', addValue.bind(null, 'input', '9'));
    
    addListener('button-remainder', 'click', addValue.bind(null, 'input', '%'));
    addListener('button-subtract', 'click', addValue.bind(null, 'input', '/'));
    addListener('button-multiply', 'click', addValue.bind(null, 'input', '*'));
    addListener('button-minus', 'click', addValue.bind(null, 'input', '-'));
    addListener('button-plus', 'click', addValue.bind(null, 'input', '+'));
    addListener('button-dot', 'click', addValue.bind(null, 'input', '.'));
    addListener('button-left-brace', 'click', addValue.bind(null, 'input', '('));
    addListener('button-right-brace', 'click', addValue.bind(null, 'input', ')'));

    addListener('button-backspace', 'click', backspace.bind(null, 'input'));
    addListener('button-clean', 'click', cleanValue.bind(null, 'input'));
    addListener('button-equal', 'click', getResult);

    //extended buttons area
    addListener('button-2nd', 'click', addValue.bind(null, 'input', '2^'));
    addListener('button-pi', 'click', addValue.bind(null, 'input', Math.PI.toString().slice(0, 4)));
    addListener('button-e', 'click', addValue.bind(null, 'input', Math.E.toString().slice(0, 4)));
    addListener('button-square', 'click', addValue.bind(null, 'input', '^2'));
    addListener('button-cube', 'click', addValue.bind(null, 'input', '^3'));
    addListener('button-factorial', 'click', addValue.bind(null, 'input', '!'));
    addListener('button-x-pow-y', 'click', addValue.bind(null, 'input', '^'));
    addListener('button-10-pow-x', 'click', addValue.bind(null, 'input', '10^'));
    addListener('button-log', 'click', addValue.bind(null, 'input', 'lg('));
    addListener('button-ln', 'click', addValue.bind(null, 'input', 'ln('));
    addListener('button-1-sub-x', 'click', addValue.bind(null, 'input', '1/'));
    addListener('button-module', 'click', addValue.bind(null, 'input', '|'));
    addListener('button-exp', 'click', addValue.bind(null, 'input', 'e'));
    addListener('button-sqrt', 'click', addValue.bind(null, 'input', 'sqrt('));
}

addListenerList();

//removeIf(production)
module.exports = { addListenerList, getResult};
//endRemoveIf(production)
