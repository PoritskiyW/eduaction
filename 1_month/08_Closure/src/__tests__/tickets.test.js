const tickets = require('../tickets');

describe("Tests for tickets function", function () {

    test('if arguments are not array, returns undefined', function () {
        expect(tickets(125)).toBe(undefined);
    })
    test('YES case', function () {
        expect(tickets([25, 25, 50])).toBe('YES');
    })
    test('NO case', function () {
        expect(tickets([25, 100])).toBe('NO');
    })
})