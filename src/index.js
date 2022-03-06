const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req,res,next){
    let todayDetaile=new Date()
    let dayA=todayDetaile.getDate()
    let monthB=todayDetaile.getMonth()
    let yearC=todayDetaile.getFullYear()
    let time=todayDetaile.toUTCString().substring(17,25)
    const datestring=yearC+"-"+(monthB+1)+"-"+dayA+" "+time
    let ipADD=req.socket.remoteAddress //connection object also use but this object can be Deprecated
    console.log(datestring,ipADD,req.path)
    next();
    
    })

mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Prachi3649--DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
