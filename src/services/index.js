
export const service = {
    clientAddFile
}

function clientAddFile(data){
    fetch('https://192.168.31.180:4554', {
        method: 'POST',
        headers: {
            'Content-Type': 'content/type'
        },
        body: {
            file: this.addfile
        }
    })
}
