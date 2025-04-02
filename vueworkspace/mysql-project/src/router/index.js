import {
  createRouter,
  createWebHistory
} from 'vue-router'

import CustomerList from '@/views/CustomerList.vue'
import CustomerInfo from '@/views/CustomerInfo.vue'
import CustomerAdd from '@/views/CustomerAdd.vue'
import customerUpdate from '@/views/CustomerUpdate.vue'

import HomeView from '@/views/HomeView.vue'

const routes = [ //경로, 이름, 컴포넌트
  {
    path: '/',
    redirect: {
      name: 'custList'
    }

  },
  {
    path: '/customerList',
    name: 'custList',
    component: CustomerList
  },
  {
    path: '/customerInfo',
    name: 'custInfo',
    component: CustomerInfo
  },
  {
    path: '/customerAdd',
    name: 'custAdd',
    component: CustomerAdd
  },
  {
    path: '/customerUpdate/:id', //params
    name: 'custUpdate',
    component: customerUpdate
  }


]

const router = createRouter({ //
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router