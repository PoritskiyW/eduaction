//removeIf(production)
const math = require('mathjs');
//endRemoveIf(production)

function addListener(id, event, callback) {
  const node = document.getElementById(id);

  if (node) {
    node.addEventListener(event, callback);
    return true;
  }
  return false;
}

function addValue(id, value) {
  const node = document.getElementById(id);

  if (node) {
    const previousValue = node.value;
    if (previousValue === '0.00') {
      node.value = value;
      return true;
    } else {
      node.value = previousValue + value;
      return true;
    }
  }
  return false;
}

function cleanValue(id) {
  const node = document.getElementById(id);

  if (node) {
    node.value = '0.00';
    return true;
  }
  return false;
}

function getNodeValue(id) {
  const node = document.getElementById(id);

  if (node) {
    return node.value;
  }
  return false;
}

function setNodeValue(id, value) {
  const node = document.getElementById(id);

  if (node) {
    node.value = value;
    return true;
  }
  return false;
}

function backspace(id) {
  const node = document.getElementById(id);

  if (node) {
    if (node.value === '') {
      node.value = '0.00';
    } else {
      node.value = node.value.slice(0, -1);
    }
    return true;
  }
  return false;
}

function evaluate(string) {
  return math.evaluate(string);
}

//removeIf(production)
module.exports = {
  addValue,
  addListener,
  cleanValue,
  getNodeValue,
  setNodeValue,
  backspace,
  evaluate
}
//endRemoveIf(production)