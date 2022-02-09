import axios from 'axios'

export function requestHomeMultidata(config) {
  // 1.创建axios实例(instance)
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的请求拦截和响应拦截
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }), err => {
    console.log(err);
  }

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {

    // 拦截成功把数据(data)返回
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
// 
// 
// 
// 
// 
export function requestHomegoods(config) {
  // 1.创建axios实例(instance)
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.axios的请求拦截和响应拦截
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }), err => {
    // console.log(err);
  }

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {

    // 拦截成功把数据(data)返回
    return res.data
  }, err => {
    // console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}