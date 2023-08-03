/**
 *
 * @param {*} value
 * @param {*} othValue
 * @returns
 */
function defaultComparator(value, othValue) {
  return value === othValue
}

/**
 * 两个数组的差异
 * @returns
 * @param args
 */
export function useArrayDifference(args) {
  const list = args[0]
  const values = args[1]
  let compareFn = args[2] ?? defaultComparator

  if (typeof compareFn === 'string') {
  }
}
