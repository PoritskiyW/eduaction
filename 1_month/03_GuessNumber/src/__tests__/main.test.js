const {generate, exit, saveSettings, settingsValidation, init} = require('../main')

state = {}
state.attempts = 5;
state.elapsed = 0;
state.rangeMin = 0;
state.rangeMax = 100;
state.randomNumber = 5;

jest.mock('../utils', () => {
    const originalModule = jest.requireActual('../utils');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        // inputValueSetter: jest.fn(() => true),
        // setHTMLValue: jest.fn(() => true),
        // attemptsPlus: jest.fn(() => true),
        alertCall: jest.fn(() => true),
        refresh: jest.fn(() => true),
        // addListener: jest.fn(() => true),
        // settingsValidation: jest.fn(() => true),
        inputValueGetter: jest.fn(() => 5)
            .mockImplementationOnce(() => 'asd')
            .mockImplementationOnce(() => 200)
            .mockImplementationOnce(() => - 1)
            .mockImplementationOnce(() => 5)
            .mockImplementationOnce(() => 6)
            .mockImplementationOnce(() => 5)
            .mockImplementationOnce(() => 4)
            .mockImplementationOnce(() => 3)
            .mockImplementationOnce(() => 3)
    };
});




describe('tests for generate function', () => {
    test('Not integer', () => {
        expect(generate(state)).toBeUndefined();
    })
    test('greater than max', () => {
        state.elapsed = 0;
        expect(generate(state)).toBeUndefined();
    })
    test('less them min', () => {
        state.elapsed = 0;
        expect(generate(state)).toBeUndefined();
    })
    test('win 1 try', () => {
        state.elapsed = 0;
        expect(generate(state)).toBeUndefined();
    })
    test('no win 1 try', () => {
        state.elapsed = 0;
        expect(generate(state)).toBeUndefined();
    })
    test('win 2 try', () => {
        state.elapsed = 1;
        expect(generate(state)).toBeUndefined();
    })
    test('closer', () => {
        state.elapsed = 1;
        state.previousGuess = 3
        expect(generate(state)).toBeUndefined();
    })
    test('further', () => {
        state.elapsed = 1;
        state.previousGuess = 4
        expect(generate(state)).toBeUndefined();
    })
    test('lost', () => {
        state.elapsed = 5;
        state.previousGuess = 4
        expect(generate(state)).toBeUndefined();
    })

})

describe('tests for exit function', () => {
    test('to undefined', () => {
        expect(exit(state)).toBeUndefined();
    })
})

describe('tests for saveSettings function', () => {
    test('valid settings', () => {
        expect(saveSettings(state)).toBeUndefined();
    })
    test('not a number settings', () => {
        expect(saveSettings(state)).toBeUndefined();
    })
    test('out of range settings', () => {
        expect(saveSettings(state)).toBeUndefined();
    })
})

describe('tests for init function', () => {
    test('to undefined', () => {
        expect(init(state)).toBeUndefined();
    })
})

describe('tests for settingValidation function', () => {
    test('valid', () => {
        expect(settingsValidation(1, 100, 10)).toBe(true);
    })
    test('out of range min', () => {
        expect(settingsValidation(-5, 100, 5)).toBe(false);
    })
    test('out of range min other side', () => {
        expect(settingsValidation(300, 100, 5)).toBe(false);
    })
    test('out of range max', () => {
        expect(settingsValidation(0, -5, 5)).toBe(false);
    })
    test('out of range max other side', () => {
        expect(settingsValidation(0, 300, 5)).toBe(false);
    })
    test('out of range attempts', () => {
        expect(settingsValidation(0, 200, -5)).toBe(false);
    })
    test('out of range attempts other side', () => {
        expect(settingsValidation(0, 200, 300)).toBe(false);
    })
    test('not a number', () => {
        expect(settingsValidation('0', '1', '1')).toBe(false);
    })
})