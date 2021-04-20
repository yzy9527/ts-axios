import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildUrl } from '../helpers/url'
// import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders, flatterHeaders } from '../helpers/headers'
import transform from './transform'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  // 处理config文件
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  // config.headers = transformHeaders(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flatterHeaders(config.headers, config.method!)
}

// function transformRequestData(config: AxiosRequestConfig) {
//   return transformRequest(config.data)
// }

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url!, params) // 类型断言url不为空
}

// function transformHeaders(config: AxiosRequestConfig): any {
//   const { headers = {}, data } = config
//   return processHeaders(headers, data)
// }

function transformResponseData(res: AxiosResponse): AxiosResponse {
  // res.data = transformResponse(res.data)
  console.log('d', res)
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}
