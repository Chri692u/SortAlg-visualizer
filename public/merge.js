function merge(array, p, q, r) {
  let n1 = q - p + 1
  let n2 = r - q
  let left  = [] // size of array is [1 ... n1 + 1]
  let right = [] // size of array is [1 ... n2 + 1]

  for (let i = 0; i < n1; i++) {
    left[i] = array[p + i]
  }

  for (let j = 0; j < n2; j++) {
    right[j] = array[q + 1 + j]
  }

  i = 0
  j = 0
  k = p

  // merge arrays
  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      array[k] = left[i]
      i++
    } else {
      array[k] = right[j]
      j++
    }
    k++
  }
}