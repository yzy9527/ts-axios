import { ResolveFn, RejectFn } from '../types'

interface Interceptor<T> {
  resolved: ResolveFn<T>
  rejected?: RejectFn
}

export default class InterceptorManager<T> {
  private interceptors: Array<Interceptor<T> | null>
  constructor() {
    this.interceptors = []
  }

  use(resolved: ResolveFn<T>, rejected?: RejectFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    // 作为id
    return this.interceptors.length - 1
  }

  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.interceptors.forEach(interceptors => {
      if (interceptors !== null) {
        fn(interceptors)
      }
    })
  }

  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
