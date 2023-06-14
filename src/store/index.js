import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  cartList: []
}

export default createStore({
  state,
  mutations,
  actions,
  getters
})

// export default createStore({
//   state,
//   mutations: {
//     addCounter(state, payload) {
//       payload.count++
//     },
//     addToCart(state, payload) {
//       state.cartList.push(payload)
//     }
//   },
//   actions: {
//     addCart(context, payload) {
//       // 数组常用的方法有哪些？concat/join/pop/push/reverse/shift/slice/sort/splice/toSource/toString/toLocaleString/unshift/valueOf
//       // 1.查找之前数组中是否有该商品
//       let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
//       // 2.判断oldProdect
//       if (oldProduct) {
//         context.commit('addCounter', oldProduct)
//       } else {
//         payload.count = 1
//         context.commit('addToCart', payload)
//       }
//     }
//   },
//   getters: {
//     cartLength(state) {
//       return state.cartList.length
//     }
//   }
// })
