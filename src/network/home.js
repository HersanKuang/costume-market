import { requestHomeMultidata, requestHomegoods } from './request'

export function getHomeMultidata() {
  return requestHomeMultidata({
    url: '/home/multidata'
  })
}
// 
// 
// 
// 
export function getHomeGoods(type, page) {
  return requestHomegoods({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}