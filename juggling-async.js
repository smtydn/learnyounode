const http = require('http')


const urls = process.argv.slice(2)


for (url of urls) {
    let temp = new Array()
    http.get(url, (res) => {
        res.on('data', (data) => {
            temp.push(data.toString())
        })
        res.on('error', (error) => {
            temp.push(error.toString())
        })
        res.on('end', () => {
            console.log(temp.join(''))
        })
    })
}
