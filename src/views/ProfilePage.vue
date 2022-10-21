<template>
<div>
    <div id="height" class="position-fixed"></div>
    <HeaderOne />
    <div class="py-5"></div>
    <div class="container-fluid d-flex flex-column align-items-center justify-content-center pb-5">
        <div class="col-11">
            <div class="mb-3 d-flex">
                <div class="col-6 col-md-4 bg-light rounded d-flex align-items-center px-md-2 py-2 me-md-5 me-2">
                    <h1 class="text-primary text1 ms-1">125 &ensp;</h1><h3 class="text3">закрытых заявок</h3>
                </div>
                <div class="col-5 col-md-4 bg-light rounded d-flex align-items-center px-md-2 py-2">
                    <h1 class="text-primary text1 ms-1">84 &ensp;</h1><h3 class="text3">заявок в работе</h3>
                </div>
            </div>
            <div class="card text-start">
                <div class="card-title bg-primary rounded-top px-3 py-2 py-md-4 px-md-5"><h2 class="text-light text2">9k2dil16@gmail.com</h2> </div>
                <div class="card-body rounded-bottom px-md-5">
                    <form class="row d-flex justify-content-evenly mt-md-4 mt-xl-5">
                        <div class="pe-lg-5 col-md-6">
                            <label class="form-label" for="Input1"><h4 class="text2">Имя</h4> </label>
                            <input class="form-control mb-4 border-dark" v-model="fname" type="text" placeholder="" id="Input1" aria-label=".form-control-lg example">
                        </div>
                        <div class="ps-lg-5 col-md-6">
                            <label class="form-label" for="Input2"><h4 class="text2">Фамилия:</h4> </label>
                            <input class="form-control mb-4 border-dark" v-model="lname" type="text" placeholder="" id="Input2" aria-label=".form-control-lg example">
                        </div>
                        <div class="pe-lg-5 col-md-6">
                            <label class="form-label" for="Input3"><h4 class="text2">Название компании:</h4> </label>
                            <input class="form-control mb-4 border-dark" v-model="company_name" type="text" placeholder="" id="Input3" aria-label=".form-control-lg example">
                        </div>
                        <div class="ps-lg-5 col-md-6">
                            <label class="form-label" for="Input1"><h4 class="text2">Телефон:</h4> </label>
                            <input class="form-control mb-4 border-dark" v-model="phone" type="phone" placeholder="" />
                        </div>
                        <div class="form-floating mb-3 mt-lg-4">
                            <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="update">СОХРАНИТЬ</a>
                        </div>
                        <div class="form-floating text-center justify-content-between mb-0">
                            <a href="#">Забыли пароль?</a>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card bg-primary text-light px-5 py-2 mt-5 d-none d-md-flex flex-row align-items-center justify-content-between">
                <h1>Мои Задачи</h1>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="card d-none d-md-flex">
                <table class="table bg-light text-start">
                    <thead class="fw-bolder text-light">
                    <tr class=" bg-primary rounded-3">
                        <th scope="col">ID</th>
                        <th scope="col">Тема</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Исполнитель</th>
                        <th scope="col">Дата подачи заявки</th>
                        <th scope="col">Приоритет</th>
                        <th scope="col">Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="task in tickets" :key = 'task'>
                        <th scope="row">{{task.id}}</th>                    <!-- jd -->
                        <td class="btn" @click="task">{{task.theme}}</td>   <!-- Тема -->
                        <td>{{task.title}}</td>                             <!-- Наименование -->
                        <td>{{task.contractor_id}}</td>                     <!-- Исполнитель -->
                        <td>{{task.date_of_submission}}</td>                <!-- дата и время подачи  -->
                        <td>{{task.priority}}</td>                          <!-- приоритет -->
                        <td>{{task.status}}</td>                            <!-- статус -->
                        <!-- <td>{{task.text}}</td> -->
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    </div>
</div>
</template>
<script>
import HeaderOne from '@/components/HeaderOne.vue'

export default{
    components:{
        HeaderOne
    },
    methods:{
        
    }
}
</script>