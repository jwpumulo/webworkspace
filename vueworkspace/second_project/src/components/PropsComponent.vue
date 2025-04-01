<!-- components/PropsComponent.vue -->
<template>
  <div>
    <PageTitle title="First!" />
    <!--<PageTitle title="Today is .." />-->
    <hr>
    <PageContent v-bind:title="header"
                 v-bind:count="(10+15)"
                 :writer="['Adward']"
                 :regdate="20241205"
                 :content="{
                            first : 'Node.js',
                            second : 'Vue.js',
                            }" />
    <hr>
    <PageContent v-bind="info"@update-info="handler"></PageContent>
    <hr>
    <RefComponent ref="child"/>
    <hr>
    <label>부모 데이터 :
           <input type="number" v-model="num"></label>
    <button @click="childHandler">자식 제어</button>                        
  </div>
</template>
<script>
import PageTitle from './PageTitle.vue';
import PageContent from './PageContent.vue';
import RefComponent from './RefComponent.vue';

export default {
  data(){
    return{
      header : '게시글 조회',
      info : {
        title : 'Today is',
        count : 5,
        writer : 'AdWard',
        regdate : '2024-11-19',
        content : 'No Content',
      },
      num : 0
    }
  },
  components : { // 자식 컴포넌트 등록
    PageTitle,
    PageContent,
    RefComponent,
  },
  created(){
    console.log('PropsComponent.vue Created');
  },
  mounted(){
    console.log('PropsComponent.vue Mounted');
  },
  methods : {
    handler(readInfo){
      // 자식 컴포넌트의 emit을 기반으로
      // 넘긴 데이터가 매개변수로 넘어옴
      alert('자식 컴포넌트 요청');
      this.info.count = readInfo;
    },
    childHandler(){
      // 1) 자식 컴포넌트의 함수 직접 호출
      this.$refs.child.plusCount();

      // 2) 자식 컴포넌트의 태그에 직접 접근
      let RefCom = this.$refs.child;
      RefCom.$refs.btn.click();
    }
  },
  watch : {
    num(){
      this.$refs.child.content = this.num;
    }
  }
}
</script>