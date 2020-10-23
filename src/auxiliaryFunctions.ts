export function swap (arr: number[], indexOne: number, indexTwo: number) {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}

export const randomArray = (val: number) => {
  return Array.from({ length: val }, () => Math.floor((Math.random() * 10) + 1))
}
