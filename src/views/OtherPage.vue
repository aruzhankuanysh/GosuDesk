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
        <div class="col-1 text-start"><i class="bi bi-door-open-fill text-primary display-6"></i></div>
    </div>
    <div class="height container-fluid d-flex flex-column align-items-center justify-content-center mb-5 mb-md-0"> 
        <div class="col-11">  
            <div class="btn bg-primary bg-opacity-50 col-9 col-md-4 py-3 py-md-4 px-md-3 mt-md-0 mt-5">
                <img class="col-2 col-md-3 mb-3" src="..\assets\image3.png" alt="">
                <h4 class="text4">Другое</h4>
            </div>
        </div>    
        <div class="card bg-primary bg-opacity-50 mt-2 mt-md-5 px-md-5">
            <form class="p-5 text-start">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Укажите название магазина или торговой точки:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="postOtherData.storeName">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Укажите контактный телефон:</label>
                    <input type="number" class="form-control" id="exampleFormControlInput2" v-model="postOtherData.phone" placeholder="8(777)777-77-77">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Опишите проблему:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" v-model="postOtherData.description"></textarea>
                </div>
                <div class="mb-3 position-relative">
                    <input id="addfile" type="file" hidden="hidden" @click="addNewFile" v-on="postOtherData.addfile">
                    <label class="btn p-0 m-0" for="addfile" id="addfile-btn">
                        <i class="bi bi-paperclip h4 d-inline-block"></i>
                        <h5 class="m-0 text-secondary my-auto d-inline-block" id="addfile-text">Файл</h5> 
                    </label>
                </div>
                <div class="form-floating">
                    <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="createOther">СОЗДАТЬ ЗАЯВКУ</a>
                </div>
                <!-- <button class="btn" @click="getPosts">Show Posts</button>
                <h2>{{ post.id }} - {{ post.title }}</h2>
                <p>{{ post.body }}</p> -->
            </form>
            <form @submit.prevent="setPost" class="text-start d-none">
                <div>
                    <label class="form-label my-3" for="userId">UserID:</label>
                    <input class="form-control" type="text" id="userId" v-model="postData.userId">
                </div>
                <div>
                    <label class="form-label my-3" for="title">Title: </label>
                    <input class="form-control" type="text" id="title" v-model="postData.title">
                </div>
                <div>
                    <label class="form-label my-3" for="body">Body: </label>
                    <textarea class="form-control" id="body" rows="2" v-model="postData.body"></textarea>
                </div>
                <button class="btn btn-light my-4">Create Post</button>


                <!-- <div class="mb-3 position-relative d-flex">
                    <input v-on="addfile" id="addfile" type="file" hidden="hidden" @click="addNewFile">
                    <label class="btn p-0 m-0" for="addfile" id="addfile-btn">
                        <i class="bi bi-paperclip h4 d-inline-block"></i>
                        <h5 class="m-0 text-secondary my-auto d-inline-block" id="addfile-text">Файл</h5> 
                    </label>
                </div>
                <div class="form-floating">
                    <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="createOther">СОЗДАТЬ ЗАЯВКУ</a>
                </div> -->
            </form>
        </div>
    </div>
</div>
</template>

<script>

// import {service} from '@services/index.js'

    export default{
        data(){
            return{
                postOtherData:{
                    storeName: '',
                    phone: '',
                    description: '',
                },
                addfile: FormData,
                postData: {
                    userId: '',
                    title:  '',
                    body:   ''
                }
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
            async createOther() {
                let formData = new FormData();
                fetch('http://192.168.31.180:4554', {
                    method: 'POST',
                    // headers: {
                    //     'Content-Type': 'multipart/form-data'
                    // },
                    body: formData.append('file','addfile') 
                })
                .then(res => res.formData())
                // .then(data => console.log(res.json()))
                // console.log(responce);
            },
            // async setPost() {
            //     fetch('192.168.31.180:4554/upload',{
            //         method:  'POST',
            //         headers: {
            //         'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             userId: this.userId,
            //             title:  this.title,
            //             body:   this.body
            //         })
            //     })
            //     .then(response => response.json())
            //     .then(data => console.log(data))
            // }
        }
    }
    </script>