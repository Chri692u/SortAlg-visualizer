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

export function merge(a:any, s:any, m:any, e:any){
  let p = s
  let q = m + 1
  let arr = []
  let k = 0

  for(let i = s; i <= e; i++){
    if(p > m){
      arr[k++] = a[q++]
    } else if(q > e){
      arr[k++] = a[p++]
    } else if(a[p] < a[q])  /* first merge happends here, when the subarray's length is 1 */{
      arr[k++] = a[p++]
    } else {
      arr[k++] = a[q++]
    }
  }

  for(let p = 0; p < k; p++){
    a[s++] = arr[p]
  }
}
