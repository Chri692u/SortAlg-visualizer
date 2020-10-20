const test: number[] = [123, 3123, 414, 91, 9818, 99, 1, 10000];

console.log(insertionSort(test))
console.log(doubleSelectionSort(test));
console.log(bingoSort(test));

function insertionSort(array: number[]) {
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

function doubleSelectionSort(arr: number[]) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {

    let
      min = arr[i],
      max = arr[i],
      minIndex = i,
      maxIndex = i;

    for (let k = i; k <= j; k++) {
      if (arr[k] > max) {
        max = arr[k];
        maxIndex = k;
      } else if (arr[k] < min) {
        min = arr[k];
        minIndex = k;
      }
    }

    swap(arr, i, minIndex)
    if (arr[minIndex] === max) {
      swap(arr, j, minIndex);
    } else {
      swap(arr, j, maxIndex);
    }

  }
  return arr;
}

function bingoSort(arr: number[]) {

  for (let i = 0; i < arr.length - 1; i++) {
    let min: number = i;
    for (let j = i + 1; j < arr.length; j++) {

      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i)
    }
  }
  return arr;
}

function swap(arr: number[], indexOne: number, indexTwo: number) {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];
}
