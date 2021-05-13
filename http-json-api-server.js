const http = require('http')

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${process.argv[2]}`)

    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (url.pathname == '/api/parsetime') {
        const date = new Date(url.searchParams.get('iso'))
        res.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }))
    } else if (url.pathname == '/api/unixtime') {
        const date = new Date(url.searchParams.get('iso'))
        res.end(JSON.stringify({ unixtime: date.getTime() }))
    }

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.write(url.searchParams)
    // res.write('test')
})
server.listen(process.argv[2])