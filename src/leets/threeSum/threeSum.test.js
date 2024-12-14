import { threeSum } from './threeSumProblem.js'

describe('threeSum', () => {
  /**
   * Problem: Three Sum
   *
   * Given an array of integers, find all unique triplets in the array
   * that sum up to zero.
   *
   * Requirements:
   * - Input is an array of integers (positive, negative, and zero)
   * - Return an array of triplets where each triplet sums to 0
   * - The solution set must not contain duplicate triplets
   * - Should handle:
   *   - Empty arrays or arrays with less than 3 elements
   *   - Arrays with multiple solutions
   *   - Arrays with duplicate numbers
   *
   * Example:
   * Input: [-1, 0, 1, 2, -1, -4]
   * Output: [[-1, -1, 2], [-1, 0, 1]]
   * Explanation:
   * - (-1) + (-1) + 2 = 0
   * - (-1) + 0 + 1 = 0
   */
  test('should return correct triplets for [-1, 0, 1, 2, -1, -4]', () => {
    const nums = [-1, 0, 1, 2, -1, -4 - 1, 0, 1, 2, -1, -4]
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ]
    expect(threeSum(nums)).toEqual(expect.arrayContaining(expected))
  })

  test('should return empty array for [0, 1, 1]', () => {
    const nums = [0, 1, 1]
    expect(threeSum(nums)).toEqual([])
  })

  test('should return correct triplets for [0, 0, 0]', () => {
    const nums = [0, 0, 0]
    const expected = [[0, 0, 0]]
    expect(threeSum(nums)).toEqual(expected)
  })
})
