const mongoose = require("mongoose")

const user = "davidmatano"
const password = "912500"
const database = "todo_sample"
const serverName = "cluster0.wbj7dmj.mongodb.net"

module.exports = {
    init: () => {
        mongoose.connect(
            `mongodb+srv://${user}:${password}@${serverName}/?retryWrites=true&w=majority`
            //código abaixo está descontinuado:
            //{
            //    useNewUrlParser: true,
            //    useUnifiedTopology: true,
            //    useFindAndModify: false,
            //    useCreateIndex: true
            //}
        )
        .then((res)=>console.log(`Mondodb connected: ${res}`))
        .catch((err)=>console.log(`Erro to connect db: ${err}`))
    },
}