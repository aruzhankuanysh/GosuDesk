<template>
  <div class="about">
    <div class="position-absolute d-flex text-end col-12 pt-3">
      <div class="col"></div>
      <div class="col-2 text-center"><i class="bi bi-door-open-fill text-primary display-6"></i></div>
    </div>
    <div class="height container-fluid d-flex flex-column align-items-center justify-content-center">
      <div class="home align-items-center">
        <img class="col-2 col-xxl-2" alt="GosuLogo" src="../assets/logoBlue.png">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </div>
      <div class="col-2 m-3 d-flex justify-content-evenly fs-4">
        <router-link to="#">Қаз</router-link>
        <router-link to="#">Рус</router-link>
      </div>
      <div><h4>Выберите интересующий вас раздел:</h4></div>
      <div >
        <div class="col-11 d-flex justify-content-evenly mt-5 pb-5">
          <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3">
            <router-link to="/setting">
              <img class="col-3 mb-3" src="..\assets\image1.png" alt="">
              <h4>Настройка оборудования</h4>          
            </router-link>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3">
            <router-link to="/question">
              <img class="col-3 mb-3" src="..\assets\image2.png" alt="">
              <h4>Вопрос по 1С</h4>
            </router-link>
          </div>
        </div>
        <div class="col-11 d-flex justify-content-evenly mb-5 pb-5">
          <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3">
            <router-link to="/other">
              <img class="col-3 mb-3" src="..\assets\image3.png" alt="">
              <h4>Другое</h4>
            </router-link>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3">
            <router-link to="/table">
              <img class="col-3 mb-3" src="..\assets\image4.png" alt="">
              <h4>Все заявки</h4>
            </router-link>
          </div>
        </div>
      </div>
      <div class="d-none">
        <div class="d-flex justify-content-evenly mt-5 pb-5">
          <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3" @click="addEmployee">
            <img class="col-3 mb-3" src="..\assets\image5.png" alt="">
            <h4>Добавить сотрудника</h4>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3" @click="addClient">
            <img class="col-3 mb-3" src="..\assets\image6.png" alt="">
            <h4>Пригласить клиента</h4>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3" @click="allTask">
            <img class="col-3 mb-3" src="..\assets\image4.png" alt="">
            <h4>Все заявки</h4>
          </div>
        </div>
        <div class="col-11 d-flex justify-content-evenly mb-5 pb-5">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  methods:{
    async addEmployee(){
      this.$router.push({name:'addEmployee'});
    },
    async addClient(){
      this.$router.push({name:'addClient'});
    },
  }
}
</script>