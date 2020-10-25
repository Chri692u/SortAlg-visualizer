import { drawArray, delay, merge, shuffleArray, isSorted } from './auxiliaryFunctions'

export class Algorithms {
  static async insertionSort (array: any, drawSpeed: number = 0) {
    for (let i = 1; i < array.length; i++) {
      const key: number = array[i].number // highlight key (yellow color)
      array[i].color = 'yellow'
      drawArray(array)
      await delay(drawSpeed)
      let j: number = i - 1
      drawArray(array)
      while (j >= 0 && array[j].number > key) {
        array[j + 1].number = array[j].number // highlight j (yellow)
        array[j].color = 'yellow'
        drawArray(array)
        await delay(drawSpeed)
        j--
        array[j + 1].color = 'green'
        drawArray(array)
      }
      array[j + 1].number = key
      array[j + 1].color = 'green' // color = green, element is sorted
      drawArray(array)
    }
    array.forEach((element: { color: string }) => {
      element.color = 'green'
    })
    drawArray(array)
  }

  static async selectionsort (array: any, drawSpeed: number = 0) {
    let minIdx
    let temp
    const len = array.length
    for (let i = 0; i < len; i++) {
      minIdx = i
      for (let j = i + 1; j < len; j++) {
        array[j].color = 'yellow'
        array[minIdx].color = 'yellow'
        drawArray(array)
        await delay(drawSpeed)
        if (array[j].number < array[minIdx].number) {
          array[minIdx].color = 'red'
          minIdx = j
        }
        array[j].color = 'red'
        drawArray(array)
        await delay(drawSpeed)
      }
      temp = array[i]
      array[i] = array[minIdx]
      array[minIdx] = temp
      array[i].color = 'green'
      drawArray(array)
    }
  }

  static async mergeSort (a:any, s:number, e:number, drawSpeed: number = 0) {
    if (s < e) {
      const m = Math.floor((s + e) / 2)
      await this.mergeSort(a, s, m, drawSpeed)
      drawArray(a)
      // await delay(drawSpeed)
      await this.mergeSort(a, m + 1, e, drawSpeed)
      drawArray(a)
      // await delay(drawSpeed)
      await merge(a, s, m, e, drawSpeed)
      drawArray(a)
    }
  }

  static async bubbleSort (array: any, drawSpeed: number = 0) {
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
