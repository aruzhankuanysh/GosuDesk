<template>
<div>
    <div class="position-absolute d-flex align-items-center my-2 col-12">
        <div class="col-2">
            <img class="col-5" alt="GosuLogo" src="../assets/logoBlue.png">
        </div>
        <div class="col my-2">

        </div>
        <div class="col-2 text-end d-flex align-items-center justify-content-evenly pe-5">
            <div class="d-inline-block" >
                <h5>kaz</h5>
            </div>
            <div class="d-inline-block">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                </div>
            </div>
            <div class="d-inline-block me-2">
                <h5>ru</h5>
            </div>
        </div>
        <div class="col-1 text-start"><i class="bi bi-door-open-fill text-primary display-6"></i></div>
    </div>
    <div class="height container-fluid d-flex flex-column align-items-center justify-content-center"> 
        <div class="col-11">  
            <div class="btn bg-primary bg-opacity-50 col-xl-3 col-5 py-4 px-3">
                <img class="col-3 mb-3" src="..\assets\image1.png" alt="">
                <h4>Настройка оборудования</h4>
                <input type="text" class="d-none" v-model="task.theme">
            </div>
        </div>    
        <div class="card col-5 bg-primary bg-opacity-50 mt-5 px-5">
            <form class="p-5 text-start">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Укажите название магазина или торговой точки:</label>
                    <input v-model="task.store_name" type="text" class="form-control" id="exampleFormControlInput1">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Укажите контактный телефон:</label>
                    <input v-model="task.phone_number" type="number" class="form-control" id="exampleFormControlInput2" placeholder="8(777)777-77-77">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlSelect" class="form-label">Укажите приоритет:</label>
                    <select v-model="task.priority" class="form-select mb-3" id="exampleFormControlInput1" aria-label="select">
                        <option selected disabled> </option>
                        <option value="0">Обычный</option>
                        <option value="1">Высокий</option>
                        <option value="2">Критический</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Опишите проблему:</label>
                    <textarea v-model="task.text" class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                </div>
                <div class="form-floating">
                    <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="createtask">СОЗДАТЬ ЗАЯВКУ</a>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script scoped>
import {service} from '@/services/index'
    
    export default{
        data(){
            return{
                task:{
                    theme: "Настройка оборудования",
                    title: "string",
                    store_name: "",
                    phone_number: "",
                    priority: 0,
                    status: 0,
                    text: "",
                    tags: ["string"],
                    files: ["string"],
                }
            }
        },
        methods:{
            async createtask(){
                this.task.priority = Number.parseInt(this.task.priority)
                let response = await service.createquestion(this.task);
                if (response.ok)
                    this.$router.push({name: 'table'})
            },
        }
    }
    </script>
