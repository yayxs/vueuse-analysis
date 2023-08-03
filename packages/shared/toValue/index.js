import { unref } from 'vue'

/**
 * unref 参数是引用返回内部值
 * 不是引用返回参数本身
 * 取出来值
 */
export function toValue(r) {
  return typeof r === 'function' ? r() : unref(r)
}
