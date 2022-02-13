const getCookingTime = require('../getCookingTime');

describe("Tests for getCookingTime function", function () {

    test('if arguments are not integer, returns undefined', function () {
        expect(getCookingTime('a')).toBe(undefined);
    })
    test('if argument 5 returns 5', function () {
        expect(getCookingTime(5)).toBe(5);
    })
    test('if argument 0 returns 0', function () {
        expect(getCookingTime(0)).toBe(0);
    })
    test('if argument 2 returns 5', function () {
        expect(getCookingTime(2)).toBe(5);
    })
    test('if argument 6 returns 10', function () {
        expect(getCookingTime(6)).toBe(10);
    })
    test('if argument 10 returns 10', function () {
        expect(getCookingTime(10)).toBe(10);
    })
    test('if argument < 0 returns undefined', function () {
        expect(getCookingTime(-1)).toBe(undefined);
    })
})