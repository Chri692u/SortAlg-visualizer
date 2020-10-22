function visualizer (val: number, arr: number[]): any {
  switch (Number(val)) {
    case 1:
      return Algorithms.insertionSort(arr)
    case 2:
      return Algorithms.doubleSelectionSort(arr)
    case 3:
      return Algorithms.bingoSort(arr)
  }
}

class Algorithms {
  static insertionSort (array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
      const key: number = array[i]
      let j: number = i - 1
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j]
        j--
      }
      array[j + 1] = key
    }
    return array
  }

  static bingoSort (arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
      let min: number = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j
        }
      }
      if (min !== i) {
        Algorithms.swap(arr, min, i)
      }
    }
    return arr
  }

  static doubleSelectionSort (arr: number[]): number[] {
    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      let min: number = arr[i]
      let max: number = arr[i]
      let minIndex: number = i
      let maxIndex:number = i

      for (let k = i; k <= j; k++) {
        if (arr[k] > max) {
          max = arr[k]
          maxIndex = k
        } else if (arr[k] < min) {
          min = arr[k]
          minIndex = k
        }
      }

      Algorithms.swap(arr, i, minIndex)
      if (arr[minIndex] === max) {
        Algorithms.swap(arr, j, minIndex)
      } else {
        Algorithms.swap(arr, j, maxIndex)
      }
    }
    return arr
  }

  static swap (arr: number[], indexOne: number, indexTwo: number) {
    [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
  }
}
