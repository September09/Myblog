/**
 * Created by september on 2018/6/15.
 */

import "whatwg-fetch"
const timeout = 10000
import { message } from "antd"

export default class HttpUtil {
  /**
     * get 请求
     * @param url
     * @returns {Promise}
     */
  static getData(url) {
    const result = fetch(url, {
      credentials: "include",
      headers: {
        "Accept": "application/json, text/plain, */*"
      },
    })
    return result
  }
  /**
     * post 请求
     * @param url
     * @param params
     * @returns {Promise}
     */
  static postData(url, paramsObj = {}, httpCustomerOpertion = { isHandleResult: true, isShowLoading: true }) {
    const method = "POST"
    const body = JSON.stringify(paramsObj)
    const fetchParams = Object.assign({}, { method, body }, this.getHeaders())
    return HttpUtil.handleFetchData(url, fetchParams, httpCustomerOpertion)
  }
  /**
     * 发送fetch请求
     * @param fetchUrl
     * @param fetchParams
     * @returns {Promise}
     */
  static handleFetchData(fetchUrl, fetchParams, httpCustomerOpertion) {
    // 如果是照片的base64数据，ios系统会卡死
    // TODO: debugPanel不使用react
    const logParams = { ...fetchParams }
    if (logParams.body && logParams.body.length > 1024) {
      logParams.body = logParams.body.substr(0, 1024) + "..."
    }
    console.log(fetchParams.method, fetchUrl, logParams)
    const { isShowLoading } = httpCustomerOpertion
    if (isShowLoading) {
      HttpUtil.showLoading()
    }
    httpCustomerOpertion.isFetched = false
    httpCustomerOpertion.isAbort = false
    // 处理自定义的请求头
    if (httpCustomerOpertion.hasOwnProperty("customHead")) {
      const { customHead } = httpCustomerOpertion
      fetchParams.headers = Object.assign({}, fetchParams.headers, customHead)
    }
    const fetchPromise = new Promise((resolve, reject) => {
      fetch(fetchUrl, fetchParams).then(
        response => {
          if (httpCustomerOpertion.isAbort) {
            // 请求超时后，放弃迟到的响应
            return
          }
          if (isShowLoading) {
            HttpUtil.hideLoading()
          }
          httpCustomerOpertion.isFetched = true
          response.json().then(jsonBody => {
            if (response.ok) {
              console.log(response)
              console.log(jsonBody.status)
              if (jsonBody.status) {
                // 业务逻辑报错
                console.log(3333333)
                reject(HttpUtil.handleResult(jsonBody, httpCustomerOpertion))
              } else {
                resolve(HttpUtil.handleResult(jsonBody, httpCustomerOpertion))
              }
            } else {
              // http status header <200 || >299
              let msg = "当前服务繁忙，请稍后再试"
              if (response.status === 404) {
                msg = "您访问的内容走丢了…"
              }
              console.log("msg", msg)
              reject(HttpUtil.handleResult({ fetchStatus: "error", netStatus: response.status }, httpCustomerOpertion))
            }
          }).catch(e => {
            console.log("catch")
            const errMsg = e.name + " " + e.message
            reject(HttpUtil.handleResult({ fetchStatus: "error", error: errMsg, netStatus: response.status }, httpCustomerOpertion))
          })
        }
      ).catch(e => {
        const errMsg = e.name + " " + e.message
        if (httpCustomerOpertion.isAbort) {
          // 请求超时后，放弃迟到的响应
          return
        }
        if (isShowLoading) {
          HttpUtil.hideLoading()
        }
        httpCustomerOpertion.isFetched = true
        if (httpCustomerOpertion.isHandleResult === true) {
          console.log("网络开小差了，稍后再试吧")
        }
        reject(HttpUtil.handleResult({ fetchStatus: "error", error: errMsg }, httpCustomerOpertion))
      })
    })
    return Promise.race([fetchPromise, HttpUtil.fetchTimeout(httpCustomerOpertion)])
  }

  /**
     * 统一处理后台返回的错误结果
     * @param result
     * ps: 通过 this.isHandleError 来判断是否需要有fetch方法来统一处理错误信息
     */
  static handleResult(result, httpCustomerOpertion) {
    console.log(httpCustomerOpertion)
    console.log(result)
    if (result.status && httpCustomerOpertion.isHandleResult === true) {
      const errMsg = result.msg || result.message || "服务器开小差了，稍后再试吧"
      message.error(`${errMsg}（${result.status}）`)
    }
    return result
  }

  /**
     * 控制Fetch请求是否超时
     * @returns {Promise}
     */
  static fetchTimeout(httpCustomerOpertion) {
    const { isShowLoading } = httpCustomerOpertion
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!httpCustomerOpertion.isFetched) {
          // 还未收到响应，则开始超时逻辑，并标记fetch需要放弃
          httpCustomerOpertion.isAbort = true
          if (isShowLoading) {
            HttpUtil.hideLoading()
          }
          console.log("网络开小差了，稍后再试吧")
          reject({ fetchStatus: "timeout" })
        }
      }, httpCustomerOpertion.timeout || timeout)
    })
  }

  /**
     * 获取请求头信息
     * @returns {{app-info: string, access-token: string}}
     */
  static getHeaders() {
    // 需要通过app来获取
    // const ctx = window.bridge && window.bridge.getCachedContext()
    const fetchCommonParams = {
      "mode": "cors",
      "credentials": "include"
    }
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json;charset=utf-8",
      "Authorization": localStorage.getItem("token") || null,
    }
    return Object.assign({}, fetchCommonParams, { headers })
  }

  /**
     * 添加loadding状态
     */
  static showLoading() {
    // message.loading("loading...", 3)
    console.log("loading.....")
  }

  /**
     * 取消loadding状态
     */
  static hideLoading() {
    console.log("close loading...")
  }
}
