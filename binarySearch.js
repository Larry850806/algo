function binarySearch(arr, el) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle] === el) return true

    if (arr[middle] < el) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return false
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 0))
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 1))
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 2))
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3))
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 4))
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 5))
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))
