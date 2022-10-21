<template>
<div>
    <div class="position-absolute col-12 row d-flex align-items-center">
        <div class="col-2 col-md-3 col-lg-2">
            <img class="col-10 col-md-5" alt="GosuLogo" src="../assets/logoBlue.png">
        </div>
        <div class="col"></div>
        <div class="col-2 text-end d-flex align-items-center justify-content-evenly px-5">
            <div class="d-inline-block" >
                <h5>kaz</h5>
            </div>
            <div class="d-inline-block">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                </div>
            </div>
            <div class="d-inline-block">
                <h5>ru</h5>
            </div>
        </div>
        <div class="col-1 text-start"><router-link to="/profile"><i class="bi bi-person-fill text-primary display-6"></i></router-link></div>
    </div>
    <div class="height container-fluid d-flex flex-column align-items-center justify-content-center mb-5 mb-md-0"> 
        <div class="col-11">  
            <div class="btn bg-primary bg-opacity-50 col-9 col-md-3 py-3 py-md-4 px-md-3 mt-md-0 mt-5">
                <img class="col-2 mb-3" src="..\assets\image2.png" alt="">
                <h4 class="text4">Вопрос по 1С</h4>
                <input type="text" class="d-none" v-model="task.theme">
            </div>
        </div>    
        <div class="card bg-primary bg-opacity-50 mt-2 mt-md-5 px-md-5">
            <form class="p-5 text-start">
                <div class="mb-3">
                    <label for="exampleFormControlSelect1" class="form-label">Выберите из списка примерный вариант вопроса:</label>
                    <select v-model="task.title" class="form-select mb-3" id="exampleFormControlSelect1" aria-label="Default select example">
                        <option selected disabled> </option>
                        <option value="Создание пользователя">Создание пользователя</option>
                        <option value="Настройка отчёта">Настройка отчёта</option>
                        <option value="Нет цен">Нет цен</option>
                        <option value="Проблемы с себестоимостью">Проблемы с себестоимостью</option>
                        <option value="Вопрос по бухгалтерии">Вопрос по бухгалтерии</option>
                        <option value="Вопрос по ЗУПу">Вопрос по ЗУПу</option>
                        <option value="Изменить неверный документ">Изменить неверный документ</option>
                        <option value="Новое техническое задание">Новое техническое задание</option>
                        <option value="Не закрывается смена">Не закрывается смена</option>
                        <option value="Ничего не подходит">Ничего не подходит</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlSelect" class="form-label">Укажите приоритет:</label>
                    <select v-model="task.priority" class="form-select mb-3" id="exampleFormControlSelect" aria-label="Default select example">
                        <option selected disabled> </option>
                        <option value="1">Обычный</option>
                        <option value="2" class="bg-warning bg-opacity-50">Высокий</option>
                        <option value="3" class="bg-danger bg-opacity-50">Критический</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Опишите проблему:</label>
                    <textarea v-model="task.text" class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                </div>
                <div class="mb-3 position-relative">
                    <input id="addfile" type="file" hidden="hidden" @click="addNewFile">
                    <label class="btn p-0 m-0" for="addfile" id="addfile-btn">
                        <i class="bi bi-paperclip h4 d-inline-block"></i>
                        <h5 class="m-0 text-secondary my-auto d-inline-block" id="addfile-text">Файл</h5> 
                    </label>
                </div>
                <div class="form-floating">
                    <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="createQuestion">СОЗДАТЬ ЗАЯВКУ</a>
                </div>
            </form>
        </div>
    </div>
</div>

</template>

<style scoped>
</style>

<script>
import {service} from '@/services/index'

export default{
    data(){
        return{
            task: {
                theme: "Вопрос по 1С",
                title: "",
                priority: 0,
                status:0,
                text:"",
                tags:["string"],
                files:["string"]
            },

        }
    },
    methods:{
        async addNewFile(){
            const addfile = document.getElementById("addfile");
            // const btn = document.getElementById("addfile-btn");
            const text = document.getElementById("addfile-text");
        
            addfile.addEventListener("change", function(){
                if(addfile.value){
                    text.innerText = addfile.value.split('\\').pop().split('/').pop();
                }
                else{
                    text.innerText = "Файл не выбран";
                }
            })
        },
        async createQuestion(){
            this.task.priority = Number.parseInt(this.task.priority)
            let response = await service.createquestion(this.task);
            if (response.ok)
            this.$router.push({name: 'table'})
        }
    }
}
</script>