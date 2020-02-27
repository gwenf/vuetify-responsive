import Home from '@/views/Home.vue'
import Store from '@/views/Store.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/store', name: 'store', component: Store },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/checkout', name: 'checkout', component: Checkout }
]
