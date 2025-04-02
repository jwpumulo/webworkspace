<!-- views/DataBinding.vue-->

<template>
  <!--HTML 화면에 출력 담당-->
  <div>
    <!--이중괄호-->
    <h1>{{ title }}</h1>
    <!-- directive : Vue의 명령 수행, 'v-' 시작하는 접두어 사용: 기존의 html과 vue의 속성을 구분하기 위해서 -->
    <h2 v-text="title" id="home"></h2>
    <p v-html="tagList"></p> <!-- inner html 속성 변경-->
    <p v-text="tagList" v-bind:name="tagName"></p> <!-- bind directive 가장 기본이 되는 디렉티브 name은 태크가 가지고 있는 속성-->
    <!-- --------------- v-bind 디렉티브: 단방향 바인딩----------------------->
    <!------------------ v-model 디렉티브: 양방향 바인딩---------------------->
    <input type="text" v-model="valueModel">
    <p> {{ valueModel + 1000 }}, {{ typeof valueModel }}</p>
    <input type="number" v-model.lazy="numberModel">
    <!--타입:넘버, 값을 즉각적으로 받아도 되지 않는다면 lazy.지연-->
    <p> {{ numberModel }}, {{ numberModel + 10000 }} </p>
    <!-- 자바스크립트 공간 선언 , 가벼운 연산 다응 -->
    <select v-model="selectModel">
      <option value="summer"> 여름</option>
      <option value="winter"> 겨울</option>
    </select>
    <p>{{  selectModel }}</p>
    <textarea v-model="textModel"></textarea>
    <hr>
    <input type="checkbox" v-model="chData" true-value="여" false-value="부">
    <!--체크박스는 중복허용-->
    <p>{{ chData }}</p>
    <div>
      <input type="checkbox" value="서울" v-model="city">서울
      <input type="checkbox" value="대구" v-model="city">대구
      <p>{{ city }}</p>
    </div>
    <div>
      <input type="radio" value="Reading" v-model="hobby">독서
      <input type="radio" value="Movie" v-model="hobby">영화
      <input type="radio" value="WorkOut" v-model="hobby">운동
      <p>{{ hobby }}</p>
    </div>

    <img v-bind:style="styleData" v-bind:src="imgUrl">
    <div class="container" v-bind:class="myClass">Class Binding Second</div>
    <div class="container" v-bind:class="{'active' :isActive, 'text-red' : hasError}">
      Class Binding First</div>


  </div>
</template>



<script>
  // Vue 객체의 데이터, 기능

  export default {
    data() { // 데이터 바인딩에 사용하는 데이터들 (CRUD) 교재 p.92

      return {
        title: 'Hello, Vue.js',
        tagList: '<strong>Today is ...</strong>',
        tagName: 'bindTest', //양방향 string
        valueModel: 'Korea',
        numberModel: '0',
        selectModel: 'winter',
        textModel: ' 백견불여일타',
        chData: '',
        city: [],
        hobby: '',
        styleData: {
          //'background-color' : 'skyblue',
          backgroundColor: 'skyblue',
          width: '200px',
        },
        backSetting: 'background-color : skyblue; with:200px,',
        imgUrl: 'https://kr.vuejs.org/images/logo.png',
        isActive: false,
        //hasError: !this.isActive,
        myClass: 'active'

      }
    },
    computed: { //이미 존재하는 데이터 기반으로 계산한 결과값
      hasError: function () {
        return !this.isActive;

      }
    },
  }
</script>


<style>
  /* CSS */

  .text-red {
    color: red;
  }

  .container {
    width: 100%;
    height: 200
  }

  .active {
    background-color: yellow;
  }
</style>

<!-- value값 -->