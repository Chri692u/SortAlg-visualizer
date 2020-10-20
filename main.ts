const test: number[] = [123, 3123, 414, 91, 9818, 99, 1, 10000]
console.log(insertionSort(test))

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
