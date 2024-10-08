import express from 'express'

const app = express()

const port = 5000

app.get('/',(req,res)=>{
    res.send('hello world !')
})

app.listen(port,()=>{
    console.log(`server running on port : ${port}`)
})
