const express = require('express')
const app = express()
const {products,people} = require('./data')
app.get('/products',(req,res)=>{
    res.json(products);
})
app.get('/people', (req,res)=>{
    res.json(people);
})

app.listen(3000,()=>{
    console.log("listening port 3000");
})