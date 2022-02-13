const getNumber = require('../getNumber');

describe("Tests for getNumber function", function () {

    test('if arguments are not array, returns undefined', function () {
        expect(getNumber('a')).toBe(undefined);
    })
    test('has to return 4', function () {
        expect(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])).toBe(4);
    })
    test('has to return 13', function () {
        expect(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])).toBe(13);
    })
    test('has to ignore not an integer items of array', function () {
        expect(getNumber([0, 2, 8, -4, 0, -122, '13', -4, 28, 12])).toBe(undefined);
    })
    test('if length too small returns undefined', function () {
        expect(getNumber([0, 2])).toBe(undefined);
    })
})