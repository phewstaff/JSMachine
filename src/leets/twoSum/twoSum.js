/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const map = new Map()
  let result = []
  for (const num of nums) {
    const complement = target - num

    if (map.has(complement)) {
      return (result = [map.get(complement), num])
    }

    map.set(num, num)
  }
  return result
}
export { twoSum }
