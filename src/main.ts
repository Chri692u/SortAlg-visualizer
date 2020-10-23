import { Algorithms } from './Algorithms' // Sorting algorithm implementation class

// HTML binding
const randomArray = (val: number) => {
  return Array.from({ length: val }, () => Math.floor((Math.random() * 10) + 1))
}

const slider = <HTMLInputElement>document.getElementById('myRange')
const output: HTMLElement = document.getElementById('array-size')!
const btnID: HTMLElement = document.getElementById('btnClick')!
const columns: HTMLElement = document.getElementById('columns')!

output.innerHTML = `Size of array: ${slider.value}`

slider.oninput = function () {
  output.innerHTML = `Size of array: ${slider.value}`
  const arr = randomArray(Number(slider.value))
  createArray(arr)
}

btnID.onclick = function () {
  // showArray.innerHTML = `Unsorted array: ${arr?.join(' ')} ---- Sorted array: ${visualizer(Number(sortAlg.value), arr)?.join(' ')}`
}

// Functions
function visualizer (val: number, arr: number[]) {
  switch (Number(val)) {
    case 1:
      return Algorithms.insertionSort(arr)
    case 2:
      return Algorithms.doubleSelectionSort(arr)
    case 3:
      return Algorithms.bingoSort(arr)
  }
}

function createArray (arr: number[]) : void {
  columns.innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement('div')
    div.setAttribute('class', 'red col')
    div.innerHTML = `${arr[i]}`
    columns.appendChild(div)
    console.log(123)
  }
}