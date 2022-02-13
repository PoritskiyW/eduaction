const { renderUI } = require('./logic');
const { checkDatabase } = require('./utils');

function mainLoop () {

    checkDatabase();
    renderUI();
}

mainLoop();

module.exports = {
    mainLoop
}