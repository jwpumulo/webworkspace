<!-- views/ CustomerAdd.vue 회원등록-->

<template>

  <div class="container">
    <div class="row">
      <label>이름</label>
      <input type="text" v-model="info.name">
      <div class="form-text text-danger" :class=" {'warning' : nameOk }">
        이름이 입력되지 않았습니다.<div class=""></div>

      </div>
      <div class="form-text text-success" :class=" {'warning' : !nameOk }">
        사용 가능한 이름입니다.

      </div>
      </div>

      <div class="row">
        <label>이메일</label>
        <input type="email" v-model="info.email">
      </div>
      <div class="row">
        <label>연락처</label>
        <input type="tel" v-model="info.phone">
      </div>
      <div class="row">
        <label>주소</label>
        <input type="address" v-model="info.address">
      </div>
      <div class="row">
        <button class="btn btn-info" v-on:click="addCustomer" :disabled="!nameOk">
          <!--버튼에 이벤트 처리-->
          등록
        </button>
      </div>
    </div>

</template>

<script>
  import axios from 'axios'

  export
  default {

    data() {
      return {
        info: {
          name: null,
          email: null,
          phone: null,
          address: null,

        }
      }
    },

    computed: {

      nameOk() {
        return (this.info.name != null) && (this.info.name != '');
      }
    },

    methods: {
      async addCustomer() {
        let ajaxRes = await axios.post(`/api/customers`, this.info)
          .catch(err => console.log(err));
        let sqlRes = ajaxRes.data;
        let custId = sqlRes.insertId; // AUTO_INCREMENT 사용시
        if (custId > 0) {
          alert('정상적으로 등록되었습니다.');
          this.$router.push({ name:'custInfo', //push
            query : {id : custId}});
        } else {
          alert('정상적으로 등록되지 않았습니다.');
        }
      }
    }
  }
</script>


<style>
  .warning {
    display: none;

  }
</style>