export const missingNumber = (nums: number[]): number => {
  nums.sort()
  if (nums.length === 1) {
    return 1
  }

  let missing: number = 0
  for (const [index, num] of nums.entries()) {
    if (num !== index) {
      missing = index
      return missing
    }

    if (index === nums.length - 1) {
      missing = index + 1
    }
  }
  return missing
}

missingNumber([1, 2])
