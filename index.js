const express = require("express")
// const { default: mongoose } = require("mongoose")
const app = express()

const { MongoClient, ServerApiVersion } = require('mongodb')
const uri ="mongodb+srv://snsankitkumarsingh:VLInbcNeebGLaQDo@cluster0.bgvobh7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose = require("mongoose")
const UserRouter = require("./routes/user.routes")

//middelware 

app.use(express.json())

mongoose.connect(uri).then(() => {
    console.log("connected to db")
})

// mongoose.connect(uri).then(() =>{
//     console.log("connected to db")
// }
// )

//api endpoint

app.use("/api", UserRouter)

//server
app.listen(5000, () => {
    console.log("server is running on port 5000")
})

