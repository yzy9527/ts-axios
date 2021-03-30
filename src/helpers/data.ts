import { isObject } from './utils'

export function transformRequest(data: any): any {
  if (isObject(data)) {
    return JSON.stringify(data)
  } else {
    return data
  }
}

// 将data变为对象
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do
    }
  }
  return data
}
