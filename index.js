const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port,() =>{
    console.log(`Server is up http://192.168.1.48:${port} or localhost:${port}`)
})