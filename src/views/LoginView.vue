<template>
  <div class="height container-fluid d-flex flex-column align-items-center justify-content-center">
    <div class="home align-items-center">
      <img class="col-2 col- col-xxl-2" alt="GosuLogo" src="../assets/logoBlue.png">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
    <div class="card col-lg-4 col-xxl-3 bg-primary bg-opacity-50 mt-4 justify">
      <div class="card-header d-flex justify-content-evenly">
        <router-link to="#">Қаз</router-link>
        <router-link to="#"> Рус</router-link>
      </div>
      <div class="card-body px-4 mx-3">
        <div class="my-3">
          <h2>Вход в систему</h2>
        </div>
        <form class="mt-5">
          <input class="form-control form-control mb-4" v-model="email" type="email" placeholder="Email..." aria-label=".form-control-lg example">
          <input class="form-control form-control mb-4" v-model="password" type="password" placeholder="Пароль" />
     
          <div class="form-check mb-3 text-start">
              <input class="form-check-input" id="inputRememberPassword" type="checkbox" v-model="rememberMe" />
              <label class="form-check-label" for="inputRememberPassword">Запомнить меня</label>
          </div>
          <div class="form-floating mb-5">
              <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="auter">ВОЙТИ</a>
          </div>
          <div class="form-floating text-center justify-content-between mt-4 mb-0">
              <a href="#">Забыли пароль?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'LoginView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      email:"",
      password:""
    }
  },
  methods:{
    async auter(){
      let responce = await fetch('http://192.168.31.35:8000/Token',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        // 'Authorization': 'Bearer ' + this.access_token
                    },
                    body: "grant_type=&username=" + this.email  + "&password=" + this.password + "&scope=&client_id=&client_secret=" 
                })
                // .then(async function(res) { 
                //     if(res.ok) {
                //       let dataResp = await res.json()
                //       localStorage.setItem('token', dataResp.access_token)

                //       goHome()
                //     }
                // })
      const responceData = await responce.json()

      if(responce.ok){
        localStorage.setItem('token', responceData.access_token)
        this.$router.push({name:'home'});
      }
    }
  }
}
</script>
