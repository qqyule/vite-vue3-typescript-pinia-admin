import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 请求参数类型
export interface IRequestParams extends AxiosRequestConfig {
  desc?: string,
  isJSON?: boolean
}

// 请求响应类型
export interface IRequestResponse extends AxiosResponse {
  data: TResponseData
}

//定义服务端data
export type TServerData =
  | Array<Record<string, any>>
  | Record<string, any>
  | undefined


// 定义响应data
export type TResponseData = {
  code: 0 | number,
  message: string,
  data?: TServerData
}