<!-- views/OnEvent.vue-->

<template>
  <div>
    <input v-model="msg" v-on:keyup.alt.enter="clear();">
    <p>{{ msg }}</p>
    <hr>
    <form v-on:click.self="message('form')">
      Form
      <div v-on:click.once="message('div')">
        Div
        <p @click.stop="message('p')">
          P
          <a @click.prevent="message('a')" href="http://www.naver.com/">네이버</a> <!-- prevent 일시정지 페이지는 안바뀜-->
        </p>
      </div>
    </form>
    <hr>
    <button @click="increaseCount">Add 1</button>
    <br>
    <button @click="setCount(num, $event)">
      Add {{ num }}</button>
    <p>The Counter is : {{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data() { // 데이터(CRUD) => 프로퍼티
      return {

        msg: '',
        num: 7,
        counter: 0,
      }
    },
    methods: {
      clear() { //입력하는 값을 초기화
        this.msg = '';
      },
      message(tag) {
        alert(`${tag}, 선택`);
      },
      increaseCounter(event) {
        console.log('increase', event);
        this.counter++;
      },
      setCounter(value, event) {
        console.log('setCount', event);
        this.counter += value;
      }

    }
  }
</script>

<style scoped>
  form,
  form * {
    margin: 10px;
    border: 1px solid rgb(244, 19, 225);

  }
</style>