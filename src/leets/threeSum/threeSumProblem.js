/**
 * @param {number} n
 * @return {string[]}
 */

const nums = [-1, 0, 1, 2, -1, -4]

// Output: [
//     [-1, -1, 2],
//     [-1, 0, 1],
// ]

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]

      if (sum < 0) {
        j++
      } else if (sum > 0) {
        k--
      } else {
        result.push([nums[i], nums[j], nums[k]])
        j++

        while (nums[j] === nums[j - 1] && j < k) {
          j++
        }
      }
    }
  }
  return result
}

export { threeSum }
