import { Algorithms } from './Algorithms'

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
