require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')


const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND
var corsOptions = {
     origin: FRONTEND,
     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
   }

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.use('/api/products', productRoute);

app.get('/', (req, res)=>{
     res.send("hello node API")
})

app.get('/blog', (req, res)=>{
     res.send('Hello blog, my name is ellyf')
})

app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.connect(MONGO_URL).then(()=>{
     app.listen(PORT, ()=>{
     console.log(`NODE API is running on port ${PORT}`)
     });
     console.log('connected to mongodb');
}).catch(()=>{
     console.log(error);
})