// main.js



/*
create 생성 >뷰 객체
mount  virtual DOM => Real DOM
update 변경 (데이터 바인딩)
destroy 더 이상 필요없으면 소멸
*/

// Root Vue 객체 생성위해 함수 가져오기
import { createApp } from 'vue' //노드가 가지고 있는 require, createApp:최상위객체

// Root Vue 객체 정의파일 가져오기
import App from './App.vue' //하나하나 컴포넌트 의미

//import App from './components/CommonComponent.vue';

// Vue Router가져오기
import router from './router'

createApp(App)
.use(router) //메소드
.mount('#app') //라이프사이클 마운트와 같은 단계 > 돔에 연결하는 순간 #css셀렉터:id속성, idex.html의 <div id="app">연결



