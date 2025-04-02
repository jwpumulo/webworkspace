<!-- views/CustomerUpdate.vue -->
<template>
  <div class="container">
  <div class="row">
    <label>아이디</label>
    <input type="text" v-model="info.id" readonly>
  </div>
  <div class="row">
    <label>이름</label>
    <input type="text" v-model="info.name">
  </div>
  <div class="row">
    <label>이메일</label>
    <input type="email"v-model="info.email">
  </div>
  <div class="row">
    <label>연락처</label>
    <input type="tel" v-model="info.phone">
  </div>
  <div class="row">
    <label>주소</label>
    <input type="text" v-model="info.address">
  </div>
  <div class="row">
    <button class="btn btn-info"
         v-on:click="updateCustomer">
      수정
    </button>
  </div>
</div>
</template> 
<script>
import axios from 'axios';

export default{
data(){
 return {
   info : {
     name : null,
     email : null,
     phone : null,
     address : null,
   }
 }
},
methods : {
 async addCustomer(){
   let ajaxRes
   = await axios.post(`/api/customers`, this.info)
                .catch(err => console.log(err));
   let sqlRes = ajaxRes.data;
   let custId = sqlRes.insertId; // AUTO_INCREMENT 사용시
   if(custId > 0){
     alert('정상적으로 등록되었습니다.');
   }else{
     alert('정상적으로 등록되지 않았습니다.');
   }
 }
},
created(){
// 수정 1) 사용자가 선택한 대상의 원래 데이터 조회
// => 단건조회
  const selectId = this.$route.params.id;
  this.getCustomerInfo(selectId);
},
methods : {
  async getCustomerInfo(id){ // http://localhost:3000/customers/1
    let ajaxRes = await axios.get(`/api/customers/${id}`) // /api/customers/1
                            .catch(err => console.log(err));
    this.info = ajaxRes.data;
  },
  async updateCustomer(){
    // 수정 2) 사용자가 버튼을 클릭했을 때 서버에 전송
    // => 등록
    let updateDta = {
      name : this.info.name,
      email : this.info.email,
      phone : this.info.phone,
      address : this.info.address,
    }
     
    let ajaxRes
    = await axios.put(`/api/customers/${this.info.id}`, updateDta)
                 .catch(err => console.log(err));
    let sqlRes = ajaxRes.data;
    let result = sqlRes.affectedRows;
    if(result > 0){
      alert('정상적으로 수정되었습니다.');
    }else{
      alert('정상적으로 수정되지 않았습니다.');
    }
  }
}
}
</script>