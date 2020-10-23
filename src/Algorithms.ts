import { swap, drawArray, delay } from './auxiliaryFunctions'

export class Algorithms {
  static async insertionSort (array: any): Promise<any[]> {
    for (let i = 1; i < array.length; i++) {
      const key: number = array[i].number // highlight key (yellow color)
      array[i].color = 'yellow'
      drawArray(array)
      await delay(500)
      let j: number = i - 1
      drawArray(array)
      while (j >= 0 && array[j].number > key) {
        array[j + 1].number = array[j].number // highlight j (yellow)
        array[j].color = 'yellow'
        drawArray(array)
        await delay(500)
        j--
        array[j + 1].color = 'green'
        drawArray(array)
      }
      array[j + 1].number = key
      array[j + 1].color = 'green' // color = green, element is sorted
      drawArray(array)
      // await delay(1000)
    }
    array.forEach((element: { color: string }) => {
      element.color = 'green'
    })
    drawArray(array)
    return array
  }

  static async bingoSort (arr: any): Promise<any[]> {
    for (let i = 0; i < arr.length - 1; i++) {
      let min: number = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j
        }
      }
      if (min !== i) {
        swap(arr, min, i)
      }
    }
    return arr
  }

  static doubleSelectionSort (arr: number[]): number[] {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      let min: number = arr[i]
      let max: number = arr[i]
      let minIndex: number = i
      let maxIndex: number = i

      for (let k = i; k <= j; k++) {
        if (arr[k] > max) {
          max = arr[k]
          maxIndex = k
        } else if (arr[k] < min) {
          min = arr[k]
          minIndex = k
        }
      }

      swap(arr, i, minIndex)
      if (arr[minIndex] === max) {
        swap(arr, j, minIndex)
      } else {
        swap(arr, j, maxIndex)
      }
    }
    return arr
  }
}
