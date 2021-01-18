function findElement(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return true
    }
  }
  return false
}
