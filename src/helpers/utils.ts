const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  // 将from全部拷贝到to中
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
