import { Algorithms } from './Algorithms' // Sorting algorithm implementation class
import { randomArray, drawArray, isSorted } from './auxiliaryFunctions' // Exported auxiliary functions

// HTML binding
const startIndex: number = 0
const arraySlider = <HTMLInputElement>document.getElementById('myRange')
const arrayOutput: HTMLElement = document.getElementById('array-size')!
const speedSlider = <HTMLInputElement>document.getElementById('drawSpeed')
const speedOutput: HTMLElement = document.getElementById('draw-speed')!
const btnID = <HTMLInputElement>document.getElementById('btnClick')!
const options = <HTMLInputElement>document.getElementById('options')!
const box = <HTMLInputElement>document.getElementById('randomVal')!
// const drawSpeed = <HTMLInputElement>document.getElementById('drawSpeed')!
arrayOutput.innerHTML = `Size of array: ${arraySlider.value}`
speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
let array = randomArray(Number(arraySlider.value))

drawArray(array)

box.onclick = function () {
  box.checked
    ? array = randomArray(Number(arraySlider.value))
    : array = randomArray(Number(arraySlider.value), 1)
  drawArray(array)
}

arraySlider.oninput = function () { // Creates array
  box.checked
    ? array = randomArray(Number(arraySlider.value))
    : array = randomArray(Number(arraySlider.value), 1)
  arrayOutput.innerHTML = `Size of array: ${arraySlider.value}`
  drawArray(array)
}

speedSlider.oninput = function () { // Sorting speed
  speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
}

btnID.onclick = function () { // Call visualizer function on button interaction
  if (!box.checked && isSorted(array)) {
    array = randomArray(Number(arraySlider.value), 1)
  } else {
    if (isSorted(array)) {
      array = randomArray(Number(arraySlider.value))
    }
  }

  visualizer(options.value, array)
}

// Visualizer function - calls selected algorithm on generated array
async function visualizer (val: string, array: object[]) {
  btnID.disabled = true
  arraySlider.disabled = true
  box.disabled = true
  switch (Number(val)) {
    case 1:
      await Algorithms.insertionSort(array)
      break
    case 2:
      await Algorithms.selectionsort(array)
      break
    case 3:
      speedSlider.disabled = true
      speedOutput.innerHTML = 'Dynamic sorting delay does not work with merge sort'
      await Algorithms.mergeSort(array, startIndex, array.length - 1)
      speedSlider.disabled = false
      speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
      break
    case 4:
      await Algorithms.bubbleSort(array)
      break
    case 5:
      speedSlider.disabled = true
      speedOutput.innerHTML = 'Dynamic sorting delay does not work with bogo sort'
      await Algorithms.bogoSort(array)
      speedSlider.disabled = false
      speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
      break
    case 6:
      await Algorithms.cocktailSort(array)
      break
    case 7:
      await Algorithms.heapSort(array)
      break
  }
  speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
  btnID.disabled = false
  box.disabled = false
  arraySlider.disabled = false
}
