const express =require('express')
const app = express()
const {PORT} = process.env
const port = PORT || 8080
const routes = require('./controllers/controller')
const helmet = require('helmet')
const morgan = require('morgan')

app.set('view engine' ,'ejs')
app.use(helmet())
app.use(morgan('tiny'))
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(routes)

app.listen(port)
