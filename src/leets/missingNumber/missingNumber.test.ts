import { missingNumber } from './missingNumber'

describe('missingNumber', () => {
  /**
   * Problem: Missing Number
   *
   * Given an array nums containing n distinct numbers in the range [0, n],
   * return the only number in the range that is missing from the array.
   *
   * Requirements:
   * - Input is an array of n distinct integers in range [0, n]
   * - Return the missing integer from the range
   * - Should handle:
   *   - Array with single missing number
   *   - Array where n is missing
   *   - Array where 0 is missing
   *   - Array with different lengths
   *
   * Example 1:
   * Input: nums = [3, 0, 1]
   * Output: 2
   * Explanation: n = 3 since array length is 3.
   * The numbers in range [0,3] are 0, 1, 2, 3. 2 is missing.
   *
   * Example 2:
   * Input: nums = [0, 1]
   * Output: 2
   * Explanation: n = 2 since array length is 2.
   * The numbers in range [0,2] are 0, 1, 2. 2 is missing.
   */

  test('should find missing number in middle of sequence', () => {
    const nums: number[] = [3, 0, 1]
    expect(missingNumber(nums)).toBe(2)
  })

  test('should find missing number at end of sequence', () => {
    const nums: number[] = [0, 1]
    expect(missingNumber(nums)).toBe(2)
  })

  test('should find missing zero', () => {
    const nums: number[] = [1, 2]
    expect(missingNumber(nums)).toBe(0)
  })

  test('should handle array with single element', () => {
    const nums: number[] = [0]
    expect(missingNumber(nums)).toBe(1)
  })
})
