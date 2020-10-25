export function swap (arr: number[], indexOne: number, indexTwo: number) {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}

const columns: HTMLElement = document.getElementById('columns')!

export function randomArray (val: number, max: number) {
  const ranArray = []
  const arrayThing = shuffleArray(Array.from({ length: val }, (v, i) => i + 1))
  for (let i = 0; i < val; i++) {
    ranArray.push({
      number: arrayThing[i],
      color: 'red'
    })
  }
  // for (let i = 0; i < val; i++) {
  //   ranArray.push({
  //     number: Math.floor((Math.random() * 10) + 1),
  //     color: 'red'
  //   })
  // }
  return ranArray
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

export async function merge (a:any, s:number, m:number, e:number, drawSpeed: number) {
  let p = s
  let q = m + 1
  const arr = []
  let k = 0

  for (let i = s; i <= e; i++) {
    if (p > m) {
      arr[k++] = a[q++]
    } else if (q > e) {
      arr[k++] = a[p++]
    } else if (a[p].number < a[q].number) /* first merge happends here, when the subarray's length is 1 */{
      arr[k++] = a[p++]
    } else {
      arr[k++] = a[q++]
    }
    // for (let i = p; i < q; i++) {
    //   a[i].color = 'yellow'
    // }
    // drawArray(arr)
    // await delay(200)
    for (let i = p; i < q; i++) {
      a[i].color = 'yellow'
    }
    drawArray(a)
    await delay(drawSpeed)
  }

  for (let p = 0; p < k; p++) {
    a[p].color = 'green'
    a[s++] = arr[p]
  }
}

export function shuffleArray (array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    swap(array, i, j)
  }
  return array
}

export function isSorted (array: any) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1].number > array[i].number) {
      return false
    }
  }
  return true
}
