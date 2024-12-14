import { maxWaterContainer } from './'

describe('maxWaterContainer', () => {
  /**
   * Problem: Container With Most Water
   *
   * Given n non-negative integers representing an array of heights where the width
   * of each bar is 1, find two lines that together with the x-axis forms a container
   * that would hold the most water.
   *
   * Requirements:
   * - Input is an array of heights (numbers)
   * - Return the maximum area of water that can be contained
   * - Area is calculated by: width * height
   *   - Width is the distance between two heights
   *   - Height is the minimum of the two heights
   * - Should handle:
   *   - Arrays with less than 2 elements (return 0)
   *   - Arrays with same heights
   *   - Arrays of different lengths
   *
   * Example:
   * Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
   * Output: 49
   * Explanation: The max area is between heights 8 and 7 with width of 7
   */
  test('should return the maximum area of water that can be contained', () => {
    const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    const expected = 49

    expect(maxWaterContainer(heights)).toBe(expected)
  })

  test('should return 0 for an array with less than 2 elements', () => {
    const heights = [1]
    const expected = 0

    expect(maxWaterContainer(heights)).toBe(expected)
  })

  test('should handle array with all same heights', () => {
    const heights = [5, 5, 5, 5, 5]
    const expected = 20
    expect(maxWaterContainer(heights)).toBe(expected)
  })
})
