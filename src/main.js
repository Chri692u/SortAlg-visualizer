"use strict";
exports.__esModule = true;
var Algorithms_1 = require("./Algorithms"); // Sorting algorithm implementation class
function visualizer(val, arr) {
    switch (Number(val)) {
        case 1:
            return Algorithms_1.Algorithms.insertionSort(arr);
        case 2:
            return Algorithms_1.Algorithms.doubleSelectionSort(arr);
        case 3:
            return Algorithms_1.Algorithms.bingoSort(arr);
    }
}
function createArrayFromSlider() {
    var randomArray = function (val) {
        return Array.from({ length: val }, function () { return Math.floor((Math.random() * 10) + 1); });
    };
    var slider = document.getElementById('myRange');
    var output = document.getElementById('array-size');
    var sortAlg = document.getElementById('options');
    var btnID = document.getElementById('btnClick');
    var arr = randomArray(1);
    output.innerHTML = "Size of array: " + slider.value;
    slider.oninput = function (e) {
        output.innerHTML = "Size of array: " + e.target.value;
        arr = randomArray(e.target.value);
    };
    btnID.onclick = function () {
        console.log(visualizer(Number(sortAlg.value), arr));
    };
}
