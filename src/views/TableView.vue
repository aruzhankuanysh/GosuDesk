<template>
<div>
<HeaderOne />
<div id="height"></div>
<div class="height container-fluid d-flex flex-column align-items-center justify-content-center">
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
<script scoped>
import HeaderOne from "@/components/HeaderOne.vue";
import {service} from '@/services/index'
import moment from 'moment'

export default{
    components:{
        HeaderOne,
    },
    data(){
        return{
            tickets: []
        }
    },
    async mounted(){
      var data = {access_token: localStorage.getItem('token')};
      var responce = await service.gettickets(data);

      if(responce.ok){
        this.tickets = await responce.json()
        for(var t in this.tickets){
            this.tickets[t].date_of_submission = this.date(this.tickets[t].date_of_submission)
            console.log(this.tickets[t])
        }
      }
    },
    methods:{
        async task(){
            this.$router.push({name: 'info'});
        },
        date(olddate){
            return moment(String(olddate)).format('DD.MM.YYYY hh:mm')
        }
    }
}
</script>
<style>
</style>