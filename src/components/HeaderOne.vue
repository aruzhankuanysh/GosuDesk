<template>
    <div class="col-4 col-md-2">
        <img class="col-6 col-md-5" alt="GosuLogo" src="../assets/logoBlue.png">
    </div>
    <div class="col d-none d-md-flex">

    </div>
    <div class="col-2 d-md-none py-2">
        <!--  bg-light bg-opacity-50 text-primary -->
        <i class="bi bi-plus-square text-light h1"></i>
    </div>
    <div class="col-md-4 col-lg-3 col-xl-2 d-none d-md-flex py-2 px-5">
        <!--  bg-light bg-opacity-50 text-primary -->
        <button class="btn form-control text-light py-2" @click="newTask">Создать заявку</button>
    </div>
    <div class="col-md-3 col-lg-4 col-xl-3 d-none d-md-flex py-2 px-3">
        <div class="input-group">
            <input class="form-control py-2 my-2 bg-transparent text-light" type="text" placeholder="Поиск...">
            <span class="input-group-text my-2 bg-transparent"><i class="bi bi-search text-primary"></i></span>
        </div>
    </div>
    <div class="col-4 col-md-2 text-end d-flex align-items-center justify-content-evenly text-light px-4">
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
</template>


<script>
export default{
    methods:{
        async newTask(){
            this.$router.push({name: 'home'})
        }
    }
}
</script>


<style scoped>
.form-control, .input-group-text{
    border: 1px solid #ffffff;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color:    rgb(255, 255, 255);
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    rgb(255, 255, 255);
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    rgb(255, 255, 255);
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    rgb(255, 255, 255);
}

</style>