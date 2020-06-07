const http = require('http')
const PORT = 3000
const HOSTNAME = "127.0.0.1"


const server = http.createServer((req, res) => {
    console.log("req.url", req.url)
    let req_url = req.url;
    if (req_url === '/') {
        res.end("welcome to index")
    } else if (req_url === '/login') {
        res.end("welcome to login")
    } else {
        res.end("Not found page")
    }
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`服务器运行在 http://${HOSTNAME}:${PORT}/`)
})

