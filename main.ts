function visualizer (val: number, arr: number[]) {
  switch (val) {
    case 1:
      return insertionSort(arr)
    case 2:
      return doubleSelectionSort(arr)
    case 3:
      return bingoSort(arr)
  }
}

function insertionSort (array: number[]) {
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

function doubleSelectionSort (arr: number[]) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let min = arr[i]
    let max = arr[i]
    let minIndex = i
    let maxIndex = i

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

function bingoSort (arr: number[]) {
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

function swap (arr: number[], indexOne: number, indexTwo: number) {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}
