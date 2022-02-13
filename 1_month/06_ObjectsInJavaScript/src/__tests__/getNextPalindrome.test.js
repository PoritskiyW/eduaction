const getNextPalindrome = require('../getNextPalindrome');

describe("Tests for getNextPalindrome function", function () {

    test('if arguments are not number, returns undefined', function () {
        expect(getNextPalindrome('125')).toBe(undefined);
    })
    test('if arguments number < 11, returns 11', function () {
        expect(getNextPalindrome(5)).toBe(11);
    })
    test('if arguments number < 0, returns 11', function () {
        expect(getNextPalindrome(-55)).toBe(11);
    })
    test('returns palindrome', function () {
        expect(getNextPalindrome(11921452136)).toBe(11921512911);
    })
    test('returns next palindrome', function () {
        expect(getNextPalindrome(11)).toBe(22);
    })
    test('returns next palindrome 22', function () {
        expect(getNextPalindrome(21)).toBe(22);
    })
    test('returns next palindrome 33', function () {
        expect(getNextPalindrome(23)).toBe(33);
    })
    test('returns next palindrome 4 symbols', function () {
        expect(getNextPalindrome(4995)).toBe(5005);
    })
})