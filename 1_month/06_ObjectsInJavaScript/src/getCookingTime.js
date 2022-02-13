
function getCookingTime (eggsAmount) {
    if(!Number.isInteger(eggsAmount) || eggsAmount < 0){
        return undefined;
    }
    return Math.ceil(eggsAmount / 5) * 5;
}

module.exports = getCookingTime;