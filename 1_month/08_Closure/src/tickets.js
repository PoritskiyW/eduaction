function tickets(array) {

    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }
    let change = 0;
    const ticketPrice = 25;

    for(let i = 0; i < array.length; i++) {
        change += array[i]
        if (array[i + 1] - change >= ticketPrice) {
            return 'NO'
        } else{
            return 'YES'
        }
    }
}

module.exports = tickets;