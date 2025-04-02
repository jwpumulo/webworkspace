<!-- views/ListBinding.vue-->
<template>
  <div>
    <button v-on:click="addData">+</button>
    <input type="number" v-model.lazy="no">
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>

      <tbody>
        <!--뭘반복할건지 먼저 결정 -->
        <tr v-for="(prod, index) in products" v-bind:key="prod.product_no">

          <!--in을 기준으로 오른쪽은 배열 왼쪽은 변수 -->

          <td> {{ prod.product_name }}</td>
          <td> {{ prod.price }}</td>
          <td> {{ prod.category }}</td>
          <td> {{ prod.delivery_price }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  let data = [{
      product_name: "기계식키보드",
      price: 25000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_name: "무선마우스",
      price: 12000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_name: "아이패드",
      price: 725000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_name: "무선마우스",
      price: 12000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_name: "무선마우스",
      price: 12000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_name: "무선마우스",
      price: 12000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
    {
      product_name: "무선마우스",
      price: 12000,
      category: "노트북/태블릿",
      delivery_price: 5000,
    },
  ];


  //뷰는 기본적으로 자신이 가진것만 인식
  export default {
    data() {
      return {
        products: data,
        no: '',
      }
    },
    methods: {

      addData(event) { //이벤트 핸들러
        let obj = {
          product_no: 3000,
          product_name: '무선충전기',
          price: 25000,
          category: '노트북/태블릿',
          delivery_price: 3000,
        }

        this.products.push(obj);
        //this.products[this.products.length] = obj; 
      }
    },
    watch: {
      no() {
        this.products.splice(this.no, 1); // 배열 특정 위치 삭제
      }
    }
  }
</script>