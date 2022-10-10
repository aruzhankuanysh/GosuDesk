<template>
    <div>
        <div class="position-absolute col-12 row d-flex align-items-center">
            <div class="col-3">
                <img class="col-3" alt="GosuLogo" src="../assets/logoBlue.png">
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
            <div class="col-1 text-start"><i class="bi bi-door-open-fill text-primary display-6"></i></div>
        </div>
        <div class="height container-fluid d-flex flex-column align-items-center justify-content-center"> 
            <div class="col-11">  
                <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3">
                    <img class="col-3 mb-3" src="..\assets\image5.png" alt="">
                    <h4>Добавить сотрудника</h4>
                </div>
            </div>    
            <div class="card col-5 bg-primary bg-opacity-50 mt-5 px-5">
                <form class="p-5 text-start">
                    <div class="mb-3">
                        <label for="InputClientName" class="form-label">ФИО сотрудника:</label>
                        <input type="text" class="form-control" id="InputClientName">
                    </div>
                    <div class="mb-3">
                        <label for="InputClientEmail" class="form-label">Укажите e-mail сотрудника:</label>
                        <input type="email" class="form-control" id="InputClientEmail">
                    </div>
                    <div class="mb-3">
                        <label for="InputClientPass" class="form-label">Пароль для сотрудника:</label>
                        <input type="text" class="form-control" id="InputClientPass">
                    </div>
                    <!-- <div class="mb-3 position-relative d-flex">
                        <input id="addfile" type="file" hidden="hidden" @click="addNewFile">
                        <label class="btn p-0 m-0" for="addfile" id="addfile-btn">
                            <i class="bi bi-paperclip h4 d-inline-block"></i>
                            <h5 class="m-0 text-secondary my-auto d-inline-block" id="addfile-text">Файл</h5> 
                        </label>
                    </div> -->
                    <div class="form-floating">
                        <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="addEmployee">ДОБАВИТЬ</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default{
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
            async addEmployee(){
                this.$router.push({name: 'home'})
            }
        }
    }
    </script>