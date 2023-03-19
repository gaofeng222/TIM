import { defineStore } from 'pinia'
import { get } from '@/utils/store'
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useGoodsStore = defineStore('goods', {
  // 其他配置...
  state: () => ({
    goods: [
      {
        gName: '七天挑战瘦20斤 懒人福音 断油阻脂 逆袭女神 超模内部专用',
        url: 'https://s1.ax1x.com/2023/03/19/ppY40BR.jpg',
        count: 1,
        price: '396.00'
      },
      {
        gName: '品牌断码男鞋运动鞋男2022秋季网面透气休闲鞋男士防滑轻便跑步鞋',
        url: 'https://s1.ax1x.com/2023/03/19/ppY4wu9.jpg',
        count: 1,
        price: '298.00'
      }
    ]
  }),
  actions: {
    deleteHandle(index: number) {
      console.log('index', index)
      this.goods.splice(index, 1)
    }
  }
})
