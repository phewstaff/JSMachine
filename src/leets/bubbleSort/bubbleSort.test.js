import { bubbleSort } from './bubbleSort'

describe('bubbleSort', () => {
  /**
   * Problem: Bubble Sort Implementation
   *
   * Implement a sorting algorithm that repeatedly steps through the list,
   * compares adjacent elements and swaps them if they are in the wrong order.
   *
   * Requirements:
   * - Takes an array of numbers as input
   * - Returns a sorted array in ascending order
   * - Must use the bubble sort algorithm approach
   * - Should handle:
   *   - Arrays with duplicate numbers
   *   - Arrays with positive integers
   *   - Arrays of different lengths
   *
   * Example:
   * Input: [4, 4, 1, 5, 1, 7, 3, 3, 2, 2, 155, 1]
   * Output: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 7, 155]
   */

  test('should return [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 7, 155]', () => {
    const inputArr = [4, 4, 1, 5, 1, 7, 3, 3, 2, 2, 155, 1]
    const expected = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 7, 155]

    expect(bubbleSort(inputArr)).toEqual(expected)
  })
})
