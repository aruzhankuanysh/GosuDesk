<template>
<div>
    <div class="position-absolute d-flex align-items-center my-2 col-12">
        <div class="col-2 col-md-3 col-lg-2">
            <img class="col-10 col-md-5" alt="GosuLogo" src="../assets/logoBlue.png">
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
        <div class="col-1 text-start"><router-link to="/profile"><i class="bi bi-person-fill text-primary display-6"></i></router-link></div>
    </div>
    <div class="height container-fluid d-flex flex-column align-items-center justify-content-center mb-5 mb-md-0"> 
        <div class="col-11">  
            <div class="btn bg-primary bg-opacity-50 col-9 col-md-3 py-3 py-md-4 px-md-3 mt-md-0 mt-5">
                <img class="col-2 mb-3" src="..\assets\image1.png" alt="">
                <h4 class="text4">Настройка оборудования</h4>
                <input type="text" class="d-none" v-model="task.title">
            </div>
        </div>    
        <div class="card bg-primary bg-opacity-50 mt-2 mt-md-5 px-md-5">
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
                        <option value="Обычный">Обычный</option>
                        <option value="Высокий">Высокий</option>
                        <option value="Критический">Критический</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Опишите проблему:</label>
                    <textarea v-model="task.description" class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
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
                title: "Настройка оборудования",
                question:"Настройка оборудования",
                implementer:"Не назначено",
                creationDate:"",
                priority: "",
                status:"В ожидании",
                description:"",
                store_name:"",
                phone_number: "",

            }
        }
    },
    methods:{
        async createtask(){
            let response = await service.createtask(this.task);
            if (response.ok)
                this.$router.push({name: 'table'})
        },
    }
}
</script>
