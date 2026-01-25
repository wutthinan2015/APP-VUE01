import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Customer',
    name: 'Customer',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Customer.vue')

  },

  {
    path: '/Contact',
    name: 'Contact',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')

  },

  {
    path: '/type',
    name: 'type',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/type.vue')

  },

  
  {
    path: '/employees',
    name: 'employees',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/employees.vue')

  },

  {
    path: '/add_customer',
    name: 'add_customer',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Add_customer.vue')

  },

  {
    path: '/add_employee',
    name: 'employee',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Add_employee.vue')

  },

  {
    path: '/product',
    name: 'product',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')

  },

  {
    path: '/product_api',
    name: 'product_api',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Product_api.vue')

  },

  {
    path: '/show_product',
    name: 'show_product',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Show_product.vue')

  }




  
 
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
