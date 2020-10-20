function bingoSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min: number = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, min, i);
    }
  }
  return arr;
}
