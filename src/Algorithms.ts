import { drawArray, delay } from './auxiliaryFunctions'

export class Algorithms {
  static async insertionSort (array: any, drawSpeed: number): Promise<any[]> {
    console.log(drawSpeed)
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

  static mergeSort (array: any): any {
    
  //   if (array.length === 1) {
  //     return array
  //   }
  //   const merge = (leftArr: any, rightArr: any) => {
  //     const sortedArr: any[] = []
  //     console.log(rightArr.length, leftArr.length)
  //     while (leftArr.length && rightArr.length) {
  //       leftArr[0].number > rightArr[0].number
  //         ? sortedArr.push(leftArr.shift())
  //         : sortedArr.push(rightArr.shift())
  //     }
  //     return sortedArr.concat(leftArr).concat(rightArr)
  //   }
  //   const middle = Math.floor((array.length / 2))
  //   const leftArr = array.splice(0, middle)
  //   const rightArr = array
  //   return merge(this.mergeSort(leftArr), this.mergeSort(rightArr))
  }
}
