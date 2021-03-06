import { drawArray, delay, merge, shuffleArray, isSorted, maxHeapify } from './auxiliaryFunctions'
const speedSlider = <HTMLInputElement>document.getElementById('drawSpeed')
const speedOutput: HTMLElement = document.getElementById('draw-speed')!

export class Algorithms {
  static async insertionSort (array: any, drawSpeed: number = Number(speedSlider.value)) {
    for (let i = 1; i < array.length; i++) {
      speedSlider.oninput = function () { // Sorting speed
        drawSpeed = Number(speedSlider.value)
        speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
      }
      const key: number = array[i].number
      array[i].color = 'yellow' // Colors the key yellow
      let j: number = i - 1
      while (j >= 0 && array[j].number > key) {
        array[j + 1].number = array[j].number
        array[j].color = 'yellow' // Colors the comparison same color as key
        drawArray(array)
        await delay(drawSpeed)
        j--
        array[j + 1].color = 'red'
      }
      array[j + 1].number = key
    }
    drawArray(array)

    array.forEach((element: { color: string }) => { // Once the array is sorted, color all green
      element.color = 'green'
    })
    drawArray(array)
  }

  static async selectionsort (array: any, drawSpeed: number = Number(speedSlider.value)) {
    let minIndex
    let temp
    const len = array.length
    for (let i = 0; i < len; i++) {
      minIndex = i
      speedSlider.oninput = function () { // Sorting speed
        drawSpeed = Number(speedSlider.value)
        speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
      }
      for (let j = i + 1; j < len; j++) {
        array[j].color = 'yellow' // Colors current comparison yellow
        array[minIndex].color = 'yellow' // Colors minimum element yellow
        drawArray(array)
        await delay(drawSpeed)
        if (array[j].number < array[minIndex].number) {
          array[minIndex].color = 'red' // If it is not the smallest element, change array[j] back to red
          minIndex = j
        }
        array[j].color = 'red' // Color all other colors red
        drawArray(array)
      }
      temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
      array[i].color = 'green' // Once element is sorted correctly, color green
      drawArray(array)
    }
  }

  static async mergeSort (a:any, s:number, e:number, drawSpeed: number = Number(speedSlider.value)) {
    if (s < e) {
      const m = Math.floor((s + e) / 2)
      await this.mergeSort(a, s, m, drawSpeed)
      // drawArray(a)
      await this.mergeSort(a, m + 1, e, drawSpeed)
      // drawArray(a)
      await merge(a, s, m, e, drawSpeed)
      drawArray(a)
    }
  }

  static async bubbleSort (array: any, drawSpeed: number = Number(speedSlider.value)) { // TODO: COMMENTS ON COLORS
    let tempNum = 0
    for (let i = array.length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        speedSlider.oninput = function () { // Sorting speed
          drawSpeed = Number(speedSlider.value)
          speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
        }
        if (array[j - 1].number > array[j].number) {
          const temp = array[j - 1]
          array[j].color = 'yellow'
          drawArray(array)
          await delay(drawSpeed)
          array[j - 1] = array[j]
          array[j] = temp
          tempNum = j
        } else {
          array[j].color = 'green'
        }
        array[j - 1].color = 'red'
      }
      array[tempNum].color = 'green'
    }
    array.forEach((element: { color: string }) => {
      element.color = 'green'
    })
    drawArray(array)
  }

  static async bogoSort (array: any, drawSpeed: number = 0) {
    let sorted = false
    while (!sorted) {
      array = shuffleArray(array)
      sorted = isSorted(array)
      drawArray(array)
      await delay(drawSpeed)
    }
    array.forEach((element: { color: string }) => {
      element.color = 'green'
    })
    drawArray(array)
  }

  static async cocktailSort (array: any, drawSpeed: number = 0) {
    let swapping = true
    let tempNum1 = array.length - 1
    let tempNum2 = 0
    while (swapping) {
      swapping = false
      for (let i = 0; i < array.length - 1; i++) {
        speedSlider.oninput = function () { // Sorting speed
          drawSpeed = Number(speedSlider.value)
          speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
        }
        if (array[i].number > array[i + 1].number) {
          const key = array[i]
          array[i] = array[i + 1]
          array[i + 1] = key
          swapping = true
          array[i + 1].color = 'yellow'
          array[i].color = 'yellow'
          drawArray(array)
          await delay(drawSpeed)
          array[i + 1].color = 'red'
          array[i].color = 'red'
        }
      }
      array[tempNum1--].color = 'green'

      if (!swapping) {
        break
      }

      swapping = false

      for (let i = array.length - 1; i > 0; i--) {
        speedSlider.oninput = function () { // Sorting speed
          drawSpeed = Number(speedSlider.value)
          speedOutput.innerHTML = `Sorting delay: ${speedSlider.value} ms`
        }
        if (array[i - 1].number > array[i].number) {
          const key = array[i]
          array[i] = array[i - 1]
          array[i - 1] = key
          swapping = true
          array[i - 1].color = 'yellow'
          array[i].color = 'yellow'
          drawArray(array)
          await delay(drawSpeed)
          array[i - 1].color = 'red'
          array[i].color = 'red'
        }
      }
      array[tempNum2++].color = 'green'
    }
    array.forEach((element: { color: string }) => {
      element.color = 'green'
    })
    drawArray(array)
  }

  static async heapSort (array: any, n: number, drawSpeed: number = Number(speedSlider.value)) {
    for (let i = Math.floor(n / 2); i >= 0; i--) {
      array[i].color = 'yellow'
      await delay(drawSpeed)
      drawArray(array)
      maxHeapify(array, n, i)
    }
    for (let i = n - 1; i >= 0; i--) {
      const temp = array[0]
      array[0] = array[i]
      array[i] = temp
      maxHeapify(array, i, 0)
      array[0].color = 'blue'
      array[i].color = 'green'
      await delay(drawSpeed)
      drawArray(array)
    }
    drawArray(array)
  }
}
