import { Algorithms } from './Algorithms' // Sorting algorithm implementation class
import { randomArray, drawArray } from './auxiliaryFunctions'

// HTML binding
const slider = <HTMLInputElement>document.getElementById('myRange')
const output: HTMLElement = document.getElementById('array-size')!
const btnID: HTMLElement = document.getElementById('btnClick')!
const options = <HTMLInputElement>document.getElementById('options')!
const drawSpeed = <HTMLInputElement>document.getElementById('drawSpeed')!
output.innerHTML = `Size of array: ${slider.value}`
let arr = randomArray(Number(slider.value))

drawArray(arr)

slider.oninput = function () {
  output.innerHTML = `Size of array: ${slider.value}`
  arr = randomArray(Number(slider.value))
  drawArray(arr)
}

btnID.onclick = function () {
  visualizer(options.value, arr)
}

// Functions
function visualizer (val: string, arr: object[]) {
  switch (Number(val)) {
    case 1:
      return Algorithms.insertionSort(arr, Number(drawSpeed.value))
    case 2:
      return Algorithms.selectionsort(arr)
    case 3:
      return Algorithms.mergeSort(arr, 0, arr.length - 1)
  }
}
