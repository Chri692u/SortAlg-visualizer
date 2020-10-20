function doubleSelectionSort(arr: number[]) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let min = arr[i];
    let max = arr[i];
    let minIndex = i;
    let maxIndex = i;

    for (let k = i; k <= j; k++) {
      if (arr[k] > max) {
        max = arr[k];
        maxIndex = k;
      } else if (arr[k] < min) {
        min = arr[k];
        minIndex = k;
      }
    }

    swap(arr, i, minIndex);
    if (arr[minIndex] === max) {
      swap(arr, j, minIndex);
    } else {
      swap(arr, j, maxIndex);
    }
  }
  return arr;
}
