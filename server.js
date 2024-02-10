const express = require('express');
const app = express();

//routes

app.get('/', (req, res)=>{
     res.send('Hello node API')
})

app.listen(3000, ()=>{
     console.log('NODE API is running on port 3000')
})