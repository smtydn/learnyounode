const http = require('http')

let data = []
http.get(process.argv[2], res => {
    res.on('data', (chunk) => data.push(chunk.toString()))
    res.on('error', (err) => data.push(err.toString()))
    res.on('end', () => {
        const str = data.join('')
        console.log(str.length)
        console.log(str)
    })
})