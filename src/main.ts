import { Algorithms } from './Algorithms' // Sorting algorithm implementation class
import { randomArray, drawArray, isSorted } from './auxiliaryFunctions' // Exported auxiliary functions

// HTML binding
const startIndex: number = 0
const slider = <HTMLInputElement>document.getElementById('myRange')
const output: HTMLElement = document.getElementById('array-size')!
const btnID: HTMLElement = document.getElementById('btnClick')!
const options = <HTMLInputElement>document.getElementById('options')!
// const drawSpeed = <HTMLInputElement>document.getElementById('drawSpeed')!
output.innerHTML = `Size of array: ${slider.value}`
let array = randomArray(Number(slider.value), 1)

drawArray(array)

slider.oninput = function () { // Creates array
  output.innerHTML = `Size of array: ${slider.value}`
  array = randomArray(Number(slider.value), Number(slider.value))
  drawArray(array)
}

btnID.onclick = function () { // Call visualizer function on button interaction
  if (isSorted(array)) {
    array = randomArray(Number(slider.value), Number(slider.value))
  }
  visualizer(options.value, array)
}

// Visualizer function - calls selected algorithm on generated array
function visualizer (val: string, array: object[]) {
  switch (Number(val)) {
    case 1:
      return Algorithms.insertionSort(array)
    case 2:
      return Algorithms.selectionsort(array)
    case 3:
      return Algorithms.mergeSort(array, startIndex, array.length - 1)
    case 4:
      return Algorithms.bubbleSort(array)
    case 5:
      return Algorithms.bogoSort(array)
  }
}
