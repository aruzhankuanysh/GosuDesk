<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  text-align: center;
}
:root{
  --bs-primary: #65B2F0;
  --bs-primary-rgb: 101,178,240;
}
.btn-primary {
    --bs-btn-bg: #65B2F0;
    --bs-btn-border-color: #65B2F0;
    --bs-btn-hover-bg: #4b9adb;
    --bs-btn-hover-border-color: #4593d3;
    --bs-btn-active-bg: #4593d3;
    --bs-btn-active-border-color: #4593d3;
    --bs-btn-disabled-bg: #65B2F0;
    --bs-btn-disabled-border-color: #65B2F0;
}
.height{
  height: 100vh;
}
a{
  color: black;
  text-decoration: none;
}
a:-webkit-any-link {
    color: black;
    cursor: pointer;
    text-decoration: none;
}
 #height{
    background-color: rgb(101, 177, 240, 0.5);
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -2;
 }
 @media(max-width:600px) {
  #height{
    height: 130vh;
  }
  .text1{
    font-size: 16px;
  }
  .text2{
    font-size: 16px;
  }
  .text3{
    font-size: 12px;
  }
  .text4{
    font-size: 15px;
  }
 }
 @media(max-width:992px) and (min-width: 600px) {
  .text1{
    font-size: 24px;
  }
  .text3{
    font-size: 18px;
  }
  .text4{
    font-size: 15px;
  }
 }
 @media(max-width:1400px) and (min-width: 992px) {
  .text1{
    font-size: 26px;
  }
  .text3{
    font-size: 20px;
  }
  .text4{
    font-size: 20px;
  }
 }
</style>
