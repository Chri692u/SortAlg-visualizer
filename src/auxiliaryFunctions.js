"use strict";
exports.__esModule = true;
exports.swap = void 0;
function swap(arr, indexOne, indexTwo) {
    var _a;
    _a = [arr[indexTwo], arr[indexOne]], arr[indexOne] = _a[0], arr[indexTwo] = _a[1];
}
exports.swap = swap;
