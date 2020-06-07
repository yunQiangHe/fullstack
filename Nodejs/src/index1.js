const http = require('http')
const PORT = 3000
const HOSTNAME = "127.0.0.1"

const NODE_ENV = "development" //"production"

process.env.NODE_ENV

const server = http.createServer((req, res) => {
    // console.log(req)
    res.statusCode = 200
    res.setHeader("Content-Type", 'text-plain')
    res.end("hello http module") //关闭响应
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`服务器运行在 http://${HOSTNAME}:${PORT}/`)
})

process.on("SIGTERM", () => {
    server.close(() => {
        console.log('进程已终止')
    })
})