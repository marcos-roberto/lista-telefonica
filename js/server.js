const express = require('express') // importa o express
const app = express() // instancia express associando-o a app
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true }))

let contatos = new Array()

app.post('/contato', (req, resp) => {
    contatos.push(req.body)
    console.log(contatos)
})

app.listen(3003)

