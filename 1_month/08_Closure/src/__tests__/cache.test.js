const cache = require('../cache');

describe('Tests for cache function', function () {
    test('should be defined ', function () {
        expect(cache).toBeDefined()
    })
    test('should be function', function () {
        expect(typeof cache).toBe('function');
    })
    test('should return function', function () {
        expect(typeof cache()).toBe('function');
    })
    test('should get answers from cache', function () {
        const complexFunction = jest.fn()
        const func = cache(complexFunction)
        func("str", 42)
        func("str", 42)
        expect(complexFunction).toBeCalledTimes(1);
    })
    test('should recognize different arguments and return asnwer from cache if needed', function () {
        const complexFunction = jest.fn()
        const func = cache(complexFunction)
        func("str", 42)
        func("str", 42)
        func("str", 43)
        func("str", 43)
        expect(complexFunction).toBeCalledTimes(2);
    })
    test('should  not work with cached arguments in diff order', function () {
        const complexFunction = jest.fn()
        const func = cache(complexFunction)
        func("str", 42)
        func(42, 'str')
        func("str", 42)
        expect(complexFunction).toBeCalledTimes(2);
    })
})