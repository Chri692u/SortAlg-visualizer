import { drawArray, delay, merge } from './auxiliaryFunctions'

export class Algorithms {
  static async insertionSort (array: any, drawSpeed: number): Promise<any[]> {
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
      // await delay(1000)
    }
    array.forEach((element: { color: string }) => {
      element.color = 'green'
    })
    drawArray(array)
    return array
  }

  static async selectionsort (array: any): Promise<any[]> {
    for (let i = 0; i < array.length - 1; i++) {
      let min = i
      for (let j = i + 1; j < array.length + 1; j++) {
        if (array[j].number < array[min].number) {
          min = j
        }
      }

      if (min !== i) {
        const key = array[min].number
        array[min].number = array[i].number
        array[i].number = key
      }
    }
    return array
  }

  static async mergeSort (a:any, s:number, e:number, drawSpeed: number) {
    if (s < e) {
      const m = Math.floor((s + e) / 2)
      await this.mergeSort(a, s, m, drawSpeed)
      // for (let i = s; i < m; i++) {
      //   a[i].color = 'yellow'
      // }
      drawArray(a)
      await delay(200)
      await this.mergeSort(a, m + 1, e, drawSpeed)
      // for (let i = s; i < m; i++) {
      //   a[i].color = 'yellow'
      // }
      drawArray(a)
      await delay(200)
      await merge(a, s, m, e, drawSpeed)
      // for (let i = s; i < m; i++) {
      //   a[i].color = 'green'
      // }
      drawArray(a)
    }
  }
}
