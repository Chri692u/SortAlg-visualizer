import { Algorithms } from './Algorithms' // Sorting algorithm implementation class
import { randomArray } from './auxiliaryFunctions'

const slider = <HTMLInputElement>document.getElementById('myRange')
const output: HTMLElement = document.getElementById('array-size')!
const btnID: HTMLElement = document.getElementById('btnClick')!
const columns: HTMLElement = document.getElementById('columns')!
const options = <HTMLInputElement>document.getElementById('options')!
output.innerHTML = `Size of array: ${slider.value}`
let arr = randomArray(Number(slider.value))

createArray(arr, 'red')

slider.oninput = function () {
  output.innerHTML = `Size of array: ${slider.value}`
  arr = randomArray(Number(slider.value))
  createArray(arr, 'red')
}

btnID.onclick = function () {
  createArray(visualizer(options.value, arr), 'green')
}

// Functions
function visualizer (val: string, arr: number[]) {
  switch (Number(val)) {
    case 1:
      return Algorithms.insertionSort(arr)
    case 2:
      return Algorithms.doubleSelectionSort(arr)
    case 3:
      return Algorithms.bingoSort(arr)
  }
}

function createArray (arr: any, sort: string) : void {
  columns.innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement('div')
    div.setAttribute('class', `col ${sort}`)
    div.innerHTML = `${arr[i]}`
    columns.appendChild(div)
  }
}
