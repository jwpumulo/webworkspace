<!-- components/CommonComponent.vue-->
<template>
  <!-- Component가 가지는 HTML -->
<p>
{{ year }}년 {{ month }}월 {{ day }} 
</p>
<p>
다음해 {{ afterYear }} 
</p>

</template>

<script>
// Component를 관리하는 Vue 객체 정의 : DATA 포함 ** 핵심은 데이타, 메소드
export default {
data(){ // 컴포넌트해서 관리하는 데이터 옵션 / 데이터(CRUC) => 프로퍼티 
  
  let today =  new Date();
  return {

    year : today.getFullYear(),
    month : today.getMonth() + 1,
    day : today.getDate(),
  }
},

computed : { //기존 데이터를 기반으로 연산한 결과값 (read only) 로우 데이터를 임의로 '계산'한 결과라서
              // => 프로퍼티
afterYear(){//afterYear : function(){}
 return this.year + 1; //자기자신을 가리키는 this가 필요함 데이터가 가지고 있는 필드, 컴퓨티드를 this로 불러옴
},
},



methods : { //vue가 사용하는 모든 종류의 함수, 등록되지 않은 함수는 사용못함.


},

watch :  { // 데이터 변경에 따른 추가 작업 정의, 감시자
 month(){
  console.log('실행', this.month);
 if((this.month.toString()).length == 1 && this.month < 10) {

  this.month = '0' + this.month; //04 무한루프에 빠지지 않도록 조건문을 섬세하게 작성할 필요
 }

 }



},
}

</script>




<style scoped>
/* Component가 가지는 Style */

</style>



