//HW Task 1
function getArrayMin(argArray) {

    let min = argArray[0];

    for (let counter = 0; counter < argArray.length; counter++) {
        if (argArray[counter] < min) {
            min = argArray[counter];
        }
    }

    return min;
}

//HW Task 2
function getArrayMax(argArray) {

    let max = argArray[0];

    for (let counter = 0; counter < argArray.length; counter++) {
        if (argArray[counter] > max) {
            max = argArray[counter];
        }
    }

    return max;
}

//HW Task 3
function getArrayMinIndex(argArray) {

    let min = argArray[0];
    let minIndex = 0;

    for (let counter = 0; counter < argArray.length; counter++) {
        if (argArray[counter] < min) {
            min = argArray[counter];
            minIndex = counter;
        }
    }

    return minIndex;
}

//HW Task 4
function getArrayMaxIndex(argArray) {

    let max = argArray[0];
    let maxIndex = 0;

    for (let counter = 0; counter < argArray.length; counter++) {
        if (argArray[counter] > max) {
            max = argArray[counter];
            maxIndex = counter;
        }
    }

    return maxIndex;
}

//HW Task 5
function getSumOfOdd(arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            result = result + arr[i];
        }
    }
    return result;
}

//HW Task 6
function reverseArray(arr) {

    for (let i = 0; i < (arr.length / 2 - arr.length % 2); i++) {


        arr = swap(arr, i, arr.length - i - 1);
        console.log(arr)
    }

    return arr;
}

//HW Task 7
function getSumOfOddElements(arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            result = result + arr[i];
        }
    }

    return result;
}

//HW Task 8
function shiftHalf(arr) {

    if (arr.length % 2 === 0) {

        let mid = arr.length / 2;

        for (let i = 0; i < mid; i++) {

            arr = swap(arr, i, i + mid);
        }

        return arr;
    } else {

        let mid = arr.length / 2
        mid = mid - (mid % 1) + 1;
        let i = 0;

        while (mid + i < arr.length) {

            arr = swap(arr, i, i + mid);
            i++;
        }
        return arr;
    }
}

//HW Task 9
function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let wasChanges = false;

        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j + 1]) {

                swap(arr, j, j + 1)
                wasChanges = true;
            }
        }

        if (!wasChanges) {
            break;
        }
    }

    return arr;
}

function selectSort(arr) {


    let n = arr.length;

    for(let i = 0; i < n; i++) {

        let min = i;

        for(let j = i + 1; j < n; j++){

            if(arr[j] < arr[min]) {

                min=j;
            }
        }

        if (min !== i) {

            swap(arr, i, min)
        }
    }
    return arr;

}

function insertSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        const current = arr[i];
        let j = i;

        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = current;
    }

    return arr;
}

//HW Task 10
function quickSort(arr) {

    if (arr.length < 2) return arr;

    let min = 1;
    let max = arr.length - 1;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let pivot = arr[rand];

    const left = [];
    const right = [];

    arr.splice(arr.indexOf(pivot), 1);

    arr = [pivot].concat(arr);

    for (let i = 1; i < arr.length; i++) {

        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(arr) {

    if (!arr || !arr.length) {
        return null;
    }

    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));

}

function merge(arrFirst, arrSecond) {

    let arrSort = [];
    let j = 0;
    let i = 0;

    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }

    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
}

function shellSort(arr) {

    let len = arr.length;
    let h = 1;

    while (h < len / 3) h = 3 * h + 1;

    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h; j -= h) {
                if (arr[j] < arr[j - h]) swap(arr, j, j - h);
            }
        }
        h = Math.floor(h / 3);
    }

    return arr;
}

function heapSort(arr) {

    buildMaxHeap(arr);

    let lastElement = arr.length - 1;

    while (lastElement > 0) {
        swap(arr, 0, lastElement);
        heapify(arr, 0, lastElement);
        lastElement -= 1;
    }

    return arr;
}

function buildMaxHeap(arr) {

    let i = Math.floor(arr.length / 2 - 1);

    while (i >= 0) {
        heapify(arr, i, arr.length);
        i -= 1;
    }
}

function heapify(heap, i, max) {


    let index;
    let leftChild;
    let rightChild;

    while (i < max) {

        index = i;

        leftChild = 2 * i + 1;

        rightChild = leftChild + 1;

        if (leftChild < max && heap[leftChild] > heap[index]) {
            index = leftChild;
        }

        if (rightChild < max && heap[rightChild] > heap[index]) {
            index = rightChild;
        }

        if (index === i) {
            return;
        }

        swap(heap, i, index);

        i = index;
    }
}


console.log(selectSort([6, 5, 4, 9, 8, 7, 1, 2, 3]))

//Support functions
function swap(arr, index1, index2) {

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}


exports.getArrayMin = getArrayMin;
exports.getArrayMax = getArrayMax;
exports.getArrayMinIndex = getArrayMinIndex;
exports.getArrayMaxIndex = getArrayMaxIndex;
exports.getSumOfOdd = getSumOfOdd;
exports.reverseArray = reverseArray;
exports.getSumOfOddElements = getSumOfOddElements;
exports.shiftHalf = shiftHalf;
exports.bubbleSort = bubbleSort;
exports.selectSort = selectSort;
exports.insertSort = insertSort;
exports.quickSort = quickSort;
exports.mergeSort = mergeSort;
exports.shellSort = shellSort;
exports.heapSort = heapSort;




