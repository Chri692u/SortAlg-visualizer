function visualizer(val: number, arr: number[]) {
  switch (val) {
    case 1:
      return insertionSort(arr);
    case 2:
      return doubleSelectionSort(arr);
    case 3:
      return bingoSort(arr);
  }
}
