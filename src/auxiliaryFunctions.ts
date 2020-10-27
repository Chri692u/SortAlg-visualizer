export function swap (arr: number[], indexOne: number, indexTwo: number) { // Uses destructuring to swap elements in an array
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]]
}

const columns: HTMLElement = document.getElementById('columns')! // DOM element for array

export function randomArray (maxIndex: number, type: number = 0) { // Creates the array to be sorted
  const randArray = []
  if (type) {
    const array = shuffleArray(Array.from({ length: maxIndex }, (v, i) => i + 1))
    for (let i = 0; i < maxIndex; i++) {
      randArray.push({ // Pushes numbers to array and colors all "unsorted" elements red
        number: array[i],
        color: 'red'
      })
    }
  } else {
    for (let i = 0; i < maxIndex; i++) {
      randArray.push({ // Pushes numbers to array and colors all "unsorted" elements red
        number: Math.floor(Math.random() * maxIndex + 1),
        color: 'red'
      })
    }
  }
  return randArray
}

export function drawArray (arr: any) : void { // Draws any array to the DOM
  columns.innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement('div')
    div.setAttribute('class', `col ${arr[i].color}`)
    div.innerHTML = `${arr[i].number}`
    columns.appendChild(div)
  }
}

// from: https://stackoverflow.com/questions/37764665/typescript-sleep
export function delay (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms)) // Returns a promise that uses setTimeout when it is resolved
}

export async function merge (a:any, s:number, m:number, e:number, drawSpeed: number) { // Auxiliary function for mergeSort, merging sub-arrays
  let p = s
  let q = m + 1
  const arr = []
  let k = 0

  for (let i = s; i <= e; i++) {
    if (p > m) {
      arr[k++] = a[q++]
    } else if (q > e) {
      arr[k++] = a[p++]
    } else if (a[p].number < a[q].number) { // First merge happends here, when the subarray's length is 1
      arr[k++] = a[p++]
    } else {
      arr[k++] = a[q++]
    }
    for (let i = p; i < q; i++) { // Colors the entire sub-array elements yellow
      a[i].color = 'yellow'
    }
  }
  drawArray(a)
  await delay(drawSpeed)

  for (let p = 0; p < k; p++) { // Colors sorted elements green in sub-array
    a[p].color = 'green'
    a[s++] = arr[p]
  }
}

export function shuffleArray (array: number[]) { // Auxiliary function for bogoSort
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    swap(array, i, j)
  }
  return array
}

export function isSorted (array: any) { // Checks if an array is sorted
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1].number > array[i].number) {
      return false
    }
  }
  return true
}

export async function maxHeapify (array: any, n: number, i: number) {
  let largest = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < n && array[left].number > array[largest].number) {
    largest = left
  }
  if (right < n && array[right].number > array[largest].number) {
    largest = right
  }
  if (largest !== i) {
    const temp = array[i]
    array[i] = array[largest]
    array[largest] = temp
    maxHeapify(array, n, largest)
  }
}
