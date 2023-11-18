import express from 'express'
import { apiRouter } from './routers/api.router.js'
// import {  } from './midlewares/midlewares.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('./public'))
app.use(express.static('./views'))
app.use('/static', express.static('./static'))

app.use(apiRouter)



app.get('/', (req, res) => {
    req.saludar()
    res.send('personas.handlebars')
})

// app.engine('handlebars', handlebars.engine())
// app.set('views', './views')







// app.get('/', (req, res) => {
//     res.render('personas.handlebars')
// })

// app.get('/registro', (req, res) => {
//     res.render('registro.handlebars')
// })






app.listen(8080, ()=> {console.log('conectado')})