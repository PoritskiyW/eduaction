const assert = require('assert');
const path = require('path');
const JS_1 = require(path.join(__dirname, 'JS_1.js'));
const JS_2 = require(path.join(__dirname, 'JS_2.js'));
const JS_3 = require(path.join(__dirname, 'JS_3.js'));
const JS_4 = require(path.join(__dirname, 'JS_4.js'));


describe("Block 1 test", function () {

    it('if "a" even returns a * b else returns a + b', function () {

        assert.equal(JS_1.isEven(1, 2), 3);
        assert.equal(JS_1.isEven(2, 3), 6);
    })

    it('returns quarter according to "x" an "y"', function () {

        assert.equal(JS_1.getQuarter(1, 1), "1");
        assert.equal(JS_1.getQuarter(0, 1), "1 & 2");
        assert.equal(JS_1.getQuarter(-1, 1), "2");
        assert.equal(JS_1.getQuarter(1, 0), "1 & 4");
        assert.equal(JS_1.getQuarter(0, 0), "coordinate start");
        assert.equal(JS_1.getQuarter(-1, 0), "3 & 2");
        assert.equal(JS_1.getQuarter(1, -1), "4");
        assert.equal(JS_1.getQuarter(0, -1), "3 & 4");
        assert.equal(JS_1.getQuarter(-1, -1), "3");

    })

    it('returns sum of positive array elements', function () {

        assert.equal(JS_1.sumPositive(1, 2, 3), 6);
        assert.equal(JS_1.sumPositive(-1, 2, 3), 5);
        assert.equal(JS_1.sumPositive(-1, -2, -3), 0);
    })

    it('if sum > multiply returns "sum + 3" else returns "multiply + 3"', function () {

        assert.equal(JS_1.countExpression(1, 2, 3), 9);
        assert.equal(JS_1.countExpression(2, 2, 3), 15);
        assert.equal(JS_1.countExpression(0, 2, 3), 8);
    })

    it('returns mark according to rating', function () {

        assert.equal(JS_1.getMark(10), "F");
        assert.equal(JS_1.getMark(20), "E");
        assert.equal(JS_1.getMark(40), "D");
        assert.equal(JS_1.getMark(60), "C");
        assert.equal(JS_1.getMark(75), "B");
        assert.equal(JS_1.getMark(90), "A");
    })
})

describe('Block 2 test', function () {

    it('returns sum and quantity of even numbers from 1 to 99', function () {

        assert.deepEqual(JS_2.getSumAndQuantityOfEven(), {sum: 98, quantity: 50});
    })

    it('returns "true" if number is prime, else "false"', function () {

        assert.equal(JS_2.isPrime(1), true);
        assert.equal(JS_2.isPrime(6), false);
    })

    it('returns root for a number (selection method)', function () {

        assert.equal(JS_2.getRootSelection(49), 7);
        assert.equal(JS_2.getRootBinary(49), 7);
    })

    it('returns factorial of a number', function () {

        assert.equal(JS_2.getFactorial(5), 120);
    })

    it('returns sum of chars in number', function () {

        assert.equal(JS_2.getSumOfNumber(123), 6);
    })

    it('returns reversed number', function () {

        assert.equal(JS_2.reverseNumber(123), 321)
    })
})

describe('Block 3 test', function () {

    it('returns maximum element of array', function () {

        assert.equal(JS_3.getArrayMin([1, 2, 3, 4, 5, 6]), 1);
    })

    it('returns minimal element of array', function () {

        assert.equal(JS_3.getArrayMax([1, 2, 3, 4, 5, 6]), 6);
    })

    it('returns index of minimal element of array', function () {

        assert.equal(JS_3.getArrayMinIndex([1, 2, 3, 4, 5, 6]), 0);
    })

    it('returns index of maximal element of array', function () {

        assert.equal(JS_3.getArrayMaxIndex([1, 2, 3, 4, 5, 6]), 5);
    })

    it('returns sum of array elements with odd index', function () {

        assert.equal(JS_3.getSumOfOdd([1, 2, 3, 4, 5, 6]), 12);
    })

    it('returns reversed array', function () {

        assert.deepEqual(JS_3.reverseArray([1, 2, 3, 4, 5, 6]), [6, 5, 4, 3, 2, 1]);
    })

    it('returns sum of odd array elements', function () {

        assert.equal(JS_3.getSumOfOddElements([1, 2, 3, 4, 5, 6]), 9);
    })

    it('returns array with shifted half', function () {

        assert.deepEqual(JS_3.shiftHalf([1, 2, 3, 4, 5, 6]), [4, 5, 6, 1, 2, 3]);
        assert.deepEqual(JS_3.shiftHalf([1, 2, 3, 4, 5, 6, 7]), [5, 6, 7, 4, 1, 2, 3]);
    })

    it('returns sorted array', function () {

        assert.deepEqual(JS_3.bubbleSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('returns sorted array', function () {

        assert.deepEqual(JS_3.selectSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('returns sorted array', function () {

        assert.deepEqual(JS_3.insertSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('returns sorted array', function () {

        assert.deepEqual(JS_3.quickSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('returns sorted array', function () {

        assert.deepEqual(JS_3.mergeSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('returns sorted array', function () {

        assert.deepEqual(JS_3.shellSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })

    it('returns sorted array', function () {

        assert.deepEqual(JS_3.heapSort([6, 5, 4, 9, 8, 7, 1, 2, 3]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
})

describe('Block 4 test', function () {

    it('returns string view of day', function () {

        assert.equal(JS_4.getDayName(1), 'Monday');
        assert.equal(JS_4.getDayName(2), 'Tuesday');
        assert.equal(JS_4.getDayName(3), 'Wednesday');
        assert.equal(JS_4.getDayName(4), 'Thursday');
        assert.equal(JS_4.getDayName(5), 'Friday');
        assert.equal(JS_4.getDayName(6), 'Saturday');
        assert.equal(JS_4.getDayName(7), 'Sunday');
    })

    it('returns string view of number', function () {

        assert.equal(JS_4.getStringView(321321321321), 'three hundred twenty-one billion three hundred twenty-one million three hundred twenty-one thousand three hundred twenty-one');
    })

    it('returns number view of string', function () {

        assert.equal(JS_4.getNumberView('three hundred twenty-one billion three hundred twenty-one million three hundred twenty-one thousand three hundred twenty-one'), 321321321321);
    })

    it('returns distance between two points', function () {

        assert.equal(JS_4.getCartesianDistance(0, 16, 0, 0), 16);
    })
})