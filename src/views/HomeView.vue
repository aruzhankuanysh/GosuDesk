<template>
  <div class="about">
    <div class="position-absolute d-flex text-end col-12 pt-3">
      <div class="col"></div>
      <div class="col-2 text-center"><i class="bi bi-door-open-fill text-primary display-6"></i></div>
    </div>
    <div class="height container-fluid d-flex flex-column align-items-center justify-content-center">
      <div class="home align-items-center col-lg-8">
        <img class="col-2 col-xxl-2" alt="GosuLogo" src="../assets/logoBlue.png">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </div>
      <div class="col-2 m-3 d-flex justify-content-evenly fs-4">
        <router-link to="#"><h4 class="text4">Қаз</h4> </router-link>
        <router-link to="#"><h4 class="text4">Рус</h4> </router-link>
      </div>
      <div><h4 class="text4">Выберите интересующий вас раздел:</h4></div>
      <div >
        <div class="col-lg-11 d-flex justify-content-evenly mt-5 pb-5">
          <div class="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
            <router-link to="/setting">
              <img class="col-3 mb-3" src="..\assets\image1.png" alt="">
              <h4 class="text4">Настройка оборудования</h4>          
            </router-link>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
            <router-link to="/question">
              <img class="col-3 mb-3" src="..\assets\image2.png" alt="">
              <h4 class="text4">Вопрос по 1С</h4>
            </router-link>
          </div>
        </div>
        <div class="col-lg-11 d-flex justify-content-evenly mb-5 pb-5">
          <div class="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
            <router-link to="/other">
              <img class="col-3 mb-3" src="..\assets\image3.png" alt="">
              <h4 class="text4">Другое</h4>
            </router-link>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-5 col-md-4 col-lg-3 py-4 px-3">
            <router-link to="/table">
              <img class="col-3 mb-3" src="..\assets\image4.png" alt="">
              <h4 class="text4">Все заявки</h4>
            </router-link>
          </div>
        </div>
      </div>
      <div class="d-none">
        <div class="d-flex justify-content-evenly mt-5 pb-md-5">
          <div class="btn bg-primary bg-opacity-50 col-4 col-md-3 py-4 px-3" @click="addEmployee">
            <img class="col-3 mb-3" src="..\assets\image5.png" alt="">
            <h4 class="text4">Добавить сотрудника</h4>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-4 col-md-3 py-4 px-3" @click="addClient">
            <img class="col-3 mb-3" src="..\assets\image6.png" alt="">
            <h4 class="text4">Пригласить клиента</h4>
          </div>
          <div class="btn bg-primary bg-opacity-50 col-4 col-md-3 py-4 px-3 d-none d-md-block" @click="allTask">
            <img class="col-3 mb-3" src="..\assets\image4.png" alt="">
            <h4 class="text4">Все заявки</h4>
          </div>
        </div>
        <div class="d-flex justify-content-evenly mt-5 pb-5 d-md-none">
          <div class="btn bg-primary bg-opacity-50 col-4 col-md-3 py-4 px-3" @click="allTask">
            <img class="col-3 mb-3" src="..\assets\image4.png" alt="">
            <h4 class="text4">Все заявки</h4>
          </div>
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
  data() {
    return {
      token:""
    }
  },
  mounted() {
    this.token = localStorage.getItem('token')
    console.log(this.token)
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