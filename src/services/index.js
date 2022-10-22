export const service = {
    auth,
    gettickets,
    createtask,
    addemployee,
    getInfoTask,
}

async function auth(data){
    let responce = await fetch('http://test.4dev.kz:8890/token',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(data.email + ':' + data.password)
            }
        })
      return responce;
}

async function gettickets(data){
    let token = localStorage.getItem('gosu_access_token')
    let responce = await fetch('http://test.4dev.kz:8890/getList',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        })
      return responce;
}

async function createtask(data){
    let token = localStorage.getItem('gosu_access_token')
    let responce = await fetch('http://test.4dev.kz:8890/createTask',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        })
      return responce;
}

async function getInfoTask(data){
    let token = localStorage.getItem('gosu_access_token')
    let responce = await fetch('http://test.4dev.kz:8890/FindTask',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })
    return responce;
}


async function addemployee(data){
    let token = localStorage.getItem('gosu_access_token')
    let responce = await fetch('http://test.4dev.kz:8890/',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(data)
    })
    return responce;
}
