<template>
  <div>
    <input type="text" v-model.lazy="selected">
    <component v-bind:is="selected"></component> <!-- 임의 컴포넌트 is-->
  </div>
</template>

<script>
  import PropsCom from './components/PropsComponent.vue';
  import TextModal from './views/TextModal.vue';

  
  export default {
    data() {
      return {
        selected: 'PropsCom'
      }
    },
    components: {
      PropsCom, // 'PropsCom': PropsCom 이 이름을 찾
      TextModal,
    },
    created() {
      console.log('App.vue Created');
    },
    mounted() {
      console.log('App.vue Mounted');
    },
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