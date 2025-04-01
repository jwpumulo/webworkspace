<!-- components/PageTitle.vue 자식-->
<template>
  <h2> {{ title }}</h2>
</template>

<script>
  export default {

    

    //부모가 넘겨준 값들 read only
    props: ['title'],
    created() {
      console.log('PropsComponent.vue Created');
    },
    mounted() {
      console.log('PropsComponent.vue Mounted');
    }

  }
</script>