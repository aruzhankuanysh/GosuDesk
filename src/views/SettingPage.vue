<template>
    <div class="height container-fluid d-flex flex-column align-items-center justify-content-center"> 
        <div class="col-11">  
            <div class="btn bg-primary bg-opacity-50 col-3 py-4 px-3">
                <img class="col-4 mb-3" src="..\assets\image1.png" alt="">
                <h4>Настройка оборудования</h4>
            </div>
        </div>    
        <div class="card col-5 bg-primary bg-opacity-50 mt-5 px-5">
            <form class="p-5 text-start">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Укажите название магазина или торговой точки:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Укажите контактный телефон:</label>
                    <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="8(777)777-77-77">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlSelect" class="form-label">Укажите приоритет:</label>
                    <select class="form-select mb-3" id="exampleFormControlInput1" aria-label="select">
                        <option selected disabled> </option>
                        <option value="1">Срочно</option>
                        <option value="2">Как можно скорее</option>
                        <option value="3">До дэдлайна</option>
                    </select>
                </div>
                <div class="form-floating pt-4">
                    <a class="btn btn-primary col-12 text-uppercase fs-6 fw-bolder py-2" id="login" @click="f">СОЗДАТЬ ЗАЯВКУ</a>
                </div>
            </form>
        </div>
    </div>
</template>
<script scouped>

</script>
