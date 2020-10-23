import { Algorithms } from './Algorithms' // Sorting algorithm implementation class

// HTML binding
const randomArray = (val: number) => {
  return Array.from({ length: val }, () => Math.floor((Math.random() * 10) + 1))
}

const slider = <HTMLInputElement>document.getElementById('myRange')
const output: HTMLElement = document.getElementById('array-size')!
const sortAlg: any = document.getElementById('options')
const btnID: HTMLElement = document.getElementById('btnClick')!
const showArray: HTMLElement = document.getElementById('showArray')!

output.innerHTML = `Size of array: ${slider.value}`

slider.oninput = function () {
  output.innerHTML = `Size of array: ${slider.value}`
}

btnID.onclick = function () {
  const arr = randomArray(Number(slider.value))
  showArray.innerHTML = `Unsorted array: ${arr?.join(' ')} ---- Sorted array: ${visualizer(Number(sortAlg.value), arr)?.join(' ')}`
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
