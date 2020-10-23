export function swap (arr: number[], indexOne: number, indexTwo: number) {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}

export function randomArray (val: number) {
  const attrapArray = []
  for (let i = 0; i < val; i++) {
    attrapArray.push({
      number: Math.floor((Math.random() * 10) + 1),
      color: 'red'
    })
  }
  return attrapArray
}
