/*
 * @Author: qqyule@gmail.com
 * @Date: 2022-01-22 22:47:02
 * @LastEditTime: 2022-01-23 19:46:13
 * @Description: 封装Axios
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import { IRequestParams, IRequestResponse, TServerData } from '@/types/global/request'

interface MyAxiosInstance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>
  (url: string, config?: AxiosRequestConfig): Promise<any>
}

export class Request {
  public static axiosInstance: MyAxiosInstance

  public static init() {
    // 创建axios实例
    Request.axiosInstance = axios.create({
      baseURL: '/api', // api的base_url
      timeout: 10000, // 请求超时时间
    })
    // 初始化拦截器
    this.initInterceptors()
  }

  //拦截器
  public static initInterceptors() {
    // 设置post请求头
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // 请求拦截器
    this.axiosInstance.interceptors.request.use(
      (config: IRequestParams) => {
        // 在请求发送之前做一些处理

        return config
      }, (error: any) => {
        // 发送失败
        // msg.error('请求失败', error)
      })
    // 响应拦截器
    this.axiosInstance.interceptors.response.use(
      //请求成功
      (response: IRequestResponse): TServerData => {
        const { data: { code, message, data } } = response
        if (response.status !== 200 || code !== 0) {
          Request.errorHandle(response, message)
        }
        return data
      },
      //请求失败
      (error: AxiosError): Promise<any> => {
        const { response } = error
        if (response) {
          // 请求已发出，但是不在2xx的范围
          Request.errorHandle(response)
        } else {
          // msg.error('网络连接异常，请稍后再试！')
        }
        return Promise.reject(response?.data)
      }
    )
  }
  private static errorHandle(res: IRequestResponse, message?: string) {
    //状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        // msg.error('请求资源不存在')
        break;
      default:
      // msg.error(message || '请求失败')
    }
  }
}