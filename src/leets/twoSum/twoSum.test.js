import { twoSum } from './twoSum.js'

describe('twoSum', () => {
  /**
   * Problem: Two Sum
   *
   * Given an array of integers, find a unique pair in the array
   * that sum up to a given target.
   *
   * Requirements:
   * - Input is an array of integers (positive, negative, and zero)
   * - Return an array of pairs where each pair sums to the target
   * - The solution set must not contain duplicate pairs
   */

  test('should return [2,7] for [2,7,11,15] and target 9', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const expected = [2, 7]
    expect(twoSum(nums, target)).toEqual(expected)
  })
})
