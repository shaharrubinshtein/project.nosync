const express   = require('express')
const morgan    = require('morgan')
const cors      = require('cors')
const dotenv    = require("dotenv");
const mongoose  = require("mongoose");

//const bodyParser = require('body-parser');
const AuthRoutes = require("./routes/AuthRoutes");


//establish app()
const app = express()
const port = process.env.PORT || 3000

//middlware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));

dotenv.config();


//db connection
mongoose.connect(
    process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);


//route middleware

app.use("/api/user", AuthRoutes);

app.all('*',(req,res)=>{
    res.send('not found');
})

//run the server
app.listen(port, 
    ()=>console.log('Express server ready for requests on: ' ,port))
