const  { mainLoop } = require('../index');

jest.mock('../logic', () => {
    return {
        __esModule: true,
        renderUI: jest.fn(() => true),
    };
});

jest.mock('../utils', () => {
    return {
        __esModule: true,
        checkDatabase: jest.fn(() => true),
    };
});



describe('tests for mainLoop function', () => {
    test('has to be defined', () => {
        expect(mainLoop).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof mainLoop).toBe('function');
    })
})