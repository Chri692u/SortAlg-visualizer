export function swap (arr: number[], indexOne: number, indexTwo: number) {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}

const columns: HTMLElement = document.getElementById('columns')!

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

export function drawArray (arr: any) : void {
  columns.innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement('div')
    div.setAttribute('class', `col ${arr[i].color}`)
    div.innerHTML = `${arr[i].number}`
    columns.appendChild(div)
  }
}

// https://stackoverflow.com/questions/37764665/typescript-sleep
export function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
