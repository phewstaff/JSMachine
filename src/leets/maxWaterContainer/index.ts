export const maxWaterContainer = (arr: number[]): number => {
  if (arr.length < 2) return 0
  let left = 0
  let right = arr.length - 1
  let maxArea = 0

  while (left < right) {
    const width = right - left
    const leftHeight = arr[left]
    const rightHeight = arr[right]
    const height = Math.min(leftHeight, rightHeight)

    const container = width * height

    maxArea = Math.max(container, maxArea)
    if (leftHeight < rightHeight) {
      left++
    }

    if (rightHeight < leftHeight) {
      right--
    }

    if (leftHeight === rightHeight) {
      left++
      right--
    }
  }

  return maxArea
}
