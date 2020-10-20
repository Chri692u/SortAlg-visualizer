function swap (arr: number[], indexOne: number, indexTwo: number) {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}