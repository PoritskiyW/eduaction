function setTextContent(id, textContent) {
    const node = document.getElementById(id)
    if (node) {
        node.textContent = textContent;
        return true;
    }
    return false;
}

function setDisabled(id, disabled) {
    const node = document.getElementById(id)
    if (node) {
        node.disabled = disabled;
        return true;
    }
    return false;
}

function getNodeValue(id) {
    const node = document.getElementById(id)
    if (node) {
        return node.value;
    }
    return false;
}

function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

function alertCall(text) {
    alert(text);
}

module.exports = {setTextContent, setDisabled, getNodeValue, addListener, alertCall}