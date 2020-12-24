const venom = require('venom-bot')
const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())    //pesquisar isso
app.use(bodyParser.urlencoded({extended: false})) //pesquisar isso

let cliente 

venom
    .create({
        autoClose: 9999999999,
    })
    .then((client) => cliente = client)
    .catch((erro) => {
        console.log(erro);
    });

app.post('/sendMessage', (req, res)=> {
    let {initialMessage, history} = req.body

    start()

    function start() {
        let formatedOptions = ''

        req.body.options.forEach((option, index) => {
            formatedOptions+=`\n*${index+1}* - ${option}`
        })

        cliente.sendText(
        '5514999040647@c.us', `${initialMessage}\n${formatedOptions}`
        )
    }

})

app.listen('3030', ()=>{
    console.log('rodando em 3030')
})
