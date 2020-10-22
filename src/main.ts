import { Algorithms } from './Algorithms' // Sorting algorithm implementation class
function visualizer (val: number, arr: number[]) {
  switch (Number(val)) {
    case 1:
      return Algorithms.insertionSort(arr)
    case 2:
      return Algorithms.doubleSelectionSort(arr)
    case 3:
      return Algorithms.bingoSort(arr)
  }
}

// function createArrayFromSlider () {
//   const randomArray = (val: number) => {
//     return Array.from({ length: val }, () => Math.floor((Math.random() * 10) + 1))
//   }

//   const slider = <HTMLInputElement>document.getElementById('myRange')
//   const output: HTMLElement = document.getElementById('array-size')!
//   const sortAlg: any = document.getElementById('options')
//   const btnID: HTMLElement = document.getElementById('btnClick')!
//   let arr = randomArray(1)

// //   output.innerHTML = `Size of array: ${slider.value}`

//   slider.oninput = function (this: any) {
//     output.innerHTML = `Size of array: ${this.value}`
//     arr = randomArray(this.value)
//   }

//   btnID.onclick = function (this: any) {
//     console.log(visualizer(Number(sortAlg.value), arr))
//   }
// }
