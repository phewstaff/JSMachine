import { containsDuplicate } from './containsDuplicate'

describe('containsDuplicate', () => {
  /**
   * Problem: Contains Duplicate
   *
   * Given an integer array nums, return true if any value appears
   * at least twice in the array, and return false if every element is distinct.
   *
   * Requirements:
   * - Input is an array of integers
   * - Return boolean (true if duplicates exist, false if all elements are unique)
   * - Should handle:
   *   - Empty arrays
   *   - Arrays with single element
   *   - Arrays with multiple duplicates
   *   - Arrays with no duplicates
   *   - Arrays with negative numbers
   *
   * Example 1:
   * Input: [1, 2, 3, 1]
   * Output: true
   * Explanation: 1 appears twice
   *
   * Example 2:
   * Input: [1, 2, 3, 4]
   * Output: false
   * Explanation: All elements are unique
   */

  test('should return true when array contains duplicates', () => {
    const nums = [1, 2, 3, 1]
    expect(containsDuplicate(nums)).toBe(true)
  })

  test('should return false when array has no duplicates', () => {
    const nums = [1, 2, 3, 4]
    expect(containsDuplicate(nums)).toBe(false)
  })

  test('should handle empty array', () => {
    const nums = []
    expect(containsDuplicate(nums)).toBe(false)
  })

  test('should handle array with single element', () => {
    const nums = [1]
    expect(containsDuplicate(nums)).toBe(false)
  })
})
