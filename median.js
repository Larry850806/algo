function median(arr) {
  const len = arr.length
  if (len % 2 === 1) {
    let mid = (len - 1) / 2
    return arr[mid]
  }
  let mid = len / 2
  return (arr[mid] + arr[mid - 1]) / 2
}

console.log(median([1, 2, 3, 4, 5]))
console.log(median([1, 2, 3, 4, 5, 6]))
