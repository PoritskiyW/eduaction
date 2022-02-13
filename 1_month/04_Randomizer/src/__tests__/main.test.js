const { generate, init, reset, isMinMaxValid } = require('../main')

const state = {
    randoms: [],
    randomLength: 5,
    randomNumber: 0,
    rangeMin: 0,
    rangeMax: 5
}


jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        alertCall: jest.fn(() => true),
        getNodeValue: jest.fn(() => 5)
            .mockImplementationOnce(() => 0)
            .mockImplementationOnce(() => 5)
    };
});

describe('tests for generate function', () => {
    test('validation true', () => {
        state.randoms = [];
        expect(generate(state)).toBeUndefined();
    })
    test('validation false', () => {
        state.randoms = [];
        expect(generate(state)).toBeUndefined();
    })
    test('length === array length', () => {
        state.randoms = [0, 1, 2, 3, 4];
        state.randomLength = 5;
        expect(generate(state)).toBeUndefined();
    })
    test('length != array length', () => {
        state.randoms = [0, 1, 2, 3];
        state.randomLength = 5;
        expect(generate(state)).toBeUndefined();
    })
    test('includes random number', () => {
        state.randoms = [0, 1, 2, 5];
        state.randomLength = 5;
        expect(generate(state)).toBeUndefined();
    })
})

describe('tests for init function', () => {
    test('not defined', () => {
        expect(init()).toBeUndefined();
    })
})

describe('tests for reset function', () => {
    test('not defined', () => {
        expect(reset(state)).toBeUndefined();
    })
})

describe('tests for isMinMaxValid function', () => {
    test('validation false not a number', () => {
        expect(isMinMaxValid('asd123', 'asd123')).toBe(false);
    })
    test('validation true', () => {
        expect(isMinMaxValid('1', '2')).toBe(true);
    })
    test('validation false out of range', () => {
        expect(isMinMaxValid('-1', '-2')).toBe(false);
    })
})


