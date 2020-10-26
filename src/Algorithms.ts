import { drawArray, delay, merge, shuffleArray, isSorted } from './auxiliaryFunctions'

export class Algorithms {
  static async insertionSort (array: any, drawSpeed: number = 0) {
    for (let i = 1; i < array.length; i++) {
      const key: number = array[i].number
      array[i].color = 'yellow' // Colors the key yellow
      drawArray(array)
      await delay(drawSpeed)
      let j: number = i - 1
      drawArray(array)
      while (j >= 0 && array[j].number > key) {
        array[j + 1].number = array[j].number
        array[j].color = 'yellow' // Colors the comparison same color as key
        drawArray(array)
        await delay(drawSpeed)
        j--
        array[j + 1].color = 'red'
        drawArray(array)
      }
      array[j + 1].number = key
      drawArray(array)
    }
    array.forEach((element: { color: string }) => { // Once the array is sorted, color all green
      element.color = 'green'
    })
    drawArray(array)
  }

  static async selectionsort (array: any, drawSpeed: number = 0) {
    let minIndex
    let temp
    const len = array.length
    for (let i = 0; i < len; i++) {
      minIndex = i
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
        await delay(drawSpeed)
      }
      temp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = temp
      array[i].color = 'green' // Once element is sorted correctly, color green
      drawArray(array)
    }
  }

  static async mergeSort (a:any, s:number, e:number, drawSpeed: number = 0) {
    if (s < e) {
      const m = Math.floor((s + e) / 2)
      await this.mergeSort(a, s, m, drawSpeed)
      drawArray(a)
      await this.mergeSort(a, m + 1, e, drawSpeed)
      drawArray(a)
      await merge(a, s, m, e, drawSpeed)
      drawArray(a)
    }
  }

  static async bubbleSort (array: any, drawSpeed: number = 0) { // TODO: COMMENTS ON COLORS
    let tempNum = 0
    for (let i = array.length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (array[j - 1].number > array[j].number) {
          const temp = array[j - 1]
          array[j].color = 'yellow'
          drawArray(array)
          await delay(drawSpeed)
          array[j - 1] = array[j]
          array[j] = temp
          tempNum = j
          drawArray(array)
          await delay(drawSpeed)
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
}
