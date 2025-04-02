import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
//컴포넌트 추가 
// 2) 페이지 단위로 호출

import DataBinding from '@/views/DataBinding.vue'
import ListBinding from '@/views/ListBinding.vue'
import IfBinding from '@/views/IfBinding.vue'
import OnEvent from '@/views/OnEvent.vue'
import ComputedWatch from '@/views/ComputedWatch.vue'



const routes = [ //실제 화면에 출력할 컴포넌트
  {
    path: '/', //접속 경로
    name: 'home', // 라우터 이름
    component: HomeView //출력할 컴포넌트
  },


  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },



  {
    path: '/dataBinding', //접속 경로
    name: 'dataBind', // 라우터 이름
    component: DataBinding //출력할 컴포넌트
  },


  {
    path: '/listBinding', //접속 경로
    name: 'listBind', // 라우터 이름
    component: ListBinding //출력할 컴포넌트
  },

  {
    path: '/ifBinding', //접속 경로
    name: 'ifBind', // 라우터 이름
    component: IfBinding //출력할 컴포넌트
  },

  {
    path: '/onEvent', //접속 경로
    name: 'onEvent', // 라우터 이름
    component: OnEvent //출력할 컴포넌트
  },

  {
    path: '/computedWatch', //접속 경로
    name: 'comWat', // 라우터 이름
    component: ComputedWatch //출력할 컴포넌트
  },




]

const router = createRouter({ //뷰 라우터를 생성하는 함수
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router