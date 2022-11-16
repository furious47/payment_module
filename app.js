require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./db/connect')
const {get,payment} = require('./controller/main')
const routes = require('./route/router')

app.use(express.json())

// router
app.use('/api/payment',routes)


app.get('*',(req,res)=>{
    res.status(200).send('Welcome')
})

const port = process.env.PORT || 3000

const start = async ()=>{
    await db(process.env.MONGO_URI)
    app.listen(port,()=>{
        console.log(`server is running on port ${port}...`);
    })
}

start()