import { createApp } from 'vue'
import Toast from './Toast'

/* vue2 */
// const obj = {}
// obj.install = function (Vue) {
//   // 1.创建组件构造器
//   const toastContrustor = Vue.extend(Toast)

//   // 2.new的方式，根据组件构造器，可以创造出来一个组件对象
//   const toast = new toastContrustor()

//   // 3.将组件对象，手动挂载到某一个元素上
//   toast.$mount(document.createElement('div'))

//   // 4.toast.$el对应的就是div
//   document.body.appendChild(toast.$el)

//   Vue.prototype.$toast = toast
// }

// export default obj


/* vue3 */
export default {
  toast: null,
  install(Vue) {
    // 1.为组件对象创建虚拟DOM
    let instance = createApp(Toast)

    // 2.向app节点中添加子节点并绑定到某一个元素上
    let parent = document.createElement('div')
    document.body.appendChild(parent)

    // 3.将子节点挂载到app节点
    // 这里需要注意，大概率app还没有mount，导致获取不到app节点，所以想挂载到app上，需要保证app已经创建
    this.toast = instance.mount(parent)

    // 4.注册全局方法
    Vue.config.globalProperties.$toast = this.toast
  }
}