const express = require('express')
const mongooseDB = require('mongoose')
const cors = require('cors')

//uri for the db
const uri = 'mongodb://192.168.1.78:27017/plants'
//init port
const port = process.env.PORT || 5000;

const app = express()
app.use(express.json())

app.use(cors())

//connect the database
mongooseDB.connect(uri, {useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true})
	.then(()=>{
		console.log("mongoose db is connected")
	}).catch(err=>{
		console.error(err)
	})


// connect server
app.listen(port, console.log(`server is running at port ${port}`))
