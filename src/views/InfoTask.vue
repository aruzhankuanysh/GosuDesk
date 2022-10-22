<template>
<div>
    <div id="height" class="position-fixed"></div>
    <div class="position-absolute d-flex align-items-center my-2">
        <HeaderOne />
        <!-- <div class="col-1 text-start"><router-link to="/profile"><i class="bi bi-person-fill text-primary display-6"></i></router-link></div> -->
    </div>
    <div class="py-5"></div>
    <div class="container-fluid d-flex flex-column align-items-center">
        <div class="col-11 text-start">
            <div class="text-light mx-4 mb-4 mt-4">
                <div class=""><h2>{{task.title}}</h2></div>
            </div>
            <div class="row m-0">
                <div class="col-md-8">
                    <div class="card bg-light mb-5">
                        <div class="card-body pb-0">
                            
                            <h6 class="card-title border-bottom pb-2 text4"><h2>{{task.question}}</h2>Задача '{{task._id}}'</h6>
                            <h5 class="card-text border-bottom py-md-4">{{task.description}}</h5>
                            <div class="card-subtitle position-relative d-flex py-2">
                                <input id="addfile" type="file" hidden="hidden" @click="addNewFile">
                                <label class="btn p-0 m-0" for="addfile" id="addfile-btn">
                                    <!-- <i class="bi bi-paperclip h4 d-inline-block"></i> -->
                                    <h5 class="m-0 text-secondary my-auto d-inline-block" id="addfile-text">+ прикрепить файл</h5> 
                                </label>
                            </div>
                        </div>
                        
                        <div class="card-footer bg-transparent py-3">
                            <button class="btn bg-primary bg-opacity-50 text-primary fw-bolder">Сохранить</button>
                        </div>
                    </div>
                    <div class="card mb-5 mb-md-0">
                        <div class="card-body">
                            <h4 class="card-title">{{task.comment}}</h4>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="mt-5 d-none d-md-block"><!-- x2  -->
                        <button class="btn bg-primary text-light">     <h5>Отменить заявку</h5> </button>
                        <button class="btn bg-light text-primary mx-3"><h5>Закрыть заявку</h5> </button>
                    </div>
                </div>
                <div class="col-md-4 bg-Success">
                    <div class="card">
                        <div class="card-title bg-primary rounded-top py-4"> </div>
                        <div class="card-body rounded-bottom">
                            <div class="row border-bottom py-2">
                                <div class="col text-secondary">Поставлена:</div>
                                <div class="col">{{task.creationDate}}</div>
                            </div>
                            <div class="row border-bottom py-2">
                                <div class="col text-secondary">Исполнитель:</div>
                                <div class="col">{{task.implementer}}</div>
                            </div>
                            <div class="row border-bottom py-2">
                                <div class="col text-secondary">Приоритет:</div>
                                <div class="col">{{task.priority}}</div>
                            </div>
                            <div class="row py-2">
                                <div class="col text-secondary">Статус:</div>
                                <div class="col">{{task.status}}</div>
                            </div>
                            <div class="row border-top py-2 pt-4 d-flex justify-content-around">
                                <button class="btn col-5 bg-primary text-light">Взять в работу</button>
                                <button class="btn col-5 bg-primary bg-opacity-25 text-primary">Закрыть предв.</button>
                            </div>
                        </div>
                    </div>
                    <div class="card card-time bg-primary text-light mt-4">
                        <div class="card-body pb-0">
                            <div class="card-title">Время с момента подачи заявки:</div>
                            <h4><input class="form-control bg-transparent" type="time" value="15:12"></h4>
                        </div>
                        <div class="card-body">
                            <div class="card-title">Время с момента принятия заявки:</div>
                            <h4><input class="form-control bg-transparent" type="time" value="15:12"></h4>
                        </div>
                    </div>
                    <div class="mt-4 d-md-none row mb-4"><!-- x2  -->
                        <button class="btn bg-primary text-light col mx-1">     <h5 class="text4">Отменить заявку</h5> </button>
                        <button class="btn bg-light text-primary col mx-1"><h5 class="text4">Закрыть заявку</h5> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import HeaderOne from '@/components/HeaderOne.vue'
import {service} from '@/services/index'

export default{
    data(){
        return{
            id:this.$route.params.id, 
            task:{}
        }
    },
    components:{
        HeaderOne
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
        }
    },
    async mounted(){
        var responce = await service.getInfoTask({_id: this.id});
        console.log(responce)
        if(responce.ok){
            this.task = await responce.json()
            console.log(this.task)
        }
    }
}
</script>


<style scoped>
.card-time .form-control{
    color: rgb(255, 255, 255);
    font-size: 24px;
}
</style>