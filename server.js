const express  = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const initRoutes = require("./app/routes/web");

const server = express()
initRoutes(server);

const corsOption = {
    origin: "http://localhost:8001"
}

server.use(cors(corsOption))

server.use(bodyParser.json())

server.use(bodyParser.urlencoded({ extended: true }))

const db = require('./app/models')
db.sequelize.sync()

require('./app/routes/blog.routes')(server)
require('./app/routes/auth.routes')(server);
require('./app/routes/user.routes')(server);

server.get('/', (req, res) => {
    res.send('This is bvloging')
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`)
})
