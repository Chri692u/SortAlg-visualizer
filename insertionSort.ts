function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    const key: number = array[i];
    let j: number = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
