import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Blog from '../views/Blog.vue'
import Sale from '../views/Sale.vue'
import Contact from '../views/Contact.vue'
import Registration from '../views/Registration.vue'
import Account from '../views/Account.vue'
import Favourite from '../views/Favourite.vue'
import Cart from '../views/Cart.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/shop', name: 'Shop', component: Shop },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/sale', name: 'Sale', component: Sale },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/registration', name: 'Registration', component: Registration },
    { path: '/account', name: 'Account', component: Account },
    { path: '/account/cart', name: 'Cart', component: Cart },
    { path: '/account/favourite', name: 'Favourite', component: Favourite },
    // 404
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
