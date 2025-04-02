<!-- layouts/Defaultheader.vue-->

<template>

  <!-- Header Component-->
    <nav class ="nav">
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" :to="{ name : 'custList'}">전체조회</router-link> |
    <router-link class="nav-link" :to="{ name : 'custAdd'}">등록</router-link>
    <!-- footer Component-->  
  </nav>
</template>

