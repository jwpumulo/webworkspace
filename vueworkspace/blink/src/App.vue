<template>
  <nav>
    <!--호출태그-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/dataBinding">DataBind</router-link> |
    <router-link v-bind:to="{ name : 'listBind'}">ListBind</router-link> | 
    <router-link v-bind:to="{ name : 'ifBind'}">IfBind</router-link> | 
  </nav>
  <router-view />
  <hr>
  <!--
  <DataBinding />
  <DataBinding />
  <DataBinding />
  <DataBinding />
  -->
</template>


<!-- 데이터가 없는 구조일경우 스크립트가 없음-->
<script>
  // 컴포넌트 추가 1) 자식 컴포넌트로 등록
  // => 특정 페이지의 조각을 구성
  import DataBinding from './views/DataBinding.vue';



  export default { //조각 컴포넌트 불러올 때
    components: { // 자식 컴포넌트 정의 > 일종의 태그로 인식하기에  <DataBinding />
      DataBinding //import한 대상 그대로 쓰면됨
    }
  }
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>