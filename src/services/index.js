export const service = {
    authoriz,
    gettickets,
    createquestion,
    addemployee
}


async function authoriz(data){
    let responce = await fetch('http://192.168.31.36:8000/Token',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Authorization': 'Bearer ' + this.access_token
            },
            body: "grant_type=&username=" + data.email  + "&password=" + data.password + "&scope=&client_id=&client_secret=" 
        })
        // .then(async function(res) { 
        //     if(res.ok) {
        //       let dataResp = await res.json()
        //       localStorage.setItem('token', dataResp.access_token)

        //       goHome()
        //     }
        // })


      return responce;
}

async function gettickets(data){
    let responce = await fetch('http://192.168.31.36:8000/Tasks/All',
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + data.access_token
            },
        })
      return responce;
}

async function createquestion(data){
    let responce = await fetch('http://192.168.31.36:8000/Tasks/Create',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        })
      return responce;
}

// async function createsetting(data){
//     let responce = await fetch('http://192.168.31.36:8000/Tasks/Create',
//         {
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + localStorage.getItem('token')
//             },
//             body: JSON.stringify(data)
//         })
//       return responce;
// }

async function addemployee(data){
    let responce = await fetch('http://192.168.31.36:8000/User/Create',
    {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
    return responce;
}
