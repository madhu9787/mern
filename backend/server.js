const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')//to load env file
dotenv.config();
app.use(express.json());//middleware to parse json body used in above the requests
mongoose.connect(
    process.env.MONGO_URI
)
.then(()=>{console.log("MongoDb connected successfully")})
.catch((err)=>{console.log(err)})



app.use('/auth',require('./routes/authRoutes'))
app.use('/task',require('./routes/taskRoutes'))
app.get('/api',(req,res)=>{
    res.send("hi from express")
})
app.post('/api',(req,res)=>{
    const temp=req.body;
    res.send(temp);
})
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})