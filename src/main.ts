import { Algorithms } from './Algorithms' // Sorting algorithm implementation class
import { randomArray } from './auxiliaryFunctions'

// HTML binding
const slider = <HTMLInputElement>document.getElementById('myRange')
const output: HTMLElement = document.getElementById('array-size')!
const btnID: HTMLElement = document.getElementById('btnClick')!
const columns: HTMLElement = document.getElementById('columns')!
const options = <HTMLInputElement>document.getElementById('options')!
output.innerHTML = `Size of array: ${slider.value}`
let arr = randomArray(Number(slider.value))

drawArray(arr)

slider.oninput = function () {
  output.innerHTML = `Size of array: ${slider.value}`
  arr = randomArray(Number(slider.value))
  drawArray(arr)
}

btnID.onclick = function () {
  // drawArray(visualizer(options.value, arr))
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

function drawArray (arr: any) : void {
  columns.innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement('div')
    div.setAttribute('class', `col ${arr[i].color}`)
    div.innerHTML = `${arr[i].number}`
    columns.appendChild(div)
  }
}
