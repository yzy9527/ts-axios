import { isObject } from './utils'

export function transformRequest(data: any): any {
  if (isObject(data)) {
    return JSON.stringify(data)
  } else {
    return data
  }
}
