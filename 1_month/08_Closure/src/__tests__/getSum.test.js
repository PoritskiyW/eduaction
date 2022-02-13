const getSum = require('../getSum');

describe('Tests for getSum function', () => {

    test('arguments are not string', () => {
        expect(getSum(1111,111)).toBe(undefined)
    })
    test('should return 447', () => {
        expect(getSum('123', '324')).toBe('447');
    });

    test('should return 34444444444444444444444444444444444444444444444444', () => {
        expect(getSum('11111111111111111111111111111111111111111111111111',
            '23333333333333333333333333333333333333333333333333'))
            .toBe('34444444444444444444444444444444444444444444444444');
    });
    test('should return 134444444444444444444444444444444444444444444444444', () => {
        expect(getSum('111111111111111111111111111111111111111111111111111',
            '23333333333333333333333333333333333333333333333333'))
            .toBe('134444444444444444444444444444444444444444444444444');
    });
    test('should return 410', () => {
        expect(getSum('111', '299')).toBe('410');
    });
    test('should return 1010', () => {
        expect(getSum('999', '11')).toBe('1010');
    });
    test('should return 910', () => {
        expect(getSum('899', '11')).toBe('910');
    });
})