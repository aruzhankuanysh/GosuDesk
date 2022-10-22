<template>
<div>
<div id="height"></div>
<div class="position-absolute d-flex align-items-center my-2">
    <HeaderOne />
    <div class="col-1 text-start"><router-link to="/profile"><i class="bi bi-person-fill text-primary display-6"></i></router-link></div>
</div>
<div class="py-5"></div>
<div class=" container-fluid d-flex flex-column align-items-center justify-content-center">
    <div class="col-11">
        <div class="mb-3 d-flex">
            <div class="col-6 col-md-4 bg-light rounded d-flex align-items-center px-2 py-2 me-md-5 me-2">
                <h1 class="text-primary text1">125 &ensp;</h1><h3 class="text3">закрытых заявок</h3>
            </div>
            <div class="col-6 col-md-4 bg-light rounded d-flex align-items-center px-2 py-2">
                <h1 class="text-primary text1">84 &ensp;</h1><h3 class="text3">заявок в работе</h3>
            </div>
        </div>
        <div class="card">
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
                <tr v-for="(task, idx) in tickets.data" :key = 'idx' @click="openTask(task._id)">
                    <th scope="row">{{idx+1}}</th>                   <!--  jd -->
                    <td class="btn">{{task.title}}</td>   <!-- Тема -->
                    <td>{{task.question}}</td>                             <!-- Наименование -->
                    <td>{{task.implementer}}</td>                     <!-- Исполнитель -->
                    <td>{{task.creationDate}}</td>                <!-- дата и время подачи  -->
                    <td>{{task.priority}}</td>                          <!-- приоритет -->
                    <td>{{task.status}}</td>                            <!-- статус -->
                    <!-- <td>{{task.text}}</td> -->
                </tr>
                </tbody>
            </table>

        </div>
        <div class="d-flex justify-content-center mt-3">
            <div class="d-flex justify-content-around col-5">
                <div v-for="page in pages_count" :key = 'page'>
                    <button @click="goPage(page)" class="btn bg-light rounded rounded-circle"><h3>{{page}}</h3></button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script scoped>
import HeaderOne from "@/components/HeaderOne.vue";
import {service} from '@/services/index'
// import moment from 'moment'

export default{
    components:{
        HeaderOne,
    },
    data(){
        return{
            tickets: [],
            user:{},
            pages_count:[],
            current_page: 1
        }
    },
    async mounted(){
        this.load()
    },
    methods:{
        async openTask(_id){
            this.$router.push({name: 'info', params:{id:_id}});
        },
        async load(){
            var data = {current_page: this.current_page, page_size: 10};
            var responce = await service.gettickets(data);
            console.log(data)
            if(responce.ok){
                this.tickets = await responce.json()
                this.pages_count = []
                for(var i = 0; i < this.tickets.page_count; i++){
                    this.pages_count.push(i + 1)
                }

            }
        },
        goPage(page){
            this.current_page = page;
            this.load()
        }
        // date(olddate){
        //     return moment(String(olddate)).format('DD.MM.YYYY hh:mm')
        // }
    }
}
</script>
<style>
</style>