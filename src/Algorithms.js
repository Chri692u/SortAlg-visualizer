"use strict";
exports.__esModule = true;
exports.Algorithms = void 0;
var auxiliaryFunctions_1 = require("./auxiliaryFunctions");
var Algorithms = /** @class */ (function () {
    function Algorithms() {
    }
    Algorithms.insertionSort = function (array) {
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        return array;
    };
    Algorithms.bingoSort = function (arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            var min = i;
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                auxiliaryFunctions_1.swap(arr, min, i);
            }
        }
        return arr;
    };
    Algorithms.doubleSelectionSort = function (arr) {
        for (var i = 0, j = arr.length - 1; i < j; i++, j--) {
            var min = arr[i];
            var max = arr[i];
            var minIndex = i;
            var maxIndex = i;
            for (var k = i; k <= j; k++) {
                if (arr[k] > max) {
                    max = arr[k];
                    maxIndex = k;
                }
                else if (arr[k] < min) {
                    min = arr[k];
                    minIndex = k;
                }
            }
            auxiliaryFunctions_1.swap(arr, i, minIndex);
            if (arr[minIndex] === max) {
                auxiliaryFunctions_1.swap(arr, j, minIndex);
            }
            else {
                auxiliaryFunctions_1.swap(arr, j, maxIndex);
            }
        }
        return arr;
    };
    return Algorithms;
}());
exports.Algorithms = Algorithms;
