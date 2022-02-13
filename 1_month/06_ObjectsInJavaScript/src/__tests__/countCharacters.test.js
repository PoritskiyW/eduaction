const countCharacters = require('../countCharacters');

describe("Tests for countCharacters function", function () {

    test('if arguments are not string, returns undefined', function () {
        expect(countCharacters(125)).toBe(undefined);
    })
    test('if arguments length = 0, returns undefined', function () {
        expect(countCharacters('')).toBe(undefined);
    })
    test('returns objects with characters amount', function () {
        expect(countCharacters('sparrow')).toStrictEqual({ s: 1, p: 1, a: 1, r: 2, o: 1, w: 1 });
    })
})