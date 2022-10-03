const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                res.setHeader('Content-Type', 'text/html')
                res.write(data)
        
            }
        })

    }

    if(req.url="/style.css"){
        fs.readFile("./style.css", (err, data) => {
            if (err) {
                console.log(err)
            }
            else {
                res.write(data)
                res.end()
            }
        })
    }
    else {
        res.statusCode = 404
        res.end("404")
    }

})

server.listen(5000, (err) => {
    err ? console.log(err) : console.log("server is running on port 5000")
})