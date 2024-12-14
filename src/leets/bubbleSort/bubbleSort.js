// bubble sort

export const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const left = arr[i]
      const right = arr[j]
      if (left > right) {
        arr[i] = right
        arr[j] = left
      }
    }
  }
  return arr
}
