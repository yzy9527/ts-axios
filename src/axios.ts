import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/utils'

// 返回的instance不仅仅拥有Aixos类实例的所有方法，本身也可以作为一个函数被调用
function createInstance() {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)
  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
