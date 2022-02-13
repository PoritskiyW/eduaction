const findTitle = require('../findTitle');

describe("Tests for findTitle function", function () {

    test('if arguments are not array and not string, returns undefined', function () {
        expect(findTitle('a', [123])).toBe(undefined);
    })
    test('if arguments array length = 0, returns undefined', function () {
        expect(findTitle([], 'js')).toBe(undefined);
    })
    test('returns objects with chosen title', function () {
        expect(findTitle([{title: 'Some title1'}, {title: 'I like JS'},
            {user: 'This obj doesn\’t have key title js'},
            {title: 'Js - is the best!'}], 'js')
        ).toStrictEqual([{title: 'I like JS'}, {title: 'Js - is the best!'}]);
    })
    test('should ignore non object array elements', function () {
        expect(findTitle([{title: 'Some title1'}, {title: 'I like JS'},
            {user: 'This obj doesn\’t have key title js'}, 123], 'js')
        ).toStrictEqual([{title: 'I like JS'}]);
    })
})