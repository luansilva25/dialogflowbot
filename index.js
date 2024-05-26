const express = require('express')
const bodyParser = require('body-parser')
const app =  express( )

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send("ola chatbot")
})

app.post('/webhook', (req, res) =>{
    console.log('cheguei no webhook')

    console.log('body', req.body.queryResult)
})

const porta = process.env.PORT || 3000
const hostname = "127.0.0.1"

app.listen(`o servidor esta rodando na porta https://${hostname}:${porta}`)






/*app.get('/pergunta', (req, res) =>{
    msg = req.query.pergunta
    res.send('voce perguntou' + "  " + msg)
})

app.get("/mensagem/:tipo/:id", (req, res) =>{
    msg = req.params.tipo
    cod = req.params.id
    res.send("voce quer editar o id: " + cod)

})

app.post('/pedido', (req , res) => {
    console.log(req.body)
    const produto = req.body.produto
    const qtd = req.body.qtd
    const pagto = req.body.tipoPagamento
    const bebida = req.body.bebida

    const pedido = {
        produto,
        qtd,
        pagto,
        bebida
    }

    res.json(pedido)
})*/